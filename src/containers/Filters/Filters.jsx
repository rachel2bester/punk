import React from 'react'
import SearchBar from '../../components/Search/SearchBar'

const Filters = (props) => {
    const {onNameChange, onHopsChange, onMaltChange, onFoodChange, onYeastChange} = props
    return (
        <div>Filters
            
        <SearchBar label={"name"} onChange={onNameChange}/>
        <SearchBar label={"hops"} onChange={onHopsChange}/>
        <SearchBar label={"yeast"} onChange={onYeastChange}/>
        <SearchBar label={"malt"} onChange={onMaltChange}/>
        <SearchBar label={"food"} onChange={onFoodChange}/>

    </div>
    /*
            Page
            Search - name
            Search - hops name
            Search - malt name
            Search - food name
            
            */
    )
}

export default Filters