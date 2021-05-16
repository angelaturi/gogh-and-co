import React from 'react';

class Slider extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className={this.props.type}>
                {this.props.items.map((item, idx)=> {
                    return (
                    this.props.type === "gogh-color" ? 
                    <div key={idx} className={item}></div> :
                    <div key={idx} className={"timeline"}><span>{item}</span></div>
                    )
                })}
            </div>
        )
    }
}
export default Slider