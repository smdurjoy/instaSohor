import React, {Component, Fragment} from 'react';
import MainLayout from "../components/MainLayout";
import {Button, Col, Container, Dropdown, DropdownButton, FormControl, Row} from "react-bootstrap";
import profileImg from '../../images/pro.jpeg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faComments,
    faHeart,
    faImage,
    faLaugh,
} from "@fortawesome/free-regular-svg-icons";
import {
    faBriefcase,
    faClock, faEllipsisV,
    faGraduationCap,
    faMapMarkerAlt,
    faPaperclip
} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import profileImage from "../../images/pro.jpeg";

class ProfilePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <MainLayout>
                    <Container>
                        <div className="profile">
                            <Row className="contentRow">
                                <Col md={7} lg={7} sm={7} className="d-flex">
                                    <img className="profileImage" src={profileImg}/>
                                    <div className="ownerInfo">
                                        <h1 className="profileTopName mt-1">DurJoy RudDro</h1>
                                        <h5 className="bio">this is bio</h5>
                                    </div>
                                </Col>
                                <Col md={5} lg={5} sm={5}>
                                    <div className="ownerOtherInfo">
                                        <div className="d-flex">
                                            <div className="followDiv">
                                                <h5 className="followInfo">0 Followers <br/>0 Following</h5>
                                            </div>
                                            <div className="profileActionBtn">
                                                <FontAwesomeIcon icon={faEllipsisV} className="profileAIcon"/>
                                            </div>
                                        </div>
                                        <div className="followSocialDiv">
                                            <FontAwesomeIcon icon={faFacebook} className="fIcon"/>
                                            <FontAwesomeIcon icon={faInstagram} className="fIcon"/>
                                            <FontAwesomeIcon icon={faTwitter} className="fIcon"/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="contentRow">
                                <Col md={6} lg={6} sm={6} xs={6}>
                                    <p> <FontAwesomeIcon icon={faMapMarkerAlt} className="fIcon mt-3"/> From Rangpur City </p>
                                    <p> <FontAwesomeIcon icon={faBriefcase} className="fIcon"/> Works at WeDevs </p>
                                </Col>
                                <Col md={6} lg={6} sm={6} xs={6}>
                                    <div className="float-right">
                                    <p> <FontAwesomeIcon icon={faGraduationCap} className="fIcon mt-3"/> Studies at Daffodil International University </p>
                                    <p> <FontAwesomeIcon icon={faClock} className="fIcon"/> Joined June 2020 </p>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="contentRow">
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
                            <h5 className="newsFeedTitle mt-4">Posts</h5>
                            <Row className="contentRow">
                                <Col md={12} sm={12} lg={12} xs={12} className="d-flex align-items-center">
                                    <img className="chatList-images-buttons" src={profileImage}/>
                                    <a href="#" className="postProfileName">DurJoy RudDro</a>
                                    <p className="postTime">24 June at 11.13 am</p>
                                </Col>
                                <Col md={12} sm={12} lg={12} xs={12}>
                                    <div className="post">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam debitis earum, enim eum ipsam quibusdam quidem rerum totam voluptatibus? Amet beatae consectetur dolor earum, eum facere fuga officia porro!</p>
                                    </div>
                                </Col>
                                <Col md={12} sm={12} lg={12} xs={12}>
                                    <div>
                                        <h5 className="postActionCount"> 19 <FontAwesomeIcon icon={faHeart}/> <span className="ml-2">5</span> <FontAwesomeIcon icon={faComments}/> </h5>
                                        <a href="#" className="postActions"> <FontAwesomeIcon icon={faHeart}/> </a> <a href="#" className="ml-2 postActions"> <FontAwesomeIcon icon={faComments}/> </a>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="contentRow">
                                <Col md={12} sm={12} lg={12} xs={12} className="d-flex align-items-center">
                                    <img className="chatList-images-buttons" src={profileImage}/>
                                    <a href="#" className="postProfileName">DurJoy RudDro</a>
                                    <p className="postTime">24 June at 11.13 am</p>
                                </Col>
                                <Col md={12} sm={12} lg={12} xs={12}>
                                    <div className="post">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam debitis earum, enim eum ipsam quibusdam quidem rerum totam voluptatibus? Amet beatae consectetur dolor earum, eum facere fuga officia porro!</p>
                                    </div>
                                </Col>
                                <Col md={12} sm={12} lg={12} xs={12}>
                                    <div>
                                        <h5 className="postActionCount"> 19 <FontAwesomeIcon icon={faHeart}/> <span className="ml-2">5</span> <FontAwesomeIcon icon={faComments}/> </h5>
                                        <a href="#" className="postActions"> <FontAwesomeIcon icon={faHeart}/> </a> <a href="#" className="ml-2 postActions"> <FontAwesomeIcon icon={faComments}/> </a>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="contentRow">
                                <Col md={12} sm={12} lg={12} xs={12} className="d-flex align-items-center">
                                    <img className="chatList-images-buttons" src={profileImage}/>
                                    <a href="#" className="postProfileName">DurJoy RudDro</a>
                                    <p className="postTime">24 June at 11.13 am</p>
                                </Col>
                                <Col md={12} sm={12} lg={12} xs={12}>
                                    <div className="post">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam debitis earum, enim eum ipsam quibusdam quidem rerum totam voluptatibus? Amet beatae consectetur dolor earum, eum facere fuga officia porro!</p>
                                    </div>
                                </Col>
                                <Col md={12} sm={12} lg={12} xs={12}>
                                    <div>
                                        <h5 className="postActionCount"> 19 <FontAwesomeIcon icon={faHeart}/> <span className="ml-2">5</span> <FontAwesomeIcon icon={faComments}/> </h5>
                                        <a href="#" className="postActions"> <FontAwesomeIcon icon={faHeart}/> </a> <a href="#" className="ml-2 postActions"> <FontAwesomeIcon icon={faComments}/> </a>
                                    </div>
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
