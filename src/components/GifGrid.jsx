import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getDifs"

export const GifGrid = ( { category } ) => {

  const [images, setImages] = useState([])

  // maneja todos los efectos, si el array final no se pone nada es para que se renderice solo la primera vez al lanzarlo
  useEffect( () => {
    getGifs(category)
      .then(newImages => setImages(newImages))
  }, [])

  
  return (
    <>
      <h3> {category} </h3>

      <ol>
        {
          images.map( ({id, title})=> (
            <li key={id}> {title} </li>
          ))
        }
      </ol>
    </>
  )
}


