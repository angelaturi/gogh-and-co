import React from "react";
import Slider from '../slider';
import Grid from '../grid';
import {useHistory} from 'react-router-dom'

class ColorGrid extends React.Component {
    constructor(props) {
        super(props)
        const params = new URLSearchParams(this.props.location.search)
        const colorParam = params.has("color") ? params.get("color") : ""
        this.props.setCurrentColor(colorParam)
    }

    userChangedColor = (color) => {
        this.props.setCurrentColor(color);
        history.push({...this.props.history, search: `?color=${color}`})
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
                    <Slider items={this.props.colors} type="gogh-color" selected={this.props.currentColor} onItemChange={this.userChangedColor}/>
                    <Grid artworks={this.props.artworks.artworks}/>
                </div>
            </React.Fragment>
        )
    }
}

export default ColorGrid