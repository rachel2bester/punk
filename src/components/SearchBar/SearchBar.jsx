import "./SearchBar.scss"
import React from 'react'

const SearchBar = (props) => {
    const {label, onChange} = props
    return (
        <div className="search-bar">
            <label className="search-bar__label" htmlFor={label}>{label}</label>
            <input className="search-bar__input" onInput={onChange} type="text" id={label}/>
        </div>
    )
}

export default SearchBar