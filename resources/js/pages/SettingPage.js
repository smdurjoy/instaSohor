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
            fIcon: faEyeSlash,
            crntPassHidden: true,
            newPassHidden: true,
            confPassHidden: true,
            validationMsg: 'd-none',
            updateBtnText: 'Update',
            msgRow: 'd-none'
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
                    let msg = document.getElementById('msg');
                    passUpdateBtn.disabled = false;
                    msg.innerText = "Password has been updated successfully !";
                    this.setState({updateMsg: 'text-center infoTitle mb-3 mt-2', updateBtnText: 'Update', msgRow: "alertMessage"})
                    setTimeout(function(){ 
                        this.setState({msgRow: 'd-none'}); 
                    }.bind(this), 4000);

                } else if(response.data == 2){
                    passUpdateBtn.disabled = false;
                    this.setState({updateMsg: 'text-center infoTitle mb-3 mt-2', updateBtnText: 'Update', msgRow: "alertMessage"})
                    msg.innerText = "Your current password didn't match !";
                    msg.style.background = '#FFD2D2';
                    msg.style.color = '#D8000C';
                    setTimeout(function(){ 
                        this.setState({msgRow: 'd-none'});
                        msg.style.background = '#DFF2BF';
                        msg.style.color = '#4F8A10';
                    }.bind(this), 4000);
                } else {
                    passUpdateBtn.disabled = false;
                    this.setState({updateMsg: 'text-center infoTitle mb-3 mt-2', updateBtnText: 'Update', msgRow: "alertMessage"})
                    msg.innerText = "Something Went Wrong !";
                    msg.style.background = '#FFD2D2';
                    msg.style.color = '#D8000C';
                    setTimeout(function(){ 
                        this.setState({msgRow: 'd-none'});
                        msg.style.background = '#DFF2BF';
                        msg.style.color = '#4F8A10';
                    }.bind(this), 4000);
                }
            }).catch((error) => {
                passUpdateBtn.disabled = false;
                this.setState({updateMsg: 'text-center infoTitle mb-3 mt-2', updateBtnText: 'Update', msgRow: "alertMessage"})
                msg.innerText = "Something Went Wrong !";
                msg.style.background = '#FFD2D2';
                msg.style.color = '#D8000C';
                setTimeout(function(){ 
                    this.setState({msgRow: 'd-none'});
                    msg.style.background = '#DFF2BF';
                    msg.style.color = '#4F8A10';
                }.bind(this), 4000);
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
