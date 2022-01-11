import axios from 'axios'
import React, {useEffect, useState} from 'react'
import "./ResidentInfo.css"

export const ResidentInfo = ({url}) => {

    const [ character, setCharacter] = useState({})

    useEffect(() => {

        axios.get(url)
            .then(res => setCharacter(res.data))
            .catch(err => console.log(err))

    }, [url])



    return (
        <div className='card-resident'>
            <img src={character?.image} alt="" />
            <div className='card-info'>
                <h3>{character?.name}</h3>
                <h5>{character?.origin?.name}</h5>
                <div className='status'>
                    <div className={character?.status === "Alive" ? "btn-status2" : "btn-status1"}></div>
                    <h5>{character?.status}</h5>
                </div>
                <h5>{`Appears on: ${character?.episode?.length} episodes`}</h5>   
            </div>    
        </div>
    )
}

