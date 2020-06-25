import React, {Component, Fragment} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import MainLayout from "../components/MainLayout";
import Axios from "axios";

class SettingPage extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            user_name: "",
            full_name: "",
            email: "",
            bio: "",
            address: "",
            education: "",
            work: "",
        }
    }

    componentDidMount() {
        Axios.get('/getUserData').then(response => {
            if(response.status == 200) {
                document.getElementById('fullName').onchange(response.data[0]['full_name']);
                this.setState({
                    id: response.data[0]['id'],
                    user_name: response.data[0]['user_name'],
                    full_name: response.data[0]['full_name'],
                    email: response.data[0]['email'],
                    bio: response.data[0]['bio'],
                    address: response.data[0]['address'],
                    education: response.data[0]['education'],
                    work: response.data[0]['work']
                })
            } else {
                this.setState({
                    id: "",
                    user_name: "",
                    full_name: "",
                    email: "",
                    bio: "",
                    address: "",
                    education: "",
                    work: ""
                })
            }
        }).catch(error => {
            this.setState({
                id: "",
                user_name: "",
                full_name: "",
                email: "",
                bio: "",
                address: "",
                education: "",
                work: ""
            })
        })
    }

    setInputValue() {
    }

    render() {
        return (
            <Fragment>
                <MainLayout>
                    <div className="topDiv">
                        <Row className="contentRow">
                            <Col md={6}>
                                <h5 className="text-center infoTitle mb-3">Update Profile Details</h5>
                                <Form.Group controlId="fullName">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="email" placeholder="Enter name" className="formInputName"/>
                                </Form.Group>
                                <Form.Group controlId="userName">
                                    <Form.Label>Your UserName</Form.Label>
                                    <Form.Control type="text" placeholder="Password" className="formInput" value={this.state.user_name}/>
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="text" placeholder="Password" className="formInput"/>
                                </Form.Group>
                                <Form.Group controlId="address">
                                    <Form.Label>Your Address</Form.Label>
                                    <Form.Control type="text" placeholder="Password" className="formInput"/>
                                </Form.Group>
                                <Form.Group controlId="education">
                                    <Form.Label>Your Education</Form.Label>
                                    <Form.Control type="text" placeholder="Password" className="formInput"/>
                                </Form.Group>
                                <Form.Group controlId="work">
                                    <Form.Label>Your Work</Form.Label>
                                    <Form.Control type="text" placeholder="Password" className="formInput"/>
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
