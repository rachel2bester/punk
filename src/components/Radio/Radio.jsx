import React from 'react'


const Radio = ({checked, onRadioChange}) => {
    

    

    

    return (
        <form className="filters__radio" onChange={onRadioChange}>
            <div>
                <label htmlFor="all">All </label>
                {checked === "all" ? <input type="radio" name="filter" id="all" checked /> : <input type="radio" name="filter" id="all"/>}
            </div>
            <div>
                <label htmlFor="classic">Classic </label>
                {checked === "classic" ? <input type="radio" name="filter" id="classic" checked/> : <input type="radio" name="filter" id="classic"/>}
            </div>
            <div>
                <label htmlFor="high-alc">High Alcohol </label>
                {checked === "high-alc" ? <input type="radio" name="filter" id="high-alc" checked/> : <input type="radio" name="filter" id="high-alc"/>}
            </div>
            <div>
                <label htmlFor="acidic">High Acidity </label>
                {checked === "acidic" ? <input type="radio" name="filter" id="acidic" checked/> : <input type="radio" name="filter" id="acidic"/>}
            </div>
        </form>
    )
}

export default Radio