import { defineTranslation, generateGet } from '$lib/utils/translation/translationType';

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
	},
	enterPasscode: {
		'en-US': 'Enter passcode here to save',
		'ht-HT': 'Mete kòd la isit pou ka save'
	}
});

export const getTranslation = generateGet(translation);
