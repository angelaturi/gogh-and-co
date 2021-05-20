import React from "react";
import { Link } from "react-router-dom";
import GalleryItem from "./gallery_item";

class Galleries extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteGallery = (id) => {
    this.props.deleteGalleryThunk(id);
  };

  render() {
    console.log("galleries in galleries", this.props);
    return (
      <React.Fragment>
        <div className={"gallery-grid"}>
          {this.props.galleries.map((gallery, idx) => (
            <GalleryItem
              deleteGallery={this.deleteGallery}
              gallery={gallery}
              key={idx}
            />
          ))}
        </div>
        <Link to={"/favorite/create"} className={"add-button"}>
          +
        </Link>
      </React.Fragment>
    );
  }
}

export default Galleries;
