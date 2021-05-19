import React from 'react';
import {Link} from 'react-router-dom';

const GalleryItem = (props) => {
    // const content = gallery.firstArtwork === undefined ? 'http://www.pbs.org/newshour/data/bubble-quiz/images/facebook-square.svg' : gallery.firstArtwork;
    console.log(props)
    let currentGallery = props.gallery
    if (currentGallery) {
        return (
          <li id={currentGallery.id} className={"gallery-item-container"}>
            <Link
              to={`/gallery/${currentGallery.id}`}
              src={currentGallery}
              className={"gallery-item"}>
              <span>
                <div>{currentGallery.title}</div>
              </span>
            </Link>
          </li>
        );
    } else {
        return (
            <>
            </>
        )
    }
}

export default GalleryItem;