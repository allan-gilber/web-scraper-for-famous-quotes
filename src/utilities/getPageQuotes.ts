import puppeteer from 'puppeteer';
import { objectOfQuotesStructure } from '../typers/types';

export const getPageQuotes = async (urlPage: string): Promise<objectOfQuotesStructure> => {

	const browser = await puppeteer.launch();
	const webPage = await browser.newPage();
	await webPage.goto(urlPage);

	const finalData: objectOfQuotesStructure = await webPage.evaluate( (): objectOfQuotesStructure=> {
		const getAllQuoteCards = document.querySelectorAll('.quote');
		const siteDataObject: objectOfQuotesStructure = {} ;

		getAllQuoteCards.forEach((elementData: any): void => {
			const arrayOfTags: string[] = [];
			const authorName: HTMLElement = elementData.querySelector('.author');
			const tags: string[] = elementData.querySelectorAll('.tag');
			const quoteText: HTMLElement = elementData.querySelector('.text');

			tags.forEach((tag: any ) => {
				arrayOfTags.push(tag.innerText as string);
			});

			if(!siteDataObject[authorName.innerText]) siteDataObject[authorName.innerText] = [];

			siteDataObject[authorName.innerText].push({
				text: quoteText.innerText, 
				tags: arrayOfTags
			});
		});
		return siteDataObject;
	});

	browser.close();
	return finalData;
};