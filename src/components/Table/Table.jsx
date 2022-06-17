
import React from 'react'
import "./Table.scss"

const Table = (props) => {
    const {arr, title} = props
    console.log(arr)

    return (<>
        <h1>{title}</h1>
        
        <table className='table'>
            <thead>
                <tr>
                    {Object.keys(arr[0]).map((key) => <th className='table__heading'>{key}</th>)}
                </tr>
            </thead>
            <tbody>
                {arr.map((el) => {
                    return (
                        <tr>
                            {Object.values(el).map((value) => {
                                if (typeof(value) != "object") {
                                    return <td className='table__entry'>{value}</td>;
                                } else {
                                    return <td className='table__entry'> {Object.values(value).join(" ")} </td>;
                                } 
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
} 

export default Table 

//arr.map((el) => { 
    //     return (
    //         <tr>
    //             {el}
    //             {/* {Object.values(el).map((value) => (<td>{value}</td>))} */}
    //         </tr>
    //     )
    // })