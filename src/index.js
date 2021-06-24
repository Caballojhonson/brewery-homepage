import './style.css';
import logoSB from './images/logo.png'

const sideBar = (() => {
    const main = document.getElementById('content');

    const sideContainer = document.createElement('div');
    sideContainer.id = 'sideBar';

    const logoContainer = document.createElement('div');
    logoContainer.id = 'logoContainer';
    const logo = new Image();
    logo.src = logoSB;
    logo.id = 'logo';

    const linkContainer = document.createElement('nav');
    linkContainer.id = 'linkContainer';
    const homeBtn = document.createElement('h3');
    homeBtn.classList.add('navbar');
    homeBtn.innerHTML = 'Home'
    const productBtn = document.createElement('h3');
    productBtn.classList.add('navbar');
    const aboutBtn = document.createElement('h3');
    aboutBtn.classList.add('navbar');
    const contactBtn = document.createElement('h3');
    contactBtn.classList.add('navbar');

    const copyContainer = document.createElement('div');
    copyContainer.id = 'copyContainer';
    const gitLogo = document.createElement('img');
    gitLogo.id = 'gitLogo';
    const copyright = document.createElement('h6');
    copyright.id = 'copyright';

    const render = () => {
        main.appendChild(sideContainer);

        sideContainer.appendChild(logoContainer);
        sideContainer.appendChild(linkContainer);
        sideContainer.appendChild(copyContainer);

        logoContainer.appendChild(logo);

        linkContainer.appendChild(homeBtn);
        linkContainer.appendChild(productBtn);
        linkContainer.appendChild(aboutBtn);
        linkContainer.appendChild(contactBtn);

        copyContainer.appendChild(gitLogo);
        copyContainer.appendChild(copyright);
        };

    return { render }
})();

sideBar.render();