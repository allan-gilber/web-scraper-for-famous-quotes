import {objectOfQuotesStructure} from '../typers/types';

export const mergeObjects = async (mappedData: objectOfQuotesStructure[]): Promise<objectOfQuotesStructure> =>{ 
	const mergedObject: objectOfQuotesStructure = {};

	mappedData.forEach((data: any): void =>{
		const arrayOfPropertys = Object.getOwnPropertyNames(data);

		arrayOfPropertys.forEach((propertyName: string)=>{
			if(!mergedObject[propertyName]){
				mergedObject[propertyName] = [];
			}
			mergedObject[propertyName] = [...mergedObject[propertyName], data[propertyName][0]];
		});
	});

	return mergedObject;
};