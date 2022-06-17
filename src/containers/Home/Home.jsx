import React from 'react'
import { Link } from 'react-router-dom'
import RandomBeer from '../RandomBeer/RandomBeer'
import "./Home.scss"

const Home = ({url}) => {


    

    return (
        <div className="home">

			<RandomBeer url={url}/>

            <Link to="/beers">
            	<div>All Beers Link</div>
			</Link>


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