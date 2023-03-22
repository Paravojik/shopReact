import './Cart.css'
import {useState,useMemo} from "react"
import List from '../List/List.jsx'
import close from '../../img/close.png'
const Cart =()=>{
    let [items,setItem]=useState(JSON.parse(localStorage.getItem('items__LS')) || [])
    // const [price,setPrice]=useState([])
    let [indexOfGood,setIndexOfGood]=useState(Number(localStorage.getItem('indexOfGood__LS') || 1))
    const filterText=''
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
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     fetch('/api/users', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(document.getElementById('form__inp').value)
    //     })
    //       .then(response => response.json())
    //       .then(data => console.log(data))
    //       .catch(error => console.error(error));
    //   };
    // const sendTelegram= ()=>{
    //     let form__inp=document.getElementById('form__inp')
    //     alert(form__inp.value)
    //     // const query = await Axios.post("/sendTelegram", form__inp)
    // }
    const removeFromCart=(product,indexOfGood)=>{
   let newItems=items.filter(item=>item.id!==product.id)
   setItem(newItems)
//    localStorage.setItem('items__LS',JSON.stringify(items))

    }
    console.log(filterText)
    const filteredItems=useMemo(()=>{
        return items.filter(item=>item.name.toLowerCase().includes(filterText.toLowerCase()))
    },[items,filterText]
    )
    let TotalPrice=items.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,0);
        localStorage.setItem('items__LS',JSON.stringify(items))
        localStorage.setItem('indexOfGood__LS',indexOfGood)
      

    return(
        <div className='Cart'>
             <List addToCart={addToCart}/>
             <div className="CartRight">
             {/* <input type="text" value={filterText} onChange={e=>setFilterText(e.target.value)}/> */}
             <h2>Cart</h2>
            {items.length===0 ? (<>Your cart is empty</>):
                 (   <div className='Cart__items'>
                
                    {filteredItems.map((item)=>{
                  
                        return(
                            <li key={item.id}>
                                <div className="Cart__items__item">
                                    <img className='Cart__items__item__img' src={item.url} alt="" />
                                    <div className="Cart__items__item__center">
                                    <div className="Cart__items__item__text">{item.name}</div>
                                    <div className="Cart__items__item__text2">{item.price}$</div>
                                    </div>
                         
                            <img className='remove' src={close} onClick={()=>removeFromCart(item)} alt="" />
                            {/* <button className='CartRight__btnRemove' onClick={()=>removeFromCart(item)}></button> */}
                                </div>
                            
                        </li>
                        )
               
                  
                    }
                             
                        
                         
                    ) }
                          {`Total Price: `+ TotalPrice+'$'}
                </div>
                 )
            }
                  {/* <form onSubmit={()=>handleSubmit()} action="../../post" method="POST" id='form__cart'  className="form">
                <input className='form__inp' id='form__inp' name='form__inp' type="text" />         
                 <button className='form__submit' id='form__submit' type="submit" onClick={()=>sendTelegram()}>Connected?</button>
        </form> */}
             </div>
            
     
           
        </div>
    )
}
export default Cart