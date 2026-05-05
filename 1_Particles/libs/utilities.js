const range = (start, end, step = 1) => {
	const output = [];
	// handle single argument
	if (!end) {
		end = start;
		start = 0;
	}

	// Guard against zero step to prevent infinite loop
	if (step === 0) return output;

	const isAscending = 0 < step;

	while (isAscending ? start < end : end < start) {
		output.push(start);
		start += step;
	}

	return output;
};

const randomRange = (start, end) => {
	if (!end) {
		end = start;
		start = 0;
	}

	return start + Math.random() * (end - start);
};

// export default range and randomRange
export { range, randomRange };
