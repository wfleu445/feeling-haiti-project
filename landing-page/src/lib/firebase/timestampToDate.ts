import { z } from 'zod';
import { type Timestamp } from '@firebase/firestore';
export const timestampToDateSchema = z.coerce
	.date()
	.or(z.preprocess((val) => (val as Timestamp).toDate(), z.coerce.date()));
