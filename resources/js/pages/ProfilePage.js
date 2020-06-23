import React, {Component, Fragment} from 'react';
import MainLayout from "../components/MainLayout";
import {Button, Col, Container, Dropdown, DropdownButton, FormControl, Row} from "react-bootstrap";
import profileImg from '../../images/pro.jpeg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faComment,
    faComments,
    faHeart,
    faImage,
    faLaugh,
    faThumbsDown,
    faThumbsUp
} from "@fortawesome/free-regular-svg-icons";
import {faCaretDown, faFile, faPaperclip} from "@fortawesome/free-solid-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

class ProfilePage extends Component {
    render() {
        return (
            <Fragment>
                <MainLayout>
                    <Container>
                        <div className="profile">
                            <Row className="profileRow">
                                <Col md={7} lg={7} sm={7} className="d-flex">
                                    <img className="profileImage" src={profileImg}/>
                                    <div className="ownerInfo">
                                        <h1 className="profileTopName mt-1">Tom Benton</h1>
                                        <h5 className="bio">this is bio</h5>
                                    </div>
                                </Col>
                                <Col md={5} lg={5} sm={5}>
                                    <div className="ownerOtherInfo">
                                        {/*<div className="dropdownDiv">*/}
                                        {/*    <Dropdown>*/}
                                        {/*        <Dropdown.Toggle id="dropdown-basic" className="dropdownBtn" alignLeft>*/}
                                        {/*        </Dropdown.Toggle>*/}
                                        {/*        <Dropdown.Menu className="drop-menu">*/}
                                        {/*            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>*/}
                                        {/*            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
                                        {/*            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                                        {/*        </Dropdown.Menu>*/}
                                        {/*    </Dropdown>*/}
                                        {/*</div>*/}
                                        <div className="followDiv">
                                            <h5 className="followInfo"><span>20</span> Followers <br/> <span>30</span> Following</h5>
                                        </div>
                                        <div className="followSocialDiv">
                                            <FontAwesomeIcon icon={faFacebook} className="fIcon"/>
                                            <FontAwesomeIcon icon={faFacebook} className="fIcon"/>
                                            <FontAwesomeIcon icon={faFacebook} className="fIcon"/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="profileRow">
                                <Col md={12} sm={12} lg={12} xs={12}>
                                    <Row>
                                        <Col>
                                            <FormControl as="textarea" rows="3" placeholder="Write a post ..." className="postBox" />
                                        </Col>
                                    </Row>
                                    <Row className="postBottom">
                                        <Col xs={6} sm={6} lg={6} md={6} className="postIcons">
                                            <a href="#"><FontAwesomeIcon icon={faPaperclip} className="postIcon"/></a>
                                            <a href="#"><FontAwesomeIcon icon={faImage} className="postIcon"/></a>
                                            <a href="#"><FontAwesomeIcon icon={faLaugh} className="postIcon"/></a>
                                        </Col>
                                        <Col xs={6} sm={6} lg={6} md={6}>
                                            <Button className="btn btn-primary postBtn">Add Post</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </MainLayout>
            </Fragment>
        );
    }
}

export default ProfilePage;
