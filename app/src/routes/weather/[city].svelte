<script context="module">
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	export const load = async ({ page }) => {
		const url = `https://goweather.herokuapp.com/weather/${page.params.city}`;
		const res = await fetch(url);
		const data = await res.json();

		return {
			props: {
				temperature: data.temperature,
				city: page.params.city
			}
		};
	};
</script>

<script>
	export let temperature;
	export let city;

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	let cityClean = capitalizeFirstLetter(city).replace(/-/g, ' ');
</script>

<h3>{cityClean}</h3>

{#if temperature}
	<h1>Temperaturen är: {temperature}</h1>
{:else}
	<h1>Kunde ej hämta temperaturen för staden</h1>
{/if}

<style>
	h3 {
		text-align: center;
	}
</style>
