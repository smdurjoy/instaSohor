import React, {Component, Fragment} from 'react';
import {Button, Col, FormControl, Row} from "react-bootstrap";
import siteLogo from '../../images/siteLogo.svg';
import profileImage from '../../images/pro.jpeg';
import chatTopImage from '../../images/chats.svg';
import {NavLink} from "react-router-dom";
import {faPlus, faSortUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                                <li className="navListItem"> <NavLink className="navItem" exact to="/" activeStyle={{ color: '#0098fe' }}>Home</NavLink> </li>
                                <li className="navListItem"> <NavLink className="navItem" exact to="/profile" activeStyle={{ color: '#0098fe' }}>My Profile</NavLink> </li>
                                <li className="navListItem"> <NavLink className="navItem" exact to="/friends" activeStyle={{ color: '#0098fe' }}>My Friends</NavLink> </li>
                                <li className="navListItem"> <NavLink className="navItem" exact to="/notification" activeStyle={{ color: '#0098fe' }}>Notification</NavLink> </li>
                                <li className="navListItem"> <NavLink className="navItem" exact to="/setting" activeStyle={{ color: '#0098fe' }}>Setting</NavLink> </li>
                            </ul>
                            <div className="bottom-content">
                                <hr className="hLine ml-auto mr-auto"/>
                                <Row className="ml-auto mr-auto">
                                    <Col md={3} lg={3}>
                                        <img className="bottom-profile-image" src={profileImage}/>
                                    </Col>
                                    <Col md={7} lg={7}>
                                        <h2 className="profileName mt-1">DurJoy RudDro</h2>
                                        <h4 className="online">Online</h4>
                                    </Col>
                                    <Col md={1} lg={1}>
                                        <FontAwesomeIcon icon={faSortUp} className="bottomAIcon"/>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-wrapper">
                    <div className="right-wrapper-content">
                        <div className="right-component">
                            <div className="rightCom">
                                <h2 className="brandName"><img className="chatLogo mb-1" src={chatTopImage}/>Chat List</h2>
                                <hr className="hLine ml-auto mr-auto"/>
                                <div className="chatList-images">
                                    <img className="chatList-images-buttons" src={profileImage}/>
                                    <img className="chatList-images-buttons" src={profileImage}/>
                                    <img className="chatList-images-buttons" src={profileImage}/>
                                    <img className="chatList-images-buttons" src={profileImage}/>
                                    <img className="chatList-images-buttons" src={profileImage}/>
                                </div>

                                <div className="chatList">
                                    <Row className="chatListRow">
                                        <Col md={3} lg={3}>
                                            <img className="bottom-profile-image" src={profileImage}/>
                                        </Col>
                                        <Col md={9} lg={9}>
                                            <h2 className="profileName">DurJoy RudDro</h2>
                                            <h4 className="msg">Hey there im using instasohor</h4>
                                        </Col>
                                    </Row>
                                    <Row className="chatListRow">
                                        <Col md={3} lg={3}>
                                            <img className="bottom-profile-image" src={profileImage}/>
                                        </Col>
                                        <Col md={9} lg={9}>
                                            <h2 className="profileName">DurJoy RudDro</h2>
                                            <h4 className="msg">Hey there im using instasohor</h4>
                                        </Col>
                                    </Row>
                                    <Row className="chatListRow">
                                        <Col md={3} lg={3}>
                                            <img className="bottom-profile-image" src={profileImage}/>
                                        </Col>
                                        <Col md={9} lg={9}>
                                            <h2 className="profileName">DurJoy RudDro</h2>
                                            <h4 className="msg">Hey there im using instasohor</h4>
                                        </Col>
                                    </Row>
                                    <Row className="chatListRow">
                                        <Col md={3} lg={3}>
                                            <img className="bottom-profile-image" src={profileImage}/>
                                        </Col>
                                        <Col md={9} lg={9}>
                                            <h2 className="profileName">DurJoy RudDro</h2>
                                            <h4 className="msg">Hey there im using iasohor</h4>
                                        </Col>
                                    </Row>
                                    <Row className="chatListRow">
                                        <Col md={3} lg={3}>
                                            <img className="bottom-profile-image" src={profileImage}/>
                                        </Col>
                                        <Col md={9} lg={9}>
                                            <h2 className="profileName">DurJoy RudDro</h2>
                                            <h4 className="msg">Hey there im using instasohsddsfdor</h4>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="newChatBtnDiv">
                                    <p className="btn newChatBtn"><FontAwesomeIcon icon={faPlus} />  New Chat</p>
                                </div>
                            </div>
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
