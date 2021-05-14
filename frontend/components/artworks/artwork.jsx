import React from 'react';
import ImageViewer from 'iv-viewer';
import 'iv-viewer/dist/iv-viewer.css'

class Artwork extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return(
            <div id="artwork">
                <img src={window.placeholderImg}/>
                <p>{this.props.title}</p>
                <p>{this.props.date_created}</p>
                <p>{this.props.color}</p>
                <p>{this.props.style}</p>
                <p>{this.props.medium}</p>
                <p>{this.props.partner_organization}</p>
            </div>
        )

    }
}

export default Artwork