import React from "react";
import { Link } from "react-router-dom";
// import { Checkmark } from "react-checkmark";

const GalleryItem = ({ gallery }) => {
  // const content = gallery.firstArtwork === undefined ? 'http://www.pbs.org/newshour/data/bubble-quiz/images/facebook-square.svg' : gallery.firstArtwork;
  // console.log(props)
  // debugger;

  if (!gallery) {
    return <></>;
  }

  const { id, title, artwork_title } = gallery;
  return (
    <div id={id} className={"gallery-item-container"}>
      {/* <Checkmark size="large" /> */}
      <Link
        to={`/favorite/group/${id}`}
        src={artwork_title}
        className={"gallery-item"}
      >
        <img
          src={`https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${artwork_title
            .toLowerCase()
            .replace(/([ |%20])/g, "_")}.png`}
          style={{ width: 300, height: 300 }}
        />
      </Link>
    </div>
  );
};

export default GalleryItem;
