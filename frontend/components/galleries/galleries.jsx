import React from 'react';
import {Link} from 'react-router-dom';

class Galleries extends React.Component {
    constructor(props) {
        super(props)
        this.state {
            galleries: []
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
                        return (<GalleryItem key={idx} gallery={gallery}/>)
                })}
                </div>
                <Link to={"/favorite/create"}className={"add-button"}>+</Link>
            </div>
        )
    }
}

export default Galleries