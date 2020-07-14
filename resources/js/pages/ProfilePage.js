import React, {Component, Fragment} from 'react';
import MainLayout from "../components/MainLayout";
import {
    Button,
    Col,
    Container,
    Dropdown,
    FormControl, Modal,
    Row
} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faComments,
    faHeart
} from "@fortawesome/free-regular-svg-icons";
import profileImage from "../../images/pro.jpeg";
import Axios from "axios";
import loadingImage from '../../images/Loader.svg';
import errorImage from '../../images/wentWrong.png';
import Swal from 'sweetalert2';
import ProfileTop from "../components/profileTop";
import {faHeartbeat} from "@fortawesome/free-solid-svg-icons";

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
            postButtonText: "Add Post",
            updateRow: "d-none",
            showUpdateRow: false,
            updatePostData: "",
            modalShow: false,
            isLike: false,
            heartIcon: faHeart,
            msgRow: 'd-none'
        }

        this.getPosts = this.getPosts.bind(this);
        this.postFunction = this.postFunction.bind(this);
        this.bioUpdateRow = this.bioUpdateRow.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.updateBio = this.updateBio.bind(this);
        this.updateModalHideShow = this.updateModalHideShow.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.editPost = this.editPost.bind(this);
        this.deleteAlertHideShow = this.deleteAlertHideShow.bind(this);
        this.changeBio = this.changeBio.bind(this);
        this.likeCount = this.likeCount.bind(this);
    }

    componentDidMount() {
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
        const postData = document.getElementById('postArea').value;
        const userId = document.getElementById('postBtn').getAttribute('data-id');
        const postButton = document.getElementById('postBtn');
        let msg = document.getElementById('msg');

        if(postData == "") {
            postButton.innerHTML = "Write something";
            setTimeout(function () {
                postButton.innerHTML = "Add Post";
            }, 3000);
        } else {
            postButton.innerHTML = "Posting ...";
            postButton.disabled = true;
            Axios.post('/createPost', {
                user_id: userId,
                post_data: postData
            }).then((response) => {
                if(response.status == 200 && response.data == 1) {
                    postButton.innerHTML = "Add Post";
                    postButton.disabled = false;
                    this.setState({msgRow: "alertMessage"})
                    msg.innerText = "Post has been created successfully !"
                    document.getElementById('postArea').value='';
                    setTimeout(function(){ 
                        this.setState({msgRow: 'd-none'});
                    }.bind(this), 4000);
                    this.componentDidMount();
                } else {
                    Swal.fire('Something Went Wrong !')
                }
            }).catch(error => {
                Swal.fire('Something Went Wrong !')
            })
        }
    }

    // show bio update row on click
    bioUpdateRow() {
        if(this.state.showUpdateRow == false) {
            this.setState({updateRow: "contentRow", showUpdateRow:true})
        } else {
            this.setState({updateRow: "d-none", showUpdateRow:false})
        }
    }

    // hide bio update row on cancel button click
    onCancel() {
        this.setState({updateRow: "d-none", showUpdateRow:false});
        this.componentDidMount();
    }

    // update bio method
    updateBio() {
        let id = document.getElementById('postBtn').getAttribute('data-id');
        let bio = document.getElementById('bio').value;

        Axios.post('/updateBio', {
            id: id,
            bio: bio
        }).then((response) => {
            if(response.status == 200) {
                this.setState({updateRow: "d-none", showUpdateRow:false});
                this.componentDidMount();
            } else {
                Swal.fire('Update Failed !')
            }
        }).catch((error) => {
            Swal.fire('Something Went Wrong !')
        })
    }

    // show post update modal on click && get update post data
    updateModalHideShow() {
        if(this.state.modalShow == false) {
            this.setState({modalShow: true});
            const postId = document.getElementById('post').getAttribute('post-id');
            Axios.post('/getUpdatePostData', {id:postId}).then((response) => {
                if(response.status == 200) {
                    this.setState({updatePostData: response.data[0]['post_data']})
                } else {
                    Swal.fire('Error !')
                }
            }).catch((error) => {
                Swal.fire('Error !')
            })
        } else {
            this.setState({modalShow: false})
        }
    }

    editPost() {
        const id = document.getElementById('post').getAttribute('post-id');
        const postData = this.state.updatePostData;
        this.updatePost(id, postData);
    }

    // update post
    updatePost(id, postData) {
        const updatePostData = this.state.updatePostData;
        if(updatePostData == "") {
            Swal.fire('Please Write Something !')
        } else {
            Axios.post('/updatePost', {
                id: id,
                post_data: postData
            }).then((response) => {
                if(response.status == 200 && response.data == 1) {
                    let msg = document.getElementById('msg');
                    this.setState({msgRow: "alertMessage"})
                    msg.innerText = "Post has been updated successfully !"
                    setTimeout(function(){ 
                        this.setState({msgRow: 'd-none'});
                    }.bind(this), 4000);
                    this.updateModalHideShow();
                    this.componentDidMount();
                } else {
                    this.setState({msgRow: "alertMessage"})
                    msg.innerText = "Post updated failed !"
                    setTimeout(function(){ 
                    this.setState({msgRow: 'd-none'});
                    }.bind(this), 4000);
                    this.updateModalHideShow();
                    this.componentDidMount();
                }
            }).catch((error) => {
                this.setState({msgRow: "alertMessage"})
                msg.innerText = "Something Went Wrong !"
                setTimeout(function(){ 
                    this.setState({msgRow: 'd-none'});
                }.bind(this), 4000);
                this.updateModalHideShow();
                this.componentDidMount();
            })
        }
    }

    // delete post
    deleteAlertHideShow() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                const id = document.getElementById('post').getAttribute('post-id');
                Axios.post('/deletePost', {
                    id: id
                }).then((response) => {
                    if(response.status == 200 && response.data == 1) {
                        let msg = document.getElementById('msg');
                        this.setState({msgRow: "alertMessage"})
                        msg.innerHTML = "Post has been Deleted successfully !"
                        setTimeout(function(){ 
                            this.setState({msgRow: 'd-none'});
                        }.bind(this), 4000);
                        this.componentDidMount();
                    } else {
                        this.setState({msgRow: "alertMessage"})
                        msg.innerText = "Delete Failed !"
                        setTimeout(function(){ 
                            this.setState({msgRow: 'd-none'});
                        }.bind(this), 4000);
                    }
                }).catch((error) => {
                    this.setState({msgRow: "alertMessage"})
                    msg.innerText = "Something Went Wrong !"
                    setTimeout(function(){ 
                        this.setState({msgRow: 'd-none'});
                    }.bind(this), 4000);
                })
            }
        })
    }

    changeBio(event) {
        this.setState({ bio: event.target.value })
    }

    handleClick(e){
        console.log(e.target.id);
    }

    likeCount() {
        const likeId = document.getElementById('likeCol').getAttribute('like-id')
        console.log(likeId)
        if(this.state.isLike == false) {
            this.setState({isLike: true, heartIcon: faHeartbeat})
        } else {
            this.setState({isLike: false, heartIcon: faHeart})
        }
    }

    render() {
        const posts = this.state.posts;
        const myView = posts.map((data, index) => {
            return(
                <Row className="contentRow" key={index}>
                    <Col md={11} sm={11} lg={11} xs={11} className="d-flex align-items-center">
                        <img className="chatList-images-buttons" src={profileImage}/>
                        <a href="#" className="postProfileName">{data.user.full_name}</a>
                        <p className="postTime">24 June at 11.13 am</p>
                    </Col>
                    <Col md={1} sm={1} lg={1} xs={1} className="d-flex align-items-center">
                        <Dropdown className="ml-auto postActionBtn">
                            <Dropdown.Toggle className="proAction">
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.updateModalHideShow} post-id={data.id} id="post">Edit Post</Dropdown.Item>
                                <Dropdown.Item onClick={this.deleteAlertHideShow}>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={12} sm={12} lg={12} xs={12}>
                        <div className="post">
                            <p>{data.post_data}</p>
                        </div>
                    </Col>
                    <Col md={12} sm={12} lg={12} xs={12} like-id={data.id} id="likeCol">
                        <div>
                            <h5 className="postActionCount"> 19 <FontAwesomeIcon icon={faHeart}/> <span className="ml-2">5</span> <FontAwesomeIcon icon={faComments}/> </h5>
                            <a onClick={this.likeCount} href="#" className="postActions" id={index}> <FontAwesomeIcon icon={this.state.heartIcon}/> </a> <a href="#" className="ml-2 postActions"> <FontAwesomeIcon icon={faComments}/> </a>
                        </div>  
                    </Col>
                </Row>
            )
        });

        return (
            <Fragment>
                <MainLayout title={this.state.full_name}>
                    <p className={this.state.msgRow} id="msg"></p>
                    <Container>
                        <div className="profile">
                            <ProfileTop
                                fullName ={ this.state.full_name}
                                bio = { this.state.bio }
                                updateBioMethod = { this.bioUpdateRow }
                                rowClass = { this.state.updateRow }
                                changeBio = { this.changeBio }
                                updateBio = { this.updateBio }
                                onCancel = { this.onCancel }
                                address = { this.state.address }
                                work = { this.state.work }
                                education = { this.state.education }
                                id = { this.state.id }
                                postFunction = { this.postFunction }
                            />

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
                                    <h3 className="noPostMessage">You haven't post <span>anything yet!</span> Post now..</h3>
                                </Row>
                                {myView}
                            </div>
                        </div>
                    </Container>

                    <Modal
                        show={this.state.modalShow}
                        onHide={this.state.modalShow}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        id="editModal"
                        centered
                    >
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Edit Post
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                <FormControl as="textarea"  rows="2" placeholder="Edit post ..." className="postBox" value={this.state.updatePostData} onChange={e => this.setState({ updatePostData: e.target.value })}/>
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.updateModalHideShow} className="btn btn-danger">Cancel</Button>
                            <Button onClick={this.editPost}>Update</Button>
                        </Modal.Footer>
                    </Modal>
                </MainLayout>
            </Fragment>
        );
    }
}

export default ProfilePage;
