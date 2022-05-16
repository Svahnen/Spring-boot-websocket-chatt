
let ws;
ws = new WebSocket('ws://localhost:8080/name');
// ws.onmessage = function(data){
//    showGreeting(data.data);

ws.onmessage = function (event) {
    let log = document.getElementById("log");
    let message = event.data;
    log.innerHTML += message + "\n";
}

function send(msg) {
    let json = JSON.stringify({
        "message": msg
    });
    ws.send(json);
}

document.getElementById("form").addEventListener("submit", function () {
    event.preventDefault();
    if (document.getElementById("send").value != "") {
        let msg = document.getElementById("send").value // Save the message in another variable
        send(msg); // Send the message to the send function
        document.getElementById("send").value = ""; // now we can clear the input field without being scared of the send function not having the message when it is needed.
    }
})
