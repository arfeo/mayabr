export const searchCityById = (cities, s) => {
	return cities
		.map(section => ({
			title: section.title,
			cities: section.cities.filter(city => city.id === s.id)
		})
	).filter(section => section.cities.length > 0)
}