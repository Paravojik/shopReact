import './List.css'
const List=({addToCart})=>{
   
    const products=[
        {id:1,name:'NFHS Club Elite Team Soccer Ball',price:62,url:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/07c5328a-0e56-4bfa-a849-9f07fc3f05e0/nfhs-club-elite-team-soccer-ball-hLgSc1.png'},
        {id:2,name:'Nike Flight',price:162,url:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/345d88ea-5e22-4c89-91f8-c9c86dd5b8e8/flight-soccer-ball-lnBWww.png'},
        {id:3,name:'Nike Pitch Skills',price:18,url:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f2329d0d-dacb-4b2f-9393-37646bb2f593/pitch-skills-soccer-ball-Djk3J3.png'},
        {id:4,name:'Paris Saint-Germain Strike',price:32,url:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/16787e57-2185-455a-9ba2-a798915ea9c4/paris-saint-germain-strike-soccer-ball-3Rk4DK.png'},
        {id:5,name:'FC Barcelona Strike',price:32,url:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d64f59a7-4f0a-4f9c-b4a1-a2976a6af3e8/fc-barcelona-strike-soccer-ball-T5TS46.png'},
    ]
    
    return(
        <div className="List">
            <h2>Product List</h2>
            <div className="List_main">
            {products.map(product=>{
            
            return(
                <div className='List_main__obj' key={product.id}>
                {product.name}  {product.price}$
                <img className='List_main__obj__img' src={product.url} alt="" />
          
          
                <button className='List_main__obj__btn' onClick={()=>addToCart(product)}>Add to cart</button>
            </div>
            )
  
        })}
            </div>
               
               
            
        </div>
    )
}
export default List