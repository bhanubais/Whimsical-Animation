const btn = document.querySelector(".buyButton");

function generateShimmer() {
	const SHIMMER_DURATION = 1000;

	const shimmer = document.createElement("span");
	shimmer.classList.add("shimmer");
	shimmer.style.animationDuration = `${SHIMMER_DURATION}ms`;

	btn.appendChild(shimmer);
	window.setTimeout(() => {
		shimmer.remove();
	}, SHIMMER_DURATION);
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
