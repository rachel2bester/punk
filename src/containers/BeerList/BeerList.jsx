import Card from '../../components/Card/Card';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import "./BeerList.scss"


export const BeerList = (props) => {
    
    const {setNextPageURL, page, pageReset, baseURL, searchType, searchTerm} = props;
    
    const [cardsJSX, setCardsJSX] = useState("")
    const [loaded, setLoaded] = useState(false);
    const [responseOK, setResponseOK] = useState(undefined);

    const getCardsJSX = async (baseURL) => {
        let url = baseURL.includes("?") ?  baseURL + "&" : baseURL + "?"
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
            url += searchTerm + "&";
        }

        let acidic = false;
        if (url.includes("?acidic")) {
            url = url.replace("?acidic", "?per_page=30&");
            acidic = true;
            console.log(url)
        }
        console.log(url)

        setNextPageURL(url + `page=${page + 1}&`)

        if (page !== 1) {
            url += `page=${page}&`
        }
        console.log(url)

        const response = await fetch(url)
        let data = await response.json();
        if (acidic) {
            console.log(data.length)
            data = data.filter((beer) => beer.ph < 6)
            console.log(data.length)
        }
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
        if (page === 1) {
            getCardsJSX(baseURL)
        } else {
            pageReset()
        }
        
    }, [searchTerm, searchType, baseURL]);

    useEffect(() =>{
        getCardsJSX(baseURL)
    }, [page])

    return (

        <div className='cards'> 
    
            {loaded ? 
                ( responseOK ?
                    cardsJSX
                    : <p className='beer-info__heading'>ERROR</p>)

                : <p className='beer-info__heading'>Loading</p>
            }
        </div>
    )
}
