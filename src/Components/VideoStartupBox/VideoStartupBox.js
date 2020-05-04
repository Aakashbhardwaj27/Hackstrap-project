import React from "react";
import VideoStartupContainer from "./VideoStartupContainer";
import "../App.css";
import SliderVideo from "./VideoData";
import VideoData from "./VideoData";

function VideoStartupBox() {
  return (
    <div className="VideoStartupBox">
      <div className="Title">
        <h5>1-min Video Startup Pitches</h5>
      </div>

      <ul>
        <VideoData />
      </ul>
    </div>
  );
}

export default VideoStartupBox;
