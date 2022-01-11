import React from 'react'
import { ResidentInfo } from '../residentInfo/ResidentInfo'
import "./ResidentList.css"

export const ResidentList = ({residents}) => { 
    
   

    return (
        <div className='container-resident'>
            {
                residents?.map( x =>
                    
                    <ResidentInfo key={x} url={x}/>
                )
            }
        </div>
    )
}
