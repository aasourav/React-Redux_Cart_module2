import React from 'react'
import { connect } from 'react-redux'
import { prod_decrement } from '../redux/product_info/actionCreator'
import CartProdList from './CartProdList'
import Item from './Item'

const Merge = ({prod_arr,cart_items,total_items,total_price,action_add_button}) => {
  return (
    <div className='bg-gray-50 w-full'>
      <div className='flex justify-center'>
        <h1 className='m-2 mb-12 font-bold text-2xl border-4 border-x-0 border-t-0 text-center w-44 border-violet-500 '>Shopping Cart</h1>
      </div>
      
      <div className='flex'>
        <div className='w-3/5'>
          <Item items={prod_arr} btnHandler={action_add_button}/>
        </div>
        <div className='w-2/5'>
          <CartProdList value={total_items} b={cart_items}/>
          <div className="bg-white w-full text-xl pt-10 font-medium flex justify-end pr-12">
          <p>Total Price- {total_price}</p>
        </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state)=>{
  return{
      prod_arr : state.prod_info,
      cart_items: state.cart_info.item_name,
      total_price : state.cart_info.total_price,
      total_items: state.cart_info.total_items
  }
}
const mapDispatchToProps = (dispatch)=>{
      return{
        action_add_button : (e) => {
          dispatch(prod_decrement(e.target.name))
        }

      }
}
export default connect(mapStateToProps,mapDispatchToProps)(Merge)