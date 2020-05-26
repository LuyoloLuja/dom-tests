function billWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    // call costs functions
    function setCallCost(callCost){
        theCallCost = callCost;
    }
    function getCallCost(){
        return theCallCost;
    }

    // sms costs functions
    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }
    function getSmsCost(){
        return theSmsCost;
    }

    // warning level function
    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }

    function getWarningLevel(){
        return theWarningLevel;
    }

    // critical level function
    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel
    }
}