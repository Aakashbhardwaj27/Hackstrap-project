import React from "react";
import "./App.css";
import TrendingStartupBox from "./TrendingStartups/TrendingStartupBox";
import StartupContainer from "./StartupContainer/StartupContainer";
import searchBar from "./searchBox";
import RightColumn from "./RightColumn";
import SearchBox from "./searchBox";
import VideoStartupBox from "./VideoStartupBox/VideoStartupBox";
import RecentViewed from "./RecentViewed";

import SimpleSlider from "./TrendingStartups/StartupData"


function App() {
  return (
    <div className="mainPage">
      <SearchBox />
      <TrendingStartupBox />
      <VideoStartupBox />
      <RightColumn />
      <RecentViewed/>
      
    </div>
  );
}

export default App;
