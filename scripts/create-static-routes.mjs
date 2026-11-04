import { copyFile, mkdir } from 'node:fs/promises';

// GitHub Pages serves files directly and does not fall back to Angular's index.
for (const locale of ['pt', 'en']) {
	const root = new URL(`../docs/${locale}/`, import.meta.url);
	const destination = new URL('jane-iwamoto/', root);
	await mkdir(destination, { recursive: true });
	await copyFile(new URL('index.html', root), new URL('index.html', destination));
}
