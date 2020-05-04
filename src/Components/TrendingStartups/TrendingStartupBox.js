import React from "react"
import StartupContainer from"../StartupContainer/StartupContainer"

import StartupData from"./StartupData"



function TrendingStartupBox(){
    return(
        
        
       <div className="TrendingStartupBox">
           <div className="Title"><h5 >Trending startups</h5></div>
           
       
      
       <ul>
           <StartupData/>
            
       </ul>
       
      
       </div>
       
   
    )
}


export default TrendingStartupBox