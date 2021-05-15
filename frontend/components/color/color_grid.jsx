import React from "react";
import Slider from '../slider';
import Grid from '../grid'

class ColorGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Slider items={this.props.colors} type="gogh-color"/>
                <Grid/>
            </React.Fragment>
        )
    }
}

export default ColorGrid