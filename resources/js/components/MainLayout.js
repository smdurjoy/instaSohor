import React, {Component, Fragment} from 'react';
import {Dropdown, Col, FormControl, Row, DropdownButton} from "react-bootstrap";
import siteLogo from '../../images/siteLogo.svg';
import profileImage from '../../images/pro.jpeg';
import chatTopImage from '../../images/chats.svg';
import {NavLink, Link} from "react-router-dom";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Axios from 'axios';

class MainLayout extends Component {
    constructor(props) {
        super();
        this.state = {
            logoutbtnShow: false,
            logoutbtn: 'd-none',
            profileName: ""
        }

        this.logoutBtnShow = this.logoutBtnShow.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        Axios.get('/getUserData').then((response) => {
            if(response.status == 200) {
                this.setState({profileName: response.data[0]['full_name']})
            } else {
                this.setState({profileName: "---"})
            }
        }).catch((error) => {
            this.setState({profileName: "---"})
        })
    }

    logoutBtnShow() {
        if(this.state.logoutbtnShow == false) {
            this.setState({logoutbtnShow: true, logoutbtn: 'logoutBtn'})
        } else {
            this.setState({logoutbtnShow: false, logoutbtn: 'd-none'})
        }
    }

    logout() {
        Axios.get('/logout')
        window.location.href = "/login-register"
    }

    render() {
        return (
            <Fragment>
                <title>{this.props.title}</title>
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
                                    <Col md={6} lg={6}>
                                        <h2 className="profileName mt-1">{this.state.profileName}</h2>
                                        <h4 className="online">Online</h4>
                                    </Col>
                                    <Col md={2} lg={2}>
                                        <Dropdown className="logoutBtn"
                                            key="up"
                                            id="dropdown-button-drop-up"
                                            drop="up"
                                            variant="secondary"
                                            alignRight
                                        >
                                            <Dropdown.Toggle className="proAction">
                                            </Dropdown.Toggle>
                                            
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={this.logout}>Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown> 
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
                                    <p className="btn newChatBtn"> <FontAwesomeIcon icon={faPlus} />  New Chat</p>
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
