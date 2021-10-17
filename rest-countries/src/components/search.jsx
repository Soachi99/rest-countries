import React from "react";
import './search.css'

class search extends React.Component {
    render() {
        return (
            <div>
                <form action="">
                    <input
                        className ="search"
                        name="Search a Country"
                        type="text"
                        placeholder="Search for a Country..."
                    />
                </form>
            </div>
        );
    }
}

export default search;