import React from 'react'
import "./Card.scss"

const Card = (props) => {
    const {name, tagline, img} = props;
    return (
        <div className='card'>
            <p className='card__heading'>{name}</p>
            <img className='card__img' src={img} alt={name} />
            <p className='card__tagline'>{tagline}</p>
        </div>
    )
}

export default Card;