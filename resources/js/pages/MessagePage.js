import React, {Component, Fragment} from 'react';
import {Container, Row} from "react-bootstrap";

class MessagePage extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <h1>This is message page</h1>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default MessagePage;
