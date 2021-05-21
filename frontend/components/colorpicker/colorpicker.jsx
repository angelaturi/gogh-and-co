import React, { Component } from "react";
import $ from 'jquery';
import './colorpicker.css';
import {Link} from 'react-router-dom'

// const colors = ['yellow','green','teal','blue','purple','pink','red','orange'];

class Colorpicker extends React.Component {
	constructor(props) {
		super(props)
	}

	expandColor = (e) => {
		e.preventDefault();
		const selected = $(e.currentTarget);
		$('#colorpicker .box').removeClass('open');
		$(selected).addClass('open');
	}

	componentDidMount = () => {
		$('#colorpicker .box').first().addClass('open');
	}

	render() {
		return (
			<div id="colorpicker" className="colorpicker">
				{this.props.colors.map((singleColor, idx) => {
					return <Link to={`/color?color=${singleColor}`} key={idx} onMouseOver={(e) => this.expandColor(e)} className={"box box-color-" + (singleColor)}>
						<h1 className="color-header">{singleColor}</h1>
					</Link>
				})}
			</div>
		);
	}
}

export default Colorpicker;
