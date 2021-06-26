import logoSB from '../images/logo.png';
import { sideBar } from './sidebar';

// HOME SECTION

const home = (() => {
	const main = sideBar.scrollable;

	const titles = [
		'The last brewery to be created in Barcelona before the 2020 pandemic',
		'First ever "company" to avoid selling its own products',
		'First modern brewery to never brew an IPA',
		'The first brewery to create its website after bankruptcy',
		'"Short Brewing"',
	];

	const subTitles = [
		`Launched on January 2020, one of the best moments in modern history to start a craft brewery.
         We broke the record for number of events created and cancelled per time in business`,
		`We stopped selling in February 2020 to avoid stock breaking before a big festival we were part of.
        It was of course also cancelled.`,
		`We'll never brew an IPA! We said... So we never did`,
		`June 2021: We're proud to be the first company to launch its official website when it's no longer necessary.
         Just do everything wrong, totally worth it.`,
		`Ourselves`,
	];

	const render = () => {
		const logo = new Image();
		logo.src = logoSB;
		logo.classList.add('logo');
		logo.id = 'homeLogo';
		main.appendChild(logo);

		const renderTitles = () => {
			for (let i = 0; i < titles.length; i++) {
				setTimeout(() => {
					const title = document.createElement('h2');
					const para = document.createElement('p');
					para.classList.add('subTitles');
					para.textContent = subTitles[i];
					title.classList.add('titles');
					title.textContent = titles[i];
					main.appendChild(title);
					title.appendChild(para);
				}, i * 200);
			}
		};
		renderTitles();
	};

	return { render };
})();

export { home };
