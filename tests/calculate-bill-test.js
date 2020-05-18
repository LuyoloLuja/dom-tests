describe("The totalPhoneBill function", function(){
    it("Should check if the call price is equal to 2.75", function(){
        var billItem = totalPhoneBill("call");
        assert.equal(billItem, 2.75);
    });
    it("Should check if the sms price is equal to 0.75", function(){
        var billItem2 = totalPhoneBill("sms");
        assert.equal(billItem2, 0.75);
    })
});