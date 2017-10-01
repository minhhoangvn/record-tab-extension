window.onload = function () {
    new PopupAction();
}

class PopupAction {
    constructor() {
        this.clickHandler();     
    }

    clickHandler() {
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

        btnSend.click(function () {
            sendingMessageElement.val(txtInputCommand.val());
            const iframeElement = $("#giphyFrame")[0];
            chrome.runtime.sendMessage({ data: txtInputCommand.val() }, function (response) {
                messageReceivingElement.val(response.data);
                iframeElement.setAttribute("width", "200");
                iframeElement.setAttribute("height", "250");
                iframeElement.setAttribute("src", response.data);
            });
        })
    }
}