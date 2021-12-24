import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import cloudflare from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	preprocess: [
		preprocess({
			postcss: true
		}),
	],
	kit: {
		adapter: cloudflare({
			
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
