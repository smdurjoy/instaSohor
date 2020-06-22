import React, {Component, Fragment} from 'react';
import {Container, Row} from "react-bootstrap";
import MainLayout from "../components/MainLayout";

class NotificationPage extends Component {
    render() {
        return (
            <Fragment>
                <MainLayout>
                    <Container>
                        <Row>
                            <h1>This is Notification page</h1>
                        </Row>
                    </Container>
                </MainLayout>
            </Fragment>
        );
    }
}

export default NotificationPage;
