import React from 'react'

const Radio = ({start, onRadioChange}) => {

    return (
        <form className="filters__radio" onChange={onRadioChange}>
            <div>
                <label htmlFor="all">All </label>
                {start === "all" ? <input type="radio" name="filter" id="all" checked/> : <input type="radio" name="filter" id="all"/>}
            </div>
            <div>
                <label htmlFor="classic">Classic </label>
                {start === "classic" ? <input type="radio" name="filter" id="classic" checked/> : <input type="radio" name="filter" id="classic"/>}
            </div>
            <div>
                <label htmlFor="high-alc">High Alcohol </label>
                {start === "high-alc" ? <input type="radio" name="filter" id="high-alc" checked/> : <input type="radio" name="filter" id="high-alc"/>}
            </div>
            <div>
                <label htmlFor="acidic">High Acidity </label>
                {start === "acidic" ? <input type="radio" name="filter" id="acidic" checked/> : <input type="radio" name="filter" id="acidic"/>}
            </div>
        </form>
    )
}

export default Radio