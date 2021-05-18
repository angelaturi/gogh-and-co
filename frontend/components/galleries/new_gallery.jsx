import React from 'react';
import {Link} from 'react-router-dom';

class Galleries extends React.Component {
    constructor(props) {
        super(props)
        this.state {
            gallery: []
        }
    }

    componentDidMount() {
        debugger
        const galleries = this.props.receiveGalleries()
        this.setState({galleries: galleries})
        // console.log(this.state)
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.galleries.map((gallery, idx)=> {
                        
                    // let gallery_source = gallery.title.toLowerCase().replace(/([ |%20])/g, "_")
                    // return (<Link to={`/artwork/${gallery.id}`} key={idx} className={"artwork"} style={{
                    //             backgroundImage: `url(https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${gallery_source}.png)`
                    //             }}>
                    //         {/* <div>{artwork.title}
                    //         </div> */}
                    //         </Link>)
                })}
                </div>
            </div>
        )
    }
}

export default Galleries