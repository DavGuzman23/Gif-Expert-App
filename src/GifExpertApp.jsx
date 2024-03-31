import { useState } from 'react'
import { AddCategory } from './components/AddCategory'



const GifExpertApp = () => {

  // Siempre que queramos almacenar informacion y esa info cambia el HTML o el estado siempre usar hooks
  const [categories, setCategories] = useState([ ])
 
  const onAddCategory = (newCategory) => {
    
    setCategories([newCategory, ...categories])
    //setCategories([ 'Valorant' , ...categories ]);
}

  return (

    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory 
          // setCategories = { (event) => setCategories(event) } 
          onNewCategory = { onAddCategory }
        />

        {/* Listado de items */}
        <ol>
          { categories.map( category => {
              return <li key={ category }>{ category }</li>
            }) 
          }
          {/* <li></li> */}
        </ol>
          {/* Gif Item */}
    </>
    
  )
}

export default GifExpertApp
