import React from "react";
import Slider from '../slider';
import Grid from '../grid'

class TimelineGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (!this.props.artworks.isLoaded)  {
            this.props.requestArtworks()
        } 
    }


    render() {
       return (
            <React.Fragment>
                <Slider items={this.props.times} type="gogh-time"/>
                <Grid artworks={this.props.artworks.artworks}/>
            </React.Fragment>
        )
    }
}

export default TimelineGrid