import { api } from "../../config/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCES, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCES, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCES, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCES } from "./ActionType"

export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST })

    try {
        const { data } = await api.get("/cart/")
        console.log("cart: ", data)
        dispatch({ type: GET_CART_SUCCES, payload: data })
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message })
    }
}



export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })

    try {
        const { data } = await api.post("/cart/add", reqData)
        dispatch({ type: ADD_ITEM_TO_CART_SUCCES, payload: data })
        console.log("add Item to card", data)
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}

export const removeItemToCart = (cartItemId) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST })

    try {
        const { data } = await api.delete(`/cart/remove/${cartItemId}`)
        dispatch({ type: REMOVE_CART_ITEM_SUCCES, payload: data })
    } catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })
    }
}

export const updateItemToCart = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST })

    try {
        const { data } = await api.put(`/cart/${reqData.cartItemId}`, reqData.data)
        dispatch({ type: UPDATE_CART_ITEM_SUCCES, payload: data })
    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })
    }
}