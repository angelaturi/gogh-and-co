import React from 'react';
import $ from 'jquery';

class Slider extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        currentPosition: 0,
    }

    moveSlider = (e) => {
        const target = e && e.currentTarget ? $(e.currentTarget) : $(e);
        if (!target) {
            return;
        }
        
        //get the position of the item
        const divPosition = target.position().left-435;
        if(!this.state.currentPosition){
            this.setState({currentPosition: divPosition});
            $(`.${this.props.type}`).animate({ left: `+=${divPosition}`}, 2000);
        } else {
            this.props.colorPicked(target.prop('id'));
            //send selection to parent;
            const move = divPosition - this.state.currentPosition;
            const direction = move > 0 ? `-=${Math.abs(move)}` : `+=${Math.abs(move)}`;
            this.setState({currentPosition: divPosition});
            $(`.${this.props.type}`).animate({ left: `${direction}`}, 2000);
        }
    }

    componentDidMount = () => {
        //get green item
        try {
            const centerItem = this.props.type === 'gogh-color' ? document.querySelector(`.${this.props.type} .green`) : '';
            this.moveSlider(centerItem);
        }catch(e){
            console.log(e)
        }
        
    }
    
    render() {
        return (
            <div className="slider-container">
                <div className={this.props.type}>
                    {this.props.items.map((item, idx)=> {
                        return (
                        this.props.type === "gogh-color" ? 
                        <div key={idx} onClick={(e) => this.moveSlider(e)} id={item} className={item}></div> :
                        <div key={idx} className={"timeline"}><span>{item}</span></div>
                        )
                    })}
                </div>
                <div className="center">|</div>
            </div>
        )
    }
}
export default Slider