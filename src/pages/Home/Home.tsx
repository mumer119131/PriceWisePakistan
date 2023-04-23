import Carousel from "../../components/Carousel/Carousel"
import Gallery from "../../components/Gallery/Gallery"
import { getProductsWithDetailByCategory } from "../../Api/Api.js"
import { useEffect, useState } from "react"
import CategoriesNav from "../../components/CategoriesNav/CategoriesNav.js"

interface Product{
  id: number,
  product_name: string,
  product_price: number,
  product_category: string,
  product_img_url: string,
  product_url : string,
  created_at: string,
}

interface Category{
  name: string,
  products : Product[]
}

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([])
  
  const getCategories = async () => {
    const response = await getProductsWithDetailByCategory()
    setCategories(response.data)
  }
  
  useEffect(()=>{
    getCategories()
  },[])
  return (
    <section>
        <CategoriesNav />
        <Carousel />
        {
          categories.map((category, index)=>{
            return <div className="mt-12">
              <h3 className="capitalize mb-12 font-bold text-center text-3xl text-slate-800">{category.name}</h3>
              <Gallery products={category.products} key={index}/>
            </div>
          })
        }
    </section>
  )
}

export default Home