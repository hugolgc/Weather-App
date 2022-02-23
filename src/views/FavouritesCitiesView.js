import { Link } from 'react-router-dom'

export default function FavouritesCitiesView() {
  return <nav>
    <Link to="/favourites/paris">Paris</Link>
    <Link to="/favourites/lyon">Lyon</Link>
    <Link to="/favourites/marseille">Marseille</Link>
    <Link to="/favourites/saint-tropez">Saint-Tropez</Link>
  </nav>
}