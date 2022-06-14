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
        console.log(beer.ingredients.hops)
    } 


    useEffect(() => {
        getBeerInfo(baseURL)
    }, []);


    return (
        <>
            {loaded ? 
                ( responseOK ?
                    <>
                        <h1>Name: {beer.name}</h1>
                        <h2>Tagline: {beer.tagline}</h2>
                        <h3>Hops:</h3>

                        <Table arr={beer.ingredients.hops}/>
                    </> 
                    : <p>ERROR</p>) 

                : <p>Loading</p> 
            }
        </>
        
    )
}

export default BeerInfo