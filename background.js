chrome.runtime.onMessage.addListener(function (msg, sender, responseCallback) {
    getRandomGiphy(responseCallback);
    return true;
})

function getRandomGiphy(responseCallback) {
    chrome.storage.local.get("apiToken", function (data) {
        const ajaxUrl = "https://api.giphy.com/v1/gifs/random?api_key=" + data.apiToken + "&tag=sexy girl&rating=R";
        var xhr = $.get(ajaxUrl);
        xhr.done(function (response) {
            const giphyUrl = response.data.fixed_height_small_url;
            responseCallback({ data: giphyUrl });
        });
    })
   
}