import React from 'react'

class Favorites extends React.Component {
    constructor(props) {
        super(props)
        // debugger
    }

    componentDidMount() {
        // debugger
        const favorites = this.props.receiveFavorites()
        this.setState({favorites: favorites})
        // console.log(this.state)
    }

    render() {
        // console.log(this.props)
        const title = this.props.favorites.length ? this.props.favorites[0].title : "No favorites";
        return (
            <div>
                {title}
                <div>
                    {this.props.favorites.map((artwork, idx)=> {
                    let artwork_source = artwork.title.toLowerCase().replace(/([ |%20])/g, "_")
                    return (<Link to={`/artwork/${artwork.id}`} key={idx} className={"artwork"} style={{
                                backgroundImage: `url(https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${artwork_source}.png)`
                                }}></Link>)
                })}
                </div>
            </div>
            
        )
    }
}

export default Favorites