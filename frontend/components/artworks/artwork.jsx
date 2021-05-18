import React, {useEffect} from 'react';
import ImageViewer from 'iv-viewer';
import 'iv-viewer/dist/iv-viewer.css';
import {history} from 'react-router-dom'

// function Artwork({artworks, artwork, setCurrentArtwork, ...props}) {

//     useEffect(() => {
//         if (!artwork.title) {
//             let currentArtwork = artworks.find((aw) => aw.id === parseInt(props.match.params.id))
//             setCurrentArtwork(currentArtwork)
//         }
//         $('.favorites').removeClass('invisible')
//         const viewer = new ImageViewer(document.querySelector("#image"))
//     }, [artwork])


//         // const image = document.querySelector('#artwork-loader')
//         // console.log(container)
//         // viewer.load(image)
//         // let favorite = currentImage.favorited ? 'http://image.flaticon.com/icons/svg/60/60993.svg' : 'http://image.flaticon.com/icons/png/128/126/126471.png';
        
//         let url = artwork.title ? 
//         `https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${artwork.title.toLowerCase().replace(/([ |%20])/g, "_")}.png` :
//         ""

//         return(
//             <div id="artworkCurrent">
//                 <img src={url} id="image"/>
//                 <p>{artwork.title}</p>
//                 <p>{artwork.date_created}</p>
//                 <p>{artwork.color}</p>
//                 <p>{artwork.style}</p>
//                 <p>{artwork.medium}</p>
//                 <p>{artwork.partner_organization}</p>
//             </div>
//         );
// }

// export default Artwork

class Artwork extends React.Component {
    constructor(props) {
        super(props)
        let currentArtwork = this.props.artworks.find((aw) => aw.id === parseInt(this.props.match.params.id))
        this.props.setCurrentArtwork(currentArtwork)
    }

    componentDidUpdate() {
        // props.artwork.title) {
            
        // }
    }

    triggerViewer = () => {
        const viewer = new ImageViewer(document.querySelector("#image"))
    }

    favoriting = (e) => {
        e.preventDefault();
        
        if(!this.props.currentUser){
            this.props.history.push('/signup');
        } else {
            this.props.toggleCurrentFavorite()
        }
    }

        // const image = document.querySelector('#artwork-loader')
        // console.log(container)
        // viewer.load(image)
        // let favorite = currentImage.favorited ? 'http://image.flaticon.com/icons/svg/60/60993.svg' : 'http://image.flaticon.com/icons/png/128/126/126471.png';

        render() {
            let favorite = this.props.artwork.favorited ? 'http://image.flaticon.com/icons/svg/60/60993.svg' : 'http://image.flaticon.com/icons/png/128/126/126471.png'
            const artWork = this.props.artwork;
            return (
                <React.Fragment>
                {artWork && artWork.title ? 
                <div id={"artworkCurrent"} className={"artwork-current"}>
                    <img onLoad={() => this.triggerViewer()} src={`https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${this.props.artwork.title.toLowerCase().replace(/([ |%20])/g, "_")}.png`} id="image"/>
                    <img className={'artwork-favorites'} src={favorite} onClick={(e) => this.favoriting(e)}></img>
                    <div className={"description"}>
                        <p><b>Title:</b> {this.props.artwork.title}</p>
                        <p><b>Date Created:</b> {this.props.artwork.date_created}</p>
                        <p><b>Style:</b> {this.props.artwork.style}</p>
                        <p><b>Medium:</b> {this.props.artwork.medium}</p>
                        <p><b>Partner Organization:</b> {this.props.artwork.partner_organization}</p>
                    </div>
                </div> : '' }
                </React.Fragment>
            )
        };
}

export default Artwork