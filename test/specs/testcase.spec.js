describe("start activity",()=>{
   
   
    it('edge cases',async()=>{
        await($('~Pick a Date')).click();
        await($('//android.widget.Button[contains(@content-desc,"14, Saturday")]')).click();
        await($('//android.widget.Button[@content-desc="Cancel"]')).click();
        await expect(await $('//android.view.View[@content-desc="Selected"]')).not.toBeDisplayed();
      
    })
    it('happy flow',async()=>{
        const CurrentValue = await $('//android.view.View[@content-desc="Current Value:"]/following-sibling::*[1]');
        await expect(await(CurrentValue).getAttribute('content-desc')).toContain('0');
        await($('//android.widget.Button[@content-desc="+1"]')).click();
        await expect(await(CurrentValue).getAttribute('content-desc')).toContain('1');
        await($('~Reset')).click();
        await expect(await(CurrentValue).getAttribute('content-desc')).toContain('0');
        await($('~Pick a Date')).click();
        await($('//android.widget.Button[contains(@content-desc,"14, Saturday")]')).click();
        await($('//android.widget.Button[@content-desc="OK"]')).click();
        await expect(await($$('//android.view.View[@content-desc="Selected"]'))).toBeElementsArrayOfSize(2);
      
    })

})