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
    constructor() {
        super();
        this.state = {
            posts: [],
            isLoading: 'contentRow text-center',
            isError: 'd-none',
            isNull: 'd-none',
        }
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

    render() {
        const { posts } = this.state;
        const postView = posts.map((post, index) => {
            return (
                <div id="postDiv" post-id={post.id} key={index}>
                    <Row className="contentRow">
                        <Col md={12} sm={12} lg={12} xs={12} className="d-flex align-items-center">
                            <img className="chatList-images-buttons" src={profileImage}/>
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
                    <Row className="homePostRow">
                        <Col md={12} sm={12} lg={12} xs={12}>
                            <Row className="homePost">
                                <Col>
                                    <FormControl as="textarea" rows="1" placeholder="Write a post ..." className="homePostBox" />
                                </Col>
                            </Row>
                            <Row className="HomePostBottom">
                                <Col xs={6} sm={6} lg={6} md={6} className="homePostIcons">
                                    <a href="#"><FontAwesomeIcon icon={faPaperclip} className="homePostIcon"/></a>
                                    <a href="#"><FontAwesomeIcon icon={faImage} className="homePostIcon"/></a>
                                    <a href="#"><FontAwesomeIcon icon={faLaugh} className="homePostIcon"/></a>
                                </Col>
                                <Col xs={6} sm={6} lg={6} md={6}>
                                    <Button className="btn btn-primary homePostBtn">Add Post</Button>   
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
