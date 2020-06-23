import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";

class MainLayout extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <Fragment>
                <div className="sidebar-left">
                    hello im left sidebar
                </div>
                <div className="sidebar-right">
                    <div className="sidebar-content">
                        <div className="lalala">
                            hello im right sidebar content
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MainLayout;
