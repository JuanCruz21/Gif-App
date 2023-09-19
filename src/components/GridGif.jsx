import { GifItem } from "./GifItem"
import { useFetchGifs } from "../Hooks/useFetchGifs"
import { Cargando } from "./Cargando"

export const AddGrid = ({ category })=>{

    const {Img, isLoading } = useFetchGifs( category )
    return (
        <>
        <div className="card-grid">
        {
            isLoading && (<Cargando/>)
        }
        {
            Img.map(({id, title, url}) =>(
                <GifItem key={ id } image={url} title={title}/>
            ))
        }
        </div>
        </>
 )
}