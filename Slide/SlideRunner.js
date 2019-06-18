"use strict";

let target = "Slide";
let leftTarget = "SlideLeft";
let rightTarget = "SlideRight";


class Slide {
    constructor(slideElement) {
        this.imagesContainer = slideElement.getElementsByTagName("ul")[0];
        this.images = this.imagesContainer.getElementsByTagName("li");
        this.imageWidth = this.images[0].getBoundingClientRect().width;

        // Control button assignment
        this.leftButton = slideElement.getElementsByClassName(leftTarget)[0];
        this.rightButton = slideElement.getElementsByClassName(rightTarget)[0];

        if(this.leftButton)
        {
           this.leftButton.addEventListener("click" , this.left , false); 
        }

        if(this.rightButton)
        {
            this.rightButton.addEventListener("click" , this.right , false);
        }
    }

    
    left () {
        alert("Hello!");
    }

    right() {
        alert("Bye!");
    }
}


document.addEventListener('DOMContentLoaded', function() {

    let slideshowElements = document.getElementsByClassName(target)
    let slideshows = [];
    console.log(slideshowElements);

    for(let i = 0; i < slideshowElements.length; i ++) {
        let slideshowElement = slideshowElements[i];
        slideshowElement.SlideID = i;
        slideshows[i] = new Slide(slideshowElement);
    }

}, false);