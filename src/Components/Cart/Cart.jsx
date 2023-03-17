import './Cart.css'
import {useState} from "react"
import List from '../List/List.jsx'
const Cart =()=>{
    let [items,setItem]=useState(JSON.parse(localStorage.getItem('items__LS')) || [])
    // const [price,setPrice]=useState([])
    let [indexOfGood,setIndexOfGood]=useState(Number(localStorage.getItem('indexOfGood__LS') || 1))
    // let indexOfGood=0
    let productSend
    const addToCart=(product)=>{
        console.log('do',items)
       setIndexOfGood(indexOfGood+1)
        productSend=product 
        productSend.id=indexOfGood
         console.log(productSend)
        setItem([...items,product])
    
        // for(let i=0;i<items.length;i++){
        //     setPrice([price,price+items[i].price])
        // }

     
    }
    const removeFromCart=(product,indexOfGood)=>{
   let newItems=items.filter(item=>item.id!==product.id)
   setItem(newItems)
//    localStorage.setItem('items__LS',JSON.stringify(items))

    }
    let TotalPrice=items.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,0);
        localStorage.setItem('items__LS',JSON.stringify(items))
        localStorage.setItem('indexOfGood__LS',indexOfGood)
      

    return(
        <div className='Cart'>
             <List addToCart={addToCart}/>
             <div className="CartRight">
             <h2>Cart</h2>
            {items.length===0 ? (<>Your cart is empty</>):
                 (   <ul>
                
                    {items.map((item)=>{
                  
                        return(
                            <li key={item.id}>
                            {item.name} - {item.price}
                            <button onClick={()=>removeFromCart(item)}>Remove</button>
                        </li>
                        )
               
                  
                    }
                             
                        
                         
                    ) }
                          {`Total Price:`+ TotalPrice}
                </ul>
                 )
            }
             </div>
            
     
           
        </div>
    )
}
export default Cart