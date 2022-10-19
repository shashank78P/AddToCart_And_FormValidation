import img1 from "../images/burger.jpg"
import img2 from "../images/piza.jpg"
import img3 from "../images/chicken.webp"
import img4 from "../images/dosa.jpg"
const sliderContent = [
    {
        image: img1,
        name: "Burger King",
        discount: "30%",
        alt: "image 1 for slider",
    },
    {
        image: img2,
        name: "pizza",
        discount: "10%",
        alt: "image 2 for slider",
    },
    {
        image: img3,
        name: "chicken",
        discount: "40%",
        alt: "image 3 for slider",
    },
    {
        image: img4,
        name: "dosa",
        discount: "5%",
        alt: "image 4 for slider",
    },
]
const ImageSlide = () => {
    return (
        <>
            {
                sliderContent.map((ele, i) => {
                    return <div className="img" key={i}>
                        <img src={ele.image} alt={ele.alt} />
                        <div className="SliderTitle">{ele.name}<br />
                            <h1>-{ele.discount}</h1>
                            <button>Shop Now..</button>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default ImageSlide;