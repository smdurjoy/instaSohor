import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import NotificationPage from "../pages/NotificationPage";
import SettingPage from "../pages/SettingPage";
import FriendsPage from "../pages/FriendsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/profile" component={ProfilePage}/>
                    <Route exact path="/setting" component={SettingPage}/>
                    <Route exact path="/notification" component={NotificationPage}/>
                    <Route exact path="/friends" component={FriendsPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;
