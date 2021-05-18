import React from 'react';

const GalleryItem = ({gallery}) => {
    const content = gallery.firstArtwork === undefined ? 'http://www.pbs.org/newshour/data/bubble-quiz/images/facebook-square.svg' : gallery.firstArtwork;
    
    return (
        <li id={gallery.id}>
            <img src={content}></img>
            <span>
                <div>{collection.title}</div>
            </span>
        </li>
    )
}

export default GalleryItem;