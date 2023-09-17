import { useState } from "react"
import {AddCategory} from "./components/AddCategory"
import { AddGrid } from "./components/GridGif"

export const GifApp = () => {
  const [categorias, setCategorias] = useState(['One Punch', 'Drama'])

  const onAddCategory = (NewCategory)=>{
    //console.log(newCategory)
    //setCategorias((categorias) => categorias.concat())
    if(categorias.includes(NewCategory)) return
    setCategorias([NewCategory, ...categorias])
  }

  return (
    <>
    <h1>Gif App</h1>
    <AddCategory 
    //setCategorias={ setCategorias } 
    onNewCategory={ onAddCategory }
    />
      {categorias.map(category =>{
        return (
        <div key={category} >
          <h3>{category}</h3>
          <AddGrid key={ category } category={ category }/>
        </div>
        )
      })}
    </>
  )
}