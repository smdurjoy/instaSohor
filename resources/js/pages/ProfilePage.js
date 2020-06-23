import React, {Component, Fragment} from 'react';
import MainLayout from "../components/MainLayout";
import {Col, Container, Row} from "react-bootstrap";
import profileImg from '../../images/pro.jpeg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faComments, faHeart, faThumbsDown, faThumbsUp} from "@fortawesome/free-regular-svg-icons";

class ProfilePage extends Component {
    render() {
        return (
            <Fragment>
                <MainLayout>
                    <Container>
                        <div className="profile">
                            <Row className="profileTopRow">
                                <Col md={12} lg={12} sm={12} className="text-center">
                                    <img className="profileImage" src={profileImg}/>
                                    <h1 className="titleText mt-1">Jaime Simmons</h1>
                                    <input className="form-control bioInput" value="this is bio"/>
                                </Col>
                            </Row>
                            <Row className="profileCountRow">
                                <Col md={4} lg={4} sm={4} className="text-center">
                                    <h2 className="countNumber">43</h2>
                                    <p className="countText">Posts</p>
                                </Col>
                                <Col md={4} lg={4} sm={4} className="text-center">
                                    <h2 className="countNumber">67</h2>
                                    <p className="countText">Followers</p>
                                </Col>
                                <Col md={4} lg={4} sm={4} className="text-center">
                                    <h2 className="countNumber">12</h2>
                                    <p className="countText">Following</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>

                                </Col>
                            </Row>

                            <Row>
                                <Col md={12} lg={12} sm={12} className="postCol">
                                    <input className="form-control postInput" placeholder="Post something ..."/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12} lg={12} sm={12}>
                                    <div  className="postRow">
                                        <h4>Jaime Simmons</h4>
                                    </div>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <FontAwesomeIcon icon={faThumbsDown} />
                                    <FontAwesomeIcon icon={faComment} />
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
