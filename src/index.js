import { sideBar } from './modules/sidebar';
import { home } from './modules/home.js';
import { products } from './modules/products.js';
import { about } from './modules/about.js';
import { contact } from './modules/contact.js';

import './style.css';

import background1 from './images/Randoms-1-3.JPG';
import background2 from './images/Randoms-1.JPG';
import background3 from './images/Randoms-1-4.JPG';
import background4 from './images/Randoms-1-5.JPG';

preloadImgs();
sideBar.render();
home.render();

const handle = (() => {
	const background = document.getElementById('content');
	const cursorIcon = document.getElementById('scrollSection');
	const homeBtn = document.getElementById('homeBtn');
	const productBtn = document.getElementById('productBtn');
	const aboutBtn = document.getElementById('aboutBtn');
	const contactBtn = document.getElementById('contactBtn');

	const underline = (elem) => {
		const buttons = document.querySelectorAll('.navbar');
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].style.textDecoration = 'none';
		}
		elem.style.textDecoration = 'underline';
	};

	const listeners = () => {
		homeBtn.addEventListener('click', () => {
			sideBar.scrollable.innerHTML = '';
			background.style.backgroundImage = 'var(--mainBackground)';
			underline(homeBtn);
			cursorIcon.style.display = 'inherit';
			sideBar.scrollable.scrollTo(0, 0);
			home.render();
		});
		productBtn.addEventListener('click', () => {
			sideBar.scrollable.innerHTML = '';
			background.style.backgroundImage = 'var(--productsBackground)';
			underline(productBtn);
			cursorIcon.style.display = 'inherit';
			sideBar.scrollable.scrollTo(0, 0);
			products.render();
		});
		aboutBtn.addEventListener('click', () => {
			sideBar.scrollable.innerHTML = '';
			background.style.backgroundImage = 'var(--aboutBackground)';
			underline(aboutBtn);
			cursorIcon.style.display = 'inherit';
			sideBar.scrollable.scrollTo(0, 0);
			about.render();
		});
		contactBtn.addEventListener('click', () => {
			sideBar.scrollable.innerHTML = '';
			background.style.backgroundImage = 'var(--contactBackground)';
			underline(contactBtn);
			cursorIcon.style.display = 'none';
			sideBar.scrollable.scrollTo(0, 0);
			contact.render();
		});
	};
	return { listeners };
})();

function preloadImgs() {
	const mainBackground = new Image();
	mainBackground.src = background1;
	const productsBackground = new Image();
	productsBackground.src = background2;
	const aboutBackground = new Image();
	aboutBackground.src = background3;
	const contactBackground = new Image();
	contactBackground.src = background4;
}

handle.listeners();
