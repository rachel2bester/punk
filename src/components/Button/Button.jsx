import React from 'react'
import "./Button.scss"

const Button = ({content, big}) => {
  return (<>
    {(big) ? <button className='button big'> {content} </button> : <button className='button'> {content} </button>}
    </>
  )
}

export default Button