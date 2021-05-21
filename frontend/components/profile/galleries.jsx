import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import GalleryItem from "./gallery_item";

class Galleries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      galleryToDelete: null,
    };
  }

  deleteGallery = () => {
    this.props.deleteGalleryThunk(this.state.galleryToDelete);
    this.setState({ modalIsOpen: false, galleryToDelete: null });
  };

  toggleModal = (id) =>
    this.setState((prev) => ({
      modalIsOpen: !prev.modalIsOpen,
      galleryToDelete: id,
    }));

  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };

    console.log("galleries in galleries", this.props);
    const { modalIsOpen } = this.state;
    return (
      <React.Fragment>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.toggleModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <h1>Delete gallery</h1>
          <button onClick={this.toggleModal}>close</button>
          <br />

          <p>Are you sure you want to Delete?</p>

          <button onClick={this.deleteGallery}>Delete</button>
          <button onClick={this.toggleModal}>Cancel</button>
        </Modal>
        <div className={"gallery-grid"}>
          {this.props.galleries.map((gallery, idx) => (
            <GalleryItem
              deleteGallery={this.toggleModal}
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
