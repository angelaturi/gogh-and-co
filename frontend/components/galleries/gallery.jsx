import React from 'react';
import Artworks from '../artworks/artworks_container';

class Gallery extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="collection">
                    <div className="collection-artwork-container">
                        <img src={this.props.firstArtwork}></img>
                    </div>
                    <div className="collection-header">
                        <h1>{this.props.title}</h1>
                        <h3>{this.props.description}</h3>
                    </div>   
                    <Artworks header={this.props.artworks.length + 'items'} />       
                </div>
            </div>
        )
    }
}

export default Gallery;