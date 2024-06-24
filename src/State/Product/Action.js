import { api } from "../../config/apiConfig";
import {  FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCES, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCES } from "./ActionType";

export const findProducts = (reqData) => async (dispatch)=>{
    dispatch({type:FIND_PRODUCTS_REQUEST})

    const {minPrice, maxPrice, category, sort, pageNumber, pageSize} = reqData;

    try{
        // const {data}= await api.get(`/product?minPrice=${minPrice}&maxPrice=${maxPrice}$category=${category}$sort=${sort}$pageNumber=${pageNumber}$pageSize=${pageSize}`)
        const {data} = await api.get(`/product?minPrice=${minPrice}&maxPrice=${maxPrice}&category=${category}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        console.log("Product Data: ", data)
        dispatch({type:FIND_PRODUCTS_SUCCES, payload:data})
    }catch (error){
        dispatch({type:FIND_PRODUCTS_FAILURE, payload:error.message})
    }
}

export const findProductsById = (reqData) => async (dispatch)=>{
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})

    const {productId} = reqData;

    try{


        const {data}= await api.get(`/product/${productId}`)
        console.log(data)

        dispatch({type:FIND_PRODUCT_BY_ID_SUCCES, payload:data})
    }catch (error){
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE, payload:error.message})
    }
}