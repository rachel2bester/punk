import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import "./Filters.scss"

const Filters = (props) => {
    const {searchType, onSearchTermChange, onSearchTypeChange, onNameChange, onHopsChange, onMaltChange, onFoodChange, onYeastChange, onRadioChange} = props
    return (
        <div className='filters'>
            <form className="filters__search">
                <label htmlFor="searchType">Search By: </label>
                <select className='filters__search__type' onChange={onSearchTypeChange} name="searchType" id="searchType">
                    <option value="name">Name</option>
                    <option value="hops">Hops</option>
                    <option value="malt">Malt</option>
                    <option value="food">Food</option>
                    <option value="yeast">Yeast</option>
                </select>
                <SearchBar label={searchType} onChange={onSearchTermChange}/>
            </form>
            

            <form className="filters__radio" onChange={onRadioChange}>
                <div>
                <label htmlFor="all">All </label>
                <input type="radio" name="filter" id="all" />
                </div>
                <div>
                <label htmlFor="classic">Classic </label>
                <input type="radio" name="filter" id="classic" />
                </div>
                <div>
                <label htmlFor="high-alc">High Alcohol </label>
                <input type="radio" name="filter" id="high-alc" />
                </div>
            </form>

            <form className='filters__page-numbers'>
                <p>123456789</p>
            </form>

        </div>
    )
}

export default Filters