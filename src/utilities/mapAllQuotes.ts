import { objectOfQuotesStructure } from '../typers/types';
import { getPageQuotes } from './getPageQuotes';

export const mapAllQuotes = async (linksArray: string[]): Promise<objectOfQuotesStructure[]> => {
	const arrayOfCollectedData: objectOfQuotesStructure[] = [];

	for(const link of linksArray){
		const mapData = await getPageQuotes(link);
		arrayOfCollectedData.push(mapData);
	}

	if(arrayOfCollectedData.length !== linksArray.length){
		console.log(`Didn't find the quotes on ${arrayOfCollectedData.length - linksArray.length} from the total of ${linksArray.length} pages.`);
	}
	return arrayOfCollectedData;
};