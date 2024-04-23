import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getDifs"


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true )

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }

  // maneja todos los efectos, si el array final no se pone nada es para que se renderice solo la primera vez al lanzarlo
    useEffect( () => {
        getImages()
     }, [])

  return {
    images,
    isLoading
  }
}

