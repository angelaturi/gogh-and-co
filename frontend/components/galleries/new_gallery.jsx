import React from 'react';
import {Link} from 'react-router-dom';

class NewGallery extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        newGallery: []
    }

    toggle = (id) => {
        const gallery = [...this.state.newGallery];
        const existing = gallery.indexOf(id);
        if (existing > -1){
            gallery.splice(existing,1);
        }else{
            gallery.push(id)
        }
        this.setState({newGallery: gallery});
    }

    isChecked = (id) => {
        return this.state.newGallery.includes(id);
    }

    componentDidMount() {
        debugger
        const galleries = this.props.receiveGalleries()
        this.setState({galleries: galleries})
    }




    render() {
        return (
            
            <div>
                <div>
                    {this.props.favorites.map((artwork, idx)=> {
                    let artwork_source = artwork.title.toLowerCase().replace(/([ |%20])/g, "_")
                    return (<Link to={`/artwork/${artwork.id}`} key={idx} className={"artwork"} style={{
                                backgroundImage: `url(https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${artwork_source}.png)`
                                }}>
                                    <div className="this needs to be position relative">
                                        <div className="add style to position it in the corner">{this.isChecked(artwork.id) ? <i class="fas fa-check-circle"></i> : <i class="icon-circle-blank"></i>}</div>
                                        <img onClick={()=>this.toggle(artwork.id)}>
                                    </div>
                                </Link>)
                })}
                </div>
                <div className='new_collection'>
                    <form onSubmit={e => e.preventDefault()}>
                        <input type='text' placeholder='Title' value={title} onChange={this.props._updateForm('title')}/>
                        <aside>{title.length}/150</aside>
                        <input type='text' placeholder='Description' value={description} onChange={this.props._updateForm('description')}/>
                        <aside>{description.length}/800</aside>
                    </form>
                </div>
            </div>
        )
    }
}

export default Galleries