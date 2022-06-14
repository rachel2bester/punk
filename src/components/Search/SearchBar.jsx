import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'

const SearchBar = (props) => {
    const {label, onChange} = props
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input onInput={onChange} type="text" id={label}/>
        </div>
    )
}

export default SearchBar