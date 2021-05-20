import React from "react";
import {Link} from 'react-router-dom'

class EditGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    newGallery: [],
    favorites: [],
    selectedImages: [],
    continueClicked: false,
  };

  toggle = (id) => {
    const gallery = [...this.state.newGallery];
    const existing = gallery.indexOf(id);
    if (existing > -1) {
      gallery.splice(existing, 1);
    } else {
      gallery.push(id);
    }
    this.setState({ newGallery: gallery });
  };

  isChecked = (id) => {
    return this.state.newGallery.includes(id);
  };

  componentDidMount() {
    const favorites = [
      {
        id: 0,
        title: "The Starry Night",
        creator_id: 1,
        date_created: 1889,
        color: "blue",
        style: "Post-Impressionism",
        medium: "Oil on canvas",
        partner_organization: "MoMA The Museum of Modern Art",
        favorited: false,
      },
      {
        id: 1,
        title: "Panel for Edwin R. Campbell No. 4",
        creator_id: 2,
        date_created: 1914,
        color: "blue",
        style: "Expressionism",
        medium: "Oil on canvas",
        partner_organization: "MoMA The Museum of Modern Art",
        favorited: false,
      },
      {
        id: 2,
        title: "The Persistence of Memory",
        creator_id: 3,
        date_created: 1931,
        color: "brown",
        style: "Surrealism",
        medium: "Oil on canvas",
        partner_organization: "MoMA The Museum of Modern Art",
        favorited: false,
      },
    ];
    this.setState({ favorites });
  }

  selected = (e) => {
    const { id } = e.target;
    const { selectedImages } = this.state;
    if (selectedImages.includes(id)) {
      this.setState((prev) => ({
        selectedImages: prev.selectedImages.filter((i) => i !== id),
      }));
    } else {
      this.setState((prev) => ({
        selectedImages: prev.selectedImages.concat(id),
      }));
    }
  };

  updateForm = (e) => this.setState({ [e.target.name]: e.target.value });

  toggleContinue = () =>
    this.setState((prev) => ({ continueClicked: !prev.continueClicked }));

  updateGallery = () => {
    const { currentUser, createGalleryThunk } = this.props;
    const { title, description, selectedImages } = this.state;
    const { id } = currentUser;
    updateGalleryThunk(
      {
        title,
        description,
        user_id: id,
      },
      selectedImages
    );
    this.props.history.push("/profile?tab=gl");
  };

  render() {
    console.log("selectedImages==>>", this.props);
    const { continueClicked, selectedImages, title, description, favorites } =
      this.state;
    return (
      <React.Fragment>
        <div className={"gogh-action-bar"}>
          <Link to={"/profile?tab=gl"} className={"close"}>
            X
          </Link>
          <button
            onClick={this.updateGallery}
            className={"secondary"}
            disabled={!this.props.gallery.title}
          >
            Save
          </button>
        </div>
        <section className={"view"}>
          <form onSubmit={this.updateGallery} className={"gogh-form"}>
            <div className={"field-wrapper"}>
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={this.props.gallery.title}
                required
                maxLength={150}
                onChange={this.updateForm}
              />
              <div className={"tool-tip"}>
                {this.props.gallery.title.length}/150
              </div>
            </div>
            <div className={"field-wrapper"}>
              <input
                type="text"
                name="description"
                value={this.props.gallery.description}
                placeholder="Description"
                maxLength={800}
                onChange={this.updateForm}
              />
              <div className={"tool-tip"}>
                {this.props.gallery.description.length}/800
              </div>
            </div>
          </form>
          <div className={"gogh-gallery-grid"}>
            {favorites.map((artwork, idx) => {
              let artwork_source = artwork.title
                .toLowerCase()
                .replace(/([ |%20])/g, "_");
              return (
                <button
                  key={idx}
                  className={`artwork ${this.selected && "selected"}`}
                  onClick={this.selected}
                  style={{
                    backgroundImage: `url(https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${artwork_source}.png)`,
                  }}
                ></button>
              );
            })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default EditGallery;
