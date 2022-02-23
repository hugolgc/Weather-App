import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import CurrentCityWeatherView from './views/CurrentCityWeatherView'
import FavouritesCitiesView from './views/FavouritesCitiesView'
import CityWeatherView from './views/CityWeatherView'
import './assets/font.css'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <MainLayout /> }>
        <Route index element={ <CurrentCityWeatherView /> }/>
        <Route path="favourites" element={ <FavouritesCitiesView /> }/>
        <Route path="favourites/:cityName" element={ <CityWeatherView /> }/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('app')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
