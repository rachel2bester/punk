import Card from '../../components/Card/Card';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


export const BeerList = (props) => {
    
    const {baseURL, title, name, malt, food, yeast, hops} = props;

    const [loaded, setLoaded] = useState(false);
    const [cardsJSX, setCardsJSX] = useState("")

    const [responseOK, setResponseOK] = useState(undefined);

    const getCardsJSX = async (baseURL) => {
        let url = baseURL +"?";


 
        if (name) {
            url += `&beer_name=${name}`
        }
        if (hops) {
            url += `&hops=${hops}`
        }
        if (yeast) {
            url += `&yeast=${yeast}`
        }
        if (malt) {
            url += `&malt=${malt}`
        }
        if (food) {
            url += `&food=${food}`
        }
 
        console.log(url)

        const response = await fetch(url)
        const data = await response.json();
        setResponseOK(response.ok)
        setCardsJSX(data.map((beer) => {
            return (
                <Link to={"/beer/" + beer.id} key={beer.id}>
                    <Card  name={beer.name} tagline={beer.tagline} hops={beer.hops} img={beer.image_url} />
                </Link>
            )
        }))
        setLoaded(true)
    }


    useEffect(() => {
        getCardsJSX(baseURL)
    }, [name, hops, yeast, malt, food]);



    return (
        <>
            <h1>{title}</h1>
            <p>{name}</p>
        
            {loaded ? 
                ( responseOK ?
                    cardsJSX
                    : <p>ERROR</p>)

                : <p>Loading</p>
            }
            
        </>
    )
}