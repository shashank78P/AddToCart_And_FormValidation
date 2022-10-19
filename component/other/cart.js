import { useContext } from "react";
import CartContext from "../store/StoreContext";
const Cart = () => {
    const ctx = useContext(CartContext);
    function AddItemControl(number,action){
        if(action === "ADD")
        ctx.UpdateItems(ctx.items[number].item)
        else{
            ctx.DeleteItems(ctx.items[number].item)
        }
    }
    if (ctx.items.length > 0 && ctx.showCart)
    return (
        <>
            <div className="CartFrame">
                <div className="cartHeader">
                    <div>Total Amount : {ctx.cost}₹</div>
                    <button className="orderBtn">Order Now</button>
                </div>
                <div className="CartContainer">
                    {
                        ctx.items.map((ele, i) => {
                            return <div key={i} className="individualCartItem flexCenter">
                                <div className="cartImage">
                                    <img src={ele.item.image} alt={ele.item.alt} />
                                </div>
                                <div className="cartContent">
                                    <div>{ele.item.name}</div>
                                    <div>Amount : {ele.item.amount}₹</div>
                                    <div className="CartButtonContainer flexCenter">
                                        <button className="decrementButton" onClick={()=>AddItemControl(i,"SUB")}>-</button>
                                        <div className="numberDisplay">{ele.quantity}</div>
                                        <button className="incrementButton" onClick={()=>AddItemControl(i,"ADD")}>+</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Cart;