import React from 'react'
import "./BeerDisplay.scss"

const BeerDisplay = ({imgUrl, name, tagline}) => {
    return (
        <div className='beer'>
            <div className='beer__container'>
                <h2 className='beer__name'>{name}</h2>
                {imgUrl && <img className='beer__img' src={imgUrl} alt={name} />}
            </div>
            <h3 className='beer__tagline'>{tagline}</h3>
        </div> 
    )
}

export default BeerDisplay