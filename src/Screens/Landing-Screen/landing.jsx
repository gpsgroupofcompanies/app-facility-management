import React, { Component } from 'react';
import './landing.scss';
import { Route, Router, Switch } from 'react-router-dom';
import Navigation from '../../shared/nav-bar/nav-bar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Leave from '../Leave/leave';
import Profile from '../Profile/profile';
import Requests from '../Your-Requests/requests';
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    setValue = (newValue) => {
        this.setState({ state: newValue })
    }

    handleChange = (event, value) => {
        this.setState({ value });
        this.props.history.push(value == 0 ? ('/') : (value == 1 ? "/request" : "/profile"));
    };
    render() {
        console.log('landing')
        const { value, pathMap } = this.state;
        return (
            <div className="gps_landing">
                <div className="gps_container">

                    <Route path="/" exact component={Leave}></Route>
                    <Route path="/request" exact component={Requests}></Route>
                    <Route path="/profile" exact component={Profile}></Route>
                </div>
                <div className="gps_nav">
                    <BottomNavigation
                        value={value}
                        onChange={this.handleChange}
                        showLabels
                        className={useStyles.root}
                    >
                        <BottomNavigationAction label="Apply" icon={<AssignmentIcon />} />
                        <BottomNavigationAction label="Your Request" icon={<ListIcon />} />
                        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
                    </BottomNavigation>
                </div>
            </div >
        )
    }
}


export default Landing;