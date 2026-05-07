import { randomRange, range } from "../libs/utilities.js";

const btn = document.querySelector(".particleButton");

btn.addEventListener("click", () => {
	// TODO: Generate stars on click!
	// Here’s the emoji to use: ⭐

	range(10).forEach(() => {
		const star = document.createElement("span");
		const star_wrapper = document.querySelector(".stars_wrapper");

		star.innerText = "⭐";
		star.classList.add("star");
		star.style.top = `${randomRange(0, 100)}%`;
		star.style.left = `${randomRange(0, 100)}%`;

		// Add star to the DOM
		star_wrapper.appendChild(star);
	});
});

/*
  DOM manipulation cheatsheet:

  - Select an element:
    `document.querySelector('.someCssSelector');`
  - Create new elements:
    `document.createElement('tagName');`
  - Add a CSS class:
    `element.classList.add('className');`
  - Add the element to the DOM:
    `parentNode.appendChild(childNode);`
  - Add text to a node:
    `element.innerText = "Stuff";`
*/
