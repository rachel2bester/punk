import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import BeerDisplay from '../../components/BeerDisplay/BeerDisplay'
import "./RandomBeer.scss"

const RandomBeer = ({url}) => {
    const [beer, setBeer] = useState(undefined)
    const [loaded, setLoaded] = useState(false);
    const [responseOK, setResponseOK] = useState(undefined);


    const getRandomBeer = async (url) => {
        console.log(`${url}/random`)
        const response = await fetch(`${url}/random`)
        const data = await response.json();
        setResponseOK(response.ok)
        setBeer(data[0])
        console.log(data[0])
        setLoaded(true)
        
    } 

    useEffect(() => {
        getRandomBeer(url)
    }, []);

  return (<>
    {loaded ? 
        ( responseOK ?

            <Link to={"/beers/" + beer.id}>
                <BeerDisplay name={beer.name} imgUrl={beer.image_url} tagline={beer.tagline}/> 
            </Link>
            : <h1 className='random-beer__tagline'>ERROR</h1>
            
        ) 

        : <div className='random-beer'>
            <h1 className='random-beer__tagline'>Loading Beer Info...</h1> 
        </div>  
    }
    </>
  )
}

export default RandomBeer