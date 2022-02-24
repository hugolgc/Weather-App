const favoritesHelper = {
  toggleFavoriteCity(favoriesCities, cityName) {
    let favoriteCityList = favoriesCities.map(city => city)
    const cityInFavorites = favoriteCityList.find(name => name === cityName)
    if (cityInFavorites) favoriteCityList = favoriteCityList.filter(name => name !== cityName)
    else favoriteCityList.push(cityName)
    return favoriteCityList
  }
}

export default favoritesHelper