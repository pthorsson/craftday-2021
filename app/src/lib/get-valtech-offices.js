export const getValtechOffices = async () => {
	const url = 'https://www.valtech.com/about/offices/contactlist?id=2230';
	const res = await fetch(url);
	const data = await res.json();

	const cleanData = [];

	data.list.forEach((country) => {
		const countryData = {
			country: country.name,
			countryImage: country.image,
			greeting: country.greeting
		};

		country.offices.forEach((office) => {
			const city = office.description.split('\n')[0].split('<br')[0].replace('<p>', '');

			if (/^Valtech /.test(city)) {
				const cityClean = city.replace('Valtech ', '').toLowerCase().trim().replace(/ /g, '-');

				if (!['mobility'].includes(cityClean) && /^[a-z-]{1,}$/.test(cityClean)) {
					cleanData.push({
						city: cityClean,
						...countryData
					});
				}
			}
		});
	});

	return cleanData;
};
