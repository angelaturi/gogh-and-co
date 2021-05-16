import React from "react";
import Slider from '../slider';
import Grid from '../grid'

class ColorGrid extends React.Component {
    constructor(props) {
        super(props)
        const params = new URLSearchParams(this.props.location.search)
        const colorParam = params.has("color") ? params.get("color") : ""
        this.props.setCurrentColor(colorParam)
    }

    componentDidMount() {
        if (!this.props.artworks.isLoaded)  {
            // this.props.requestArtworks()
        } 
    }

    render() {
        return (
            <React.Fragment>
                <div className={"color-grid"}>
                    <Slider items={this.props.colors} type="gogh-color" selected={this.props.currentColor}/>
                    <Grid artworks={this.props.artworks.artworks}/>
                </div>
            </React.Fragment>
        )
    }
}

export default ColorGrid