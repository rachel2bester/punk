import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
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
          
                <div className='random-beer'>
                    <div className='random-beer__container'>
                        <h2 className='random-beer__name'>{beer.name}</h2>
                        {beer.image_url && <img className='random-beer__img' src={beer.image_url} alt={beer.name} />}
                    </div>
                    <h3 className='random-beer__tagline'>{beer.tagline}</h3>
                </div>  
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