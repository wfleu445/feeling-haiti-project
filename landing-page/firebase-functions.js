/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from 'firebase-functions/v2/https';
import { installPolyfills } from '@sveltejs/kit/node/polyfills';
import { Server } from './build/server/index.js';
import { manifest, prerendered } from './build/server/manifest.js';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

installPolyfills();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'build', 'prerendered')));

export const filingAyiti = onRequest({ region: 'us-east1' }, async (request, response) => {
	if (prerendered.has(request.url)) {
		return app(request, response);
	}
	// logger.info("Hello logs!", {structuredData: true});
	const server = new Server(manifest);
	await server.init({ env: process.env });

	const rendered = await server.respond(toSvelteKitRequest(request));
	if (!rendered) {
		return response.writeHead(404, 'Not Found').end();
	}

	/** @type {ArrayBuffer} */
	const body = await rendered.arrayBuffer();

	return response
		.writeHead(rendered.status, Object.fromEntries(rendered.headers))
		.end(Buffer.from(body));
});

/**
 * @param {Request} request
 * @returns {Request}
 */
function toSvelteKitRequest(request) {
	const protocol = request.headers['x-forwarded-proto'] || 'http';
	const host = `${protocol}://${request.headers['x-forwarded-host']}`;
	const { href } = new URL(request.url || '', host);

	return new Request(href, {
		method: request.method,
		headers: toSvelteKitHeaders(request.headers),
		body: request.rawBody ? request.rawBody : null
	});
}

/**
 *
 * @param {IncomingHttpHeaders} headers
 * @returns @type {Record<string,string>}
 */
function toSvelteKitHeaders(headers) {
	/** @type {Record<string, string>} */
	const finalHeaders = {};

	for (const [key, value] of Object.entries(headers)) {
		if (value) {
			finalHeaders[key] = Array.isArray(value) ? value.join(',') : value;
		}
	}
	return finalHeaders;
}
