import React, {Component, createRef} from "react";
import './carousel.css';
import $ from "jquery";

const carouselClass = ['prevLeftSecond','prev','selected','next','nextRightSecond'];

class Carousel extends Component {
	state = {
		images: [],
		imageArray: []
	}

	buildImageArray = () => {
		if (!this.state.images || this.state.images.length == 0){
			return;
		}

		const imageCollection = [];

		for(let x=0; x<this.state.images.length; x++){
			imageCollection.push({
				class: carouselClass[x],
				url: this.state.images[x].image,
				title: this.state.images[x].title
			});
		}
		this.setState({imageArray: imageCollection});
	}

	moveToSelected = (e) => {
		e.preventDefault()
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

		$(nextSecond).nextAll().removeClass().addClass('hideRight');
		$(prevSecond).prevAll().removeClass().addClass('hideLeft');
	}

	componentDidMount = () => {
		// debugger
		this.setState({images: this.props.images}, () => {
			this.buildImageArray();
		});
	}

	render() {
		const imageArray = this.state.imageArray;
		return (
			<main>
				<div id="carousel">
					{imageArray && imageArray.length > 0 ? imageArray.map((singleImage, idx) => (
						<div key={idx} onMouseOver={(e) => this.moveToSelected(e)} className={singleImage.class}>
							<img alt='' src={singleImage.url}/>
							<div className="title">{singleImage.title}</div>
						</div>
					)) : ''}
				</div>
			</main>
		);
	}
}

export default Carousel;
