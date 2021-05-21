// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

// class Slider extends React.Component {
//     constructor(props) {
//         super(props)
//         // this.props.setCurrentColor(colorParam)
//         // const centerItem = this.props.type === 'gogh-color' ? document.querySelector(`.${this.props.type} .green`) : '';
//         // this.moveSlider(centerItem);

//         // let current = this.props.items.find(
//         //   (item) => item.id === parseInt(this.props.match.params.id)
//         // );
//         // this.props.setCurrent(current);
//     }

//     state = {
//         currentPosition: 0,
//         pos: {x: 0, y: 0},
//         dragging: false,
//         relative: null
//     }

//     getInitialPosition = (e) => {
//         // const target = e && e.currentTarget ? $(e.currentTarget) : $(e);
//         // if (!target) {
//         //     return;
//         // }
        
//         // //get the position of the item
//         // const divPosition = target.position().left-435;
//         // if(!this.state.currentPosition){
//         //     this.setState({currentPosition: divPosition});
//         //     $(`.${this.props.type}`).animate({ left: `+=${divPosition}`}, 300);
//         // } else {
//         //     this.props.colorPicked(target.prop('id'));
//         //     //send selection to parent;
//         //     const move = divPosition - this.state.currentPosition;
//         //     const direction = move > 0 ? `-=${Math.abs(move)}` : `+=${Math.abs(move)}`;
//         //     this.setState({currentPosition: divPosition});
//         //     $(`.${this.props.type}`).animate({ left: `${direction}`}, 300);
//         // }
//     }

    

//     componentDidMount = () => {
//         //get green item
//         try {
//             const currentPosition = (this.props.items.indexOf("white") + 1) * 80 - 40
//             const posx = currentPosition;
//             this.setState({ ...this.state, currentPosition, pos: {...this.state.pos, x: posx}});
//         }catch(e){
//             console.log(e)
//         }
        
//     }

//     componentDidUpdate = (props, state) => {
//         if (this.state.dragging && !state.dragging) {
//         document.addEventListener('mousemove', this.onMouseMove)
//         document.addEventListener('mouseup', this.onMouseUp)
//         } else if (!this.state.dragging && state.dragging) {
//         document.removeEventListener('mousemove', this.onMouseMove)
//         document.removeEventListener('mouseup', this.onMouseUp)
//         }
//     }

//     onMouseDown = (e) => {
//         // only left mouse button
//         if (e.button !== 0) return
//         var pos = $(ReactDOM.findDOMNode(this)).offset()
//         this.setState({
//         dragging: true,
//         relative: {
//             x: e.pageX - pos.left,
//             y: 0
//         }
//         })
//         e.stopPropagation()
//         e.preventDefault()
//     }

//     onMouseUp = (e) => {
//         this.setState({dragging: false})
//         e.stopPropagation()
//         e.preventDefault()
//     }

//     onMouseMove = (e) => {
//         if (!this.state.dragging) return
//         this.setState({
//         pos: {
//             x: e.pageX - this.state.relative.x,
//             y: 0
//         }
//         })
//         e.stopPropagation()
//         e.preventDefault()
//     }
    
//     render() {
//         return (
//             <div className="slider-container">
//                 <div className={this.props.type} onMouseDown={(e) => this.onMouseDown(e)} style={{left: this.state.pos.x + "px",
//                         top: this.state.pos.y + "px"}}>
//                     {this.props.items.map((item, idx)=> {
//                         return (
//                         this.props.type === "gogh-color" ? 
//                         <div key={idx} // onClick={(e) => this.onMouseDown(e)}
//                         id={item} className={item}></div> :
//                         <div key={idx} className={"timeline"}><span>{item}</span></div>
//                         )
//                     })}
//                 </div>
//                 <div className="arrow"></div>
//             </div>
//         )
//     }
// }
// export default Slider

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

// import React from "react";
// import $ from "jquery";

// class Slider extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   state = {
//     currentPosition: 0,
//   };

//   moveSlider = (e) => {
//     const target = e && e.currentTarget ? $(e.currentTarget) : $(e);
//     if (!target) {
//       return;
//     }

//     //get the position of the item
//     const divPosition = target.position().left - 435;
//     if (!this.state.currentPosition) {
//       this.setState({ currentPosition: divPosition });
//       $(`.${this.props.type}`).animate({ left: `+=${divPosition}` }, 2000);
//     } else {
//       this.props.setCurrent(target.prop("id"));
//       //send selection to parent;
//       const move = divPosition - this.state.currentPosition;
//       const direction =
//         move > 0 ? `-=${Math.abs(move)}` : `+=${Math.abs(move)}`;
//       this.setState({ currentPosition: divPosition });
//       $(`.${this.props.type}`).animate({ left: `${direction}` }, 2000);
//     }
//   };

//   componentDidMount = () => {
//     //get green item
//     try {
//       const centerItem =
//         this.props.type === "gogh-color"
//           ? document.querySelector(`.${this.props.type} .white`)
//           : "";
//       this.moveSlider(centerItem);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   render() {
//     return (
//       <div className="slider-container">
//         <div className={this.props.type}>
//           {this.props.items.map((item, idx) => {
//             return this.props.type === "gogh-color" ? (
//               <div
//                 key={idx}
//                 onClick={(e) => this.moveSlider(e)}
//                 id={item}
//                 className={item}
//               ></div>
//             ) : (
//               <div key={idx} className={"timeline"}>
//                 <span>{item}</span>
//               </div>
//             );
//           })}
//         </div>
//         <div className="center">|</div>
//       </div>
//     );
//   }
// }
// export default Slider;


import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";

// One item component
// selected prop will be passed
const MenuItem = ({ item, selected, type }) => {
//   return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;

return type === "gogh-color" ? (
            <div
            id={item}
            className={item}
            ></div>
        ) : (
            <div className={"timeline"}>
            <span>{item}</span>
            </div>)
};

// All items component
// Important! add unique key
export const Menu = (items, selected, type) => {

    return (<div className="slider-container">
        <div className={type}>
          {items.map((item, idx) => {
              return <MenuItem item={item} key={idx} selected={selected} type={type}/>;
          })}
        </div>
        <div className="center">|</div>
      </div>)
}

// const Arrow = ({ text, className }) => {
//   return <div className={className}>{text}</div>;
// };

// const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
// const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const selected = "item1";

class Slider extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(props.items, props.selected, props.type);
  }

  state = {
    selected,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div className="Slider">
        <ScrollMenu
          data={menu}
        //   arrowLeft={ArrowLeft}
        //   arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default Slider;