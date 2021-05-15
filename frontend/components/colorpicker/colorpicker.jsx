import {Component} from "react";
import $ from 'jquery';

const colors = ['yellow','green','teal','blue','purple','pink','red','orange'];

class Colorpicker extends Component {

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
			<div id="colorpicker">
				{colors.map((singleColor, idx) => {
					return <div key={idx} onClick={(e) => this.expandColor(e)} className={"box box-color-" + (singleColor)}>

					</div>
				})}
			</div>
		);
	}
}

export default Colorpicker;
