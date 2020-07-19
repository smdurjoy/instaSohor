import React, {Component, Fragment} from 'react';
import MainLayout from '../components/MainLayout';
import { Container, Row, Col } from 'react-bootstrap';
import profileImg from "../../images/pro.jpeg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faBriefcase, faGraduationCap, faMapMarkerAlt, faPaperclip} from "@fortawesome/free-solid-svg-icons";
import {faClock, faComments, faHeart} from "@fortawesome/free-regular-svg-icons";
import Axios from 'axios';

class UserProfilePage extends Component {
    constructor({match}) {
        super();
        this.state = {
            randomUser: match.params.randomUserName,
            id: "",
            full_name: "",
            bio: "",
            address: "",
            work: "",
            education: "",
            posts: "",
            followUserId: "",
            followBtnText: "",
            is_follow: '',
            followers: "",
            follow_btn_text: "",
            msgRow: 'd-none',
        }

        this.isFollow = this.isFollow.bind(this);
        this.errorMsg = this.errorMsg.bind(this);
        this.successMsg = this.successMsg.bind(this);
    }

    componentDidMount() {
        const { randomUser } = this.state;

        // get user information 
        Axios.get('/getRandomUserData/'+randomUser).then((response) => {
            if(response.status == 200) {
                this.setState({
                    id: response.data.user.id,
                    full_name: response.data.user.full_name,
                    bio: response.data.user.bio,
                    address: response.data.user.address,
                    work: response.data.user.work,
                    education: response.data.user.education,
                    followers: response.data.user.followers,
                    is_follow: response.data.friend.pivot.is_follow,
                    follow_btn_text: response.data.friend.pivot.follow_btn_text,
                })
            } else {
                this.errorMsg('Something Went Wrong user!')
            }
        }).catch((error) => {
            this.errorMsg('Something Went Wrong user!')
        });

        // get user posts 
        // Axios.get('/getRandomUserPost/'+randomUser).then((response) => {
        //     if(response.status == 200) {
        //         this.setState({posts: response.data})
        //     } else {
        //         alert('error')
        //     }
        // }).catch((error) => {
        //     alert('server error!!')
        // });
    }

    isFollow() {
        const { is_follow, id, randomUser } = this.state;
        if(is_follow == 0) {
            this.setState({is_follow: 1})
            this.successMsg('Now you can this persons activity in your timeline !')
        } else {
            this.setState({is_follow: 0})
            this.successMsg("You can't see this persons post anymore !")
        }

        Axios.post('/countFollowers', {
            id: id,
            isFollow: is_follow,
            randomUser: randomUser,
        }).then((response) => {
            if(response.status == 200) {
                this.componentDidMount();
            } 
            else {
                this.errorMsg('Something Went Wrong !')
            }
        }).catch((error) => {
            this.errorMsg('Something Went Wrong !')
        })
    }

    successMsg(updateMsg) {
        let msg = document.getElementById('msg');
        msg.innerText = updateMsg;
        this.setState({msgRow: "alertMessage"})
        setTimeout(function(){ 
            this.setState({msgRow: 'd-none'}); 
        }.bind(this), 4000);
    }

    errorMsg(updateMsg) {
        let msg = document.getElementById('msg');
        msg.innerText = updateMsg;
        msg.style.background = '#FFD2D2';
        msg.style.color = '#D8000C';
        this.setState({msgRow: "alertMessage"})
        setTimeout(function(){ 
            this.setState({msgRow: 'd-none'}); 
            msg.style.background = '#DFF2BF';
            msg.style.color = '#4F8A10';
        }.bind(this), 4000);
    }

    render() {
        return (
            <Fragment>  
                <MainLayout title={this.state.full_name}>
                    <p className={this.state.msgRow} id="msg"></p>
                    <Container>
                        <Row className="contentRow">
                            <Col md={7} lg={7} sm={7} className="d-flex">
                                <img className="profileImage" src={profileImg}/>
                                <div className="ownerInfo">
                                    <h1 className="profileTopName mt-1">{this.state.full_name}</h1>
                                    <h5 className="bio">{this.state.bio}</h5>
                                    <h5 className="followBtn" onClick={this.isFollow}>{this.state.follow_btn_text}</h5>
                                </div>
                            </Col>
                            <Col md={5} lg={5} sm={5}>
                                <div className="ownerOtherInfo">
                                    <div className="d-flex align-items-center">
                                        <div className="followDiv">
                                            <h5 className="followInfo">{this.state.followers} Followers <br/>0 Following</h5>
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
                                <p> <FontAwesomeIcon icon={faMapMarkerAlt} className="fIcon mt-3"/> From {this.state.address}</p>
                                <p> <FontAwesomeIcon icon={faBriefcase} className="fIcon"/> Works at {this.state.work}</p>
                            </Col>
                            <Col md={6} lg={6} sm={6} xs={6}>
                                <div className="float-right">
                                    <p> <FontAwesomeIcon icon={faGraduationCap} className="fIcon mt-3"/> Studies at {this.state.education}</p>
                                    <p> <FontAwesomeIcon icon={faClock} className="fIcon"/> Joined June 2020 </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </MainLayout>
            </Fragment>
        );
    }
}

export default UserProfilePage;
