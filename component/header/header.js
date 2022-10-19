import { useContext } from "react";
import CartContext from "../store/StoreContext";

const Header = (props) =>{
    const ctx = useContext(CartContext)
    return(
        <>
            <ul className="headerFrame flexCenter">
                <li className="headerMember">
                    <h1>Foody</h1>
                </li>
                <li className="headerMember" onClick={()=>{
                    ctx.DisplayCart()
                }}>
                    <span>Cart</span>
                    <span className="addedCartNum">{ctx.numberOfCartItems}</span>
                </li>
            </ul>
        </>
    )
}

export default Header;