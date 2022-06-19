import Card from '../../components/Card/Card';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import "./BeerList.scss"


export const BeerList = (props) => {
    
    const {baseURL, searchType, searchTerm, name, malt, food, yeast, hops} = props;

    const [loaded, setLoaded] = useState(false);
    const [cardsJSX, setCardsJSX] = useState("")

    const [responseOK, setResponseOK] = useState(undefined);

    const getCardsJSX = async (baseURL) => {
        let url = baseURL.includes("?") ?  baseURL +"&" : baseURL + "?"
        if (searchTerm) {
            switch (searchType) {
                case "name":
                    url += `beer_name=`
                    break;
                case "hops":
                    url += `hops=`
                    break;
                case "yeast":
                    url += `yeast=`
                    break;
                case "malt":
                    url += `malt=`
                    break;
                case "food":
                    url += `food=`
                    break;
            }
            url += searchTerm;
        }

        
 
        console.log(url)

        const response = await fetch(url)
        const data = await response.json();
        setResponseOK(response.ok)
        setCardsJSX(data.map((beer) => {
            return (
                <Link to={"/beers/" + beer.id} key={beer.id}>
                    <Card  name={beer.name} tagline={beer.tagline} hops={beer.hops} img={beer.image_url} />
                </Link>
            )
        }))
        setLoaded(true)
    }


    useEffect(() => {
        getCardsJSX(baseURL)
    }, [searchTerm, searchType, baseURL]);

    return (

        <div className='cards'> 
    
        {loaded ? 
            ( responseOK ?
                cardsJSX
                : <p>ERROR</p>)

            : <p>Loading</p>
        }
        </div>
    )
}
