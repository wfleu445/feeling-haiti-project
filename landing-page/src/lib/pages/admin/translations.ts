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
	},
	featuresSection: {
		'en-US': 'Features Section',
		'ht-HT': 'Seksyon Karakteristik la'
	},
	ctaSection: {
		'en-US': 'CTA Section',
		'ht-HT': 'Seksyon CTA la'
	}
});

export const getTranslation = generateGet(translation);
