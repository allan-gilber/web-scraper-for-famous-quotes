import puppeteer from 'puppeteer';



(async ()=>{
	const browser = await puppeteer.launch();
	const webPage = await browser.newPage();
	await webPage.goto('');

	const getQuote = await webPage.evaluate(()=>{});
});