import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import MainLayout from "../components/MainLayout";
import profileImage from "../../images/pro.jpeg";
import {Link} from "react-router-dom";

class NotificationPage extends Component {
    render() {
        return (
            <Fragment>
                <MainLayout>
                    <div className="topDiv">
                        <Row className="contentRow">
                            <h5 className="ml-auto mr-auto notificationTitle">Notifications</h5>
                            <Row className="notificationBox ml-auto mr-auto mt-2">
                               <Col md={12} lg={12} sm={12} className="d-flex align-items-center">
                                   <img className="bottom-profile-image" src={profileImage}/>
                                   <h6 className="notificationMsg"><Link to="/profile" className="profileLinks">DurJoy RudDro</Link> likes your profile picture</h6>
                                   <p className="ml-auto">10 minutes ago</p>
                               </Col>
                            </Row>
                            <Row className="notificationBox ml-auto mr-auto mt-2">
                               <Col md={12} lg={12} sm={12} className="d-flex align-items-center">
                                   <img className="bottom-profile-image" src={profileImage}/>
                                   <h6 className="notificationMsg"><Link to="/profile" className="profileLinks">Clay Jenson</Link> likes your post Hello friends</h6>
                                   <p className="ml-auto">5 minutes ago</p>
                               </Col>
                            </Row>
                        </Row>
                    </div>
                </MainLayout>
            </Fragment>
        );
    }
}

export default NotificationPage;
