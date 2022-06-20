import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import "./Filters.scss"
import Radio from '../../components/Radio/Radio';

const Filters = (props) => {
    const {start, page, nextPageURL, handlePageDec, handlePageInc, searchType, onSearchTermChange, onSearchTypeChange, onRadioChange} = props;

    const [isNextPage, setIsNextPage] = useState(false)

    useEffect(() => {
        getNextPage(nextPageURL)
    }, [nextPageURL])

    const getNextPage = async (url) => {
        const response = await fetch(url)
        const data = await response.json();
        console.log(data)
        if (data.length) {
            setIsNextPage(true)
        } else {
            setIsNextPage(false)
        }
    }

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

            <Radio start={start} onRadioChange={onRadioChange}/>
            

            
            <div className='filters__page-numbers'>
                {page !== 1 && <button onClick={handlePageDec}>previous page</button>}
                <p>{page}</p>
                {isNextPage && <button onClick={handlePageInc}>next page</button>}
            </div>

        </div>
    )
}

export default Filters