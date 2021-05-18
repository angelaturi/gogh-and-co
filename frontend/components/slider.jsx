import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

class Slider extends React.Component {
    constructor(props) {
        super(props)
        // this.props.setCurrentColor(colorParam)
        // const centerItem = this.props.type === 'gogh-color' ? document.querySelector(`.${this.props.type} .green`) : '';
        // this.moveSlider(centerItem);
    }

    state = {
        currentPosition: 0,
        pos: {x: 0, y: 0},
        dragging: false,
        relative: null
    }

    getInitialPosition = (e) => {
        const target = e && e.currentTarget ? $(e.currentTarget) : $(e);
        if (!target) {
            return;
        }
        
        //get the position of the item
        const divPosition = target.position().left-435;
        if(!this.state.currentPosition){
            this.setState({currentPosition: divPosition});
            $(`.${this.props.type}`).animate({ left: `+=${divPosition}`}, 300);
        } else {
            this.props.colorPicked(target.prop('id'));
            //send selection to parent;
            const move = divPosition - this.state.currentPosition;
            const direction = move > 0 ? `-=${Math.abs(move)}` : `+=${Math.abs(move)}`;
            this.setState({currentPosition: divPosition});
            $(`.${this.props.type}`).animate({ left: `${direction}`}, 300);
        }
    }

    

    componentDidMount = () => {
        //get green item
        try {
            this.state.currentPosition = (props.colors.indexOf(props.selected) + 1) * 80 - 40
        }catch(e){
            console.log(e)
        }
        
    }

    componentDidUpdate = (props, state) => {
        if (this.state.dragging && !state.dragging) {
        document.addEventListener('mousemove', this.onMouseMove)
        document.addEventListener('mouseup', this.onMouseUp)
        } else if (!this.state.dragging && state.dragging) {
        document.removeEventListener('mousemove', this.onMouseMove)
        document.removeEventListener('mouseup', this.onMouseUp)
        }
    }

    onMouseDown = (e) => {
        // only left mouse button
        if (e.button !== 0) return
        var pos = $(ReactDOM.findDOMNode(this)).offset()
        this.setState({
        dragging: true,
        relative: {
            x: e.pageX - pos.left,
            y: 0
        }
        })
        e.stopPropagation()
        e.preventDefault()
    }

    onMouseUp = (e) => {
        this.setState({dragging: false})
        e.stopPropagation()
        e.preventDefault()
    }

    onMouseMove = (e) => {
        if (!this.state.dragging) return
        this.setState({
        pos: {
            x: e.pageX - this.state.relative.x,
            y: 0
        }
        })
        e.stopPropagation()
        e.preventDefault()
    }
    
    render() {
        return (
            <div className="slider-container">
                <div className={this.props.type} onMouseDown={(e) => this.onMouseDown(e)} style={{left: this.state.pos.x + "px",
                        top: this.state.pos.y + "px"}}>
                    {this.props.items.map((item, idx)=> {
                        return (
                        this.props.type === "gogh-color" ? 
                        <div key={idx} // onClick={(e) => this.onMouseDown(e)}
                        id={item} className={item}></div> :
                        <div key={idx} className={"timeline"}><span>{item}</span></div>
                        )
                    })}
                </div>
                <div className="arrow"></div>
            </div>
        )
    }
}
export default Slider

// const Slider() {
    
//     const [sliderState, setSliderState] = useState({
//     })
    
//     state = {
//         currentPosition: 0,
        
//     }

//     moveSlider = (e) => {
//         const target = e && e.currentTarget ? $(e.currentTarget) : $(e);
//         if (!target) {
//             return;
//         }
        
//         //get the position of the item
//         const divPosition = target.position().left-435;
//         if(!this.state.currentPosition){
//             this.setState({currentPosition: divPosition});
//             $(`.${this.props.type}`).animate({ left: `+=${divPosition}`}, 300);
//         } else {
//             this.props.colorPicked(target.prop('id'));
//             //send selection to parent;
//             const move = divPosition - this.state.currentPosition;
//             const direction = move > 0 ? `-=${Math.abs(move)}` : `+=${Math.abs(move)}`;
//             this.setState({currentPosition: divPosition});
//             $(`.${this.props.type}`).animate({ left: `${direction}`}, 300);
//         }
//     }



//     componentDidMount = () => {
//         //get green item
//         try {
//             const centerItem = this.props.type === 'gogh-color' ? document.querySelector(`.${this.props.type} .green`) : '';
//             this.moveSlider(centerItem);
//         }catch(e){
//             console.log(e)
//         }
        
//     }
    
    
//     return (
//         <div className="slider-container">
//             <div className={this.props.type}>
//                 {this.props.items.map((item, idx)=> {
//                     return (
//                     this.props.type === "gogh-color" ? 
//                     <div key={idx} onDrag={(e) => this.moveSlider(e)} id={item} className={item}></div> :
//                     <div key={idx} className={"timeline"}><span>{item}</span></div>
//                     )
//                 })}
//             </div>
//             <div className="center">|</div>
//         </div>
//     )
    
// }
// export default Slider