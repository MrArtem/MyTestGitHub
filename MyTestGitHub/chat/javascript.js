function run() {
    var appContainerSend = document.getElementById('send');
    var appContainerDelete = document.getElementById('delete');
    var appContainerChange = document.getElementById('change');
    var appContainerSelect = document.getElementById('allMessages');

    appContainerSend.addEventListener('click', delegateEventSend);
    appContainerDelete.addEventListener('click', delegateEventDelete);
    appContainerChange.addEventListener('click', delegateEventChange);
    appContainerSelect.addEventListener('click', delegateEventSelect);

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
    sendText.value = select.text;
}
function delegateEventChange(evtObj) {
    var sendText = document.getElementById('sendText');
    var index = document.getElementById("allMessages").selectedIndex;
    var select = document.getElementById("allMessages")[index];
    select.text = sendText.value;
    sendText.value = "";
}