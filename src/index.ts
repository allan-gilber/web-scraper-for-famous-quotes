import {objectOfQuotesStructure} from './typers/types';
import {objectToJsonConverter} from './utilities/objectToJsonConverter';
import {mapAllLinks} from './utilities/mapAllLinks';
import {mapAllQuotes} from './utilities/mapAllQuotes';
import {mergeObjects} from './utilities/mergeObjects';


const webScraper = async (siteUrl: string) => {
	try{
		const linksArray = await mapAllLinks(siteUrl);
		const mappedDataByPage: objectOfQuotesStructure[] =	await mapAllQuotes(linksArray as string[]);
		const mergedData: objectOfQuotesStructure = await mergeObjects(mappedDataByPage);
		await objectToJsonConverter(mergedData);
		console.log('Task has been success finalized. The program  has been shutdown.');
	} catch{
		console.log('Failure in the procedure. The program  has been shutdown.');
		return;
	}
};

webScraper('http://quotes.toscrape.com/');
