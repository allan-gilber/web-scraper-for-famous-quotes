import { objectOfQuotesStructure } from './typers/types';
import { objectToJsonConverter } from './utilities/objectToJsonConverter';
import { mapAllLinks } from './utilities/mapAllLinks';
import { mapAllQuotes } from './utilities/mapAllQuotes';
import { mergeObjects } from './utilities/mergeObjects';



const webScraper = async (siteUrl: string)=>{
	const linksArray = await mapAllLinks(siteUrl);
	const mappedDataByPage: objectOfQuotesStructure[] = await mapAllQuotes(linksArray);
	const mergedData = await mergeObjects(mappedDataByPage);
	await objectToJsonConverter(mergedData);
	console.log('Task has been success finalized. The program  has been shutdown.');
};

webScraper('http://quotes.toscrape.com/');