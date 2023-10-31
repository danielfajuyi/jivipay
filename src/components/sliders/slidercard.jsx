import React, { useContext } from "react";
import { HeroContext } from "./hero_slider";
import Slider from "react-slick";
import UilFacebook from "@iconscout/react-unicons/icons/uil-facebook";
import UilWhatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";
import UilTwitter from "@iconscout/react-unicons/icons/uil-twitter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero_slider.scss";
const SliderCard = () => {
  const { hero } = useContext(HeroContext);
  const ptext = "hover or click to view profile";
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {hero.map((item, id) => {
        return (
          <div className="hero-slider-wrapper" key={id}>
            <div className="hero-slider">
              <div
                className="hero-slider-item"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="hero-content-wrapper">
                  <h1>{item.headertext}</h1>
                  <p>{item.paragraphtext}</p>
                  <a>{item.buttontext}</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderCard;
