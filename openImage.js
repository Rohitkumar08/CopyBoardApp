
window.onload = setImageSrc();
function setImageSrc()
{
	console.log("inside img src");
	// var x = document.getElementById('showimage');
	// x.setAttribute('src',"https://static.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg");
	var x= localStorage.getItem("imageSrc");
	var image = x;
document.write('<img src=' + image + ' width="900" height="600">');
}


function clickHandlerDownload(e) {
	var x= localStorage.getItem("imageSrc");
    
	var url = x.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
	chrome.tabs.create({url: url});
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('btnDownload').addEventListener('click', clickHandlerDownload);
});

function clickHandlerSave(e) {
	var x= localStorage.getItem("imageSrc");
	post('http://26ca2a28.ngrok.io/CopyBoardBeta/ImageSubmit/save', {filepath : x});
}

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
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
    

 }

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('btnSave').addEventListener('click', clickHandlerSave);
});




function clickHandlerShare(e) {
    var x= localStorage.getItem("imageSrc");
    var y = localStorage.getItem("username");
    console.log(y);
    post('http://26ca2a28.ngrok.io/CopyBoardBeta/ImageSubmit/share', {filepath : x, name: y});
}

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
            // alert(key+" : "+params[key]);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
    

 }

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnShare').addEventListener('click', clickHandlerShare);
});