import React from "react";
import Slider from '../slider';
import Grid from '../grid'

class TimelineGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
       return (
            <React.Fragment>
                <Slider items={this.props.times} type="gogh-time"/>
                <Grid/>
            </React.Fragment>
        )
    }
}

export default TimelineGrid