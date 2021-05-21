import React from "react";
import Slider from '../slider';
import Grid from '../grid';
import {useHistory} from 'react-router-dom'

class ColorGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        currentColor: ""
    }

    setCurrentColor = (color) => {
        this.setState({currentColor: color});
        // this.history.push({...this.props.history, search: `?color=${color}`})
    }

    componentDidMount() {
        if (!this.props.artworks.isLoaded)  {
            // this.props.requestArtworks()
        } 
        const params = new URLSearchParams(this.props.location.search);
        const colorParam = params.has("color") ? params.get("color") : "";
        this.setState({ currentColor: colorParam });
    }


    render() {
        return (
            <React.Fragment>
                <div className={"color-grid"}>
                    <Slider items={this.props.colors} type="gogh-color" selected={this.state.currentColor} setCurrent={this.setCurrentColor}/>
                    <Grid artworks={this.props.artworks.artworks}/>
                </div>
            </React.Fragment>
        )
    }
}

export default ColorGrid

