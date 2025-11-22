import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Using Vercel adapter for deployment to Vercel platform
		// See https://kit.svelte.dev/docs/adapter-vercel for configuration options
		adapter: adapter()
	}
};

export default config;
