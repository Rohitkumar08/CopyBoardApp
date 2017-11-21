


chrome.tabs.executeScript( {
                code: "window.getSelection().toString();"
            }, function(selection) {
            	console.log(selection);
                document.getElementById("output").innerHTML = selection[0];
                var name=document.getElementById("uName").value;
                console.log(name);
                console.log(selection[0]);
                alert(name);
                 	sendServiceRequest(name, selection[0]);
            });
function sendServiceRequest(name, selectedText) {
  
   var xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'http://4932bfdc.ngrok.io/CopyBoardBeta/' + name +'/'+ selectedText, true);
    xhttp.send();

  //chrome.tabs.create({url: serviceCall});
}
function clickHandler(e) {
    chrome.tabs.create({url: "http://4932bfdc.ngrok.io/CopyBoardBeta/rohit"});
    window.close(); // Note: window.close(), not this.close()
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('click-me').addEventListener('click', clickHandler);
});