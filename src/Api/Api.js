import axios from "axios";

export const getProductsApi = async () => {
    const response = await axios.get("http://127.0.0.1:5000/api/products");
    return response.data;
}
