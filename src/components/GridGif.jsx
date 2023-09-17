
export const AddGrid = ()=>{
    const gifs = "https://api.giphy.com/v1/gifs/categories?api_key=7An39hqvYKH66gILV5RrWsQys8zhBDbz"
 return (
    <>
        {
            gifs.map(gif=>(<p>{gif}</p>))
        }
    </>
 )
}