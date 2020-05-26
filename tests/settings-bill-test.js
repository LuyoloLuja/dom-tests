describe('The bill with settings function', function(){
    it('Should be able to set the call cost', function(){
        let settingsBill = billWithSettings();
        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost())

        let settingsBill2 = billWithSettings();
        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost())
    })
    it('Should be able to set the sms cost', function(){
        let settingsBill = billWithSettings();
        settingsBill.setSmsCost(0.85);
        assert.equal(0.85, settingsBill.getSmsCost())

        let settingsBill2 = billWithSettings();
        settingsBill2.setSmsCost(0.75);
        assert.equal(0.75, settingsBill2.getSmsCost())
    })
    it('Should be able to set both call and sms cost', function(){
        let settingsBill = billWithSettings();
        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.85);

        assert.equal(2.75, settingsBill.getCallCost())
        assert.equal(0.85, settingsBill.getSmsCost())
    })
    it('Should be able to set warning level', function(){
        let settingsBill = billWithSettings();
        settingsBill.setWarningLevel(20);

        assert.equal(20, settingsBill.getWarningLevel())
    })
    it('Should be able to set critical level', function(){
        let settingsBill = billWithSettings();
        settingsBill.setCriticalLevel(30);

        assert.equal(30, settingsBill.getCriticalLevel())
    })
    it('Should be able to set warning and critical level', function(){
        let settingsBill = billWithSettings();
        settingsBill.setWarningLevel(15);
        settingsBill.setCriticalLevel(25);

        assert.equal(15, settingsBill.getWarningLevel())
        assert.equal(25, settingsBill.getCriticalLevel())
    })
})