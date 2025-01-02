
    describe('Mobile App Validation Tests', () => {
        let CurrentValue;
    
        beforeEach(async () => {
            // Fetch the CurrentValue element before each test
            CurrentValue = await $('//android.view.View[@content-desc="Current Value:"]/following-sibling::*[1]');
        });
    
        it('1 validate the initial value is 0', async () => {
            await expect(await CurrentValue.getAttribute('content-desc'))
                .toContain('0', 'The initial value should be 0');
        });
    
        it('2 validate increment the value to 1 after clicking +1', async () => {
            await $('//android.widget.Button[@content-desc="+1"]').click();
            await expect(await CurrentValue.getAttribute('content-desc'))
                .toContain('1', 'After clicking +1, the value should be 1');
        });
    
        it('3 validate reset the value to 0 after clicking Reset', async () => {
            await $('~Reset').click();
            await expect(await CurrentValue.getAttribute('content-desc'))
                .toContain('0', 'After clicking Reset, the value should reset to 0');
        });
        
        it('4 edge cases to validate the cancel button in date',async()=>{
        await($('~Pick a Date')).click();
        await($('//android.widget.Button[contains(@content-desc,"10")]')).click();
        await($('//android.widget.Button[@content-desc="Cancel"]')).click();
        await expect(await $('//android.view.View[@content-desc="Selected"]')).not.toBeDisplayed('No "Selected" element should be displayed after canceling the date selection');
        });
    
        it('5 validate allow selecting a date and validate selected elements', async () => {
            await $('~Pick a Date').click();
            await $('//android.widget.Button[contains(@content-desc,"10")]').click();
            await $('//android.widget.Button[@content-desc="OK"]').click();
    
            await expect($$('//android.view.View[@content-desc="Selected"]'))
                .toBeElementsArrayOfSize(2, 'Two elements should have "Selected" content after date selection');
        });
    })
    

