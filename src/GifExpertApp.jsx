import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'



const GifExpertApp = () => {

  // Siempre que queramos almacenar informacion y esa info cambia el HTML o el estado siempre usar hooks
  const [categories, setCategories] = useState([ ])
 
  const onAddCategory = (newCategory) => {

    if ( categories.includes( newCategory ) ) return;
    
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
        { 
          categories.map( (category) => (
              <GifGrid 
                key={category} 
                category={category}/>
            ))
        }

    </>
    
  )
}

export default GifExpertApp
