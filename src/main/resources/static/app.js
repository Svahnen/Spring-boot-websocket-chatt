
let ws;
ws = new WebSocket('ws://localhost:8080/name');
// ws.onmessage = function(data){
//    showGreeting(data.data);

ws.onmessage = function (event) {
    let log = document.getElementById("log");
    let message = event.data;
    log.innerHTML += message + "\n";
}

function send(element) {
    let content = element.value;
    let json = JSON.stringify({
        "message": content
    });
    ws.send(json);
}

document.getElementById("form").addEventListener("submit", function () {
    event.preventDefault();
    if (document.getElementById("send").value != "") {
        send(document.getElementById("send"));
        document.getElementById("send").value = "";
    }
})
