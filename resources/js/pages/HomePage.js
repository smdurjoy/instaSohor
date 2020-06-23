import React, {Component, Fragment} from 'react';
import {Container, Row} from "react-bootstrap";
import MainLayout from "../components/MainLayout";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <MainLayout>
                        <div className="div1">div1</div>
                        <div className="div3">div2</div>
                        <div className="div3">div3</div>
                        <div className="div4">div4</div>
                        <div className="div5">div5</div>
                        <div className="div6">div6</div>
                        <div className="div7">div7</div>
                        <div className="div8">div8</div>
                </MainLayout>
            </Fragment>
        );
    }
}

export default HomePage;
