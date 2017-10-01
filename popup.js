window.onload = function () {
    new PopupAction();
}

class PopupAction {
    constructor() {
        this.clickHandler();
    }

    clickHandler() {
        document.getElementById("btnStart").addEventListener("click", function () {
            alert("Start button is click");
        });
        document.getElementById("btnStop").addEventListener("click", function () {
            alert("Stop button is click");
        });
        document.getElementById("btnSave").addEventListener("click", function () {
            alert("Save button is click");
        });
    }

    onMessageHandler(){
        
    }
}