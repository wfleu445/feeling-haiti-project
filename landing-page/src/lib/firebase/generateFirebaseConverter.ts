import type { FirestoreDataConverter } from '@firebase/firestore';
import type { ZodType as ZodSchema } from 'zod';

export const generateFirebaseConverter = <T extends { [key: string]: unknown }>(
	schema: ZodSchema<T>
): FirestoreDataConverter<T> => {
	return {
		toFirestore: (data) => schema.parse(data),
		fromFirestore: (snapshot) => schema.parse(snapshot.data())
	};
};
