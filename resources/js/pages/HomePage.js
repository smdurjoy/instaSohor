import React, {Component, Fragment} from 'react';
import {Button, Col, FormControl, Row} from "react-bootstrap";
import MainLayout from "../components/MainLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperclip} from "@fortawesome/free-solid-svg-icons";
import {faComments, faHeart, faImage, faLaugh} from "@fortawesome/free-regular-svg-icons";
import profileImage from "../../images/pro.jpeg";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <MainLayout title="Home">
                    <Row className="homePostRow">
                        <Col md={12} sm={12} lg={12} xs={12}>
                            <Row className="homePost">
                                <Col>
                                    <FormControl as="textarea" rows="1" placeholder="Write a post ..." className="homePostBox" />
                                </Col>
                            </Row>
                            <Row className="HomePostBottom">
                                <Col xs={6} sm={6} lg={6} md={6} className="homePostIcons">
                                    <a href="#"><FontAwesomeIcon icon={faPaperclip} className="homePostIcon"/></a>
                                    <a href="#"><FontAwesomeIcon icon={faImage} className="homePostIcon"/></a>
                                    <a href="#"><FontAwesomeIcon icon={faLaugh} className="homePostIcon"/></a>
                                </Col>
                                <Col xs={6} sm={6} lg={6} md={6}>
                                    <Button className="btn btn-primary homePostBtn">Add Post</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div className="newsFeed">
                        <h5 className="newsFeedTitle">News Feed</h5>
                        <Row className="contentRow">
                            <Col md={12} sm={12} lg={12} xs={12} className="d-flex align-items-center">
                                <img className="chatList-images-buttons" src={profileImage}/>
                                <a href="#" className="postProfileName">Hanna Bekar</a>
                                <p className="homePostTime">12 June at 2.13 am</p>
                            </Col>
                            <Col md={12} sm={12} lg={12} xs={12}>
                                <div className="post">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam debitis earum, enim eum ipsam quibusdam quidem rerum totam voluptatibus? Amet beatae consectetur dolor earum, eum facere fuga officia porro!</p>
                                </div>
                            </Col>
                            <Col md={12} sm={12} lg={12} xs={12}>
                                <div>
                                    <h5 className="postActionCount"> 85 <FontAwesomeIcon icon={faHeart}/> <span className="ml-2">9</span> <FontAwesomeIcon icon={faComments}/> </h5>
                                    <a href="#" className="postActions"> <FontAwesomeIcon icon={faHeart}/> </a> <a href="#" className="ml-2 postActions"> <FontAwesomeIcon icon={faComments}/> </a>
                                </div>
                            </Col>
                        </Row>

                        <Row className="contentRow">
                            <Col md={12} sm={12} lg={12} xs={12} className="d-flex align-items-center">
                                <img className="chatList-images-buttons" src={profileImage}/>
                                <a href="#" className="postProfileName">Clay Jenson</a>
                                <p className="homePostTime">29 May at 10.23 pm</p>
                            </Col>
                            <Col md={12} sm={12} lg={12} xs={12}>
                                <div className="post">
                                    <p>Accusamus aperiam debitis earum, enim eum ipsam quibusdam quidem rerum totam voluptatibus? Amet beatae consectetur dolor earum, eum facere fuga officia porro!</p>
                                </div>
                            </Col>
                            <Col md={12} sm={12} lg={12} xs={12}>
                                <div>
                                    <h5 className="postActionCount"> 22 <FontAwesomeIcon icon={faHeart}/> <span className="ml-2">1</span> <FontAwesomeIcon icon={faComments}/> </h5>
                                    <a href="#" className="postActions"> <FontAwesomeIcon icon={faHeart}/> </a> <a href="#" className="ml-2 postActions"> <FontAwesomeIcon icon={faComments}/> </a>
                                </div>
                            </Col>
                        </Row>

                        <Row className="contentRow">
                            <Col md={12} sm={12} lg={12} xs={12} className="d-flex align-items-center">
                                <img className="chatList-images-buttons" src={profileImage}/>
                                <a href="#" className="postProfileName">Justin Foley</a>
                                <p className="homePostTime">29 May at 10.23 pm</p>
                            </Col>
                            <Col md={12} sm={12} lg={12} xs={12}>
                                <div className="post">
                                    <p>Dolor sit amet. aperiam debitis earum, enim eum ipsam quibusdam quidem rerum totam voluptatibus? Amet beatae consectetur dolor earum, eum facere fuga officia porro! Lorem ipsum </p>
                                </div>
                            </Col>
                            <Col md={12} sm={12} lg={12} xs={12}>
                                <div>
                                    <h5 className="postActionCount"> 21 <FontAwesomeIcon icon={faHeart}/> <span className="ml-2">0</span> <FontAwesomeIcon icon={faComments}/> </h5>
                                    <a href="#" className="postActions"> <FontAwesomeIcon icon={faHeart}/> </a> <a href="#" className="ml-2 postActions"> <FontAwesomeIcon icon={faComments}/> </a>
                                </div>
                            </Col>
                        </Row>

                        <Row className="contentRow">
                            <Col md={12} sm={12} lg={12} xs={12} className="d-flex align-items-center">
                                <img className="chatList-images-buttons" src={profileImage}/>
                                <a href="#" className="postProfileName">Jessica Devis</a>
                                <p className="homePostTime">05 July at 05.18 pm</p>
                            </Col>
                            <Col md={12} sm={12} lg={12} xs={12}>
                                <div className="post">
                                    <p>one of a series of stations for keeping horses for relays the distance between any two such consecutive stations </p>
                                </div>
                            </Col>
                            <Col md={12} sm={12} lg={12} xs={12}>
                                <div>
                                    <h5 className="postActionCount"> 51 <FontAwesomeIcon icon={faHeart}/> <span className="ml-2">2</span> <FontAwesomeIcon icon={faComments}/> </h5>
                                    <a href="#" className="postActions"> <FontAwesomeIcon icon={faHeart}/> </a> <a href="#" className="ml-2 postActions"> <FontAwesomeIcon icon={faComments}/> </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </MainLayout>
            </Fragment>
        );
    }
}

export default HomePage;
