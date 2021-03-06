import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Carousel from '../../components/Carousel/Carousel'
import RandomBeer from '../RandomBeer/RandomBeer'
import "./Home.scss"

const Home = ({url}) => {
    return (
        <div className="home">

			<RandomBeer url={url}/>

            <Link to="/beers">
            	<Button content="Browse All Beers" big={true}/>
			</Link>

            <div className='categories'>
                <div className='categories__category'>
                    <h1 className='categories__category__heading'>High Alcohol Beers</h1>
                    <Carousel url={url + "?abv_gt=6"}/>
                    <Link to="/beers/high-alc">
                        <button className='categories__category__button button'>Browse High Alcohol Beers</button>
                    </Link>
                </div>

                <div className='categories__category'>
                    <h1 className='categories__category__heading'>Classic Beers</h1>
                    <Carousel url={url + "?brewed_before=01-2010&page=1"}/>
                    <Link to="/beers/classic">
                        <Button content={"Browse Classic Beers"}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home