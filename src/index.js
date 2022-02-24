import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createOvermind } from 'overmind'
import { config } from './store'
import { Provider } from 'overmind-react'
import MainLayout from './layouts/MainLayout'
import CurrentCityWeatherView from './views/CurrentCityWeatherView'
import FavoritesCitiesView from './views/FavoritesCitiesView'
import CityWeatherView from './views/CityWeatherView'
import './assets/font.css'
import reportWebVitals from './reportWebVitals'

const store = createOvermind(config)

ReactDOM.render(
  <BrowserRouter>
    <Provider value={ store }>
      <Routes>
        <Route path="/" element={ <MainLayout /> }>
          <Route index element={ <CurrentCityWeatherView /> }/>
          <Route path="favorites" element={ <FavoritesCitiesView /> }/>
          <Route path="favorites/:cityName" element={ <CityWeatherView /> }/>
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
