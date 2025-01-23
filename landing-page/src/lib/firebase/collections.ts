import { translationObjectSchema } from '$lib/utils/translation/translationType';
import { z } from 'zod';
import { timestampToDateSchema } from './timestampToDate';

/**
 * This is the collection name.
 *
 * DO NOT UPDATE UNLESS YOU ARE SURE.
 */
export const landingPageSectionsRevision = 'landingPageSectionsRevision';

export const landingPageSectionsRevisionSchema = z.object({
	createdTime: timestampToDateSchema.default(() => new Date()),
	approved: z.boolean().default(false),
	dateApproved: timestampToDateSchema.optional(),
	hero: translationObjectSchema,
	intro: z.object({
		title: translationObjectSchema,
		shortDescription: translationObjectSchema,
		longDescription: translationObjectSchema
	}),
	features: z.object({
		title: translationObjectSchema,
		shortDescription: translationObjectSchema,
		longDescription: translationObjectSchema
	}),
	cta: z.object({
		title: translationObjectSchema,
		shortDescription: translationObjectSchema,
		longDescription: translationObjectSchema
	}),
	contactInfo: translationObjectSchema
});

export type LandingPageSectionsRevision = z.infer<typeof landingPageSectionsRevisionSchema>;
