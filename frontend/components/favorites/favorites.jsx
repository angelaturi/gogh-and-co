import React from 'react'

class Favorites extends React.Component {
    constructor(props) {
        super(props)
        debugger
        this.state = {
            favorites: []
        }
    }

    componentDidMount() {
        debugger
        const favorites = this.props.receiveFavorites()
        this.setState({favorites: favorites})
        // console.log(this.state)
    }

    render() {
        return (
            <div>
                {this.state.favorites.first.title}
                <div>
                    {this.props.favorites.map((artwork, idx)=> {
                    let artwork_source = artwork.title.toLowerCase().replace(/([ |%20])/g, "_")
                    return (<Link to={`/artwork/${artwork.id}`} key={idx} className={"artwork"} style={{
                                backgroundImage: `url(https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${artwork_source}.png)`
                                }}>
                            {/* <div>{artwork.title}
                            </div> */}
                            </Link>)
                })}
                </div>
            </div>
            
        )
    }
}

export default Favorites