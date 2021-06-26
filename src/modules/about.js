import { sideBar } from './sidebar';

// ABOUT SECTION

const about = (() => {
	const main = sideBar.scrollable;

	const text = [
		`Short Brewing was created as a side project to fill the urge of accomplishing something after failing to open a restaurant.
        It was created by two semi-alcoholic ex-associates in the middle of a belgian beer drinking session. 
        <br><br><br>
        We found the global craft beer scenario to be too repetitive, predictable and way too industrial. While IPAs were flooding the
        market in all it's forms and variations, we thought there was a place for more traditional styles in the market. 
        So we decided to give it a try, why not make a real craft beer? While others just punch a bunch of buttons in a touch screen 
        on one end and output sweet wort on the other,
        we wanted to make it for real. How can a company be shipping 100 Million bottles of beer a year and yet still
        call it craft? We'll do it ALL by hand, we said...
        <br> 
        Let's short brew the market!
        <br><br><br>
        Short Brewing is (was) a non-existent (but legal) very-micro brewery. 
        <br>
        All our products are painstakingly handmade. We bottle and cap manually. We label by hand, bottle per bottle. One by one.
        Each cap is then hand stamped with batch info and production number with a manual wooden stamp, inked by hand, of course.
        The same guy making the recipes also makes all the trademark designs, social media, accounting, photography
         and this stupid website.
        <br><br><br>
        We like to be called gipsy brewers, although truth is we don't have the resources to own our own brewery. 
        Being gipsies is one of the reasons for the downfall of our great company. Problem is you don't choose when your next batch
        is going to be brewed. Instead you are in hands of other people's schedules, providers and problems. Taxes, sales, infrastructure and lack of
        interest didn't help either. We are proud to have endured so long anyway. We have become experts in non-functional 
        projects that come to a halt before even being a thing. Praise the lord and GG Allin. Thanks for your overwhelming support.
        <br><br><br>
        (The logo on the center of the bottle are my aquarelle painted balls. Long story...)`,
	];
	const render = () => {
		const mainText = document.createElement('h6');
		mainText.innerHTML = text[0];
		mainText.id = 'aboutText';
		main.appendChild(mainText);
	};

	return { render };
})();

export { about };
