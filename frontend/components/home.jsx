import React from 'react';
import {withRouter} from 'react-router';
import HeaderContainer from './header/header_container'
import Carousel from './carousel/carousel';
import Colorpicker from './colorpicker/colorpicker'


class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let d = new Date();
        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const finalDate = `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`;

        const images = [{image:'https://picsum.photos/id/1/200/300', title: 'test'}, {image:'https://picsum.photos/id/1/200/300', title: 'test'},{image:'https://picsum.photos/id/1/200/300', title: 'test'}, {image:'https://picsum.photos/id/1/200/300', title: 'test'}, {image:'https://picsum.photos/id/1/200/300', title: 'test'}]
        return (
            <div className="main-content">
                <HeaderContainer />
                <div className="main-content-inner"> 
                    <section className="top-picks">
                        <div className="top-picks-inner">
                            <div className="top-picks-header">
                                <div className="top-picks-header-inner">
                                    <h2><span className="span-1">Today's top picks</span><span className="span-2">{finalDate}</span></h2>
                                </div>
                            </div>
                        <div className="top-picks-carousel">
                            <div className="carousel-inner">
                                <Carousel images={images}/>
                            </div>
                        </div>

                            {/* <div className="container">
                            <div className="wgh-slider">
                                <input className="wgh-slider-target" type="radio" id="slide-1" name="slider"/>
                                <input className="wgh-slider-target" type="radio" id="slide-2" name="slider"/>
                                <input className="wgh-slider-target" type="radio" id="slide-3" name="slider"/> 
                                <input className="wgh-slider-target" type="radio" id="slide-4" name="slider"/>
                                <input className="wgh-slider-target" type="radio" id="slide-5" name="slider"/>
                                <div className="wgh-slider__viewport">
                                <div className="wgh-slider__viewbox">
                                    <div className="wgh-slider__container">
                                    <div className="wgh-slider-item">
                                        <div className="wgh-slider-item__inner">
                                        <figure id="xf"><img className="wgh-slider-item-figure__image" src={window.placeholderImg} />
                                        </figure>
                                        <label className="wgh-slider-item__trigger" id="slide-1" title="Show product 1"></label>
                                        </div>
                                    </div>
                                    <div className="wgh-slider-item">
                                        <div className="wgh-slider-item__inner">
                                        <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={window.placeholderImg} />
                                        </figure>
                                        <label className="wgh-slider-item__trigger" id="slide-2" title="Show product 2"></label>
                                        </div>
                                    </div>
                                    <div className="wgh-slider-item">
                                        <div className="wgh-slider-item__inner">
                                        <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={window.placeholderImg} />
                                        </figure>
                                        <label className="wgh-slider-item__trigger" id="slide-3" title="Show product 3"></label>
                                        </div>
                                    </div>
                                    <div className="wgh-slider-item">
                                        <div className="wgh-slider-item__inner">
                                        <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={window.placeholderImg} />
                                        </figure>
                                        <label className="wgh-slider-item__trigger" id="slide-4" title="Show product 4"></label>
                                        </div>
                                    </div>
                                    <div className="wgh-slider-item">
                                        <div className="wgh-slider-item__inner">
                                        <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={window.placeholderImg} />
                                        </figure>
                                        <label className="wgh-slider-item__trigger" id="slide-5" title="Show product 5"></label>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div> */}

                        </div>
                    </section>
                    <section className="fav-color">
                        <div className="fav-color-inner">
                            <div className="fav-color-header">
                                <div className="fav-color-header-inner">
                                    <h2><span>What's your favorite color?</span></h2>
                                    <h3>Discover artworks by color</h3>
                                </div>
                            </div>
                            <div className="color-boxes">
                                <div className="color-picker-box">
                                    <Colorpicker />
                                </div>
                                {/* <div className="color-cards">
                                    <div className="green">
                                        <a className="green-card">
                                            <div className="title-div">
                                                {/* <h3 className="title">Green</h3> */}
                                            {/* </div>
                                        </a>
                                    </div>
                                     <div className="pink">
                                        <a className="pink-card">
                                            <div className="title"> */}
                                                {/* <h3 className="title">Pink</h3> */}
                                            {/* </div>
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                    </section>
                    {/* <section className="museum-home">
                        <div className="museum-home-inner">
                            <div className="museum-home-second-inner">
                                <div className="museum-home-third-inner">
                                    <div className="museum-home-words">
                                        <h3>Explore a museum from home</h3>
                                        <div>
                                            <div className="museum-icon"></div>
                                            <div className="musuem-description">
                                                <h4>Found in 1929, The Museum of Modern Art (MoMA) in midtown Manhattan was the first museum devoted to the modern era. Today's MoMA's rich and varied collection offers a panoramic overview of modern and contemporary art, from the innovative European painting and sculpture of the 1880s to today's film, design, and performance art.</h4>
                                                <button>See the collection</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* <section className="explore-street">
                        <div className="explore-street-header">
                            <h2><span>Explore with Street View</span></h2>
                            <h3>From backstage at the Paris Opera to the top of the Taj Mahal</h3>
                        </div>
                    </section> */}
                </div>
            </div>
        )
    }
}

export default withRouter(Home);