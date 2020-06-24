import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import MainLayout from "../components/MainLayout";

class SettingPage extends Component {
    render() {
        return (
            <Fragment>
                <MainLayout>
                    <div className="topDiv">
                        <Row className="contentRow">
                            <Col md={6}>
                                <h5 className="text-center infoTitle mb-3">Update Profile Details</h5>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" className="formInput" value="DurJoy RudDro"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Your UserName</Form.Label>
                                    <Form.Control type="text" placeholder="Password" className="formInput" value="smdurjoy"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Your Address</Form.Label>
                                    <Form.Control type="text" placeholder="Password" className="formInput" value="Rangpur City"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Your Education</Form.Label>
                                    <Form.Control type="text" placeholder="Password" className="formInput" value="Daffodil International University"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Your Work</Form.Label>
                                    <Form.Control type="text" placeholder="Password" className="formInput" value="WeDevs"/>
                                </Form.Group>
                                <Button variant="primary" className="formBtn">
                                    Update
                                </Button>
                            </Col>
                            <Col md={6}>
                                <h5 className="text-center infoTitle mb-3">Change Password</h5>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="password" placeholder="Enter Current Password" className="formInput"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Enter New Password" className="formInput"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Enter Confirm New Password" className="formInput"/>
                                </Form.Group>
                                <Button variant="primary" className="formBtn">
                                    Update
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </MainLayout>
            </Fragment>
        );
    }
}

export default SettingPage;
