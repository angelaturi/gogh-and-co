import React from 'react';
import FavoritesContainer from './favorites/favorites_container';
import Galleries from './galleries/galleries';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        showFavorites: false,
        showGalleries: false
    }

    toggle = (type) => {
        switch (type) {
            case 'favorites':
                this.setState({showFavorites: true,
        showGalleries: false})
                break; 
            case 'galleries':
                this.setState({showFavorites: false,
        showGalleries: true})
                break;
        }
    }

    componentDidMount() {
        this.setState({showFavorites: true,
        showGalleries: false})
    }

    render() {
        return (
            <React.Fragment>
                <div className="profile-header">
                    some header with styling
                    <div>
                        <Link to={"?tab=fv"} onClick={() => this.toggle("favorites")}>Favorite</Link>
                        <Link to={"?tab=gl"} onClick={() => this.toggle("galleries")}>Galleries</Link>
                    </div>
                </div>
                <div>
                    {this.state.showFavorites ? <FavoritesContainer /> : ""}
                    {this.state.showGalleries ? <Galleries /> : ""}
                </div>
            </React.Fragment>
        )
    }
}

export default Profile