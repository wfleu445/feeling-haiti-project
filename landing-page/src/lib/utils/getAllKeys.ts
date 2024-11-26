import type { TranslationObject } from './translation/translationType';

export type AllKeys<T> = {
	// todo: I need to exclude the locale from this type.
	[K in keyof T]: K extends string
		? T[K] extends object
			? K | (T[K] extends TranslationObject ? never : AllKeys<T[K]>)
			: K
		: never;
}[keyof T];
