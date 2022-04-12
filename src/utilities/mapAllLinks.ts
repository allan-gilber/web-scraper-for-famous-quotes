import puppeteer from 'puppeteer';

export const mapAllLinks = async (siteUrl: string):  Promise<string[] | undefined> =>{
	try{
		let urlToEvaluate = siteUrl;
		const arrayOfLinks: string[]= [siteUrl];

		while(urlToEvaluate){
			const browser = await puppeteer.launch();
			const webPage = await browser.newPage();
			await webPage.goto(urlToEvaluate);

			const getLink = await webPage.evaluate((): string => {
				const link = document.querySelector('.next > a') as HTMLAnchorElement;
				return link?.href ? link.href : '';
			});

			if(!getLink) {
				console.log(`Finished link mapping. Found a total of ${arrayOfLinks.length} pages to scrap.`);
				urlToEvaluate = '';
				browser.close();
				break;
			}

			urlToEvaluate = getLink;
			arrayOfLinks.push(getLink);
			console.log('Captured link: ', getLink);
			browser.close();
		}
		return arrayOfLinks;

	}catch (error: any){
		console.log('Something has gone wrong: ', error.message);
		return;
	}
};