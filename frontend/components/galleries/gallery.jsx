import React from "react";
import Grid from "../grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Modal from "react-modal";

// Modal.setAppElement("#root");

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    let gallery = props.galleries.find(
      (gal) => gal.id === parseInt(this.props.match.params.id)
    );
    this.state = {
      modalIsOpen: false,
    };
    // props.setGallery(gallery);
  }

  componentDidMount() {
    this.props.receiveSingleGalleryThunk(this.props.match.params.id);
  }

  deleteGallery = () => {
    this.props.deleteGalleryThunk(this.props.match.params.id);
    this.props.history.push("/profile");
  };

  toggleModal = () =>
    this.setState((prev) => ({ modalIsOpen: !prev.modalIsOpen }));

  render() {
    console.log("gal show==>", this.props);
    const { modalIsOpen } = this.state;

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

    return (
      <section className={"view"}>
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
        <header className="gallery-header">
          <h1>{this.props.gallery.title}</h1>
          <div>{this.props.gallery.description}</div>
          <div>
            {this.props.gallery.artworks.length}{" "}
            {`item${this.props.gallery.artworks.length === 1 ? "" : "s"}`}
          </div>
        </header>
        {/* <Link to={"/favorite/edit"}>Delete</Link> */}
        <button onClick={this.toggleModal}>Delete</button>
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
