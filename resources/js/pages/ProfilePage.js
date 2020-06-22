import React, {Component, Fragment} from 'react';
import MainLayout from "../components/MainLayout";
import {Card, Col, Container, Row} from "react-bootstrap";
import profileImg from '../../images/pro.jpeg';

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
                                    <h2 className="titleText">43</h2>
                                    <p className="desText">Posts</p>
                                </Col>
                                <Col md={4} lg={4} sm={4} className="text-center">
                                    <h2 className="titleText">67</h2>
                                    <p className="desText">Followers</p>
                                </Col>
                                <Col md={4} lg={4} sm={4} className="text-center">
                                    <h2 className="titleText">12</h2>
                                    <p className="desText">Following</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>

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
