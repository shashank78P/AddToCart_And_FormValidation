import {FaShoppingCart}  from "react-icons/fa"
const AddToCart = (props) => {
    
    function AnimateAddToCart(Event,i,ctx,foodList){
        ctx.UpdateItems(foodList[i]);
        let AddToCartAnimate = document.getElementsByClassName("AddToCartAnimate")[i]
        AddToCartAnimate.classList.add("animateOnclick")
        setTimeout(()=>{
            AddToCartAnimate.classList.remove("animateOnclick")
        }
        ,1500)
    }
    return (
        <>
            <button className="btn " onClick={(Event) => {AnimateAddToCart(Event,props.i,props.ctx,props.foodList)}} >{props.btnName}
             <span className="AddToCartAnimate"><FaShoppingCart /></span> </button>
        </>
    )
}

export default AddToCart;