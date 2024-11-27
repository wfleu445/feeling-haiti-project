import { type LanguageCode, languageCodeSchema } from '$lib/utils/translation/translationType';
import { browser } from '$app/environment';
import { SvelteURLSearchParams } from 'svelte/reactivity';
import { z } from 'zod';
import { goto } from '$app/navigation';

const languageContextKey = 'language';

const urlSearchParams = new SvelteURLSearchParams(browser ? window.location.search : undefined);

export function setLanguageContext(language: LanguageCode) {
	console.log('urlSearchParams.toString()', urlSearchParams);
	urlSearchParams.set(languageContextKey, language);

	goto(`?${urlSearchParams.toString()}`);
}

export function getLanguageContext() {
	return z
		.string()
		.nullish()
		.transform((arg) => {
			return arg == null ? undefined : arg;
		})
		.pipe(languageCodeSchema.default('ht-HT'))
		.parse(urlSearchParams.get(languageContextKey));
}
