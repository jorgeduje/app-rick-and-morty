import React from 'react'
import "./LocationInfo.css"

export const LocationInfo = ({ name, type, residents, dimension }) => {
    return (
        <div className='container'>
            <img src="https://giffiles.alphacoders.com/118/118789.gif" alt="" />
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
