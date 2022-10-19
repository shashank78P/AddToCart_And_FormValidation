import React, { useState } from "react";
import CartContext from "./StoreContext";

const ContextProvider = (props) => {
    const [showCart,setShowCart] = useState(false)
    const [items,setItems] = useState([]);
    const [linkHasId,setlinkHasId] = useState([]);
    const [numberOfCartItems,setNumberOfCartItems] = useState(0)
    const [cost,setCost] = useState(0)
    const UpdateItems = (item) => {         //add new or extra item
        if(!linkHasId.includes(item.image) )
        {
            setItems([...items,{item:item,quantity:1}])
            setlinkHasId([...linkHasId,item.image])
            setNumberOfCartItems(numberOfCartItems+1)
            setCost(cost + item.amount)
        }
        else{
            items.forEach((ele,i)=>{
                if(ele.item.image === item.image){
                    setNumberOfCartItems(numberOfCartItems+1)
                    ele.quantity+=1;
                    setCost(cost + item.amount)
                }
            })
        }
    }

    function DeleteItems(item){
       items.forEach((ele,i)=>{
        if((ele.item.image === item.image) && (ele.quantity > 0)){
            setCost(cost-ele.item.amount);
            setNumberOfCartItems(numberOfCartItems-1)
            ele.quantity-=1;
            if(ele.quantity === 0){
                items.splice(i,1)
            }
        }
       })
    }

    function DisplayCart(){
        (showCart) ? setShowCart(false) : setShowCart(true);
    }


    return (
        <CartContext.Provider value={{UpdateItems,items,numberOfCartItems,cost,DeleteItems,showCart,DisplayCart}}>
            {props.children}
        </CartContext.Provider>
    )
}


export default ContextProvider