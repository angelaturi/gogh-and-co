import React from 'react';
import {withRouter} from 'react-router';
import HeaderContainer from './header/header_container';

class Explore extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <section className="explore-by-time-color">
                <div className="explore-inner">
                    <div className="explore-header">
                        <h1>Explore by time and color</h1>
                    </div>
                    <div className="explore-body">
                        <div className="explore-time">
                            <span>
                                <div className="explore-time-body">
                                    <div style={{backgroundImage: `url("https://lh6.ggpht.com/Gxlhom2fgKVGBQ6Bvt2C0L5b9D2XKvup23edcgkOW3m9I1P7lwH3mIiJBq8=w1064-c-h598-rw-v1")`}}>
                                    </div>
                                </div>
                                <div className="explore-time-header">
                                    <div >
                                        <h1>Time</h1>
                                        <h3>Navigate from artworks of the 17th century to the present day</h3>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className="explore-color">
                            <span>
                                <div className="explore-color-body">
                                    <div style={{backgroundImage: `url("https://lh4.ggpht.com/KFPaOIydXM9DRMTZ68AgZ5Ih6aVtxoE3TQEC1HSLmN30SIjE0OjMOs4Z_XSl=w1064-c-h598-rw-v1")`}}>
                                    </div>
                                </div>
                                <div className="explore-color-header">
                                    <div >
                                        <h1>Color</h1>
                                        <h3>Let the colors guide you through artworks</h3>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
    }
}

export default Explore