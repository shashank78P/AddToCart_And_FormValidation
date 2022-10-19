import React from "react"
import ImageSlide from "./imageSlide";
const Slider = () => {
   let numberPixelMoved = 0;
   let count=0;
    function Scroll(e, direction) {
        let sliderCount = document.getElementsByClassName("slider_frame")[0].childNodes.length;  //4
        let windowWidth = window.innerWidth;
        let element = document.getElementsByClassName("slider_frame")[0]
        function moveControle(number,unit){
            if(count === 0 && direction === 1) return;
            else if((count > -(sliderCount-1)) || ((count === -(sliderCount-1)) && direction === 1)){
                (direction === 1) ? count++ : count--;
                numberPixelMoved = numberPixelMoved +( number * direction)
                element.style.transform=`translateX(${numberPixelMoved+unit})`
            }
        }
        if(windowWidth <= 500) moveControle(100,'vw');
        else if(windowWidth <= 1000) moveControle(170,'px');
        else moveControle(300,'px');
    }

    return (
        <div className="slider_wrapper">
            <span className="leftNavigator" onClick={(e) => { Scroll(e, -1) }}>{'<'}</span>
            <span className="rightNavigator" onClick={(e) => { Scroll(e, 1) }}>{'>'}</span>
            <div className="slider_frame">
                <ImageSlide />
            </div>
            
        </div>
    )
}

export default Slider;