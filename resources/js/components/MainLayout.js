import React, {Component, Fragment} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAddressBook,
    faAmericanSignLanguageInterpreting,
    faBars, faBell, faComment, faUser,
    faComments,
    faHome,
    faLaptopCode,
    faSortDown,
    faWindowRestore
} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";


class MainLayout extends Component {
    constructor(props) {
        super();
        this.state = {
            sideNav: false,
            sideNavClass: "sideNavClose",
            mainOverlay: "overlayClose",
            activeNavClass: ""
        }

        this.showHideSideNav = this.showHideSideNav.bind(this);
    }

    showHideSideNav () {
        if(this.state.sideNav == false) {
            this.setState({sideNav: true, sideNavClass: "sideNavOpen", mainOverlay: "overlayOpen"})
        } else {
            this.setState({sideNav: false, sideNavClass: "sideNavClose", mainOverlay: "overlayClose"})
        }
    }

    render() {
        return (
            <Fragment>
                <title>{this.props.title}</title>
                <Navbar expand="lg" className="fixed-top navBar" variant="light" bg="light">
                    <Navbar.Brand href="#" onClick={this.showHideSideNav}> <FontAwesomeIcon icon={faBars}/> </Navbar.Brand>
                    <Container>
                        <Navbar.Brand> <NavLink to="/" className="navBrand">insTaSohor</NavLink> </Navbar.Brand>
                        <FormControl type="text" placeholder="Search" className="searchBox ml-auto mr-auto" />
                        <h6 className="ml-auto"> Welcome Admin <FontAwesomeIcon icon={faSortDown}/></h6>
                    </Container>
                </Navbar>

                <div className={this.state.sideNavClass}>
                    <div className="navDiv">
                        <NavLink className="p-2 my-0 navItem" exact to="/" activeStyle={{ background: '#f8f9fa', color:'#1b1e21' }}> <FontAwesomeIcon icon={faHome}/> Home</NavLink>
                        <NavLink className="p-2 my-0 navItem" exact to="/profile" activeStyle={{ background: '#f8f9fa', color:'#1b1e21' }}> <FontAwesomeIcon icon={faLaptopCode}/> Update Profile</NavLink>
                        <NavLink className="p-2 my-0 navItem" exact to="/message" activeStyle={{ background: '#f8f9fa', color:'#1b1e21' }}> <FontAwesomeIcon icon={faWindowRestore}/> Change Password</NavLink>
                        <NavLink className="p-2 my-0 navItem" exact to="/notification" activeStyle={{ background: '#f8f9fa', color:'#1b1e21' }}> <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting}/> Logout</NavLink>
                    </div>
                </div>

                {/*bottom navbar*/}
                <Navbar className="fixed-bottom navBar">
                    <Nav className="mr-auto ml-auto">
                        <Nav.Link href="#link"> <NavLink to="/" className="navLinkItem"><FontAwesomeIcon icon={faHome}/></NavLink> </Nav.Link>
                        <Nav.Link href="#link"> <NavLink to="/notification" className="navLinkItem"><FontAwesomeIcon icon={faBell}/></NavLink> </Nav.Link>
                        <Nav.Link href="#link"> <NavLink to="/message" className="navLinkItem"><FontAwesomeIcon icon={faComment}/></NavLink> </Nav.Link>
                        <Nav.Link href="#home"> <NavLink to="/profile" className="navLinkItem"><FontAwesomeIcon icon={faUser}/></NavLink> </Nav.Link>
                    </Nav>
                </Navbar>

                <div onClick={this.showHideSideNav} className={this.state.mainOverlay}>

                </div>

                <div className="mt-5">
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}

export default MainLayout;
