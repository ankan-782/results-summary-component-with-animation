# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- See animation of element

### Screenshots

![screenshot 1](./assets/images/screenshots/screenshot1.png)
![screenshot 2](./assets/images/screenshots/screenshot2.png)
![screenshot 3](./assets/images/screenshots/screenshot3.png)
![screenshot 4](./assets/images/screenshots/screenshot4.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Vanilla JS for interacting
- Vanilla CSS for styling
- CSS custom properties
- Flexbox
- CSS Grid
- Animation
- Mobile-first workflow

### What I learned

Here I basically learned how to deal with animation and all related things. How to write all keyframe etc.
examples are given below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

And I also learned "another way" of how to include dynamic html element with the help of ```<template>``` html element. What To include dynamically with js, simply has to put inside it in the ```<template></template>``` markup. The ```<template></template>``` markup doesn't show on the browser.

example:

```html
<template data-summary-item-template>
    <div class="summary-item">
        <div class="flex-group">
            <img class="summary-item-picture" src="" alt="picture of topic">
            <h3 class="summary-item-title"></h3>
        </div>
        <p class="summary-item-score">
            <span></span> / 100
        </p>
    </div>
</template>
```

and js part example:

```js
// ...... more code .........
// fetch to retrieve data
data.forEach(element => {
    // cloning content from template
    const summaryItem = summaryItemTemplateEl.content.cloneNode(true).children[0];

    // selecting summary item's elements
    const summaryItemPictureEl = summaryItem.querySelector(".summary-item-picture");
    // ...... more code .........

    // adding things in summary item's elements
    summaryItemPictureEl.src = element.icon;
    // ...... more code .........

    // adding every summary item in the container
    summaryItemsContainerEl.append(summaryItem);
    // ...... more code .........
})
```

### Continued development

I want to brush up little more to animations. That would be the focusing area for my future projects. I am not completely comfortable with it.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
