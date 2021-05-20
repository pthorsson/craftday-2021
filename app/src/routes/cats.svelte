<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	export const load = async () => {
		const res = await fetch('https://aws.random.cat/meow');
		const data = await res.json();

		return {
			props: {
				title: 'Cats! :D',
				image: data.file
			}
		};
	};
</script>

<script>
	import { count } from '../stores/store';

	export let title;
	export let image;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="content">
	<h1>This page is about {title}</h1>
	{$count}
	<button on:click={count.increment}> + </button>
	<img src={image} alt="cat" style="width: 100%;" />
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
