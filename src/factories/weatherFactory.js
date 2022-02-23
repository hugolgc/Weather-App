import weatherHelper from '../helpers/weatherHelper'

const weatherFactory = {
  formatCityData({ condition, last_updated, temp_c, wind_kph, humidity }) {
    return { condition, last_updated, temp_c, wind_kph, humidity }
  },
  formatCityForecast({ forecastday }) {
    forecastday.forEach((day, key) => {
      if (key === 0) day.hour = weatherHelper.getSameOrBeforeCurrentHours(day.hour)
      else delete day.hour
    })

    return { forecastday }
  },
  formatCitylocation({ country, name, region }) {
    return { country, name, region }
  },
  formatCityWeather(cityWeather) {
    const formatCityWeather = {}
    formatCityWeather.current = this.formatCityData(cityWeather.current)
    formatCityWeather.forecast = this.formatCityForecast(cityWeather.forecast)
    formatCityWeather.location = this.formatCitylocation(cityWeather.location)
    
    return formatCityWeather
  }
}

export default weatherFactory