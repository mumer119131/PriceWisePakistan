interface Product{
    id: number,
    product_name: string,
    product_price: number,
    product_category: string,
    product_img_url: string,
    product_url : string,
    created_at: string,
}
const GalleryItem = (props : Product) => {
  return (
    <div className="bg-white w-[17rem] rounded-[1rem] pb-[2rem] transition-all shadow-lg cursor-pointer">
        <a href={props.product_url} target="_blank">
            <img src={props.product_img_url} alt={props.product_name} className="h-22 w-[17rem] object-cover px-2"/>
        </a>
        <a href={props.product_url} target="_blank" className="px-4 block">
            <h3 className="text-lg font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">{props.product_name}</h3>
            <p className="text-primary">Rs {props.product_price.toLocaleString()}</p>
            <span className="bg-primary bg-opacity-80 mt-4 inline-block px-2 rounded-full text-white text-sm">{props.product_category}</span>
        </a>
    </div>
  )
}

export default GalleryItem