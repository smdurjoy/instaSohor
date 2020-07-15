import React, {Component, Fragment} from 'react';
import MainLayout from '../components/MainLayout';
import { Container, Row, Col } from 'react-bootstrap';
import profileImg from "../../images/pro.jpeg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faBriefcase, faGraduationCap, faMapMarkerAlt, faPaperclip} from "@fortawesome/free-solid-svg-icons";
import {faClock, faComments, faHeart} from "@fortawesome/free-regular-svg-icons";
import Axios from 'axios';

class UserProfile extends Component {
    constructor({match}) {
        super();
        this.state = {
            userName: match.params.userName,
            id: '',
            full_name: '',
            bio: '',
            address: '',
            education: '',
            work: '',
            posts: ''
        }
    }

    componentDidMount() {
        const { userName } = this.state;

        // get user information 
        Axios.get('/getRandomUserData/'+userName).then((response) => {
            if(response.status == 200) {
                this.setState({
                    id: response.data[0]['id'],
                    full_name: response.data[0]['full_name'],
                    bio: response.data[0]['bio'],
                    address: response.data[0]['address'],
                    work: response.data[0]['work'],
                    education: response.data[0]['education'],
                })
            } else {
                alert('error')
            }
        }).catch((error) => {
            alert('server error')
        });

        // get posts
        const { id } = this.state;
        Axios.get('/getRandomUserPost/'+id).then((response) => {
            if(response.status == 200) {
                this.setState({ posts: response.data })
            } else {
                alert('error')
            }
        }).catch((error) => {
            alert('error')
        })
    }

    render() {
        const { posts } = this.state;
        console.log(posts)
        const postView = posts.map((post, index) => {
            return(
                <Row className="contentRow" key={index}>
                    <Col md={11} sm={11} lg={11} xs={11} className="d-flex align-items-center">
                        <img className="chatList-images-buttons" src={profileImage}/>
                        <a href="#" className="postProfileName">{post.user.full_name}</a>
                        <p className="postTime">{post.post_time}</p>
                    </Col>
                    <Col md={12} sm={12} lg={12} xs={12}>
                        <div className="post">
                            <p>{post.post_data}</p>
                        </div>
                    </Col>
                    <Col md={12} sm={12} lg={12} xs={12}>
                        <div>
                            <h5 className="postActionCount"> 19 <FontAwesomeIcon icon={faHeart}/> <span className="ml-2">5</span> <FontAwesomeIcon icon={faComments}/> </h5>
                            <a href="#" className="postActions" id={index}> <FontAwesomeIcon icon={faHeart}/> </a> <a href="#" className="ml-2 postActions"> <FontAwesomeIcon icon={faComments}/> </a>
                        </div>  
                    </Col>
                </Row>
            )
        });
        return (
            <Fragment>
                <MainLayout title={this.state.userName}>
                    <Container>
                        <Row className="contentRow">
                            <Col md={7} lg={7} sm={7} className="d-flex">
                                <img className="profileImage" src={profileImg}/>
                                <div className="ownerInfo">
                                    <h1 className="profileTopName mt-1">{this.state.full_name}</h1>
                                    <h5 className="bio">{this.state.bio}</h5>
                                </div>
                            </Col>
                            <Col md={5} lg={5} sm={5}>
                                <div className="ownerOtherInfo">
                                    <div className="d-flex">
                                        <div className="followDiv">
                                            <h5 className="followInfo">0 Followers <br/>0 Following</h5>
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

                        {postView}
                    </Container>
                </MainLayout>
            </Fragment>
        );
    }
}

export default UserProfile;
