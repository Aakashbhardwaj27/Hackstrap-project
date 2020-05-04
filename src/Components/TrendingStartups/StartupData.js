import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StartupContainer from"../StartupContainer/StartupContainer"
import"../App.css"
 
class StartupData extends React.Component {
 
 
  render() {
    var settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      
      autoplaySpeed: 2000,
      
    };
    return (
      <Slider {...settings}>
      
        <StartupContainer className="mySlides"
           StartupName="Startup1" 
           imgUrl="#" 
           description="Startup description in one line so that users can quickly understand what the startup is about."
           />
           <StartupContainer className="mySlides"
            StartupName="Startup2"
             imgUrl="#"
             description="Startup description in one line so that users can quickly understand what the startup is about."
             />
           <StartupContainer className="mySlides"
           StartupName="Startup3" 
           imgUrl="#" 
           description="Startup description in one line so that users can quickly understand what the startup is about."
           />
            <StartupContainer className="mySlides"
            StartupName="Startup4"
             imgUrl="#"
             description="Startup description in one line so that users can quickly understand what the startup is about."
             />
           <StartupContainer className="mySlides"
           StartupName="Startup5" 
           imgUrl="#" 
           description="Startup description in one line so that users can quickly understand what the startup is about."
           />
            <StartupContainer className="mySlides"
            StartupName="Startup6"
             imgUrl="#"
             description="Startup description in one line so that users can quickly understand what the startup is about."
             />
           <StartupContainer className="mySlides"
           StartupName="Startup7" 
           imgUrl="#" 
           description="Startup description in one line so that users can quickly understand what the startup is about."
           />
      
      </Slider>
    );
  }
}

export default StartupData