import React, {Component, Fragment} from 'react';
import {Col, Row} from "react-bootstrap";
import errorImage from '../../images/wentWrong.png';

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Row className="contentRow">
                    <Col>
                        <img className="wentWrongImage" src={errorImage}/> <br/>
                        <h3 className="wentWrongMsg"><span>Opss!</span> Something Went Wrong!</h3>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default WentWrong;
