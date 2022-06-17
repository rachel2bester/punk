import React from 'react'
import SearchBar from '../../components/Search/SearchBar'

const Filters = (props) => {
    const {onNameChange, onHopsChange, onMaltChange, onFoodChange, onYeastChange} = props
    return (
        <div>
            
            <SearchBar label={"name"} onChange={onNameChange}/>
            <SearchBar label={"hops"} onChange={onHopsChange}/>
            <SearchBar label={"yeast"} onChange={onYeastChange}/>
            <SearchBar label={"malt"} onChange={onMaltChange}/>
            <SearchBar label={"food"} onChange={onFoodChange}/>

        </div>
    )
}

export default Filters