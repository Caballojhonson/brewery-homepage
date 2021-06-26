import { sideBar } from './sidebar';
import seal7 from '../images/7.png';
import seal8 from '../images/8.png';
import PV9 from '../images/PV9.png';
import trio from '../images/TrioPNG.png';


// PRODUCT SECTION

const products = (() => {
	const main = sideBar.scrollable;

	const beerTitles = [
		`Petite Vertue #7`,
		`Petite Vertue #8`,
		`Petite Vertue #9`,
	];

	const descriptions = [
		`Our first commercial release. Brewed with love and way too much sediment in an
        atmospheric conic fermenter. Bottle refermented without new yeast addition`,
		`Our second release. Brewed without expectations in an isobaric conic fermenter. Dry hopped
        with Celeia hops and nepal pepper at 0ºC for 3 days. Way too overcarbonated`,
		`Third and final release. It's exactly the same beer as before. Overcarbonation included.
        We didn't even bother making a new logo for the cap...`,
	];

	const Beer = (beerName, beerDescription, seal) => {
		const name = beerName;
		const description = beerDescription;
		const image = new Image();
		image.src = PV9;
		image.classList.add('beerImg');
		const sealImage = new Image();
		sealImage.src = seal;
		sealImage.classList.add('seal');
		const style = 'Belgian Pale Ale';
		const ABV = 'ABV: 6.2% Vol.';
		const IBU = '20 IBU';
		const format = '33cl Glass bottle';

		return { name, description, image, sealImage, style, ABV, IBU, format };
	};

	const pv7 = Beer(beerTitles[0], descriptions[0], seal7);
	const pv8 = Beer(beerTitles[1], descriptions[1], seal8);
	const pv9 = Beer(beerTitles[2], descriptions[2], seal8);

	const beers = [pv7, pv8, pv9];

	const render = () => {
		for (let i = 0; i < beers.length; i++) {
			const beerContainer = document.createElement('div');
			beerContainer.classList.add('beerContainer');
			const imgContainer = document.createElement('div');
			imgContainer.classList.add('imgContainer');
			const descContainer = document.createElement('div');
			descContainer.classList.add('descContainer');
			const statsContainer = document.createElement('div');
			statsContainer.classList.add('statsContainer');
			const beerName = document.createElement('h2');
			const beerDesc = document.createElement('p');
			beerDesc.classList.add('desc');
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
		finalContainer.classList.add('beerContainer');
		const finalTitle = document.createElement('h2');
		finalTitle.textContent = 'Yes. We only have one beer';
		const finalImage = new Image();
		finalImage.src = trio;
		finalImage.id = 'finalImage';

		main.appendChild(finalContainer);
		finalContainer.appendChild(finalTitle);
		finalContainer.appendChild(finalImage);
	};

	return { render };
})();

export { products }