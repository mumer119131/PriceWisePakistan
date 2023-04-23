import axios from "axios";

export const getProductsApi = async () => {
    const response = await axios.get("http://127.0.0.1:5000/api/products");
    return response.data;
}

export const getProductCategoriesApi = async () => {
    const response = await axios.get("http://127.0.0.1:5000/api/categories")
    return response.data;
}

export const getProductsByCategoryApi = async (category) => {
    const response = await axios.get('http://127.0.01:5000/api/products/category?category=' + category)
    return response.data
}

export const getProductsWithDetailByCategory = async () => {
    const response = await axios.get('http://127.0.01:5000/api/products/categories')
    return response.data
}