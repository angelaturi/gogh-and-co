import React from 'react';
import {Link} from 'react-router-dom';

class GalleryItem extends React.Component {
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
                    {this.props.favorites.((gallery, idx)=> {
                        
                })}
                </div>
                <Link to={"/favorite/create"}className={"add-button"}>+</Link>
            </div>
        )
    }
}

export default GalleryItem