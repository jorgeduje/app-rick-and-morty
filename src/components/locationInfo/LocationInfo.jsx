import React from 'react'
import "./LocationInfo.css"

export const LocationInfo = ({ name, type, residents, dimension }) => {
    return (
        <div className='container'>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-s5-2-1625139647.jpg?crop=0.803xw:0.709xh;0.0896xw,0.202xh&resize=1200:*" alt="" />
            <div className='location'>
                <h1>{`Location: ${name}`}</h1>
                <div className='location-info'>
                    <li><span>Type: </span>{type}</li>
                    <li><span>Dimension: </span>{ dimension === "unknown" ? "------" : dimension}</li>
                    <li><span>Amount's Residents: </span>{residents?.length}</li>
                </div>
            </div>
        </div>
    )
}
