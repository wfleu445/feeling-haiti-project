// import type { Translation } from "$lib/utils/translationType";

// Base type for supported languages
type SupportedLanguages = 'en-US' | 'ht-HT';

type TranslationObject = {
	[key in SupportedLanguages]: string;
};

// Translation type with key hints and recursive structure
export type Translation = {
	[key: string]: TranslationObject | Translation;
};

function defineTranslation<T extends Translation>(translation: T) {
	return translation;
}

type NestedKeys<T> = {
	// todo: I need to exclude the locale from this type.
	[K in keyof T]: K extends string
		? T[K] extends object
			? K | `${K}${T[K] extends TranslationObject ? '' : `.${NestedKeys<T[K]>}`}`
			: K
		: never;
}[keyof T];

type ResolvePath<T, Path extends string> = Path extends `${infer K}.${infer Rest} `
	? K extends keyof T
		? Rest extends NestedKeys<T[K]>
			? LanguageKey<T[K], Rest>
			: never
		: never
	: Path extends keyof T
		? T[Path]
		: never;

type LanguageKey<T, Path extends string> =
	ResolvePath<T, Path> extends Record<string, string> ? keyof ResolvePath<T, Path> : never;

export const translation = defineTranslation({
	heroSection: {
		'en-US': `Hero Section`,
		'ht-HT': `Seksyon Hero la`
	},
	visionSection: {
		'en-US': 'Vision Section',
		'ht-HT': 'Seksyon Vizyon a'
	}
});

function getTranslation<
	Path extends NestedKeys<typeof translation>,
	Language extends LanguageKey<typeof translation, Path>
>(path: Path, language: Language): string {
	const keys = path.split('.');

	let value: unknown = translation;

	for (const key of keys) {
		if (typeof value !== 'object' || value === null || !(key in value)) {
			throw new Error(`Invalid path ${path}`);
		}
		value = (value as Record<string, unknown>)[key];
	}

	if (
		typeof value === 'object' ||
		value !== null ||
		language in (value as Record<string, string>)
	) {
		return (value as Record<typeof language, string>)[language];
	}

	throw new Error(`Locale "${String(language)}" not found at path "${path}"`);
}
