import { getGifs } from "../helpers/getDifs"

export const GifGrid = ( { category } ) => {

  getGifs(category)


  return (
    <>
      <h3> {category} </h3>
    </>
  )
}


