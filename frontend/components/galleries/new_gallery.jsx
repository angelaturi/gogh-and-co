import React from 'react';
import {Link} from 'react-router-dom';

class NewGallery extends React.Component {
    constructor(props) {
        super(props)
        // this.state {
        //     gallery: []
        // }
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

