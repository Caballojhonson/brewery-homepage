import './style.css';
import logoSB from './images/logo.png'
import githubPNG from './images/github-logo.png'

const sideBar = (() => {
    const main = document.getElementById('content');
    const scrollable = document.createElement('div');
    scrollable.id = 'scrollable';

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
    homeBtn.textContent = 'Home'
    const productBtn = document.createElement('h3');
    productBtn.classList.add('navbar');
    productBtn.textContent = 'Products';
    const aboutBtn = document.createElement('h3');
    aboutBtn.classList.add('navbar');
    aboutBtn.textContent = 'About us';
    const contactBtn = document.createElement('h3');
    contactBtn.classList.add('navbar');
    contactBtn.textContent = 'Contact';

    const copyContainer = document.createElement('div');
    copyContainer.id = 'copyContainer';
    const linkToGit = document.createElement('a');
    linkToGit.id = 'linkToGit';
    linkToGit.setAttribute('href', 'https://github.com/Caballojhonson')
    linkToGit.setAttribute('target', '_blank')
    const gitLogo = new Image();
    gitLogo.src = githubPNG;
    gitLogo.id = 'gitLogo';

    const copyright = document.createElement('h6');
    copyright.id = 'copyright';
    copyright.innerHTML = '\u00A9 2021, CaballoJhonson. All rights reserved.'


    const render = () => {
        main.appendChild(sideContainer);
        main.appendChild(scrollable);

        sideContainer.appendChild(logoContainer);
        sideContainer.appendChild(linkContainer);
        sideContainer.appendChild(copyContainer);

        logoContainer.appendChild(logo);

        linkContainer.appendChild(homeBtn);
        linkContainer.appendChild(productBtn);
        linkContainer.appendChild(aboutBtn);
        linkContainer.appendChild(contactBtn);

        copyContainer.appendChild(linkToGit)
        linkToGit.appendChild(gitLogo);
        copyContainer.appendChild(copyright);
    };

    return { scrollable, render }
})();

const home = (() => {
    const main = sideBar.scrollable;

    const titles = [
        'The last brewery to be created in Barcelona before the 2020 pandemic',
        'First ever "company" to avoid selling its own products',
        'First modern brewery to never brew an IPA',
        '"Short Brewing"',
        'The first brewery to create its website after bankrupcy',
    ];

    const milestones = [
        'January 2020',
        'February 2020',

    ];

    const render = () => {
        for (let i = 0; i < titles.length; i++) {
            setTimeout(() => {
                const title = document.createElement('h2');
                title.classList.add('titles');
                title.textContent = titles[i];
                main.appendChild(title);
            }, i * 1500);
        };
    };

    return { render }
})();


sideBar.render();
home.render();

