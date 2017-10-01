chrome.runtime.onMessage.addListener(function(msg, sender, responseCallback){
    console.log(msg);
    console.log(sender);
    console.log(responseCallback);
    responseCallback({data: "Test respone data"});
})