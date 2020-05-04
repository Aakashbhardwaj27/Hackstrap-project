import React from 'react' 
import '../App.css'
import View from './View'
// import info from"./info"



function VideoStartupContainer(props){
    return(
        <div className="StartupContainer">
             <div className="StartupVideo">
              <video controls   ><source src={props.VideoUrl} type="video/mp4"></source></video>
             </div>
            
             <h4>{props.StartupName}</h4>
             <View />
             <div className ="description"><p>{props.description}</p></div>
            
            
           

        </div>
    )
}

export default VideoStartupContainer