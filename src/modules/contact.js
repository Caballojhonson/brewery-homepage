import { sideBar } from './sidebar';
import instaPNG from '../images/insta.png';

// CONTACT SECTION

const contact = (() => {
	const main = sideBar.scrollable;

	const create = (elem, clss, attr, prop) => {
		const element = document.createElement(elem);
		element.classList.add(clss);
		element.setAttribute(attr, prop);
		return element;
	};

	const append = (what, where) => {
		const e = where.appendChild(what);
		return e;
	};

	const contactContainer = create('div', 'contactContainer');
	const mainTitle = create('h1', 'h1');
	mainTitle.textContent = 'What do you want?';
	const form = create('form', 'form');
	const formTitle = create('h2', 'formTitle');
	formTitle.textContent = 'State your business';
	const nameInput = create('input', 'input', 'placeholder', 'Name');
	const emailInput = create('input', 'input', 'placeholder', 'Email address');
	const textInput = create(
		'textarea',
		'input',
		'placeholder',
		`This form does NOT work! But your message would go here.
This contact form has been created as part of The Odin Project's "Build a restaurant homepage" assignment.
The whole website is generated by Javascript only, there is no hardcoded HTML.`
	);
	textInput.id = 'textInput';
	const submitBtn = create('button', 'submit');
	submitBtn.textContent = 'Submit nothing';

	const disclaimerContainer = create('div', 'disclaimerContainer');
	const disTitle = create('h2', 'formTitle');
	disTitle.textContent = 'Disclaimer';
	const disText = create('p', 'desc');
	disText.innerHTML = `This form is for demonstration purposes only. 
    It's completely non- functional. If you really want to contact us please PM us via instagram.
    Just click on the link below. 
    <br><br>
    Although it could seem this whole website is made-up, all statements are true, products are real
    and backgound images are self-shot.`;
	const instaLink = create('a', 'instaLink');
	instaLink.setAttribute('href', 'https://www.instagram.com/shortbrewing');
	const instaLogo = new Image();
	instaLogo.src = instaPNG;
	instaLogo.id = 'instaLogo';

	const render = () => {
		append(mainTitle, main);
		append(contactContainer, main);
		append(form, contactContainer);
		append(formTitle, form);
		append(nameInput, form);
		append(emailInput, form);
		append(textInput, form);
		append(submitBtn, form);

		append(disclaimerContainer, contactContainer);
		append(disTitle, disclaimerContainer);
		append(disText, disclaimerContainer);
		append(instaLink, disclaimerContainer);
		append(instaLogo, instaLink);
	};

	return { render };
})();

export { contact };