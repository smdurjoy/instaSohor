import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MainLayout from "../components/MainLayout";

class SettingPage extends Component {
    render() {
        return (
            <Fragment>
                <MainLayout>
                    <div className="topDiv">
                        <Row className="contentRow">
                            <Col md={12}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae culpa dicta dignissimos dolorem esse expedita explicabo harum ipsa ipsam mollitia natus, nisi nobis non obcaecati odio officiis quaerat quia, quis sequi tempore vel voluptates? Alias explicabo magnam necessitatibus perferendis provident vero! Consequuntur dolores ipsam libero omnis quam, qui unde vero! A amet culpa incidunt quo ullam! Accusamus, distinctio expedita maiores maxime possimus quae tempora velit? Ad illo ipsum mollitia.
                            </Col>
                            <Col md={12} className="mt-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae culpa dicta dignissimos dolorem esse expedita explicabo harum ipsa ipsam mollitia natus, nisi nobis non obcaecati odio officiis quaerat quia, quis sequi tempore vel voluptates? Alias explicabo magnam necessitatibus perferendis provident vero! Consequuntur dolores ipsam libero omnis quam, qui unde vero! A amet culpa incidunt quo ullam! Accusamus, distinctio expedita maiores maxime possimus quae tempora velit? Ad illo ipsum mollitia.
                            </Col>
                        </Row>
                    </div>
                </MainLayout>
            </Fragment>
        );
    }
}

export default SettingPage;
