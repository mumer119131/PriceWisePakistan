
interface Product{
    id: number,
    product_name: string,
    product_price: number,
    product_category: string,
    product_img_url: string,
    product_url : string,
    created_at: string,
}
interface apiResponse{
    products : Product[]
}
export module "./Api.js" {
    export function getProductsApi(): Product<apiResponse>;
}

export module "./Api.js" {
    export function getProductCategoriesApi() : Unknown<apiResponse>;
}

export module "./Api.js" {
    export function getProductsByCategoryApi(category: string) : Unknown<apiResponse>;
}
export module "./Api.js" {
    export function getProductsWithDetailByCategory() : Unknown<apiResponse>;
}