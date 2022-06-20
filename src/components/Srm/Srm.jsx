import React from 'react'
import "./Srm.scss"

const Srm = ({srm}) => {
    

    return (
        <div className={"srm srm--"+ Math.floor(srm)}>
            <h1 className='srm__heading'>Srm: {srm}</h1>
        </div>
    )
}

export default Srm