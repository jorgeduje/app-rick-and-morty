import React from 'react'

import { ResidentInfo } from '../residentInfo/ResidentInfo'
import "./ResidentList.css"

export const ResidentList = ({residents, cero, setCero, diez, setDiez}) => { 

    

    const paginar = ( indice )=>{
        
        setCero( 0 + (10 * indice ) )
        setDiez( 10 + (10 * indice ) )
        
    }

   
    let pagina = residents?.slice(cero, diez)

    let cantidadPaginas = ( Math.ceil(residents?.length / 10) )

    let array = [ ]
    
    for (let index = 0; index < cantidadPaginas; index++) {

        
        array.push(index)
    }


    return (
       <div>
            <div className='container-resident'>

                {
                    pagina?.map( x =>
                        
                        <ResidentInfo key={x} url={x}/>
                    )
                }

            </div>

            

           <div className='container-btns'>
            {
                    array?.map( (y, indice) => 

                        <button className='btn-1' key={y} onClick={ ()=> paginar(indice) }>{indice + 1 }</button>
                    )
            }
           </div>
          
       </div>
    )
}
