import React from 'react';
import ImageViewer from 'iv-viewer';
import 'iv-viewer/dist/iv-viewer.css'

class Artwork extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const viewer = new ImageViewer(document.querySelector("#image"))
        // viewer.load(window.placeholderImg);
        // viewer.refresh;
        $('.favorites').removeClass('invisible')
    }

    render() {
        // const image = document.querySelector('#artwork-loader')
        // console.log(container)
        // viewer.load(image)
        // let favorite = currentImage.favorited ? 'http://image.flaticon.com/icons/svg/60/60993.svg' : 'http://image.flaticon.com/icons/png/128/126/126471.png';

        return(
            <div id="artwork">
                <div id="artwork-loader"></div>
                <img src={window.placeholderImg} id="image"/>
                {/* <img className ='favoritesrc={favorite} alt=""/> */}
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