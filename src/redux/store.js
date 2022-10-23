import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from 'redux-logger';
import productInfoReducer from "./product_info/product_reducer";

const myLogger = (appStore)=>(next)=>(action)=>{
    const nextStep = [action].reduce(productInfoReducer,appStore.getState())

    // console.log(JSON.stringify(nextStep))
    const arr = nextStep.prod_info.filter(data=> data.prod_quantity < 0 )
    console.log(arr)

    if(arr.length === 0){
        next(action)
    }
    else{
        alert('This Product is Out of Stock')
    }
}

const appStore = createStore(productInfoReducer,applyMiddleware(logger,myLogger));

export default appStore