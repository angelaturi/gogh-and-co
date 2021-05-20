import React from "react";
import { Link, withRouter } from "react-router-dom";
// import { Checkmark } from "react-checkmark";

const GalleryItem = ({ gallery, deleteGallery, history }) => {
  // const content = gallery.firstArtwork === undefined ? 'http://www.pbs.org/newshour/data/bubble-quiz/images/facebook-square.svg' : gallery.firstArtwork;
  // console.log(props)
  // debugger;

  if (!gallery) {
    return <></>;
  }

  const { id, title, artworks } = gallery;
  return (
    <div id={id} className={"gallery-item-container"}>
      {/* <Checkmark size="large" /> */}
      <div>
        <h1>
          {title} - {artworks?.length || 0} -
        </h1>
        <button onClick={() => history.push(`/favorite/edit/${id}`)}>
          Edit gallery
        </button>{" "}
        -<button onClick={() => deleteGallery(id)}>Delete gallery</button>
        {artworks?.map((artwork) => (
          <Link
            key={artwork.id}
            to={`/favorite/group/${id}`}
            className={"gallery-item"}
          >
            <img
              src={`https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${artwork.title
                .toLowerCase()
                .replace(/([ |%20])/g, "_")}.png`}
              style={{ width: 300, height: 300 }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default withRouter(GalleryItem);
