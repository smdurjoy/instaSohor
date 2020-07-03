import React, {Component, Fragment} from 'react';
import MainLayout from "../components/MainLayout";
import {Button, Col, Row} from "react-bootstrap";
import profileImage from "../../images/pro.jpeg";
import {Link} from "react-router-dom";

class FriendsPage extends Component {
    render() {
        return (
            <Fragment>
                <MainLayout title="Friends">
                    <div className="topDiv">
                        <Row className="contentRow">
                           <Col md={6}>
                               <h5 className="text-center infoTitle">Your friends</h5>
                               <Row className="chatListRow">
                                   <Col md={3} lg={3}>
                                       <img className="bottom-profile-image" src={profileImage}/>
                                   </Col>
                                   <Col md={6} lg={6}>
                                       <h2 className="profileName"><Link to="/profile" className="profileLinks">Hanna Bekar</Link></h2>
                                       <h4 className="msg">Hey there im using instasohor</h4>
                                   </Col>
                                   <Col md={3} lg={3}>
                                       <Button className="viewProfileBtn">Unfollow</Button>
                                   </Col>
                               </Row>
                               <Row className="chatListRow">
                                   <Col md={3} lg={3}>
                                       <img className="bottom-profile-image" src={profileImage}/>
                                   </Col>
                                   <Col md={6} lg={6}>
                                       <h2 className="profileName"><Link to="/profile" className="profileLinks">Clay Jenson</Link></h2>
                                       <h4 className="msg">Hey there im using instasohor</h4>
                                   </Col>
                                   <Col md={3} lg={3}>
                                       <Button className="viewProfileBtn">Unfollow</Button>
                                   </Col>
                               </Row>
                           </Col>
                            <Col md={6} className="borderCol">
                                <h5 className="text-center infoTitle">People you may know</h5>
                                <Row className="chatListRow">
                                    <Col md={3} lg={3}>
                                        <img className="bottom-profile-image" src={profileImage}/>
                                    </Col>
                                    <Col md={6} lg={6}>
                                        <h2 className="profileName"><Link to="/profile" className="profileLinks">DurJoy RudDro</Link></h2>
                                        <h4 className="msg">Hey there im using instasohor</h4>
                                    </Col>
                                    <Col md={3} lg={3}>
                                        <Button className="viewProfileBtn">Follow</Button>
                                    </Col>
                                </Row>
                           </Col>
                        </Row>
                    </div>
                </MainLayout>
            </Fragment>
        );
    }
}

export default FriendsPage;
