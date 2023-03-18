// import './HaederCart.css'
// const HaederCart=()=>{
//     return(
//         <div className="HaederCart">

//              <div className="CartRight">
//              <h2>Cart</h2>
//             {items.length===0 ? (<>Your cart is empty</>):
//                  (   <ul>
                
//                     {items.map((item)=>{
                  
//                         return(
//                             <li key={item.id}>
//                             {item.name } - { item.price}
//                             <button className='CartRight__btnRemove' onClick={()=>removeFromCart(item)}>Remove</button>
//                         </li>
//                         )
               
                  
//                     }
                             
                        
                         
//                     ) }
//                           {`Total Price:`+ TotalPrice}
//                 </ul>
//                  )
//             }
//                   {/* <form onSubmit={()=>handleSubmit()} action="../../post" method="POST" id='form__cart'  className="form">
//                 <input className='form__inp' id='form__inp' name='form__inp' type="text" />         
//                  <button className='form__submit' id='form__submit' type="submit" onClick={()=>sendTelegram()}>Connected?</button>
//         </form> */}
//              </div>
//         </div>

//     )
// }
// export default HaederCart