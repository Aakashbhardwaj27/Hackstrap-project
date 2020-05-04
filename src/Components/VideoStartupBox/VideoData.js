import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoStartupContainer from"./VideoStartupContainer"
import"../App.css"
 
class VideoData extends React.Component {
 
 
  render() {
    var settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      
      autoplaySpeed: 2000,
      
    };
    return (
      <Slider {...settings}>
      
      <VideoStartupContainer 
           StartupName="Startup1" 
           VideoUrl="#" 
           description="Startup description in one line so that users can quickly understand what the startup is about."
           />
           <VideoStartupContainer 
            StartupName="Startup2"
            VideoUrl="#"
             description="Startup description in one line so that users can quickly understand what the startup is about."
             />
           <VideoStartupContainer 
           StartupName="Startup3" 
           VideoUrl="#" 
           description="Startup description in one line so that users can quickly understand what the startup is about."
           />
            <VideoStartupContainer 
           StartupName="Startup4" 
           VideoUrl="#" 
           description="Startup description in one line so that users can quickly understand what the startup is about."
           />
            <VideoStartupContainer 
           StartupName="Startup5" 
           VideoUrl="#" 
           description="Startup description in one line so that users can quickly understand what the startup is about."
           />
      
      </Slider>
    );
  }
}

export default VideoData