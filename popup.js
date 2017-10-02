window.onload = function () {
    const action = new PopupAction();
    setInterval(function () {
        action.displayedGiphyCallback();
    }, 30000)
}

class PopupAction {
    constructor() {
        this.clickHandler();
        this.listGiphyUrl = [];
    }

    addedItemToListGiphyUrl(item) {
        if (this.listGiphyUrl.length > 10) {
            this.listGiphyUrl.shift();
        }
        this.listGiphyUrl.push(item);
    }

    getListGiphyUrl() {
        return this.listGiphyUrl;
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
                _this.addedItemToListGiphyUrl(response.data);
                messageReceivingElement.val(response.data);
            });
        })
    }

    displayedGiphyCallback() {
        let callbackFunctions = this.getArrayChangeGiphyImageFunction();
        for (let i = 1; i < callbackFunctions.length; i++) {
            setTimeout(function timer() {
                callbackFunctions[i]();
            }, i * 3000);
        }
    }

    getArrayChangeGiphyImageFunction() {
        let callbackFunctions = [];
        for (let giphy of this.getListGiphyUrl()) {
            callbackFunctions.push(() => {
                const iframeElement = $("#giphyFrame")[0];
                iframeElement.setAttribute("width", "200");
                iframeElement.setAttribute("height", "250");
                iframeElement.setAttribute("src", giphy);
            });
        }
        return callbackFunctions;
    }
}