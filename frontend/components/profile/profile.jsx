import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Favorites from './favorites';
import Galleries from './galleries';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.receiveFavorites();
        this.props.receiveGalleries()
    }
    
    state = {
        showFavorites: true,
    }

    toggle = (isFavorite) => {
        this.setState({
            showFavorites: isFavorite
        })
    }

    render() {

        return (
            <section className={"view"}>
                <header className={"profile-header"}>
                    <FontAwesomeIcon className="dropdown-no-user-icon" icon={['fa', 'user-circle']} />
                </header>
                <nav className={"gogh-nav"}>
                    <Link to={"?tab=fv"} onClick={() => this.toggle(true)} className={`gogh-tab ${this.state.showFavorites && "selected"}`}>Favorites</Link>
                    <Link to={"?tab=gl"} onClick={() => this.toggle()} className={`gogh-tab ${!this.state.showFavorites && "selected"}`}>Galleries</Link>
                </nav>
                <div className={"gogh-tab-content"}>
                    {this.state.showFavorites && 
                    <Favorites favorites={this.props.favorites}/>}
                    {!this.state.showFavorites && 
                    <Galleries galleries={this.props.galleries}/>}
                </div>
            </section>
        )
    }
}

export default Profile