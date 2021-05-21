import React from "react";

class NewGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    newGallery: [],
    favorites: [],
    selectedImages: [],
    continueClicked: false,
    title: "",
    description: "",
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
    this.props.receiveProfileFavoritesThunk();
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
    // this.setState({ favorites });
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

  createGallery = () => {
    const { currentUser, createGalleryThunk } = this.props;
    const { title, description, selectedImages } = this.state;
    const { id } = currentUser;
    createGalleryThunk(
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
    const { continueClicked, selectedImages, title, description } = this.state;
    const { favorites } = this.props;
    return (
      <div>
        <div>
          {continueClicked ? (
            <div className="form-header">
              <span onClick={() => this.props.history.push("/profile?tab=gl")}>
                X
              </span>
              <span onClick={this.toggleContinue}>+</span>
              <button disabled={!title} onClick={this.createGallery}>
                Done
              </button>
            </div>
          ) : (
            <div className="form-header">
              <span onClick={() => this.props.history.push("/profile?tab=gl")}>
                X
              </span>
              <div>Select items</div>
              <button
                disabled={!selectedImages.length}
                onClick={this.toggleContinue}
              >
                Continue
              </button>
            </div>
          )}
        </div>

        {continueClicked ? (
          <form onSubmit={this.createGallery}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              required
              maxLength={150}
              onChange={this.updateForm}
            />
            <aside>{title.length}/150</aside>
            <input
              type="text"
              name="description"
              placeholder="Description"
              maxLength={800}
              onChange={this.updateForm}
            />
            <aside>{description.length}/800</aside>
          </form>
        ) : (
          <div className={"favorite-grid"}>
            {favorites.map((artwork, idx) => {
              let artwork_source = artwork.title
                .toLowerCase()
                .replace(/([ |%20])/g, "_");
              return (
                <img
                  //   name={`https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${artwork_source}.png`}
                  id={artwork.id}
                  key={idx}
                  className={"artwork"}
                  onClick={this.selected}
                  style={{
                    backgroundImage: `url(https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${artwork_source}.png)`,
                  }}
                ></img>
              );
            })}
          </div>
        )}
      </div>
    );

    //testing
    //testing
  }
}

export default NewGallery;
