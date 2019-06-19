# Slide

A vanilla JS slideshow for people who want to write once and then never again.

<strong> Tiny: </strong> Slide is less than 2 KB minified

<strong> Simple: </strong> Easy to use and incorporate into existing code

<strong> Vanilla: </strong> Plain, delicious JavaScript- no dependencies required

<h2> Usage </h2>

Import the script in the `<head>` tag at the top of your HTML file:
```html 
<script src="SlideRunner.js"></script> 
```

Add the class `Slide` to your slideshow:

```html
<div class="Slide">
        <ul class="slideshow">
            <li> <img src="1.png" alt="1"> </li>
            <li> <img src="2.png" alt="2"> </li>
            <li> <img src="3.png" alt="3"> </li>
            <li> <img src="4.png" alt="4"> </li>
            <li> <img src="5.png" alt="5"> </li>
        </ul>

        <button> Left </button>
        <button> Right </button>

        <div>
            <button> 1 </button>
            <button> 2 </button>
            <button> 3 </button>
            <button> 4 </button>
            <button> 5 </button>
        </div>
    </div>
```

Add classes `SlideLeft` and `SlideRight` to left and right buttons:

```html
<button class="SlideLeft"> Left </button>
<button class="SlideRight"> Right </button>
```

Add `SlideSelector` class to image selector:

```html
<div class="SlideSelector">
    <button> 1 </button>
    <button> 2 </button>
    <button> 3 </button>
    <button> 4 </button>
    <button> 5 </button>
</div>
```

Done! Slide will handle the rest.

<strong> Slide is robust. </strong> There is no need to have left or right buttons, there is no need to have a image selector. All it needs is an `ol` or `ul` with list items denoted with `li`. Slide can also handle multiple slideshows independently.

<h2> Installation </h2>

Just copy `SlideRunner.js` into your `scripts` folder and import!

<h2> Detailed Usage </h2>

Slide is not a full slideshow in a box- slide is just a robust manner of 
sliding the slideshow. As such:

1. HTML markup still needs to be written
2. The slideshow should be styled accordingly

Additionally:

1. All pictures must be the same size
2. It is recommended that slideshow navigation buttons are `<button>` s.

<h2> Contributing </h2>

is always welcome! Feel free to file an issue or send a pull request.