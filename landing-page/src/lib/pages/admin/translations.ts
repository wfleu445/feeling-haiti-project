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
	contactInfo: {
		'en-US': 'Contact Info',
		'ht-HT': 'Kontak'
	},
	enterPasscode: {
		'en-US': 'Enter passcode here to save',
		'ht-HT': 'Mete kòd la isit pou ka save'
	},
	saveNoCodeMessage: {
		'en-US': 'Please enter the passcode.',
		'ht-HT': 'Silvouplè mete kòd la nan espas la.'
	},
	pendingSaveMesage: {
		'en-US': 'Saving...',
		'ht-HT': "N'ap sovgade..."
	},
	successfulSave: {
		'en-US': 'Successfully ssaved!',
		'ht-HT': 'Nou arrive sovgade dokiman!'
	},
	unsuccessfulSave: {
		'en-US': 'We could not save this time.',
		'ht-HT': "Nou pat ka sovgade'l fwa sa."
	},
	revisionDetected: {
		'en-US': 'Revision detected. Click here to apply revision (overwrites current changes)?',
		'ht-HT': "Yon moun chanje paj la. Eske'w vle aplike chanjman yo?"
	},
	appliedRevision: {
		'en-US': 'Applied the revision!',
		'ht-HT': 'Chanjman yo aplike kounya!'
	}
});

export const getTranslation = generateGet(translation);
