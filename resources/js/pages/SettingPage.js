import React, {Component, Fragment} from 'react';
import {Button, Col, Form, Row, Fade} from "react-bootstrap";
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
            newPassfIcon: faEyeSlash,
            crntPassfIcon: faEyeSlash,
            confPassfIcon: faEyeSlash,
            crntPassHidden: true,
            newPassHidden: true,
            confPassHidden: true,
            validationMsg: 'd-none',
            updateBtnText: 'Update',
            msgRow: 'd-none'
        }

        this.updatePass = this.updatePass.bind(this);
        this.updateChanges = this.updateChanges.bind(this);
        this.passHideShow = this.passHideShow.bind(this);
        this.newPass = this.newPass.bind(this);
        this.confPass = this.confPass.bind(this);
        this.successMsg = this.successMsg.bind(this);
        this.errorMsg = this.errorMsg.bind(this);
    }

    componentDidMount() {
        Axios.get('/getUserData').then(response => {
            if(response.status == 200) {
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

    successMsg(updateMsg) {
        let msg = document.getElementById('msg');
        msg.innerText = updateMsg;
        this.setState({updateBtnText: 'Update', msgRow: "alertMessage"})
        setTimeout(function(){ 
            this.setState({msgRow: 'd-none'}); 
        }.bind(this), 4000);
    }

    errorMsg(updateMsg) {
        let msg = document.getElementById('msg');
        msg.innerText = updateMsg;
        msg.style.background = '#FFD2D2';
        msg.style.color = '#D8000C';
        this.setState({updateBtnText: 'Update', msgRow: "alertMessage"})
        setTimeout(function(){ 
            this.setState({msgRow: 'd-none'}); 
            msg.style.background = '#DFF2BF';
            msg.style.color = '#4F8A10';
        }.bind(this), 4000);
    }

    updateChanges() {
        let id = document.getElementById('submitBtn').getAttribute('userid');
        let fullName = document.getElementById('fullName').value;
        let userName = document.getElementById('userName').value;
        let email = document.getElementById('email').value;
        let address = document.getElementById('address').value;
        let education = document.getElementById('education').value;
        let work = document.getElementById('work').value;
        let submitBtn = document.getElementById('submitBtn');
        let userNameHelp = document.getElementById('userNameHelp');
        let emailHelp = document.getElementById('emailHelp');

        Axios.post('/updateUserData', {
            id: id,
            full_name: fullName,
            user_name: userName,
            email: email,
            address: address,
            education: education,
            work: work,
        }).then((response) => {
            submitBtn.disabled = true;
            submitBtn.innerText = 'Updating ...';
            if(response.status == 200 && response.data == 1) {
                submitBtn.disabled = false;
                submitBtn.innerText = 'Update';
                this.successMsg('Your changes has been updated successfully !')
            } 
            else if(response.data == 2) {
                submitBtn.disabled = false;
                submitBtn.innerText = 'Update';
                this.setState({validationMsg: 'validationMsgReact'});
                userNameHelp.innerText = "This username is already taken !";
            }
            else if(response.data == 3) {
                submitBtn.disabled = false;
                submitBtn.innerText = 'Update';
                this.setState({validationMsg: 'validationMsgReact'});
                emailHelp.innerText = "This email is already taken !";
            }
            else {
                submitBtn.disabled = false;
                submitBtn.innerText = 'Update';
                this.errorMsg('Update Failed !');
            }
        }).catch((error) => {
            submitBtn.disabled = false;
            submitBtn.innerText = 'Update';
            this.errorMsg('Update Failed !');
        })
    }

    updatePass() {
        const id = document.getElementById('submitBtn').getAttribute('userid');
        let crntPass = document.getElementById('crntPass').value;
        let newPass = document.getElementById('newPass').value;
        let confNewPass = document.getElementById('confNewPass').value;
        let crntPassHelp = document.getElementById('crntPassHelp');
        let newPassHelp = document.getElementById('newPassHelp');
        let confPassHelp = document.getElementById('confPassHelp');
        let passUpdateBtn = document.getElementById('passUpdateBtn');

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
                this.setState({updateBtnText: "Updating ..."});
                passUpdateBtn.disabled = true;
                if(response.status == 200 && response.data == 1) {
                    document.getElementById('crntPass').value = "";
                    document.getElementById('newPass').value = "";
                    document.getElementById('confNewPass').value = "";
                    passUpdateBtn.disabled = false;
                    this.successMsg("Password has been updated successfully !");

                } else if(response.data == 2){
                    passUpdateBtn.disabled = false;
                    let msg = "Your current password didn't match !";
                    this.errorMsg(msg)
                } else {
                    passUpdateBtn.disabled = false;
                    this.errorMsg("Something Went Wrong !")
                }
            }).catch((error) => {
                passUpdateBtn.disabled = false;
                this.errorMsg("Something Went Wrong !")
            })
        }
    }

    passHideShow() {
        if(this.state.crntPassHidden == true) {
            this.setState({ crntPassHidden: false, crntPassfIcon: faEye });
        } else {
            this.setState({ crntPassHidden: true, crntPassfIcon: faEyeSlash });
        }
    }

    newPass() {
        if(this.state.newPassHidden == true) {
            this.setState({ newPassHidden: false, newPassfIcon: faEye });
        } else {
            this.setState({ newPassHidden: true, newPassfIcon: faEyeSlash });
        }
    }

    confPass() {
        if(this.state.confPassHidden == true) {
            this.setState({ confPassHidden: false, confPassfIcon: faEye });
        } else {
            this.setState({ confPassHidden: true, confPassfIcon: faEyeSlash });
        }
    }

    render() {
        return (
            <Fragment>
                <MainLayout title="Setting">
                    <p className={this.state.msgRow} id="msg"></p>
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
                                    <Form.Control type="text" placeholder="Username" className="formInput" id="userName" value={this.state.user_name} onChange={e => this.setState({ user_name: e.target.value })}/>
                                    <Form.Text className={this.state.validationMsg} id="userNameHelp"></Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="text" placeholder="Email" className="formInput" id="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
                                    <Form.Text className={this.state.validationMsg} id="emailHelp"></Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Your Address</Form.Label>
                                    <Form.Control type="text" placeholder="Address" className="formInput" id="address" value={this.state.address} onChange={e => this.setState({ address: e.target.value })}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Your Education</Form.Label>
                                    <Form.Control type="text" placeholder="Education" className="formInput" id="education" value={this.state.education} onChange={e => this.setState({ education: e.target.value })}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Your Work</Form.Label>
                                    <Form.Control type="text" placeholder="Work" className="formInput" id="work" value={this.state.work} onChange={e => this.setState({ work: e.target.value })}/>
                                </Form.Group>
                                <Button variant="primary" id="submitBtn" className="formBtn" onClick={this.updateChanges} userid={this.state.id}>
                                    Update
                                </Button>
                            </Col>

                            <Col md={6}>
                                <h5 className="text-center infoTitle mb-3">Change Password</h5>
                                <Form.Group>
                                    <div className="inputDiv">
                                        <Form.Control type={this.state.crntPassHidden ? "password" : "text"} id="crntPass" placeholder="Enter Current Password" className="formInput"/>
                                        <FontAwesomeIcon icon={this.state.crntPassfIcon} className="passIcon" onClick={this.passHideShow}/>
                                    </div>
                                    <Form.Text className={this.state.validationMsg} id="crntPassHelp"></Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <div className="inputDiv">
                                        <Form.Control type={this.state.newPassHidden ? "password" : "text"} id="newPass" placeholder="Enter New Password" className="formInput"/>
                                        <FontAwesomeIcon icon={this.state.newPassfIcon} className="passIcon" onClick={this.newPass}/>                
                                    </div>
                                    <Form.Text className={this.state.validationMsg} id="newPassHelp"></Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <div className="inputDiv">
                                        <Form.Control type={this.state.confPassHidden ? "password" : "text"} id="confNewPass" placeholder="Enter Confirm New Password" className="formInput"/>
                                        <FontAwesomeIcon icon={this.state.confPassfIcon} className="passIcon" onClick={this.confPass}/>                
                                    </div>
                                    <Form.Text className={this.state.validationMsg} id="confPassHelp"></Form.Text>
                                </Form.Group>
                                <Button variant="primary" className="formBtn" onClick={this.updatePass} id="passUpdateBtn">
                                    {this.state.updateBtnText}
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
