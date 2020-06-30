import React, {Component, Fragment} from 'react';
import MainLayout from "../components/MainLayout";
import {Button, Col, Container, Dropdown, DropdownButton, FormControl, Row} from "react-bootstrap";
import profileImg from '../../images/pro.jpeg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faComments,
    faHeart,
    faImage,
    faLaugh,
} from "@fortawesome/free-regular-svg-icons";
import {
    faBriefcase,
    faClock, faEllipsisV,
    faGraduationCap,
    faMapMarkerAlt,
    faPaperclip
} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import profileImage from "../../images/pro.jpeg";
import Axios from "axios";
import loadingImage from '../../images/Loader.svg';
import errorImage from '../../images/wentWrong.png';

class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            isLoading: 'contentRow text-center',
            isError: 'd-none',
            isNull: 'd-none',
            full_name: "",
            address: "",
            education: "",
            work: "",
            bio: "",
            image: "",
            id: "",
            postButtonText: "Add Post"
        }
    }
    componentDidMount() {
        window.scroll(0,0);

        Axios.get('/getUserData').then(response => {
            if(response.status == 200) {
                this.setState({
                    full_name: response.data[0]['full_name'],
                    address: response.data[0]['address'],
                    education: response.data[0]['education'],
                    work: response.data[0]['work'],
                    bio: response.data[0]['bio'],
                    image: response.data[0]['image'],
                    id: response.data[0]['id']
                })
            } else {
                this.setState({
                    full_name: "---",
                    address: "---",
                    education: "---",
                    work: "---",
                    bio: "---",
                    image: "---"
                })
            }
        }).catch(error => {
            this.setState({
                full_name: "---",
                address: "---",
                education: "---",
                work: "---",
                bio: "---",
                image: "---"
            })
        })
        this.getPosts()
    }

    getPosts() {
        Axios.get('/getPosts').then(response => {
            if(response.status == 200) {
                this.setState({posts: response.data, isLoading:'d-none'})
            }
            else if(response.data == null) {
                this.setState({isLoading:'d-none', isNull: 'contentRow text-center'})
            } else {
                this.setState({isLoading:'d-none', isError: 'contentRow text-center errorRow'})
            }
        }).catch(error => {
            this.setState({isLoading:'d-none', isError: 'contentRow text-center errorRow'})
        })
    }

    postFunction() {
        let postData = document.getElementById('postArea').value;
        let userId = document.getElementById('postBtn').getAttribute('data-id');

        document.getElementById('postBtn').innerHTML = "Posting ...";
        Axios.post('/createPost', {
            user_id: userId,
            post_data: postData
        }).then((response) => {
            if(response.status == 200 && response.data == 1) {
                document.getElementById('postBtn').innerHTML = "Posted";
                setTimeout(function () {
                    document.getElementById('postBtn').innerHTML = "Add Post";
                }, 3000);
                document.getElementById('postArea').value='';
                this.componentDidMount();
            } else {
                document.getElementById('postBtn').innerHTML = "Failed";
            }
        }).catch(error => {
            document.getElementById('postBtn').innerHTML = "Failed";
        })
    }

    render() {
        const posts = this.state.posts;
        const myView = posts.map(data => {
            return(
                <Row className="contentRow">
                    <Col md={12} sm={12} lg={12} xs={12} className="d-flex align-items-center">
                        <img className="chatList-images-buttons" src={profileImage}/>
                        <a href="#" className="postProfileName">{data.user.full_name}</a>
                        <p className="postTime">24 June at 11.13 am</p>
                        <FontAwesomeIcon icon={faEllipsisV} className="postABtn"/>
                    </Col>
                    <Col md={12} sm={12} lg={12} xs={12}>
                        <div className="post">
                            <p>{data.post_data}</p>
                        </div>
                    </Col>
                    <Col md={12} sm={12} lg={12} xs={12}>
                        <div>
                            <h5 className="postActionCount"> 19 <FontAwesomeIcon icon={faHeart}/> <span className="ml-2">5</span> <FontAwesomeIcon icon={faComments}/> </h5>
                            <a href="#" className="postActions"> <FontAwesomeIcon icon={faHeart}/> </a> <a href="#" className="ml-2 postActions"> <FontAwesomeIcon icon={faComments}/> </a>
                        </div>
                    </Col>
                </Row>
            )
        })
        return (
            <Fragment>
                <MainLayout>
                    <Container>
                        <div className="profile">
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
                                            <div className="profileActionBtn">
                                                <FontAwesomeIcon icon={faEllipsisV} className="profileAIcon"/>
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

                            <Row className="contentRow">
                                <Col md={12} sm={12} lg={12} xs={12}>
                                    <Row>
                                        <Col>
                                            <FormControl as="textarea" id="postArea" rows="3" placeholder="Write a post ..." className="postBox" />
                                        </Col>
                                    </Row>
                                    <Row className="postBottom">
                                        <Col xs={6} sm={6} lg={6} md={6} className="postIcons">
                                            <a href="#"><FontAwesomeIcon icon={faPaperclip} className="postIcon"/></a>
                                            <a href="#"><FontAwesomeIcon icon={faImage} className="postIcon"/></a>
                                            <a href="#"><FontAwesomeIcon icon={faLaugh} className="postIcon"/></a>
                                        </Col>
                                        <Col xs={6} sm={6} lg={6} md={6}>
                                            <Button className="btn btn-primary postButton" id="postBtn" data-id={this.state.id} onClick={this.postFunction}>Add Post</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <h5 className="newsFeedTitle mt-4">Posts</h5>
                            <div>
                                <Row className={this.state.isLoading}>
                                    <img src={loadingImage} className="text-center loadingImage"/>
                                </Row>
                                <Row className={this.state.isError}>
                                    <img src={errorImage} className="wentWrongImage"/>
                                    <h3 className="wentWrongMsg"><span>Opss!</span> Something Went Wrong!</h3>
                                </Row>
                                <Row className={this.state.isNull}>
                                    <h3 className="noPostMessage">You haven't <span>post anything</span> yet! Post now..</h3>
                                </Row>
                                {myView}
                            </div>
                        </div>
                    </Container>
                </MainLayout>
            </Fragment>
        );
    }
}

export default ProfilePage;
