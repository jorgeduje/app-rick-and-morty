import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { LocationInfo } from '../locationInfo/LocationInfo'
import { ResidentList } from '../residentList/ResidentList'

import "./SearchBox.css"

const randomId = Math.floor(Math.random() * 126) + 1; 


export const SearchBox = () => {

    const [dataApi, setDataApi ] = useState({})

    const [id, setId] = useState(randomId)

    const [cero, setCero] = useState(0)
    const [diez, setDiez] = useState(10)

    useEffect(() => {

        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => setDataApi(res.data))
            .catch(err => console.log(err))
       
      }, [])

    const handlerId = (e)=>{

        e.preventDefault()
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => setDataApi(res.data))
            .catch(err => console.log(err))
        setCero(0)
        setDiez(10)    
           
    }
  

    return (

        <div>

            
        <LocationInfo 

            name={dataApi?.name}
            type={dataApi?.type}
            dimension={dataApi?.dimension}
            residents={dataApi?.residents}
        />

        <form onSubmit={(e)=>handlerId(e)}>
            <input type="number" onChange={(e)=> setId(e.target.value)} placeholder='Ingresa el ID'/>
            <button type='submit'>buscar</button>
        </form>


        <ResidentList 
            residents={dataApi?.residents}
            cero={cero}
            setCero={setCero}
            diez={diez}
            setDiez={setDiez}
        />

                
       
                    
        </div>
    )
}
