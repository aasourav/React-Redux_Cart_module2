import React from 'react'

const Item = ({btnHandler,items}) => {
  return (
    
    items.map((data,i)=>
      
        <div key={i} className='mb-4 rounded-md flex justify-between bg-white border-2 p-4'>
        <div>
            <h3 className='font-bold'>{data.prod_name} ({data.prod_quantity})</h3>
            <p className='text-gray-500'>{data.prod_price}</p>
        </div>
        <button onClick={btnHandler} name={i} className='bg-violet-700 w-12 rounded-full text-3xl text-white pb-1'>
         +
        </button>
        </div>
    )
  )
}

export default Item