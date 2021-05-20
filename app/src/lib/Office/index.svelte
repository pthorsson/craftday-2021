<script>
	export let country;
	export let countryImage;
	export let greeting;
	export let city;
</script>

<a href={`/weather/${city}`}>
	<img src={`https://www.valtech.com/${countryImage}`} alt={country} />
	<h2>{city}</h2>
	<p>{country}</p>
	<small>(Click to see the weather for this city)</small>
</a>

<style>
	a {
		width: 30%;
		background: white;
		color: black;
		box-sizing: border-box;
		padding: 10px;
		word-break: break-all;
	}

	h2 {
		text-transform: capitalize;
	}

	img {
		display: block;
		width: 100%;
		height: 100px;
		object-fit: cover;
	}
</style>
