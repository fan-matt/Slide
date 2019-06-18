"use strict";

let target = "Slide";
let leftTarget = "SlideLeft";
let rightTarget = "SlideRight";


class Slide {
    constructor(slideElement) {
        this.slideElement = slideElement;
        this.imagesContainer = slideElement.getElementsByTagName("ul")[0];
        this.images = this.imagesContainer.getElementsByTagName("li");
        this.imageWidth = this.images[0].getBoundingClientRect().width;

        // Control button assignment
        this.leftButton = slideElement.getElementsByClassName(leftTarget)[0];
        this.rightButton = slideElement.getElementsByClassName(rightTarget)[0];

        if(this.leftButton)
        {
           this.leftButton.addEventListener("click" , leftHandler , false); 
        }

        if(this.rightButton)
        {
            this.rightButton.addEventListener("click" , rightHandler , false);
        }

        // Current image being displayed by slideshow
        this.currentImgIndex = 0;
        this.numImg = this.images.length;

        // Global styling
        this.imagesContainer.style.transition = "transform 750ms";
    }

    left() {
        this.currentImgIndex --;

        if(this.currentImgIndex < 0)
        {
            this.currentImgIndex = this.images.length - 1;
        }

        this.imagesContainer.style.transform = "translateX(-" + this.currentImgIndex * this.imageWidth + "px)";
    }
    
    right () {
        this.currentImgIndex ++;

        if(this.currentImgIndex >= this.images.length)
        {
            this.currentImgIndex = 0;
        }
        
        this.imagesContainer.style.transform = "translateX(-" + this.currentImgIndex * this.imageWidth + "px)";
    }


}


let slideshows = [];

function leftHandler() {
    slideshows[this.closest("." + target).SlideID].left();
}

function rightHandler() {
    slideshows[this.closest("." + target).SlideID].right();
}


document.addEventListener('DOMContentLoaded', function() {

    let slideshowElements = document.getElementsByClassName(target);

    for(let i = 0; i < slideshowElements.length; i ++) {
        let slideshowElement = slideshowElements[i];
        slideshowElement.SlideID = i;
        slideshows[i] = new Slide(slideshowElement);
    }

}, false);