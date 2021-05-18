import React from 'react';
import {merge} from 'lodash';
import Artworks from '../artworks/artworks_container';
import FormHeader from '../form_header/form_header_container';
import NewGallery from './new_gallery/new_gallery_container';

class FavoriteGallery extends React.Component {
    constructor(props){
        super(props)

        this.defaultState = {
            id: 0,
            title: "",
            description: "",
            collectedArtworks: [],
            toForm: true
        }
        
        this.state = this.defaultState
    }

    componentDidMount() {
        $('.errors').addClass('invisible')
    }

    collectArtworks() {
        this.props.artworks.forEach(artwork => {
            $(`#${artwork.id}`).toggleClass('collected')
        });

        this.setState({
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            collectedArtworks: this.props.artworks.map(artwork => artwork.id)
        })

        this.props.requestFavoriteArtworks();

        $('.artworks ul').off();
        $('.artworks url').on('click', 'li', this.collectArtwork.bind(this))
        $('.favorite_gallery').addClass('invisible');
        $('.form_header').addClass('visible');
        $('.errors').addClass('invisible');
        $('.artworks ul').addClass('collecting')

        window.scrollTo(0,0)
    }

    collectArtwork(e){
        let target = e.currentTarget;
        let state = merge({}, this.state);
        
        let index = state.collectedArtworks.indexOf(parseInt(target.id));

        if(index === -1){
            state.collectedArtworks.push(parseInt(target.id));
        } else {
            state.collectedArtworks.splice(index, 1)
        }

        $(target).toggleClass('collected');
        this.setState(state)
    }

    _toForm(){
        this.setState({toForm: false});
        $('.new_gallery').addClass('visible');
        window.scrollTo(0,0)
    }

    _fromForm(){
        this.setState({toForm: true});
        $('.new_collection').removeClass('visible');
    }

    _submitForm(){
        this.props.updateGallery(
            {
                gallery: {
                    id: this.state.id,
                    title: this.state.title,
                    description: this.state.description
                }
            },
            {
                collectedArtworks: this.state.collectedArtworks
            }
        );

        this._exitForm();
        $('.errors').removeClass('invisible');
    }
        
    _exitForm(){
        $('.form_header').removeClass('visible');
        $('.new_gallery').removeClass('visible');
        $('.favorite_gallery').removeClass('invisible');
        $('.images li').removeClass('collected');
        $('.errors').addClass('invisible');

        $('.artworks ul').off();
        $('.artworks ul').removeClass('collecting')

        this.setState(this.defaultState);
        this.props.requestCurrentGallery(this.props.id);
        this.props.requestGallery(this.props.id);

        $('.artworks ul').on('click', 'li', e => this.props.router.push(`/artworks/${e.currentTarget.id}`))

        window.scrollTo(0,0);
    }

    _updateForm(property){
        return e => this.setState({[property]: e.target.value})
    }

    _delete(){
        this.props.deleteGallery(this.props.id);
        this.props.router.push('/favorites')
    }

    render() {
        const errorItems = this.props.errors.map((err, idx) => (
            <li key={idx}>{err}</li>
        ))

        return (
            <div>
                <FormHeader toForm={this.state.toForm} _toForm={this._toForm.bind(this)} _fromForm={this._fromForm.bind(this)} _submitForm={this._submitForm.bind(this)} _exitForm={this._exitForm.bind(this)} />
                <div className="favorite-gallery">
                    <ul className="errors">
                        {errorItems}
                    </ul>
                    <NewGallery
                        _updateForm={this._updateForm.bind(this)}
                        title={this.state.title}
                        description={this.state.description}
                    />
                    <div className="favorite-gallery-header">
                        <h1>{this.props.title}</h1>
                        <h3>{this.props.description}</h3>
                        <figure>
                            <img src="http://www.freeiconspng.com/uploads/photo-album-icon-png-14.png"></img>
                            <h4>{`${this.props.artworks.length} items`}</h4>
                        </figure>
                        <section>
                            <img src='https://cdn4.iconfinder.com/data/icons/miu/24/editor-pencil-pen-edit-write-glyph-128.png' onClick={this.collectArtworks.bind(this)}/>
                            <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-trash-b-128.png' onClick={this._delete.bind(this)}/>
                        </section> 
                    </div>
                    <Artworks />
                </div>
            </div>
        )
    }
}

export default FavoriteGallery



