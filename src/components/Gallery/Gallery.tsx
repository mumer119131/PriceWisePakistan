import GalleryItem from "../GalleryItem/GalleryItem.js"

interface GalleryProps{
    products : Product[]
}
interface Product{
    id: number,
    product_name: string,
    product_price: number,
    product_category: string,
    product_img_url: string,
    product_url : string,
    created_at: string,
}

const Gallery = (props : GalleryProps) => {
  const {products} = props
  return (
    <div className="flex flex-wrap gap-8 p-2 justify-center">
        {
            products.map((product)=>{
                return <GalleryItem {...product} />
            })
        }
    </div>
  )
}

export default Gallery