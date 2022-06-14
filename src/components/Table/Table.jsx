import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils'
import React from 'react'

const Table = (props) => {
    const {arr} = props
    console.log(arr)

    return (<>
        
        <table>
            <tr>
                {Object.keys(arr[0]).map((key) => <th>{key}</th>)}
            </tr>
            
                {arr.map((el) => {
                    <tr>
                    {Object.values(el).map((value) => {
                        if (typeof(value) != "object") {
                            return <td>{value}</td>;
                        } else {
                            return 1;
                        }
                    })}
                    </tr>
                })}
             
            
                

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