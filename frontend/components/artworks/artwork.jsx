import React from 'react';
import ImageViewer from 'iv-viewer';
import 'iv-viewer/dist/iv-viewer.css'

class Artwork extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("MADE IT!!")
        const viewer = new ImageViewer(document.querySelector("#image"))
        // viewer.load(window.placeholderImg);
        // viewer.refresh;
    }

    render() {
        // const image = document.querySelector('#artwork-loader')
        // console.log(container)
        // viewer.load(image)
        return(
            <div id="artwork">
                <div id="artwork-loader"></div>
                <img src={window.starryNight} id="image"/>
                <p>{this.props.title}</p>
                <p>{this.props.date_created}</p>
                <p>{this.props.color}</p>
                <p>{this.props.style}</p>
                <p>{this.props.medium}</p>
                <p>{this.props.partner_organization}</p>
            </div>
        );
    }
}

export default Artwork