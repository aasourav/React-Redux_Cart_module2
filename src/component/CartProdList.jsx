
const CartProdList = ({b,value}) => {
  return (
    <div>
        <div>
            {b.map((data,i)=> data ?
                <div key={i} className="bg-white ml-5 w-full text-xl pl-3 pt-5">
                    <p>{data}</p>
                    <hr className="mt-4"/>
                </div>
                :
                null
            )}
        </div>
        <div className="bg-white w-full text-xl pt-10 font-medium flex justify-end pr-12">
            <p>Total Items- {value}</p>
        </div>
        <hr className="ml-8 mt-5"/>
    </div>
  )
}

export default CartProdList