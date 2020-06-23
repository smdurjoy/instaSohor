import React, {Component, Fragment} from 'react';
import {Col, FormControl, Row} from "react-bootstrap";
import siteLogo from '../../images/siteLogo.svg';
import profileImage from '../../images/pro.jpeg';
import {NavLink} from "react-router-dom";

class MainLayout extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <Fragment>
                <div className="left-component">
                    <div className="left-component-wrapper">
                        <h2 className="brandName"><img className="siteLogo mb-1" src={siteLogo}/>nsTaSohor</h2>
                        <hr className="hLine ml-auto mr-auto"/>
                        <FormControl type="text" placeholder="&#61442;" className="searchBox" />

                        <div className="navItemDiv">
                            <ul className="navItemList">
                                <li className="navListItem"> <NavLink className="navItem" to="/" activeStyle={{ color: '#0098fe' }}>My Profile</NavLink> </li>
                                <li className="navListItem"> <NavLink className="navItem" to="/profile" activeStyle={{ color: '#0098fe' }}>My Friends</NavLink> </li>
                                <li className="navListItem"> <NavLink className="navItem" to="/friend-list" activeStyle={{ color: '#0098fe' }}>New Feed</NavLink> </li>
                                <li className="navListItem"> <NavLink className="navItem" to="/notification" activeStyle={{ color: '#0098fe' }}>Notification</NavLink> </li>
                                <li className="navListItem"> <NavLink className="navItem" to="/setting" activeStyle={{ color: '#0098fe' }}>Setting</NavLink> </li>
                            </ul>
                            <div className="bottom-content">
                                <hr className="hLine ml-auto mr-auto"/>
                                <Row className="ml-auto mr-auto">
                                    <Col md={4} lg={4}>
                                        <img className="bottom-profile-image" src={profileImage}/>
                                    </Col>
                                    <Col md={8} lg={8}>
                                        <h2 className="profileName mt-1">Tom Benson</h2>
                                        <h4 className="online">Online</h4>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-wrapper">
                    <div className="right-wrapper-content">
                        <div className="right-component">
                            hello im right sidebar content
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MainLayout;
