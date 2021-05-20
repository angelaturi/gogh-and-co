import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Favorites from "./favorites";
import Galleries from "./galleries";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("props in did==>>", this.props);
    const { currentUser } = this.props;
    this.props.receiveFavorites(currentUser.id);
    this.props.receiveGalleries(currentUser.id);
  }

  state = {
    showFavorites: true,
  };

  toggle = (isFavorite) => {
    this.setState({
      showFavorites: isFavorite,
    });
  };

  render() {
    const { galleries, favorites } = this.props;
    return (
      <section className={"view"}>
        <header className={"profile-header"}>
          <FontAwesomeIcon
            className="dropdown-no-user-icon"
            icon={["fa", "user-circle"]}
          />
        </header>
        <nav className={"gogh-nav"}>
          <Link
            to={"?tab=fv"}
            onClick={() => this.toggle(true)}
            className={`gogh-tab ${this.state.showFavorites && "selected"}`}
          >
            Favorites
          </Link>
          <Link
            to={"?tab=gl"}
            onClick={() => this.toggle()}
            className={`gogh-tab ${!this.state.showFavorites && "selected"}`}
          >
            Galleries
          </Link>
        </nav>
        <div className={"gogh-tab-content"}>
          {this.state.showFavorites && (
            <Favorites
              favorites={favorites}
              //   favorites={[
              //     {
              //       id: 0,
              //       title: "The Starry Night",
              //       creator_id: 1,
              //       date_created: 1889,
              //       color: "blue",
              //       style: "Post-Impressionism",
              //       medium: "Oil on canvas",
              //       partner_organization: "MoMA The Museum of Modern Art",
              //       favorited: false,
              //     },
              //     {
              //       id: 1,
              //       title: "Panel for Edwin R. Campbell No. 4",
              //       creator_id: 2,
              //       date_created: 1914,
              //       color: "blue",
              //       style: "Expressionism",
              //       medium: "Oil on canvas",
              //       partner_organization: "MoMA The Museum of Modern Art",
              //       favorited: false,
              //     },
              //     {
              //       id: 2,
              //       title: "The Persistence of Memory",
              //       creator_id: 3,
              //       date_created: 1931,
              //       color: "brown",
              //       style: "Surrealism",
              //       medium: "Oil on canvas",
              //       partner_organization: "MoMA The Museum of Modern Art",
              //       favorited: false,
              //     },
              //   ]}
            />
          )}
          {!this.state.showFavorites && (
            <Galleries
              galleries={[
                {
                  id: 1,
                  title: "test",
                  description: "testing123",
                  user_id: 8,
                  artwork_title: "The Starry Night",
                },
              ]}
              //   galleries={galleries}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Profile;
