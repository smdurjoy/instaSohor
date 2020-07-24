import React, {Component, Fragment} from 'react';
import {Button, Col, Dropdown, Form, FormControl, Row} from "react-bootstrap";
import profileImg from "../../images/pro.jpeg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faBriefcase, faGraduationCap, faMapMarkerAlt, faPaperclip} from "@fortawesome/free-solid-svg-icons";
import {faClock, faImage, faLaugh} from "@fortawesome/free-regular-svg-icons";

class ProfileTop extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <Fragment>
                <Row className="contentRow">
                    <Col md={7} lg={7} sm={7} className="d-flex">
                        <img className="profileImage" src={profileImg}/>
                        <div className="ownerInfo">
                            <h1 className="profileTopName mt-1">{this.props.fullName}</h1>
                            <h5 className="bio">{this.props.bio}</h5>
                        </div>
                    </Col>
                    <Col md={5} lg={5} sm={5}>
                        <Dropdown className="topActionBtn">
                            <Dropdown.Toggle className="proAction">
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.props.updateBioMethod}>Update Bio</Dropdown.Item>
                                <Dropdown.Item>Add Social Media</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="ownerOtherInfo">
                            <div className="d-flex">
                                <div className="followDiv">
                                    <h5 className="followInfo">{this.props.followers} Followers <br/>{this.props.following} Following</h5>
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

                <Row className={this.props.rowClass}>
                    <Col md={6}>
                        <Form.Control type="text" placeholder="Enter Bio .." className="formInput" id="bio" value={this.props.bio} onChange={this.props.changeBio}/>
                    </Col>
                    <Col md={6}>
                        <Button variant="primary" className="formBtn mt-1" onClick={this.props.updateBio}>
                            Update
                        </Button>
                        <Button variant="primary" className="formBtn mt-1 ml-1" onClick={this.props.onCancel}>
                            Cancel
                        </Button>
                    </Col>
                </Row>

                <Row className="contentRow">
                    <Col md={6} lg={6} sm={6} xs={6}>
                        <p> <FontAwesomeIcon icon={faMapMarkerAlt} className="fIcon mt-3"/> From {this.props.address}</p>
                        <p> <FontAwesomeIcon icon={faBriefcase} className="fIcon"/> Works at {this.props.work}</p>
                    </Col>
                    <Col md={6} lg={6} sm={6} xs={6}>
                        <div className="float-right">
                            <p> <FontAwesomeIcon icon={faGraduationCap} className="fIcon mt-3"/> Studies at {this.props.education}</p>
                            <p> <FontAwesomeIcon icon={faClock} className="fIcon"/> Joined June 2020 </p>
                        </div>
                    </Col>
                </Row>

                <Row className="contentRow">
                    <Col md={12} sm={12} lg={12} xs={12}>
                        <Row>
                            <Col>
                                <FormControl as="textarea" id="postArea" rows="3" placeholder="Write a post ..." className="postBox" />
                            </Col>
                        </Row>
                        <Row className="postBottom">
                            <Col xs={6} sm={6} lg={6} md={6} className="postIcons">
                                <a href="#"><FontAwesomeIcon icon={faPaperclip} className="postIcon"/></a>
                                <a href="#"><FontAwesomeIcon icon={faImage} className="postIcon"/></a>
                                <a href="#"><FontAwesomeIcon icon={faLaugh} className="postIcon"/></a>
                            </Col>
                            <Col xs={6} sm={6} lg={6} md={6}>
                                <Button className="btn btn-primary postButton" id="postBtn" data-id={this.props.id} onClick={this.props.postFunction}>Add Post</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default ProfileTop;
