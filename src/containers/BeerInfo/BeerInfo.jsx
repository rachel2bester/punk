import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import BeerDisplay from '../../components/BeerDisplay/BeerDisplay';
import Table from '../../components/Table/Table';

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
                    <>
                        <BeerDisplay name={beer.name} imgUrl={beer.image_url} tagline={beer.tagline}/>

                        <h2>Brewers Tip:</h2>
                        <h3>{beer.brewers_tips}</h3>

                        <h4>Ingredients</h4>
                        <h5>Yeast: {beer.ingredients.yeast}</h5>
                        
                        <Table title="Hops" key={`${beer.id}hops`} arr={beer.ingredients.hops}/>
                        <Table title="Malt" key={`${beer.id}malt`} arr={beer.ingredients.malt}/>
                        
                    </>  
                    : <p>ERROR</p>
                ) 

                : <p>Loading Beer Info...</p> 
            }
        </>
        
    )
}

export default BeerInfo