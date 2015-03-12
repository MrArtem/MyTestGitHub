var messageOption = function(text,value) {
    return {
        message: text,
        id: value
    };
};
var infoLogin = function (name, surname) {
    return {
        name: name,
        surname: surname
    };
};
var listForSaving = [];
function run() {
    var appContainerSend = document.getElementById('send');
    var appContainerDelete = document.getElementById('delete');
    var appContainerChange = document.getElementById('change');
    var appContainerSelect = document.getElementById('allMessages');
    var appContainerServer = document.getElementById('server');

    var allMessages = restoreMessages();
    var loginInfo = restoreLoginInfo();
    createAllMessages(allMessages);
    createLoginInfo(loginInfo);

    appContainerSend.addEventListener('click', delegateEventSend);
    appContainerDelete.addEventListener('click', delegateEventDelete);
    appContainerChange.addEventListener('click', delegateEventChange);
    appContainerSelect.addEventListener('click', delegateEventSelect);
    appContainerServer.addEventListener('click', delegateEventServer);
}
function delegateEventSend(evtObj) {
    var text = document.getElementById('sendText');
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    if (text.value && name.value && surname.value) {

        var select = document.getElementById("allMessages");
        var option = document.createElement("option");
        option.text = surname.value + " " + name.value + " : " + text.value;
        option.value = select.length;

        select.add(option);

        listForSaving.push( messageOption(option.text, option.value));
        storeMessages(listForSaving);

        text.value = "";
    }
}
function delegateEventDelete(evtObj) {
    var select = document.getElementById("allMessages");
    var sendText = document.getElementById('sendText');
    select.remove(select.selectedIndex);

    listForSaving.splice(select.selectedIndex, 1);
    storeMessages(listForSaving);

    sendText.value = "";
}
function delegateEventSelect(evtObj) {
    var sendText = document.getElementById('sendText');
    var index = document.getElementById("allMessages").selectedIndex;
    var select = document.getElementById("allMessages")[index];
    var subindex = select.text.indexOf(":");
    sendText.value = select.text.substring(subindex+1);
}
function delegateEventChange(evtObj) {
    var sendText = document.getElementById('sendText');

    var name = document.getElementById('name');
    var surname = document.getElementById('surname');

    var index = document.getElementById("allMessages").selectedIndex;
    var select = document.getElementById("allMessages")[index];
    select.text = surname.value + " " + name.value + " : " + sendText.value;
    sendText.value = "";
}

function delegateEventServer(evtObj) {
    $("#server").removeClass('btn btn-success');
    $("#server").addClass('btn btn-danger');
}
function storeMessages(listForSaving) {
    if (typeof (Storage) == "undefined") {
        alert('localStorage is not accessible');
        return;
    }
    localStorage.setItem("list messages", JSON.stringify(listForSaving));
}
function storeInfoLogin(infoLogin) {
    if (typeof (Storage) == "undefined") {
        alert('localStorage is not accessible');
        return;
    }
    localStorage.setItem("Login info", JSON.stringify(infoLogin));
}
function restoreMessages(){
    if (typeof (Storage) == "undefined") {
        alert('local storage is not accessible');
        return;
    }
    var item = localStorage.getItem("list messages");
    return item && JSON.parse(item);
}
function restoreLoginInfo() {
    if (typeof (Storage) == "undefined") {
        alert('local storage is not accessible');
        return;
    }
    var item = localStorage.getItem("Login info");
    return item && JSON.parse(item);
}
function createAllMessages(allMessages) {
    for (var i = 0; i < allMessages.length; i++) {
        listForSaving.push(allMessages[i]);
        addAllMessages(allMessages[i]);
    }
}
function createLoginInfo(loginInfo) {
    var inputName = document.getElementById('inputName');
    var inputSurName = document.getElementById('inputSurName');

    inputName.value = loginInfo.name;
    inputSurName.value = loginInfo.surname;
}
function addAllMessages(message) {
    var select = document.getElementById('allMessages');
    var option = document.createElement("option");
    option.text = message.message;
    option.value = message.id;

    select.add(option);
}

$(document).ready(function () {

    $(document).on('click', '#logOut', function () {
        var d = $('#Login');
        var dOpt = {
            title: 'Login',
            modal: true,
            resizable: false,
           
            buttons: {
                SignIn: function () {
                    var inputName = document.getElementById('inputName');
                    var inputSurName = document.getElementById('inputSurName');

                    var name = document.getElementById('name');
                    var surname = document.getElementById('surname');

                    name.value = inputName.value;
                    surname.value = inputSurName.value;

                    storeInfoLogin(infoLogin(name.value, surname.value));

                    $(this).dialog("close");
                  }
                }
            };
        d.dialog(dOpt);
    });
});