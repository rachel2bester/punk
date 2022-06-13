import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";

const BeerInfo = () => {
    const {beerId} = useParams();
    const [loaded, setLoaded] = useState(false);
    const [beer, setBeer] = useState(undefined)

    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers/${beerId}`)
            .then((response) => response.json())
            .then((data) => {
                setBeer(data[0])
                setLoaded(true)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);


    return (
        <>
        {loaded && <div>Name: {beer.name}</div>}
        </>
        
    )
}

export default BeerInfo