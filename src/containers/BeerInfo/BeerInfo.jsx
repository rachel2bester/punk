import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import BeerDisplay from '../../components/BeerDisplay/BeerDisplay';
import Table from '../../components/Table/Table';
import Srm from '../../components/Srm/Srm';
import "./BeerInfo.scss"

const BeerInfo = (props) => {
    const {baseURL} = props
    const {beerId} = useParams();
    const [loaded, setLoaded] = useState(false);
    const [beer, setBeer] = useState(undefined);
    const [responseOK, setResponseOK] = useState(undefined);

    const getBeerInfo = async (baseURL) => {
        const response = await fetch(`${baseURL}/${beerId}`)
        const data = await response.json();
        setResponseOK(response.ok)
        setBeer(data[0])
        setLoaded(true)
        console.log(beer)
    } 

    useEffect(() => {
        getBeerInfo(baseURL) 
    }, []);




    return (
        <>
            {loaded ? 
                ( responseOK ?
                    <div className='beer-info'>
                        <BeerDisplay name={beer.name} imgUrl={beer.image_url} tagline={beer.tagline}/>

                        <h1 className='beer-info__heading'>{beer.description}</h1>
                        <Srm srm={beer.srm}/>
                        <div className='beer-info__attributes'>
                            <p className='beer-info__attributes__attribute'>Alcohol By Volume: <br/>{beer.abv}%</p>
                            <p className='beer-info__attributes__attribute'>Bitterness: <br/>{beer.ibu} IBU</p>
                            <p className='beer-info__attributes__attribute'>pH: <br/>{beer.ph}</p>
                        </div>

                        <div className='beer-info__food-pairings'>
                            <h2 className='beer-info__food-pairings__heading beer-info__heading'>Food Pairings</h2>
                            <div className='beer-info__food-pairings__container'>
                                {beer.food_pairing.map((food) => {
                                    return<div className='beer-info__food-pairings__container__food'>{food}</div>
                                })}
                            </div>
                        </div>

                        <h3 className='beer-info__heading'>First Brewed: {beer.first_brewed}</h3>

                        <div className='beer-info__brewing'>
                            <h4 className='beer-info__brewing__heading'>Brewers Tip:</h4>
                            <p className='beer-info__brewing__p'>{beer.brewers_tips}</p>

                            <h5 className='beer-info__brewing__heading'>Ingredients</h5>
                            <h6 className='beer-info__brewing__subheading'>Yeast: {beer.ingredients.yeast}</h6>

                            <div className='beer-info__brewing__tables'>
                                <Table title="Hops" key={`${beer.id}hops`} arr={beer.ingredients.hops}/>
                                <Table title="Malt" key={`${beer.id}malt`} arr={beer.ingredients.malt}/>
                            </div>
                        </div>
                        
                    </div>  
                    : <p className='beer-info__heading'>ERROR</p>
                ) 
                : <p className='beer-info__heading'>Loading Beer Info...</p> 
            }
        </>
        
    )
}

export default BeerInfo