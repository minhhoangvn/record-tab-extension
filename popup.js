window.onload = function () {
    new PopupAction();
}

class PopupAction {
    constructor() {
        this.clickHandler();     
        this.listGiphyUrl = [];
    }

    clickHandler() {
        const _this = this;
        const messageElement = $("#popupMessage");
        const sendingMessageElement = $("#messageSending");
        const messageReceivingElement = $("#messageReceiving");
        const btnStart = $("#btnStart");
        const btnStop = $("#btnStop");
        const btnSave = $("#btnSave");
        const btnSend = $("#btnSending");
        const txtInputCommand = $("#inputCommand");

        btnStart.click(function () {
            messageElement.val("Start button is click");
        })

        btnStop.click(function () {
            messageElement.val("Stop button is click");
        })

        btnSave.click(function () {
            messageElement.val("Save button is click");
        })

        btnSend.click(async function () {
            let listGiphyUrl = [];
            sendingMessageElement.val(txtInputCommand.val());            
            chrome.runtime.sendMessage({ data: txtInputCommand.val() }, function (response) {
                _this.listGiphyUrl.push(response.data);
                messageReceivingElement.val(response.data);                
            });
            _this.displayedGiphyCallback();
        })
    }

    displayedGiphyCallback(){   
        for(let giphy of this.listGiphyUrl)
        {
            setTimeout(function(){
                const iframeElement = $("#giphyFrame")[0];
                iframeElement.setAttribute("width", "200");
                iframeElement.setAttribute("height", "250");
                iframeElement.setAttribute("src", giphy);
            },3000)
           
        }
    }
}