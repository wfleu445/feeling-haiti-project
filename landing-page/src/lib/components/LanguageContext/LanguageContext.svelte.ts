import { type LanguageCode } from '$lib/utils/translationType';
import { getContext, setContext } from 'svelte';

const languageContextKey = Symbol('language');
type LanguageContext = {
	code: LanguageCode;
};

export const selectedLanguage = $state<LanguageContext>({ code: 'ht-HT' });

export function setLanguageContext(language: LanguageCode) {
	selectedLanguage.code = language;
	setContext<LanguageContext>(languageContextKey, selectedLanguage);
}

export function getLanguageContext() {
	return getContext<LanguageContext>(languageContextKey);
}
