import React from 'react';

class Grid extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const art = this.props.artworks;
        debugger
        return (
            <div className={"artwork-grid"}>
                {this.props.artworks.map((artwork, idx)=> {
                    let artwork_source = artwork.title.toLowerCase();
                    artwork_source.replace(/([ |%20])/g, "_")
                    return (<div key={idx}>
                            {artwork.title}
                            <img src={`https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${artwork_source}.png`} alt=""/>
                        </div>)
                })}
            </div>
        )
    }
}

export default Grid