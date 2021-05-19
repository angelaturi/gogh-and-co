import React from 'react';
import {Link} from 'react-router-dom';

class Favorites extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <h1>Artwork 
                    <small>{this.props.favorites.length ? this.props.favorites.length : ""}</small>
                </h1>
                <div className={"favorite-grid"}>
                    {this.props.favorites.map((artwork, idx)=> {
                    let artwork_source = artwork.title.toLowerCase().replace(/([ |%20])/g, "_")
                    return (<Link to={`/artwork/${artwork.id}`} key={idx} className={"artwork"} style={{
                                backgroundImage: `url(https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${artwork_source}.png)`
                                }}></Link>)
                })}
                </div>
            </React.Fragment>
            
        )
    }
}

export default Favorites