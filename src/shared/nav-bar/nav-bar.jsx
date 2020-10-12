import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export default function Navigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Apply" icon={<AssignmentIcon />} />
            <BottomNavigationAction label="Your Request" icon={<ListIcon />} />
            <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
    );
}
