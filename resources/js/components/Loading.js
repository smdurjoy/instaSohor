import React, {Component, Fragment} from 'react';
import loadingImage from "../../images/Loader.svg";
import {Row} from "react-bootstrap";

class Loading extends Component {
    render() {
        return (
            <Fragment>
                <Row className="contentRow">
                    <img src={loadingImage} className="loadingImage"/>
                </Row>
            </Fragment>
        );
    }
}

export default Loading;
