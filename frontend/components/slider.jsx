import React from 'react';

class Slider extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className={this.props.type}>
                {this.props.items.map((item, idx)=> {
                    return (<div key={idx}>{item}</div>)
                })}
            </div>
        )
    }
}
export default Slider