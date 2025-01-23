import { defineTranslation } from './translationType';
import { generateGet } from './translationType';

const translation = defineTranslation({
	title: {
		'en-US': 'Title',
		'ht-HT': 'Tit'
	},
	shortDescription: {
		'en-US': 'Short Description',
		'ht-HT': 'Deskripsyon Kout'
	},
	longDescription: {
		'en-US': 'Long Description',
		'ht-HT': 'Deskripsyon Long'
	}
});

export const getTranslation = generateGet(translation);
