
import React from 'react'

const Table = (props) => {
    const {arr, title} = props
    console.log(arr)

    return (<>
        <h1>{title}</h1>
        
        <table>
            <thead>
                <tr>
                    {Object.keys(arr[0]).map((key) => <th>{key}</th>)}
                </tr>
            </thead>
            <tbody>
                {arr.map((el) => {
                    return (
                        <tr>
                            {Object.values(el).map((value) => {
                                if (typeof(value) != "object") {
                                    return <td>{value}</td>;
                                } else {
                                    return Object.values(value).join(" ");
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