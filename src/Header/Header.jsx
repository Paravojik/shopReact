import './Header.css'
import {useState} from "react"
// import HaederCart from '../Components/HaederCart/HaederCart'
import 'jquery'
import $ from 'jquery'
const Header=()=>{
    let [Header,setHeader]=useState(true)
    const HeaderClick=()=>{
        if(Header===true){
            setHeader(false)
            console.log(Header)
            $('.CartRight').css('display','flex')
            console.log(window.globalThis.innerWidth)

        }else{
            setHeader(true)
            console.log(Header)
            $('.CartRight').css('display','none')
        }
    }
    setInterval(function(){
        let widt=window.globalThis.innerWidth
        console.log(widt)
        if(widt>=1200){
            $('.CartRight').css('display','flex')
        }
    },1000)
    
    return(
        <div className="Header">
            {/* {widt} */}
            <div className="Header__text">М'ячики</div>
            <div className="Header__tabs" onClick={HeaderClick}>
                <div className="Header__tabs__row"></div>
                <div className="Header__tabs__row"></div>
                <div className="Header__tabs__row"></div>
            </div>
        </div>
        
    )
}
export  default Header