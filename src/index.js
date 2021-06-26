import { sideBar } from './modules/sidebar';
import { home } from './modules/home.js';
import { products } from './modules/products.js';
import { about } from './modules/about.js';
import { contact } from './modules/contact.js';


import './style.css';

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
			home.render();
		});
		productBtn.addEventListener('click', () => {
			sideBar.scrollable.innerHTML = '';
			background.style.backgroundImage = 'var(--productsBackground)';
			underline(productBtn);
			cursorIcon.style.display = 'inherit';
			products.render();
		});
		aboutBtn.addEventListener('click', () => {
			sideBar.scrollable.innerHTML = '';
			background.style.backgroundImage = 'var(--aboutBackground)';
			underline(aboutBtn);
			cursorIcon.style.display = 'inherit';
			about.render();
		});
		contactBtn.addEventListener('click', () => {
			sideBar.scrollable.innerHTML = '';
			background.style.backgroundImage = 'var(--contactBackground)';
			underline(contactBtn);
			cursorIcon.style.display = 'none';
			contact.render();
		});
	};
	return { listeners };
})();


handle.listeners();

