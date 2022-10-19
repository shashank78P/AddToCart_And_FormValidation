import React, { useContext } from "react";
import CartContext from "../store/StoreContext";
import AddToCart from "../universal/addToCart";
import KnowMore from "../universal/knowMore";
import img1 from "../../images/burger.jpg"
import img2 from "../../images/piza.jpg"
import img3 from "../../images/chicken.webp"
import img4 from "../../images/dosa.jpg"
import img5 from "../../images/biryani.avif"
import img6 from "../../images/coffee.avif"
import img7 from "../../images/idle.avif"
import img8 from "../../images/noodel.jpg"
import img9 from "../../images/paniPoori.avif"
import img10 from "../../images/pasta.jpg"
import img11 from "../../images/rolls.avif"
import img12 from "../../images/samosaa.jpg"
import img13 from "../../images/sandWich.avif"
import img14 from "../../images/sasi.webp"
import img15 from "../../images/shake.avif"
import img16 from "../../images/snaks.avif"
import img17 from "../../images/tea.webp"

const foodList = [
    {
        image: img1,
        name: "Burger King",
        amount: 100,
        alt: "Burger image",
    },
    {
        image: img2,
        name: "pizza",
        amount: 180,
        alt: "pizza image",
    },
    {
        image: img3,
        name: "chicken",
        amount: 200,
        alt: "chicken image",
    },
    {
        image: img4,
        name: "dosa",
        amount: 50,
        alt: "dosa image",
    },
    {
        image: img5,
        name: "biriyani",
        amount: 150,
        alt: "biryani image",
    },
    {
        image: img6,
        name: "coffee",
        amount: 45,
        alt: "coffee image",
    },
    {
        image: img7,
        name: "idli",
        amount: 40,
        alt: "idli image",
    },
    {
        image: img8,
        name: "noodles",
        amount: 70,
        alt: "noodles image",
    },
    {
        image: img9,
        name: "pani puri",
        amount: 65,
        alt: "pani puri image",
    },
    {
        image: img10,
        name: "pasta",
        amount: 75,
        alt: "pasta image",
    },
    {
        image: img11,
        name: "rolls",
        amount: 80,
        alt: "rolls image",
    },
    {
        image: img12,
        name: "samosa",
        amount: 20,
        alt: "samosa image",
    },
    {
        image: img13,
        name: "sandWich",
        amount: 35,
        alt: "sandWich image",
    },
    {
        image: img14,
        name: "sasi",
        amount: 250,
        alt: "sasi image",
    },
    {
        image: img15,
        name: "shake",
        amount: 60,
        alt: "shake image",
    },
    {
        image: img16,
        name: "french fries",
        amount: 20,
        alt: "french fries",
    },
    {
        image: img17,
        name: "tea",
        amount: 15,
        alt: "tea image",
    },
]


const Card = () => {
    const ctx = useContext(CartContext);
    return (
        <>
            {
                foodList.map((ele, i) => {
                    return <div key={i} className="CardFrame ">
                        <div className="ContentFrame ">
                            <div className="InfoFrame flexCenter">
                                <h1 >{ele.name}</h1>
                                <h1 >{ele.amount}₹</h1>
                            </div>
                            <div className="ImageFrame ">
                                <img src={ele.image} alt={ele.alt} />
                            </div>
                            <div className="flexCenter AddToCartBtn ButtonFrame">
                                <AddToCart  i={i} ctx={ctx} foodList={foodList} btnName = "Add To Cart"/>
                                <KnowMore />
                            </div>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default Card;