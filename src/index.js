import './style.css';
import logoSB from './images/logo.png';
import githubPNG from './images/github-logo.png';
import scrollPNG from './images/scroll.png';
import seal7 from './images/7.png';
import seal8 from './images/8.png';
import PV9 from './images/PV9.png';
import trio from './images/TrioPNG.png';


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
    logo.classList.add('logo')

    const linkContainer = document.createElement('nav');
    linkContainer.id = 'linkContainer';
    const homeBtn = document.createElement('h3');
    homeBtn.classList.add('navbar');
    homeBtn.id = 'homeBtn';
    homeBtn.textContent = 'Home'
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
    linkToGit.setAttribute('href', 'https://github.com/Caballojhonson')
    linkToGit.setAttribute('target', '_blank')
    const gitLogo = new Image();
    gitLogo.src = githubPNG;
    gitLogo.id = 'gitLogo';

    const copyright = document.createElement('h6');
    copyright.id = 'copyright';
    copyright.textContent = '\u00A9 2021, CaballoJhonson. All rights reserved.'


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

        copyContainer.appendChild(linkToGit)
        linkToGit.appendChild(gitLogo);
        copyContainer.appendChild(copyright);
    };

    return { scrollable, render }
})();

// HOME SECTION

const home = (() => {
    const main = sideBar.scrollable;

    const titles = [
        'The last brewery to be created in Barcelona before the 2020 pandemic',
        'First ever "company" to avoid selling its own products',
        'First modern brewery to never brew an IPA',
        'The first brewery to create its website after bankrupcy',
        '"Short Brewing"',
    ];

    const subTitles = [
        `Launched on January 2020, one of the best moments in modern history to start a craft brewery.
         We broke the record for number of events created and cancelled per time in buisness`,
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
        logo.id = 'homeLogo'
        main.appendChild(logo)

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
                }, i * 200)
            };
        }
        renderTitles();
    };

    return { render }
})();

// PRODUCT SECTION

const products = (() => {
    const main = sideBar.scrollable;

    const beerTitles = [
        `Petite Vertue #7`,
        `Petite Vertue #8`,
        `Petite Vertue #9`
    ];

    const descriptions = [
        `Our first commercial release. Brewed with love and way too much sediment in an
        atmospheric conic fermenter. Bottle refermented without new yeast addition`,
        `Our second release. Brewed without expectations in an isobaric conic fermenter. Dry hopped
        with Celeia hops and nepal pepper at 0ºC for 3 days. Way too overcarbonated`,
        `Third and final release. It's exactly the same beer as before. Overcarbonation included.
        We didn't even bother making a new logo for the cap...`
    ]

    const Beer = (beerName, beerDescription, seal) => {
        const name = beerName;
        const description = beerDescription;
        const image = new Image();
        image.src = PV9;
        image.classList.add('beerImg');
        const sealImage = new Image();
        sealImage.src = seal;
        sealImage.classList.add('seal');
        const style = 'Belgian Pale Ale'
        const ABV = 'ABV: 6.2% Vol.';
        const IBU = '20 IBU';
        const format = '33cl Glass bottle'

        return { name, description, image, sealImage, style, ABV, IBU, format }
    }

    const pv7 = Beer(
        beerTitles[0],
        descriptions[0],
        seal7
    );
    const pv8 = Beer(
        beerTitles[1],
        descriptions[1],
        seal8
    );
    const pv9 = Beer(
        beerTitles[2],
        descriptions[2],
        seal8
    );

    const beers = [pv7, pv8, pv9];

    const render = () => {
        for (let i = 0; i < beers.length; i++) {

            const beerContainer = document.createElement('div');
            beerContainer.classList.add('beerContainer');
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('imgContainer');
            const descContainer = document.createElement('div');
            descContainer.classList.add('descContainer');
            const statsContainer = document.createElement('div')
            statsContainer.classList.add('statsContainer');
            const beerName = document.createElement('h2');
            const beerDesc = document.createElement('p');
            beerDesc.classList.add('desc')
            const beerStyle = document.createElement('h6');
            const beerABV = document.createElement('h6');
            const beerIBU = document.createElement('h6');
            const beerFormat = document.createElement('h6');

            beerName.textContent = beers[i].name;
            beerDesc.textContent = beers[i].description;
            beerStyle.textContent = beers[i].style;
            beerABV.textContent = beers[i].ABV;
            beerIBU.textContent = beers[i].IBU;
            beerFormat.textContent = beers[i].format;

            main.appendChild(beerContainer);
            beerContainer.appendChild(beerName);
            descContainer.appendChild(imgContainer);
            beerContainer.appendChild(descContainer);
            descContainer.appendChild(statsContainer);
            imgContainer.appendChild(beers[i].image);
            statsContainer.appendChild(beers[i].sealImage);
            descContainer.appendChild(beerDesc);
            statsContainer.appendChild(beerStyle);
            statsContainer.appendChild(beerABV);
            statsContainer.appendChild(beerIBU);
            statsContainer.appendChild(beerFormat);
        }

        const finalContainer = document.createElement('div');
        finalContainer.classList.add('beerContainer')
        const finalTitle = document.createElement('h2');
        finalTitle.textContent = 'Yes. We only have one beer'
        const finalImage = new Image();
        finalImage.src = trio;
        finalImage.id = 'finalImage'

        main.appendChild(finalContainer)
        finalContainer.appendChild(finalTitle)
        finalContainer.appendChild(finalImage)
    };

    return { render }
})();

     const about = (() => {
    const main = sideBar.scrollable;

    const text = [
        `Short Brewing is a non-existant (but legal) very-micro brewery.
        All our products are painstakingly handmade. We bottle and cap manually. We label by hand, bottle per bottle. One by one.
        Each cap is then hand stamped with lot info and production number with a manual wooden stamp, inked by hand, of course.
        We like to be called gipsy brewers, although truth is we don't have the resources to own our own brewery. 
        Being gipsys is one of the reasons for the downfall of our great company. Taxes, sales, infrastructure and lack of
        interest didn't help either. We are proud to have endured so long anyway. We have become experts in non-functional 
        projects that come to a halt before even being a thing. Praise the lord and GG Allin. Thanks for your overwhelming support.
        (The logo on the center of the bottle are my balls painted in aquarella)`
    ];
    const render = () => {
    const mainText = document.createElement('h6');
    mainText.textContent = text[0];
    mainText.id = 'aboutText'
    main.appendChild(mainText);
    }

    return { render }
})();


sideBar.render();
home.render();

const handle = (() => {
    const background = document.getElementById('content');
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
    }

    const listners = () => {
        homeBtn.addEventListener('click', () => {
            sideBar.scrollable.innerHTML = '';
            background.style.backgroundImage = "var(--mainBackground)";
            underline(homeBtn);
            home.render();
        })
        productBtn.addEventListener('click', () => {
            sideBar.scrollable.innerHTML = '';
            background.style.backgroundImage = "var(--bottleBackground)";
            underline(productBtn);
            products.render();
        })
        aboutBtn.addEventListener('click', () => {
            sideBar.scrollable.innerHTML = '';
            underline(aboutBtn);
            about.render();
        })
        contactBtn.addEventListener('click', () => {
            sideBar.scrollable.innerHTML = '';
            underline(contactBtn);

        })
    }
    return { listners }
})();

handle.listners();
