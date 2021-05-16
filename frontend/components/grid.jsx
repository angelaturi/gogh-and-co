import React from 'react';
import {Link} from 'react-router-dom'

class Grid extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const art = this.props.artworks;
        debugger
        return (
            <ul className={"artwork-grid"}>
                {this.props.artworks.map((artwork, idx)=> {
                    let artwork_source = artwork.title.toLowerCase().replace(/([ |%20])/g, "_")
                    return (<li key={idx} className={"artwork"}>
                            {artwork.title}
                            <Link to={`/artwork/${artwork.id}`}>
                                <div style={{
                                backgroundImage: `url(https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${artwork_source}.png)`
                                }}></div>
                            </Link>
                        </li>)
                })}
            </ul>
        )
    }
}

export default Grid