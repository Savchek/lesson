
changeRadio = event => {
	let e = event.target;
	if (!e.checked) return;

	let sample = document.querySelector(`#${e.name} .radio-sample`);
	let prevClass = sample.dataset.prevClass;

	if (prevClass) {
		sample.classList.remove(prevClass);
	}

	sample.classList.add(e.id);
	sample.dataset.prevClass = e.id;
};

init = () => {
	document.querySelectorAll('.sample-select input').forEach(e => {
		e.addEventListener('change', changeRadio);
	});
};

init();