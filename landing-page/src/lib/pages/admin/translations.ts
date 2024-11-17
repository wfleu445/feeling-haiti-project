// import type { Translation } from "$lib/utils/translationType";

import { defineTranslation, generateGet } from '$lib/utils/translationType';

// Base type for supported language

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

export const getTranslation = generateGet(translation);
