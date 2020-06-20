import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import NotificationPage from "../pages/NotificationPage";
import MessagePage from "../pages/MessagePage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/profile" component={ProfilePage}/>
                    <Route exact path="/message" component={MessagePage}/>
                    <Route exact path="/notification" component={NotificationPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;
