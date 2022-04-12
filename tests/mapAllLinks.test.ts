import {mapAllLinks} from'../src/utilities/mapAllLinks';


describe('Validate Web Scraping',()=>{
	jest.setTimeout(60*1000);

	test('Check link server mapping',async()=>{
		expect.assertions(1);
		try{
			const result= await mapAllLinks('http:quotes.toscrape.com/');
			expect(result?.length).toBeGreaterThan(1);
		}catch(error){
			console.log('Returned error:',error);
			expect(error).resolves.toContain('Something has gone wrong:');
		}
	});
	test('Check link mapping error for invalid/unavaible site',async()=>{
		try{
			await mapAllLinks('http:a/');
		}catch(error){
			expect.assertions(1);
			console.log('Returned error:',error);
			expect(error).resolves.toContain('Something has gone wrong:');
		}
		expect.assertions(0);
	});
});