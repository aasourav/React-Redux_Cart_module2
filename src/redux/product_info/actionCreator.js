import { DECREMENT } from "./actionType"


export const prod_decrement = (id)=>{
    // console.log(id)
    return{
        type:DECREMENT,
        payload: id
    }
}