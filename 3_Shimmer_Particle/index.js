const btn = document.querySelector(".buyButton");

function generateShimmer() {
	const shimmer = document.createElement("span");
	shimmer.classList.add("shimmer");

	btn.appendChild(shimmer);
}

btn.addEventListener("mouseenter", generateShimmer);
btn.addEventListener("focus", generateShimmer);

/*
  DOM manipulation cheatsheet:

  - Set an inline style:
    `element.style.backgroundColor = "white";`
  - Destroy an element:
    `element.remove();`
*/
