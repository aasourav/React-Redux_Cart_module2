import { DECREMENT } from "./actionType";
const initValue={
    cart_info:{
        item_name:[],
        total_items:0,
        total_price:0
    },
    prod_info:[{
        prod_name:`Asus Vivobook X515MA`,
        prod_quantity:20,
        prod_price:45000
    },
    {
        prod_name:`DELL E1916HV 18.5 Inch`,
        prod_quantity:30,
        prod_price:25000
    },
    {
        prod_name:`Canon Eos 4000D 18MP`,
        prod_quantity:12,
        prod_price:35000
    }]
}
const setItem = (item_arr,item)=>{
    
    const arr = item_arr.filter(data=> data===item);
    if(arr.length === 0){
        const u_arr = item_arr;
        u_arr.push(item)
        return [...u_arr]
    }
    
    
    return [...item_arr]
}
const updateProdQuantity = (pInfo,id)=>{
    console.log(id)
    const t_state = [...pInfo]
    t_state[id] = {
        ...t_state[id],
        prod_quantity: t_state[id].prod_quantity - 1
    }
    return [...t_state]
}

const productInfoReducer = (state=initValue,action)=>{
    switch(action.type){
        case DECREMENT:
            return{
                ...JSON.parse(JSON.stringify(state)),

                prod_info: updateProdQuantity(state.prod_info,action.payload),
                cart_info:{

                    ...state.cart_info,
                    item_name: setItem(state.cart_info.item_name,state.prod_info[action.payload].prod_name),

                    total_price: state.cart_info.total_price + state.prod_info[action.payload].prod_price,

                    total_items: state.cart_info.total_items + 1
                }
            }
        default:
            return{
                ...JSON.parse(JSON.stringify(state))
            }
    }

    
}
export default productInfoReducer