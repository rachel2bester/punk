import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
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
                        <h1>{beer.name}</h1>
                        <img src={beer.image_url} alt="beer.name" />
                        <h2>{beer.tagline}</h2>

                        
                        <Table title="Hops" key={`${beer.id}hops`} arr={beer.ingredients.hops}/>
                        <Table title="Malt" key={`${beer.id}malt`} arr={beer.ingredients.malt}/>
                        <h3>Yeast: {beer.ingredients.yeast}</h3>
                    </>  
                    : <p>ERROR</p>
                ) 

                : <p>Loading Beer Info...</p> 
            }
        </>
        
    )
}

export default BeerInfo