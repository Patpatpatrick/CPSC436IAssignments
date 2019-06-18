import React from 'react';
import './style.css';
const requireContext = require.context("/Users/mac/Workspaces/cpsc436assignment2/src/resources/sliderImage/", true, /^\.\/.*\.png$/);
const images = requireContext.keys().map(requireContext);

class Slider extends React.Component {
    // constructor(){
    //     super();
    //     // this.state = {}
    // }
	render() {
        return (
            <div class="slideshow-container">
                <div class="mySlides fade">
                    <div class="numbertext">1 / 3</div>
                    <img src={images[0]} alt="AboutMeBanner01" />
                    <div class="text">Me in the tulip sea</div>
                </div>
                <div class="mySlides fade">
                    <div class="numbertext">2 / 3</div>
                    <img src={images[1]} alt="AboutMeBanner02" />
                    <div class="text">Me in nwHacks 2019</div>
                </div>
                <div class="mySlides fade">
                    <div class="numbertext">3 / 3</div>
                    <img src={images[2]} alt="AboutMeBanner03" />
                    <div class="text">Me in BSCHacks2019</div>
                </div>   
                {/* <a class="prev" id="plusSlidesMinus1">&#10094;</a>
                <a class="next" id="plusSlidesPlus1">&#10095;</a> */}
                <span class="dot"></span> 
                <span class="dot"></span> 
                <span class="dot"></span> 
            </div>
        );
    }
}
export default Slider;