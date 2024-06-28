# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

Pending...

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned / Issues

In general, the issue of making the overlay fit on all screen sizes was the biggest challenge for me.

To achieve the overlap effect of the sub-container over the dresser image on larger screens, I utilized z-index in combination with flexbox properties. This approach allowed me to visually layer the elements while maintaining responsiveness and ensuring a clean layout across different screen sizes.

```css
@media (min-width: 1024px) {
  .sub-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 0px 12px 12px 0;
    padding: 4em 3em 3em 3em;
    z-index: 1; /* Ensures the sub-container overlaps the dresser image */
  }
}
```

Used padding 0.5em to center the arrow in the share button:

```css
.btn-share {
  height: 2em;
  width: 2em;
  border-radius: 50%;
  border: none;
  background-color: var(--light-greyish-blue);
  color: var(--greyish-blue);
  cursor: pointer;
  padding: 0.5em;
}
```

I ran into some specificity issues when targeting the author's name. I don't like the solution below. But it works for now. I guess I could have used an id instead of classes, but I try to only use id's for JavaScript...

```css
.author-wrapper .author-text-wrapper .author-name {
  color: var(--very-dark-greyish-blue);
  font-weight: 800;
}
```

### Useful resources

- [Thomas Sankara's Youtube video on building the article preview component master](https://www.youtube.com/watch?v=ks_LoMY72Ps) Had to view how Thomas solved the issue of aligning the overlay so that it fit on all device sizes
