import React from 'react';
import Grid from '../grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'

class Gallery extends React.Component {
    constructor(props){
        super(props)
        let gallery = props.galleries.find(
          (gal) => gal.id === parseInt(props.match.params.id)
        );
        props.setGallery(gallery);
    }

    render(){
        return (
          <section className={"view"}>
            <header className="gallery-header">
              <h1>{this.props.gallery.title}</h1>
              <div>{this.props.gallery.description}</div>
              <div>
                {this.props.gallery.artworks.length}{" "}
                {`item${this.props.gallery.artworks.length === 1 ? "" : "s"}`}
              </div>
            </header>
            {/* <Link to={"/favorite/edit"}>Delete</Link> */}
            <Link to={`/favorite/edit/${this.props.gallery.id}`}>Edit</Link>
            <div className="gallery">
              <div className="gallery-artwork-container">
                <Grid artworks={this.props.gallery.artworks} />
              </div>
              {/* <Artworks header={this.props.artworks.length + 'items'} />        */}
            </div>
          </section>
        );
    }
}

export default Gallery;