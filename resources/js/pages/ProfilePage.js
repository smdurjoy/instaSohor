import React, {Component, Fragment} from 'react';
import {Container, Row} from "react-bootstrap";

class ProfilePage extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <h1>This is Profile page</h1>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProfilePage;
