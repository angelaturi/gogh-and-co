import React from 'react';
import {withRouter} from 'react-router';
import HeaderContainer from './header/header_container'
import {Date} from 'prismic-reactjs';
import {format} from 'date-fns-tz';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const date = Date(document.data.date);
        // const formattedDate = format(date, 'MMMM dd, yyyy')
        return (
            <div className="main-content">
                <HeaderContainer />

                <section className="top-picks">
                    <div className="top-picks-inner">
                        <div className="top-picks-header">
                            <div className="top-picks-header-inner">
                                <h2><span className="span-1">Today's top picks</span><span className="span-2">Fri, May 21</span></h2>
                            </div>
                        </div>
                        {/* <div className="top-picks-carousel">
                            <div className="carousel">
                                <div className="carousel-1" style="translate3d(-54.5599px, 0px, 0px) scale3d(0.678112, 0.678112, 1)">
                                    <img src={window.placeholderImg} alt="ph-img"/>
                                </div>
                                <div className="carousel-2">
                                    <img src={window.placeholderImg} alt="ph-img"/>
                                </div>
                                <div className="carousel-3">
                                    <img src={window.placeholderImg} alt="ph-img"/>
                                </div>
                                <div className="carousel-4">
                                    <img src={window.placeholderImg} alt="ph-img"/>
                                </div>
                                <div className="carousel-5">
                                    <img src={window.placeholderImg} alt="ph-img"/>
                                </div>
                            </div>
                        </div> */}

                        <div className="container">
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
                                    <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={window.placeholderImg} alt="The 5th Exotic"/>
                                        <figcaption className="wgh-slider-item-figure__caption"><a href="https://f4.bcbits.com/img/a3905613628_16.jpg">The 5th Exotic</a><span>Quantic</span></figcaption>
                                    </figure>
                                    <label className="wgh-slider-item__trigger" id="slide-1" title="Show product 1"></label>
                                    </div>
                                </div>
                                <div className="wgh-slider-item">
                                    <div className="wgh-slider-item__inner">
                                    <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={window.placeholderImg} alt="The 5th Exotic"/>
                                        <figcaption className="wgh-slider-item-figure__caption"><a href="https://f4.bcbits.com/img/a3905613628_16.jpg">The 5th Exotic</a><span>Quantic</span></figcaption>
                                    </figure>
                                    <label className="wgh-slider-item__trigger" id="slide-2" title="Show product 2"></label>
                                    </div>
                                </div>
                                <div className="wgh-slider-item">
                                    <div className="wgh-slider-item__inner">
                                    <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={window.placeholderImg} alt="The 5th Exotic"/>
                                        <figcaption className="wgh-slider-item-figure__caption"><a href="https://f4.bcbits.com/img/a3905613628_16.jpg">The 5th Exotic</a><span>Quantic</span></figcaption>
                                    </figure>
                                    <label className="wgh-slider-item__trigger" id="slide-3" title="Show product 3"></label>
                                    </div>
                                </div>
                                <div className="wgh-slider-item">
                                    <div className="wgh-slider-item__inner">
                                    <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={window.placeholderImg} alt="The 5th Exotic"/>
                                        <figcaption className="wgh-slider-item-figure__caption"><a href="https://f4.bcbits.com/img/a3905613628_16.jpg">The 5th Exotic</a><span>Quantic</span></figcaption>
                                    </figure>
                                    <label className="wgh-slider-item__trigger" id="slide-4" title="Show product 4"></label>
                                    </div>
                                </div>
                                <div className="wgh-slider-item">
                                    <div className="wgh-slider-item__inner">
                                    <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src={window.placeholderImg} alt="RYSY - Traveler LP"/>
                                        <figcaption className="wgh-slider-item-figure__caption"><a href="https://picsum.photos/id/237/480/480">RYSY - Traveler LP</a><span>RYSY</span></figcaption>
                                    </figure>
                                    <label className="wgh-slider-item__trigger" id="slide-5" title="Show product 5"></label>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>
                </section>
                <section className="fav-color">
                    <div className="fav-color-header">
                        <h2><span>What's your favorite color?</span></h2>

                    </div>

                </section>
                <section className="museum-home">
                    <div className="museum-home-header">
                        <h3>Explore a museum from home</h3>
                    </div>
                </section>
                <section className="explore-street">
                    <div className="explore-street-header">
                        <h2><span>Explore with Street View</span></h2>
                        <h3>From backstage at the Paris Opera to the top of the Taj Mahal</h3>
                    </div>
                    <div>

                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(Home);