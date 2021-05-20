import React from 'react';
import {Link} from 'react-router-dom'

class Grid extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <section className={"artwork-grid"}>
                {this.props.artworks.map((artwork, idx)=> {
                    console.log(artwork)
                    let artwork_source = artwork.title.toLowerCase().replace(/([ |%20])/g, "_")
                    return (<Link to={`/artwork/${artwork.id}`} key={idx} className={"artwork"} style={{
                                backgroundImage: `url(https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${artwork_source}.png)`
                                }}>
                            {/* <div>{artwork.title}
                            </div> */}
                            </Link>)
                })}
            </section>
        )
    }
}

export default Grid