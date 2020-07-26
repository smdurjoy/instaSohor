import React, {Component, Fragment} from 'react';
import {Button, Col, FormControl, Row} from "react-bootstrap";
import MainLayout from "../components/MainLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperclip} from "@fortawesome/free-solid-svg-icons";
import {faComments, faHeart, faImage, faLaugh} from "@fortawesome/free-regular-svg-icons";
import profileImage from "../../images/pro.jpeg";
import Axios from "axios";
import loadingImage from '../../images/Loader.svg';
import errorImage from '../../images/wentWrong.png';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: 'contentRow text-center',
            isError: 'd-none',
            isNull: 'd-none',
            msgRow: 'd-none',
        }

        this.addPost = this.addPost.bind(this)
    }

    componentDidMount() {
        window.scroll(0,0)

        Axios.get('/getHomePosts').then((response) => {
            if(response.status == 200) {
                this.setState({posts: response.data, isLoading: 'd-none'})
            }
            else if(response.status == 200 && response.data == []) {
                this.setState({isLoading:'d-none', isNull: 'contentRow text-center'})
            }
            else {
                this.setState({isLoading: 'd-none', isError: 'contentRow text-center errorRow'})
            }
        }).catch((error) => {
            this.setState({isLoading: 'd-none', isError: 'contentRow text-center errorRow'})
        })
    }

    addPost() {
        const postData = document.getElementById('postArea').value;
        const postButton = document.getElementById('postBtn');
        let d = new Date();
        const postTime = this.formatDate(d); 
        
        if(postData == "") {
            postButton.innerHTML = "Write something";
            setTimeout(function () {
                postButton.innerHTML = "Add Post";
            }, 3000);
        } else {
            postButton.innerHTML = "Posting ...";
            postButton.disabled = true;
            Axios.post('/createPost', {
                post_data: postData,
                postTime: postTime
            }).then((response) => {
                if(response.status == 200 && response.data == 1) {
                    postButton.innerHTML = "Add Post";
                    postButton.disabled = false;
                    document.getElementById('postArea').value='';
                    this.successMsg("Post has been created successfully !");
                    this.componentDidMount();
                } else {
                    postButton.innerHTML = "Add Post";
                    postButton.disabled = false;
                    this.errorMsg('Something Went Wrong !');
                }
            }).catch(error => {
                postButton.innerHTML = "Add Post";
                postButton.disabled = false;
                this.errorMsg('Something Went Wrong !');
            })
        }
    }

    formatDate(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " at " + strTime;
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
        const { posts } = this.state;
        const postView = posts.map((post, index) => {
            return (
                <div id="postDiv" post-id={post.id} key={index}>
                    <Row className="contentRow">
                        <Col md={12} sm={12} lg={12} xs={12} className="d-flex align-items-center">
                            <img className="chatList-images-buttons" src={post.user.image}/>
                            <Link to={"/"+post.user.user_name} className="postProfileName">{post.user.full_name}</Link>
                            <p className="homePostTime">{post.post_time}</p>
                        </Col>
                        <Col md={12} sm={12} lg={12} xs={12}>
                            <div className="post">
                                <p>{post.post_data}</p>
                            </div>
                        </Col>
                        <Col md={12} sm={12} lg={12} xs={12}>
                            <div>
                                <h5 className="postActionCount"> 85 <FontAwesomeIcon icon={faHeart}/> <span className="ml-2">9</span> <FontAwesomeIcon icon={faComments}/> </h5>
                                <a href="#" className="postActions"> <FontAwesomeIcon icon={faHeart}/> </a> <a href="#" className="ml-2 postActions"> <FontAwesomeIcon icon={faComments}/> </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            )
        })
        return (
            <Fragment>
                <MainLayout title="Home">
                    <p className={this.state.msgRow} id="msg"></p>
                    <Row className="homePostRow">
                        <Col md={12} sm={12} lg={12} xs={12}>
                            <Row className="homePost">
                                <Col>
                                    <FormControl as="textarea" id="postArea" rows="1" placeholder="Write a post ..." className="homePostBox" />
                                </Col>
                            </Row>
                            <Row className="HomePostBottom">
                                <Col xs={6} sm={6} lg={6} md={6} className="homePostIcons">
                                    <a href="#"><FontAwesomeIcon icon={faPaperclip} className="homePostIcon"/></a>
                                    <a href="#"><FontAwesomeIcon icon={faImage} className="homePostIcon"/></a>
                                    <a href="#"><FontAwesomeIcon icon={faLaugh} className="homePostIcon"/></a>
                                </Col>
                                <Col xs={6} sm={6} lg={6} md={6}>
                                    <Button className="btn btn-primary homePostBtn" id="postBtn" onClick={this.addPost}>Add Post</Button>
                                </Col>
                            </Row>  
                        </Col>
                    </Row>

                    <div className="newsFeed">
                        <h5 className="newsFeedTitle">News Feed</h5>
                        <div>
                            <Row className={this.state.isLoading}>
                                <img src={loadingImage} className="text-center loadingImage"/>
                            </Row>
                            <Row className={this.state.isError}>
                                <img src={errorImage} className="wentWrongImage"/>
                                <h3 className="wentWrongMsg"><span>Opss!</span> Something Went Wrong!</h3>
                            </Row>
                            <Row className={this.state.isNull}>
                                <h3 className="noPostMessage">No Post<span> Available !</span></h3>
                            </Row>
                            {postView}
                        </div>
                    </div>
                </MainLayout>
            </Fragment>
        );
    }
}

export default HomePage;
