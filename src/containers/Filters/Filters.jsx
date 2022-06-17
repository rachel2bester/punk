import React from 'react'
import SearchBar from '../../components/Search/SearchBar'
import "./Filters.scss"

const Filters = (props) => {
    const {onNameChange, onHopsChange, onMaltChange, onFoodChange, onYeastChange, onRadioChange} = props
    return (
        <div className='filters'>
            <SearchBar label={"name"} onChange={onNameChange}/>
            <SearchBar label={"hops"} onChange={onHopsChange}/>
            <SearchBar label={"yeast"} onChange={onYeastChange}/>
            <SearchBar label={"malt"} onChange={onMaltChange}/>
            <SearchBar label={"food"} onChange={onFoodChange}/>

            <form onChange={onRadioChange}>
                <label htmlFor="all">All</label>
                <input type="radio" name="filter" id="all" />

                <label htmlFor="classic">Classic</label>
                <input type="radio" name="filter" id="classic" />

                <label htmlFor="high-alc">High Alcohol</label>
                <input type="radio" name="filter" id="high-alc" />
            </form>

        </div>
    )
}

export default Filters