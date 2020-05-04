import React from 'react' 
import '../App.css'
import View from './View'




function StartupContainer(props){
    return(
        <div className="StartupContainer">
             <div className="StartupIcon">
              <img src={props.imgUrl} alt={props.StartupName}></img>
             </div>
            
             <h4>{props.StartupName}</h4>
             <View />
             <div className="description"><p>{props.description}</p></div>
            
            
           

        </div>
    )
}

export default StartupContainer