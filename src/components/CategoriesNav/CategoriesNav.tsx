import { useEffect, useState } from 'react';
import { getProductCategoriesApi } from '../../Api/Api';

const CategoriesNav = () => {
    const [categories, setCategories] = useState<string[]>([])
    const [activeCategory, setActiveCategory] = useState<string>('all')
    const getCategories = async () => {
        const response = await getProductCategoriesApi()
        console.log(response)
        setCategories(['all', ...response.data])
    }
    useEffect(()=>{
        getCategories()
    },[])
  return (
    <div className='flex flex-wrap'>
        {
            categories.slice(0,10).map((category, index)=>{
                return <span 
                onClick={()=>setActiveCategory(category)}
                className={`${activeCategory === category ? 'bg-black text-white hover:bg-opacity-80' : 'bg-white text-black hover:bg-black hover:text-white'} py-2 mr-2 tracking-wide bg-opacity-80 mt-4 uppercase transition__custom inline-block px-4 rounded-full text-sm cursor-pointer hover:shadow-primary shadow__custom`} key={index}>{category}</span>
            })
        }

    </div>
  )
}

export default CategoriesNav