import React from "react";
import {Dropdown} from 'react-bootstrap';
import './filter.css'


class filter extends React.Component {
    render() {
        return (
            <div>
                <Dropdown className="filter-container">
                    <Dropdown.Toggle className="filter" variant="light" bg="light" id="dropdown-basic">
                        Filter by Region
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Africa</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">America</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Europe</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Oceania</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

export default filter;