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

    if (restoreMessages() != null) {
        var allMessages = restoreMessages();
        createAllMessages(allMessages);
    }

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
    var sendText = document.getElementById('sendText');

    var name = document.getElementById('name');
    var surname = document.getElementById('surname');

    var index = document.getElementById("allMessages").selectedIndex;
    var select = document.getElementById("allMessages")[index];

    select.text = '\u2421';

    listForSaving[index] = messageOption('\u2421', index);
    storeMessages(listForSaving);

    sendText.value = "";
}
function delegateEventSelect(evtObj) {
    var sendText = document.getElementById('sendText');
    var index = document.getElementById("allMessages").selectedIndex;
    var select = document.getElementById("allMessages")[index];
    var subindex = select.text.indexOf(":");
    if (select.text != '\u2421') {
        if (select.text.indexOf('\u270e') != -1) {
            sendText.value = select.text.substring(subindex + 1, select.text.indexOf('\u270e'));      
        } else {
            sendText.value = select.text.substring(subindex + 1);
        }
    }
}
function delegateEventChange(evtObj) {
    var sendText = document.getElementById('sendText');
    if (sendText.value != "") {
        var name = document.getElementById('name');
        var surname = document.getElementById('surname');

        var index = document.getElementById("allMessages").selectedIndex;
        var select = document.getElementById("allMessages")[index];


        select.text = surname.value + " " + name.value + " : " + sendText.value + "  " + '\u270e';

        listForSaving[index] = messageOption(select.text, index);
        storeMessages(listForSaving);

        sendText.value = null;
    }
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
function addAllMessages(message) {
    
        var select = document.getElementById('allMessages');
        var option = document.createElement("option");
        option.text = message.message;
        option.value = message.id;

        select.add(option);
    
}
function ActiveInfoLogin() {
    var infoLogin = restoreLoginInfo();
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');

    name.value = infoLogin.name;
    surname.value = infoLogin.surname;
}
function LogOutFromChat() {
    storeInfoLogin(null);
}
$(document).ready(function () {
    var isNotLogin = restoreLoginInfo() == null;

    var dialog = $('#Login').dialog({
        title: 'Login',
        modal: true,
        resizable: false,
        autoOpen: isNotLogin,

        buttons: {
            SignIn: function () {
                var inputName = document.getElementById('inputName');
                var inputSurName = document.getElementById('inputSurName');

                var name = document.getElementById('name');
                var surname = document.getElementById('surname');

                name.value = inputName.value;
                surname.value = inputSurName.value;
                inputName.value = null;
                inputSurName.value = null;

                storeInfoLogin(infoLogin(name.value, surname.value));

                $(this).dialog("close");
            }
        }
    });
    if (isNotLogin == false) {
        ActiveInfoLogin();
    }
    $(document).on('click', '#logOut', function () {

        LogOutFromChat();

        var name = document.getElementById('name');
        var surname = document.getElementById('surname');
        name.value = null;
        surname.value = null;
        dialog.dialog('open');

    });
});

$(function () {
    $("#RenameDiv").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
        buttons:{
            OK:function(){
               var name = document.getElementById('name');
               var surname = document.getElementById('surname');

               var changeName = document.getElementById('changeName');
               var changeSurname = document.getElementById('changeSurname');
               
               name.value = changeName.value;
               surname.value = changeSurname.value;
               changeName.value = null;
               changeSurname.value = null;
               storeInfoLogin(infoLogin(name.value, surname.value));

               $(this).dialog("close");
            }
        }
    });

    $("#rename").click(function () {
               var changeName = document.getElementById('changeName');
               var changeSurname = document.getElementById('changeSurname');

               var name = document.getElementById('name');
               var surname = document.getElementById('surname');

               changeName.value = name.value;
               changeSurname.value = surname.value;
        $("#RenameDiv").dialog("open");
    });
});