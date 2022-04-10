import fs from 'fs';
import { objectOfQuotesStructure } from '../typers/types';

export const objectToJsonConverter = async (objectData: objectOfQuotesStructure) =>{
	const jsonString = JSON.stringify(Object.assign({},objectData));
	fs.writeFile('./src/jsonData/quotesData.json', jsonString, (data)=> data);
	console.log('Data file succesfuly created and stored on \'./src/jsonData/quotesData.json\'');
	return;
};