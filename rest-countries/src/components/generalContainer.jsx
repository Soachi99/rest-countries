import React from "react";
import './generalContainer.css'
import Search from "./search";

class generalContainer extends React.Component {
    render() { 
        return(
         <div className="background" >
             <Search />
         </div>            
        );
    }
}
 
export default generalContainer;