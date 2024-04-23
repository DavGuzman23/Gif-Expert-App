import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getDifs"
import { GifItem } from "./GifItem"


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

      <div className="card-grid">
        {
          images.map( (image) => (
            <GifItem 
              key= {image.id}
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}


