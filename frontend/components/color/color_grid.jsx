import React from "react";
import Slider from '../slider';
import Grid from '../grid'

class ColorGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (!this.props.artworks.isLoaded)  {
            // this.props.requestArtworks()
        } 
    }

    render() {
        return (
            <React.Fragment>
                <Slider items={this.props.colors} type="gogh-color"/>
                <Grid artworks={this.props.artworks.artworks}/>
            </React.Fragment>
        )
    }
}

export default ColorGrid