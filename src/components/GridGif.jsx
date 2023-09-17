const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Tn4CoYzdpBTdtchACpiE2iNHtPJkop7Y&q=${category}&limit=10&offset=0&rating=g&lang=es&bundle=low_bandwidth`
    const response = await fetch(url);
    const { data=[] } = await response.json()

    const gifs = data.map( img =>(
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        })
    )
    console.log(gifs)
    return gifs
}

export const AddGrid = ({ category })=>{
    getGifs(category)
    return (
        <>
            {
             
            }
        </>
 )
}