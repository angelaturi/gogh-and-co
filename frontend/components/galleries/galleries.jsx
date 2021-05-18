import React from 'react';
import {Link} from 'react-router-dom';
import GalleryItem from './gallery_item';

class Galleries extends React.Component {
    constructor(props) {
        super(props)
        // this.state {
        //     galleries: [];
        // }
    }

    // componentDidMount() {
    //     debugger
    //     const galleries = this.props.receiveGalleries();
    //     this.setState({galleries: galleries})
    //     // console.log(this.state)
    // }

    render() {
        const galleryItems = this.props.galleries.map((gallery, idx) => (
            <GalleryItem gallery={gallery} key={idx}/>
        ))
        return (
            <div>
                {/* <h3>{header}</h3> */}
                {/* <h6>{subheader}</h6> */}
                <div>
                    {galleryItems}
                </div>
                <Link to={"/favorite/create"}className={"add-button"}>+</Link>
            </div>
        )
    }
}

export default Galleries
                    // <div className={invisible ? 'galleries invisible' : 'galleries'} >