import {
	landingPageSectionsRevision,
	landingPageSectionsRevisionSchema
} from '$lib/firebase/collections.js';
import { system } from '$lib/server/firebase/collections.js';
import { firestore } from '$lib/server/firebase/firebase.js';
import { json } from '@sveltejs/kit';
import { z } from 'zod';

async function checkCode(code: string) {
	const doc = await firestore.collection(system).doc('landingPagePasscode').get();
	if (doc.exists) {
		return doc.data()?.code === code;
	}
	return false;
}

export async function POST({ request }) {
	const bodySchema = z.object({
		code: z.string(),
		revision: landingPageSectionsRevisionSchema
	});
	const body = bodySchema.parse(await request.json());

	if (await checkCode(body.code)) {
		await firestore.collection(landingPageSectionsRevision).add({
			...body.revision,
			createdTime: new Date()
		});
	}

	return json({
		success: true
	});
}
