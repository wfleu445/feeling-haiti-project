import { firestore } from '$lib/firebase/Firebase.svelte';
import { collection, onSnapshot, query, where, limit, orderBy } from '@firebase/firestore';
import {
	type LandingPageSectionsRevision,
	landingPageSectionsRevision,
	landingPageSectionsRevisionSchema
} from '$lib/firebase/collections';
import { generateFirebaseConverter } from '$lib/firebase/generateFirebaseConverter';

// get the current translation from the firebase collection.

const landingPageSectionRevisionQuery = firestore
	? query(
			collection(firestore, landingPageSectionsRevision)?.withConverter(
				generateFirebaseConverter(landingPageSectionsRevisionSchema)
			),
			where('approved', '==', true),
			where('dateApproved', '!=', null),
			orderBy('dateApproved', 'desc'),
			limit(1)
		)
	: undefined;

let landingPageRecentRevision = $state<LandingPageSectionsRevision | undefined>();

export const unsubscribeFromLandingPageRevisionQuery = landingPageSectionRevisionQuery
	? onSnapshot(landingPageSectionRevisionQuery, (snapshot) => {
			if (!snapshot.empty) {
				landingPageRecentRevision = snapshot.docs[0].data() as LandingPageSectionsRevision;
			}
		})
	: undefined;

export function getLandingPageRevision() {
	return landingPageRecentRevision;
}
