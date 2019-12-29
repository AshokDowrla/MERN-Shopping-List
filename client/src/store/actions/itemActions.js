import { GET_ITEMS, DELETE_ITEM, ADD_ITEM, ITEMS_LOADING } from "./types"
import axios from "axios"


export const getItems = () => dispatch => {

    dispatch(setItemsLoading())

    axios.get('/items')
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            }))
}



export const deleteItem = (id) => dispatch => {

    axios.delete(`/items/${id}`)
    .then(res=>dispatch({
        type:DELETE_ITEM,
        payload:res.data.result._id
    }))

}





export const addItem = (item) => dispatch => {


    axios.post('/items/newItem', item)
        .then(res =>
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        )

}



export const setItemsLoading = () => {

    return {
        type: ITEMS_LOADING
    }
}