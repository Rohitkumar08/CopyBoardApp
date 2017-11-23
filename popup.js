


chrome.tabs.executeScript( {
                code: "window.getSelection().toString();"
            }, function(selection) {
            	console.log(selection);
                document.getElementById("output").innerHTML = selection[0];
                var name=document.getElementById("uName").value;
                console.log(name);
                console.log(selection[0]);
                //alert(name);
                // alert(selection[0]);
                post('http://1a1d6bfd.ngrok.io/CopyBoardBeta/formSubmit/service', {name: name, content: selection[0]});
                //sendServiceRequest(name, selection[0]);
           		//post(name, selection[0]);
            });
function sendServiceRequest(name, selectedText) {
  
   var xhttp = new XMLHttpRequest();
   var uri = 'http://1a1d6bfd.ngrok.io/CopyBoardBeta/' + name +'/'+ encodeURIComponent(selectedText);
   // var res = encodeURIComponent(uri);
   // var dec= decodeURIComponent(res);
// alert(uri);
// alert(dec);
    xhttp.open('POST', 'http://1a1d6bfd.ngrok.io/CopyBoardBeta/'+ name + '/' +selectedText, true);
    alert(selectedText);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("uName="+name+"&content="+selectedText);




  //chrome.tabs.create({url: serviceCall});
}
function clickHandler(e) {
	var name =document.getElementById("uName").value;
    chrome.tabs.create({url: "http://1a1d6bfd.ngrok.io/CopyBoardBeta/"+name});
    window.close(); // Note: window.close(), not this.close()
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('click-me').addEventListener('click', clickHandler);
});

function post(path, params, method) {
    method = method || "POST"; // Set method to post by default if not specified
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    //alert(path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            //alert(key+" : "+params[key]);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
    

 //    var formData = new FormData();

	// formData.append("name", name);
	// formData.append("content", selectedText); // number 123456 is immediately converted to a string "123456"


	// var request = new XMLHttpRequest();
	// request.open("POST", "http://1a1d6bfd.ngrok.io/CopyBoardBeta/formSubmit/service", true);
	// xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// request.send(formData);

	//alert("form submitted");
}

function clickHandlerSave(e) {
	document.getElementById("changeName").value = "Saved";
	var name=document.getElementById("uName").value;
    //alert(name);
	var content=document.getElementById("output").value;
	//alert(content);
    post('http://1a1d6bfd.ngrok.io/CopyBoardBeta/formSubmit/service', {name: name, content: content});
	// Note: window.close(), not this.close()
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeName').addEventListener('click', clickHandlerSave);
});

