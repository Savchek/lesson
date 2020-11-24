
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

applyCss = event => {
	let e = event.target;
	let sampleWrap = document.getElementById(e.dataset.for);
	let sampleText = sampleWrap.querySelector('.interactive-text');
	let sampleStyles = sampleWrap.querySelectorAll('.css-rule');

	sampleText.style.cssText = '';
	sampleStyles.forEach(e => {
		let rule = e.value.trim();

		if (rule) {
			sampleText.style.cssText += rule;
		}
	});
};

clearCss = event => {
	let e = event.target;
	let sampleWrap = document.getElementById(e.dataset.for);
	let sampleText = sampleWrap.querySelector('.interactive-text');
	let sampleStyles = sampleWrap.querySelectorAll('.css-rule');

	sampleText.style.cssText = '';
	sampleStyles.forEach(e => {
		e.value = '';
	});
};

init = () => {
	document.querySelectorAll('.sample-select input').forEach(e => {
		e.addEventListener('change', changeRadio);
	});

	document.querySelectorAll('.apply-interactive-sample').forEach(e => {
		e.addEventListener('click', applyCss);
	});

	document.querySelectorAll('.clear-interactive-sample').forEach(e => {
		e.addEventListener('click', clearCss);
	});

	document.querySelectorAll('input').forEach(e => {
		e.addEventListener('keypress', (e) => {
			if (e.key == 'Enter') {
				let next = e.target.nextElementSibling;
				if (next.className == 'css-wrap') {
					next = next.nextElementSibling;
				}
				e.target.blur();
				next.focus();
			}
		});
	});
};

init();