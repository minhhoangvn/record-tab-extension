chrome.runtime.onMessage.addListener(function (msg, sender, responseCallback) {  
    getRandomGiphy(responseCallback);
    return true;
})

function getRandomGiphy(responseCallback) {
    const ajaxUrl = "https://api.giphy.com/v1/gifs/random?api_key="+GIPHY_API_TOKEN+"&tag=sexy girl&rating=R";
    var xhr = $.get(ajaxUrl);
    xhr.done(function (response) {
        console.log(response.data);
        const giphyUrl = response.data.fixed_height_small_url;
        responseCallback({ data: giphyUrl });
    });
}