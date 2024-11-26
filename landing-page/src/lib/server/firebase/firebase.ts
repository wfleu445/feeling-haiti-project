import { Firestore } from '@google-cloud/firestore';
import { Storage } from '@google-cloud/storage';
import { initializeApp, getApp, type App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

let app: App;

try {
	app = getApp();
} catch (error) {
	app = initializeApp();
	console.log('error initializing app', error);
}

export { app };
export const firestore = new Firestore();
export const storage = new Storage();
export const auth = getAuth();
