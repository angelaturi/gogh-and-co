import React from "react";
import { Link } from "react-router-dom";

class EditGallery extends React.Component {
  constructor(props) {
    super(props);
    // const { title, description, artworks } = this.props.gallery;
    this.state = {
      artworks: [],
      title: "",
      description: "",
    };
  }

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

  componentDidUpdate(prevProps) {
    const { gallery } = this.props;
    if (
      gallery &&
      JSON.stringify(prevProps.gallery) !== JSON.stringify(gallery)
    ) {
      this.setState({ ...gallery });
    }
  }

  componentDidMount() {
    this.props.receiveSingleGalleryThunk(this.props.match.params.id);
    /*const favorites = [
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
    this.setState({ favorites });*/
  }

  selected = (selectedArtwork) => {
    const { artworks } = this.state;
    console.log("id==>>", selectedArtwork);
    if (artworks.some((art) => art.id == selectedArtwork.id)) {
      this.setState({
        artworks: artworks.filter(
          (artwork) => artwork.id != selectedArtwork.id
        ),
      });
    } else {
      this.setState({ artworks: artworks.concat(selectedArtwork) });
    }
  };

  updateForm = (e) => this.setState({ [e.target.name]: e.target.value });

  toggleContinue = () =>
    this.setState((prev) => ({ continueClicked: !prev.continueClicked }));

  updateGallery = () => {
    const { currentUser, updateGalleryThunk } = this.props;
    const { title, description, artworks, id } = this.state;
    updateGalleryThunk(
      {
        id,
        title,
        description,
        user_id: currentUser.id,
      },
      artworks.map((art) => art.id)
    );
    this.props.history.push("/profile?tab=gl");
  };

  render() {
    console.log(
      "artworks edit gallery==>>",
      this.props,
      "state==>>",
      this.state
    );
    const { title, description, artworks } = this.state;
    const { gallery } = this.props;
    return (
      <React.Fragment>
        <div className={"gogh-action-bar"}>
          <Link to={"/profile?tab=gl"} className={"close"}>
            X
          </Link>
          <button
            onClick={this.updateGallery}
            className={"secondary"}
            disabled={!title}
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
                value={title}
                required
                maxLength={150}
                onChange={this.updateForm}
              />
              <div className={"tool-tip"}>{title.length}/150</div>
            </div>
            <div className={"field-wrapper"}>
              <input
                type="text"
                name="description"
                value={description}
                placeholder="Description"
                maxLength={800}
                onChange={this.updateForm}
              />
              <div className={"tool-tip"}>{description.length}/800</div>
            </div>
          </form>
          <div className={"gogh-gallery-grid"}>
            {gallery.artworks?.map((artwork, idx, arr) => {
              const artworkSelected = artworks.some(
                (art) => art.id === artwork.id
              );
              let artwork_source = artwork.title
                .toLowerCase()
                .replace(/([ |%20])/g, "_");
              return (
                <button
                  key={idx}
                  id={artwork.id}
                  className={`artwork ${artworkSelected && "selected"}`}
                  onClick={() => this.selected(artwork)}
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
