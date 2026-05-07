import { randomRange, range } from "../libs/utilities.js";

const btn = document.querySelector(".particleButton");

btn.addEventListener("click", (e) => {
	const FADE_DURATION = 1000;
	const bubbles = [];

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
		bubble.style.animationDuration = `${FADE_DURATION}ms`;
		element.appendChild(bubble);

		bubbles.push(bubble);
	});

	window.setTimeout(() => {
		bubbles.forEach((bubble) => {
			bubble.remove();
		});
	}, FADE_DURATION + 100);
});
