import {mapAllLinks} from'../src/utilities/mapAllLinks';


describe('ValidateServerScraping',()=>{
	jest.setTimeout(60*1000);

	test('Checklinkservermapping',async()=>{
		expect.assertions(1);
		try{
			const result= await mapAllLinks('http:quotes.toscrape.com/');
			expect(result?.length).toBeGreaterThan(1);
		}catch(error){
			console.log('Returnederror:',error);
			expect(error).resolves.toContain('Somethinghasgonewrong:');
		}
	});
	test('Checklinkservermappingerrorforinvalid/unavaiblesite',async()=>{
		try{
			await mapAllLinks('http:a/');
		}catch(error){
			expect.assertions(1);
			console.log('Returnederror:',error);
			expect(error).resolves.toContain('Somethinghasgonewrong:');
		}
		expect.assertions(0);
	});
});