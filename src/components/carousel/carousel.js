import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./carousel.css";
import Img1 from "../../images/img1.jpeg"
import Img2 from "../../images/img2.jpeg"
import Img3 from "../../images/img3.jpeg"
import Img4 from "../../images/img4.jpeg"

function Carousel() {
    return (
        <div>
            <OwlCarousel 
            loop
            center
            autoplay={true}
            smartSpeed={1000}
            autoplayTimeout={4000}
            items={1}
            className="owl-theme"
            dots={false}
            nav={true}
            >
            <div>
                <img src={Img1} alt="carousel img"/>
                <div></div>
            </div>
            <div>
                <img src={Img2} alt="carousel img"/>
            </div>
            <div>
                <img src={Img3} alt="carousel img"/>
            </div>
            <div>
                <img src={Img4} alt="carousel img"/>
            </div>

            </OwlCarousel>
        </div>
    )
}

export default Carousel
