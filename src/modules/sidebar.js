import scrollPNG from '../images/scroll.png';
import logoSB from '../images/logo.png';
import githubPNG from '../images/github-logo.png';


// SIDEBAR AND CONTENT SECTION

const sideBar = (() => {
	const main = document.getElementById('content');

	const scrollable = document.createElement('div');
	scrollable.id = 'scrollable';
	const scrollSection = document.createElement('div');
	scrollSection.id = 'scrollSection';
	const scrollIcon = new Image();
	scrollIcon.id = 'scrollIcon';
	scrollIcon.src = scrollPNG;

	const sideContainer = document.createElement('div');
	sideContainer.id = 'sideBar';

	const logoContainer = document.createElement('div');
	logoContainer.id = 'logoContainer';
	const logo = new Image();
	logo.src = logoSB;
	logo.classList.add('logo');

	const linkContainer = document.createElement('nav');
	linkContainer.id = 'linkContainer';
	const homeBtn = document.createElement('h3');
	homeBtn.classList.add('navbar');
	homeBtn.id = 'homeBtn';
	homeBtn.textContent = 'Home';
	const productBtn = document.createElement('h3');
	productBtn.classList.add('navbar');
	productBtn.id = 'productBtn';
	productBtn.textContent = 'Products';
	const aboutBtn = document.createElement('h3');
	aboutBtn.classList.add('navbar');
	aboutBtn.id = 'aboutBtn';
	aboutBtn.textContent = 'About us';
	const contactBtn = document.createElement('h3');
	contactBtn.classList.add('navbar');
	contactBtn.id = 'contactBtn';
	contactBtn.textContent = 'Contact';

	const copyContainer = document.createElement('div');
	copyContainer.id = 'copyContainer';
	const linkToGit = document.createElement('a');
	linkToGit.id = 'linkToGit';
	linkToGit.setAttribute('href', 'https://github.com/Caballojhonson');
	linkToGit.setAttribute('target', '_blank');
	const gitLogo = new Image();
	gitLogo.src = githubPNG;
	gitLogo.id = 'gitLogo';

	const copyright = document.createElement('h6');
	copyright.id = 'copyright';
	copyright.textContent = '\u00A9 2021, CaballoJhonson. All rights reserved.';

	const render = () => {
		main.appendChild(sideContainer);
		main.appendChild(scrollable);
		main.appendChild(scrollSection);
		scrollSection.appendChild(scrollIcon);

		sideContainer.appendChild(logoContainer);
		sideContainer.appendChild(linkContainer);
		sideContainer.appendChild(copyContainer);

		logoContainer.appendChild(logo);

		linkContainer.appendChild(homeBtn);
		linkContainer.appendChild(productBtn);
		linkContainer.appendChild(aboutBtn);
		linkContainer.appendChild(contactBtn);

		copyContainer.appendChild(linkToGit);
		linkToGit.appendChild(gitLogo);
		copyContainer.appendChild(copyright);
	};

	return { scrollable, render };
})();

export {sideBar}