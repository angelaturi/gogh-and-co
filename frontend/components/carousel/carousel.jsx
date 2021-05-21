import React, { Component, createRef } from "react";
import "./carousel.css";
import $ from "jquery";
import { Link } from "react-router-dom";

const carouselClass = [
  "prevLeftSecond",
  "prev",
  "selected",
  "next",
  "nextRightSecond",
];

class Carousel extends React.Component {
	constructor(props) {
		super(props)
	}

  state = {
    images: [],
    imageArray: [],
  };

  buildImageArray = () => {
    if (!this.state.images || this.state.images.length == 0) {
      return;
    }

    const imageCollection = [];
    this.state.images.forEach((image, idx)=> {
		imageCollection.push({
		  ...image, 
		  class: carouselClass[idx],
	})})
    this.setState({ imageArray: imageCollection });
  };

  moveToSelected = (e) => {
    e.preventDefault();
    const selected = $(e.currentTarget);

    // debugger
    const next = $(selected).next();
    const prev = $(selected).prev();
    const prevSecond = $(prev).prev();
    const nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass("hideRight");
    $(prevSecond).prevAll().removeClass().addClass("hideLeft");
  };

  handleHover = (e) => {
	  e.preventDefault()
	  $(".carousel-item").removeClass("selected")
	  e.currentTarget.addClass("selected")
  }

  componentDidMount = () => {
    // debugger
    this.setState({ images: this.props.images }, () => {
      this.buildImageArray();
    });
  };

  render() {
    const imageArray = this.state.imageArray;
    return (
      <main>
        <div id="carousel" className="carousel">
          {imageArray && imageArray.length > 0
            ? imageArray.map((singleImage, idx) => (
                <div
                  key={idx}
                  onMouseOver={(e) => this.moveToSelected(e)}
					// onMouseOver={(e) => this.handleHover(e)}
				//   className={`carousel-item`}
                  className={singleImage.class}
                >
                  <Link to={`/artwork/${singleImage.id}`}>
                    <img
					  src={`https://active-storage-gogh-and-co-dev.s3.amazonaws.com/${singleImage.title
                        .toLowerCase()
                        .replace(/([ |%20])/g, "_")}.png`}
                      id="image"
					  alt={singleImage.title}
                    />
                  </Link>
                  <div className="title">{singleImage.title}</div>
                </div>
              ))
            : ""}
        </div>
      </main>
    );
  }
}

export default Carousel;
