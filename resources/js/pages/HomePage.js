import React, {Component, Fragment} from 'react';
import {Container, Row} from "react-bootstrap";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <h1>This is Home page</h1>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomePage;
