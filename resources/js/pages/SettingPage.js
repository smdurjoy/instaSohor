import React, {Component, Fragment} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import MainLayout from "../components/MainLayout";
import Axios from "axios";
import Swal from "sweetalert2";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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
            fIcon: faEyeSlash,
            crntPassHidden: true,
            newPassHidden: true,
            confPassHidden: true,
            validationMsg: 'd-none',
            updateMsg: 'd-none'
        }

        this.updatePass = this.updatePass.bind(this);
        this.passHideShow = this.passHideShow.bind(this);
        this.newPass = this.newPass.bind(this);
        this.confPass = this.confPass.bind(this);
    }

    componentDidMount() {
        Axios.get('/getUserData').then(response => {
            if(response.status == 200) {
                // this.setInputValue();
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

    updateChanges() {
        let id = document.getElementById('submitBtn').getAttribute('userid');
        let fullName = document.getElementById('fullName').value;
        let userName = document.getElementById('userName').value;
        let email = document.getElementById('email').value;
        let address = document.getElementById('address').value;
        let education = document.getElementById('education').value;
        let work = document.getElementById('work').value;

        Axios.post('/updateUserData', {
            id: id,
            full_name: fullName,
            user_name: userName,
            email: email,
            address: address,
            education: education,
            work: work,
        }).then((response) => {
            if(response.status == 200 && response.data == 1) {
                Swal.fire('Update Success !')
            } else {
                Swal.fire('Update Failed !')
            }
        }).catch((error) => {
            Swal.fire('Update Failed !')
        })
    }

    updatePass() {
        const id = document.getElementById('submitBtn').getAttribute('userid');
        const crntPass = document.getElementById('crntPass').value;
        const newPass = document.getElementById('newPass').value;
        const confNewPass = document.getElementById('confNewPass').value;
        let crntPassHelp = document.getElementById('crntPassHelp');
        let newPassHelp = document.getElementById('newPassHelp');
        let confPassHelp = document.getElementById('confPassHelp');
        let uMsg = document.getElementById('updateMsg');

        if(crntPass == "") {
            this.setState({validationMsg: 'validationMsgReact'});
            crntPassHelp.innerText = "Please type your current password";
        }
        else if(newPass == "") {
            this.setState({validationMsg: 'validationMsgReact'});
            newPassHelp.innerText = "Please type new password";
        }
        else if(confNewPass == "") {
            this.setState({validationMsg: 'validationMsgReact'});
            confPassHelp.innerText = "Please confirm your password";
        }
        else if(newPass !== confNewPass) {
            this.setState({validationMsg: 'validationMsgReact'});
            confPassHelp.innerText = "Password didn't match !";
        } 
        else {
            this.setState({validationMsg: 'd-none'});
            Axios.post('/updatePass', {
                id: id,
                crntPass: crntPass,
                newPass: newPass
            }).then((response) => {
                if(response.status == 200 && response.data == 1) {
                    this.setState({updateMsg: 'text-center infoTitle mb-3 mt-2'})
                    uMsg.innerText = "Password has been updated !";
                    setTimeout(function(){ 
                        this.setState({updateMsg: 'd-none'})
                    }.bind(this), 3000);

                } else if(response.data == 2){
                    this.setState({updateMsg: 'text-center infoTitle mb-3 mt-2'})
                    uMsg.innerText = "Your current password didn't match !";
                    uMsg.style.background = 'red';
                    uMsg.style.color = 'white';
                    setTimeout(function(){ 
                        this.setState({updateMsg: 'd-none'});
                    }.bind(this), 3000);
                } else {
                    Swal.fire('Something Went Wrong !')
                }
            }).catch((error) => {
                Swal.fire('Something Went Wrong !')
            })
        }
    }

    passHideShow() {
        this.setState({ crntPassHidden: !this.state.crntPassHidden });
    }

    newPass() {
        this.setState({ newPassHidden: !this.state.newPassHidden });
    }

    confPass() {
        this.setState({ confPassHidden: !this.state.confPassHidden });
    }

    render() {
        return (
            <Fragment>
                <MainLayout title="Setting">
                    <div className="topDiv">
                        <Row className="contentRow">
                            <Col md={6}>
                                <h5 className="text-center infoTitle mb-3">Update Profile Details</h5>
                                <Form.Group>
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="email" placeholder="Enter name" className="formInput" id="fullName" value={this.state.full_name} onChange={e => this.setState({ full_name: e.target.value })}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Your UserName</Form.Label>
                                    <Form.Control type="text" placeholder="Password" className="formInput" id="userName" value={this.state.user_name} onChange={e => this.setState({ user_name: e.target.value })}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="text" placeholder="Password" className="formInput" id="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Your Address</Form.Label>
                                    <Form.Control type="text" placeholder="Password" className="formInput" id="address" value={this.state.address} onChange={e => this.setState({ address: e.target.value })}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Your Education</Form.Label>
                                    <Form.Control type="text" placeholder="Password" className="formInput" id="education" value={this.state.education} onChange={e => this.setState({ education: e.target.value })}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Your Work</Form.Label>
                                    <Form.Control type="text" placeholder="Password" className="formInput" id="work" value={this.state.work} onChange={e => this.setState({ work: e.target.value })}/>
                                </Form.Group>
                                <Button variant="primary" id="submitBtn" className="formBtn" onClick={this.updateChanges} userid={this.state.id}>
                                    Update
                                </Button>
                            </Col>

                            <Col md={6}>
                                <h5 className="text-center infoTitle mb-3">Change Password</h5>
                                <h5 className={this.state.updateMsg} id="updateMsg"></h5>
                                <Form.Group>
                                    <div className="inputDiv">
                                        <Form.Control type={this.state.crntPassHidden ? "password" : "text"} id="crntPass" placeholder="Enter Current Password" className="formInput"/>
                                        <FontAwesomeIcon icon={this.state.fIcon} className="passIcon" onClick={this.passHideShow}/>
                                    </div>
                                    <Form.Text className={this.state.validationMsg} id="crntPassHelp"></Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <div className="inputDiv">
                                        <Form.Control type={this.state.newPassHidden ? "password" : "text"} id="newPass" placeholder="Enter New Password" className="formInput"/>
                                        <FontAwesomeIcon icon={this.state.fIcon} className="passIcon" onClick={this.newPass}/>                
                                    </div>
                                    <Form.Text className={this.state.validationMsg} id="newPassHelp"></Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <div className="inputDiv">
                                        <Form.Control type={this.state.confPassHidden ? "password" : "text"} id="confNewPass" placeholder="Enter Confirm New Password" className="formInput"/>
                                        <FontAwesomeIcon icon={this.state.fIcon} className="passIcon" onClick={this.confPass}/>                
                                    </div>
                                    <Form.Text className={this.state.validationMsg} id="confPassHelp"></Form.Text>
                                </Form.Group>
                                <Button variant="primary" className="formBtn" onClick={this.updatePass}>
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
