import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

        <div>random beer</div>
        

        <div>All Beers Link</div>
        <div>High Alcohol Carousel
            <Link to="/beers/high-alcohol">Browse High Alcohol Beers
            </Link>
        </div>
        <div>Classic Carousel
            <Link to="/beers/classic">Browse Classic Beers
            </Link>
        </div>
    </div>
  )
}

export default Home