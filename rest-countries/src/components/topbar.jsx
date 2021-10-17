import React from "react";
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './topbar.css';


class top extends React.Component {
    render() {
        return (
            <>
                <Navbar expand="lg" className="Container">                    
                    <Navbar.Brand className="Text "> <b> Where in the world? </b></Navbar.Brand>       
                    <Button className="Button" variant="light"> <b> Dark Mode </b></Button>  
                </Navbar>
            </>
        );
    }
}

export default top;