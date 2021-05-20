<script context="module">
	import { getValtechOffices } from '$lib/get-valtech-offices';

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	export const load = async () => {
		const offices = await getValtechOffices();

		return {
			props: {
				offices
			}
		};
	};
</script>

<script>
	import Office from '$lib/Office/index.svelte';

	export let offices;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Valtech offices</h1>
	<div class="office-container">
		{#each offices as office, i}
			<Office {...office} />
		{/each}
	</div>
</section>

<style>
	.office-container {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
</style>
