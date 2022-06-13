import Card from '../../components/Card/Card';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


export const CardList = (props) => {
    
    const {url, title} = props;

    const [loaded, setLoaded] = useState(false);
    const [cardsJSX, setCardsJSX] = useState("")

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setLoaded(true)
                setCardsJSX(data.map((beer) => {
                    return (
                        <Link to={"/beer/" + beer.id} key={beer.id}>
                            <Card  name={beer.name} tagline={beer.tagline} img={beer.image_url} />
                        </Link>
                    )
                }))
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);



    return (
        <>
        <h1>{title}</h1>
        
        {loaded ? <>{cardsJSX}</>: <p>Loading</p>}
            
        </>
    )
}
