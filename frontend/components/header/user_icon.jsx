import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class UserIcon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true
        }

        this.toggleIcon = this.toggleIcon.bind(this)
        this.displayIcon = this.displayIcon.bind(this)
    }

    toggleIcon() {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    displayIcon(logout, currentUser) {
        return (
            <div className='user-icon-dropdown-content'>
                <div className='user-display'>
                    {currentUser.profile_image_url ? <img className="user-icon-big" src={currentUser.profile_image_url}></img> : <FontAwesomeIcon className="dropdown-no-user-icon" icon={['fa', 'user-circle']} />}
                    
                    <div className="user-info">
                        <div className="user-name">{currentUser.first_name + " " + currentUser.last_name}</div>
                        <div className="user-email">{currentUser.email}</div>
                        <button>Manage your Goghgle Account</button>
                    </div>
                </div>

                <div className="user-icon-dropdown-links">
                    <button onClick={logout}>Sign out</button>
                </div>
            </div>
        )
    }

    render() {
        const {logout, currentUser} = this.props;
        return (
            <button className='user-icon-container'>
                <div className='user-icon-dropdown' onClick={this.toggleIcon}>
                    {currentUser.profile_image_url ? <img className="user-icon" src={currentUser.profile_image_url}></img> : <FontAwesomeIcon className="dropdown-no-user-icon" icon={['fa', 'user-circle']} />}
                    {!this.state.hidden ? this.displayIcon(logout, currentUser) : ""}
                </div>
            </button>
        )
    }
}

export default UserIcon