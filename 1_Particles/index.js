import { randomRange, range } from "./libs/utilities.js";

const btn = document.querySelector(".particleButton");

btn.addEventListener("click", (e) => {
	const element = e.currentTarget;
	element.classList.toggle("liked");
	const isLiked = element.classList.contains("liked");

	// ignore if not liked.
	if (!isLiked) return;

	// Apply other effects
	range(5).forEach(() => {
		const bubble = document.createElement("span");
		bubble.classList.add("particle");
		bubble.style.top = `${randomRange(0, 100)}%`;
		bubble.style.left = `${randomRange(0, 100)}%`;
		element.appendChild(bubble);
	});
});
