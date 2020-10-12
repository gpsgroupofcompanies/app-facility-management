import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './leave.scss';

export default class Leave extends Component {
    constructor() {
        super();
        this.state = {
            value: 'full',
            isMultipleDays: "false"
        }
    }

    handleChange = (e) => {
        e.persist();
        console.log(e.target.value)
        this.setState({ value: e.target.value })
    }

    handleChangeDays = (e) => {
        e.persist();
        console.log(e.target.value)
        this.setState({ isMultipleDays: e.target.value })
    }


    fullDay = () => {
        return (
            <>
                <div className="gps_isMultiple_days">
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.isMultipleDays} onChange={this.handleChangeDays}>
                            <FormControlLabel value="false" control={<Radio />} label="One Day Leave" />
                            <FormControlLabel value="true" control={<Radio />} label="Multiple Days Leave" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="gps_oneDay">

                </div>
            </>
        )
    }

    halfDay = () => {
        return (
            <div>
                Half Day
            </div>
        )
    }

    render() {
        let { value } = this.state;
        console.log('called')
        return (
            <>
                <div className="gps_leave" >
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={this.handleChange}>
                            <FormControlLabel value="full" control={<Radio />} label="Full Day Leave" />
                            <FormControlLabel value="half" control={<Radio />} label="Half Day/Short Permissions" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="gps_leave_details">
                    {this.state.value == 'full' ? this.fullDay() : this.halfDay()}
                </div>
            </>
        )
    }
}
