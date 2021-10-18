import React from "react";
import './generalContainer.css'
import Search from "./search";
import Filter from "./filter";
import Flags from "./cardFlags";

class generalContainer extends React.Component {
    render() {
        return (
            <div className="background" >
                <div className="options">
                    <Search />
                    <Filter />
                </div>
                <div className="flags">
                    <Flags />
                </div>
            </div>
        );
    }
}

export default generalContainer;