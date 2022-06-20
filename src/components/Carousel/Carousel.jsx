import React, { useEffect, useState } from "react";

import "./Carousel.scss";

import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import { Link } from 'react-router-dom';
import Card from "../Card/Card";

const Carousel = props => {
    const { url } = props;
    const [counter, setCounter] = useState(0);
    const [beers, setBeers] = useState([])
    const [loaded, setLoaded] = useState(false);
    const [responseOK, setResponseOK] = useState(undefined);

    const getBeers = async (url) => {
        const response = await fetch(url)
        const data = await response.json();
        setResponseOK(response.ok)
        setBeers(data);
        setLoaded(true);
    }

    useEffect(() => {
        getBeers(url);
    }, [])

    const handleIncrement = () => {
        if (counter === beers.length - 1) {
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }
    };

    const handleDecrement = () => {
        if (counter === 0) {
            setCounter(beers.length - 1);
        } else {
            setCounter(counter - 1);
        }
    };

    return (
        <div className="carousel">
            {loaded ? 
                ( responseOK ?
                    <>
                        <img
                            src={leftArrow}
                            alt="left arrow"
                            onClick={handleDecrement}
                            className="carousel__arrow carousel__arrow--left"
                        />
                        <Link to={"/beers/" + beers[counter].id} key={beers[counter].id}>
                            <Card name={beers[counter].name} tagline={beers[counter].tagline} img={beers[counter].image_url}/>
                        </Link>
                        <img
                            src={rightArrow}
                            alt="right arrow"
                            onClick={handleIncrement}
                            className="carousel__arrow carousel__arrow--right"
                        />
                    </>
                    
                    : <p>ERROR</p>)

                : <p>Loading</p>
            }
            
            
        </div>
    );
};

export default Carousel;
