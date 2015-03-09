function run() {
    var appContainerSend = document.getElementById('send');
    var appContainerDelete = document.getElementById('delete');
    var appContainerChange = document.getElementById('change');
    var appContainerSelect = document.getElementById('allMessages');
    var appContainerSignIn = document.getElementById('signin');
    
    appContainerSend.addEventListener('click', delegateEventSend);
    appContainerDelete.addEventListener('click', delegateEventDelete);
    appContainerChange.addEventListener('click', delegateEventChange);
    appContainerSelect.addEventListener('click', delegateEventSelect);
    appContainerSignIn.addEventListener('click', delegateEventSignIn);

}
function delegateEventSend(evtObj) {
    var text = document.getElementById('sendText');
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    if (text.value) {

        var select = document.getElementById("allMessages");
        var option = document.createElement("option");
        option.text = surname.value + " " + name.value + " : " + text.value;
        option.value = select.length;
     
        select.add(option);
        text.value = "";
    }
}
function delegateEventDelete(evtObj) {
    var select = document.getElementById("allMessages");
    var sendText = document.getElementById('sendText');
    select.remove(select.selectedIndex);
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
function delegateEventSignIn() {
    var chatArt = document.getElementById('ChatArt');
    var Login = document.getElementById('Login');

    var inputName = document.getElementById('inputName');
    var inputSurName = document.getElementById('inputSurName');

    var name = document.getElementById('name');
    var surname = document.getElementById('surname');

    name.value = inputName.value;
    surname.value = inputSurName.value;

    chatArt.className = "chat";
    Login.className = Login.className + " hiddenDiv";
       
}