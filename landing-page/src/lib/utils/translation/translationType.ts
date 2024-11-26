import { z } from 'zod';
export const translationObjectSchema = z.object({
	'en-US': z.string(),
	'ht-HT': z.string()
});

export const languageCodeSchema = translationObjectSchema.keyof();

export type LanguageCode = z.infer<typeof languageCodeSchema>;

// language-COUNTRYCODE
export const languageOptions: { code: LanguageCode; displayName: string }[] = [
	{ code: 'ht-HT', displayName: 'Kreyòl' },
	{ code: 'en-US', displayName: 'English' }
];

export type TranslationObject = z.infer<typeof translationObjectSchema>;

// Translation type with key hints and recursive structure
export type Translation = {
	[key: string]: TranslationObject | Translation;
};

export function defineTranslation<T extends Translation>(translation: T) {
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

export function generateGet<Trans extends Translation>(trans: Trans) {
	function getTranslation<Path extends NestedKeys<Trans>>(
		path: Path,
		language: LanguageCode
	): string {
		const keys = path.split('.');

		let value: unknown = trans;

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
	return getTranslation;
}
