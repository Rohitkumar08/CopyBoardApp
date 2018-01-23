
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log(url);
    if(url =="chrome://extensions/"){
    	alert("Not supported in this page for Chrome security reasons");
    	window.close();
    }
    	
	});

chrome.tabs.executeScript({
	code: "window.getSelection().toString();"
}, function(selection) {
	
	console.log(selection);
	document.getElementById("output").innerHTML = selection[0];

	var myname = "";

	chrome.storage.local.get('userName', function (result) {
		myname = result.userName;
		console.log(myname);

		if(typeof(myname) == "undefined")
			myname=Math.random().toString(36).substr(2, 5);

			        //alert("stored name is :"+myname);
			        document.getElementById("uName").value=myname;
			        var part1='https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2F26ca2a28.ngrok.io%2FCopyBoardBeta%2F';
			        var part2=myname;
			        var part3 = '&chs=180x180&choe=UTF-8&chld=L|2';
			        var finalsrc=part1+part2+part3;
					//alert(finalsrc);
					document.getElementById("image").src=finalsrc;
					var name=document.getElementById("uName").value;
					localStorage.setItem("username", name);
		               // alert(name);
		                //alert("name is: "+name);
		                console.log(name);
		                console.log(selection[0]);
		                //alert(selection[0]);
		                //alert(name);
		                // alert(selection[0]);
		                post('http://26ca2a28.ngrok.io/CopyBoardBeta/formSubmit/service', {name: name, content: selection[0]});
		            });

});
function sendServiceRequest(name, selectedText) {

	var xhttp = new XMLHttpRequest();
	var uri = 'http://26ca2a28.ngrok.io/CopyBoardBeta/' + name +'/'+ encodeURIComponent(selectedText);
   // var res = encodeURIComponent(uri);
   // var dec= decodeURIComponent(res);
// alert(uri);
// alert(dec);
xhttp.open('POST', 'http://26ca2a28.ngrok.io/CopyBoardBeta/'+ name + '/' +selectedText, true);
alert(selectedText);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("uName="+name+"&content="+selectedText);

	


  //chrome.tabs.create({url: serviceCall});
}
function clickHandler(e) {
	//var name =document.getElementById("uName").value;
	var name= localStorage.getItem("username").trim();


	if(name=="" || name.length<=2){
		document.getElementById("errorName").innerHTML="*not valid user name";
		return false;
	}

	document.getElementById("errorName").innerHTML="";
	chrome.tabs.create({url: "http://26ca2a28.ngrok.io/CopyBoardBeta/"+name});
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
	// formData.append("content", selectedText);

	// var request = new XMLHttpRequest();
	// request.open("POST", "http://1a1d6bfd.ngrok.io/CopyBoardBeta/formSubmit/service", true);
	// xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// request.send(formData);

	//alert("form submitted");
}



function clickHandlerSave(e) {
	

	//
	var name=document.getElementById("uName").value.trim();
	var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
	if(name=="" || name.length<=2 || format.test(name)){
		document.getElementById("errorName").innerHTML="*not valid user name";
		return false;
	}
	document.getElementById("errorName").innerHTML="";
	document.getElementById("changeName").value = "Saved";
	
	chrome.storage.local.set({'userName': name});
	localStorage.setItem("username", name);
    console.log(localStorage.getItem('userName'));
    var content=document.getElementById("output").value;
	//alert(content);
	post('http://26ca2a28.ngrok.io/CopyBoardBeta/formSubmit/service', {name: name, content: content});

	var part1='https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2F26ca2a28.ngrok.io%2FCopyBoardBeta%2F';
	var part2=name;
	var part3 = '&chs=180x180&choe=UTF-8&chld=L|2';
	var finalsrc=part1+part2+part3;
	//alert(finalsrc);
	document.getElementById("image").src=finalsrc;
	// Note: window.close(), not this.image
}
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('changeName').addEventListener('click', clickHandlerSave);
});

//for taking screenshot

function convertURIToImageData(URI) {
  return new Promise(function(resolve, reject) {


    if (URI == null) return reject();

    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d'),
        image = new Image();
        image.src = URI;
    image.addEventListener('load', function() {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      var img = canvas.toDataURL("image/png");

      resolve(context.getImageData(0, 0, canvas.width, canvas.height));
    }, false);
    image.src = URI;
   // console.log(image.src);
  //  post('http://26ca2a28.ngrok.io/CopyBoardBeta/ImageSubmit/save', {filepath : image.src});
    console.log("after image");

  });
  
}






function clickHandlerCapture(e){
	console.log("inside func");
	// var name=document.getElementById("uName").value.trim();
	var name=localStorage.getItem("username");
	//var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
	console.log(name);
	if(name=="" || name.length<=2 || (typeof(name) == "undefined") ){
		document.getElementById("errorName").innerHTML="*not valid user name";
		return false;
	}
        chrome.tabs.captureVisibleTab(null, {"format": "png"}, function(dataUrl) {

        	console.log("before calling data");
            convertURIToImageData(dataUrl).then(function(imageData) {

			var image = new Image();
			image.src = dataUrl;
			//console.log("main"+image.src);
			localStorage.setItem("imageSrc", image.src);

			console.log(localStorage.getItem("imageSrc"));
		chrome.tabs.create({url : "openScreen.html"});
			var url = image.src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
			// document.body.appendChild(image);
			//callImage(image.src);
			//chrome.browserAction.setPopup({popup: url});
			
			console.log("saved the image in the folder");
		
});
        });
        
 	

}
function callImage(URI){
	chrome.windows.create({url : URI,type: "popup", height: 480, width:800});

}
function saveScreenshot(method){
method = method || "POST"; // Set method to post by default if not specified
    var form = document.createElement("form");
    form.setAttribute("method", "home.html");
  		var hiddenField = document.createElement("input");
    		hiddenField.setAttribute("type", "hidden");
    		

            form.appendChild(hiddenField);
 
    document.body.appendChild(form);
    form.submit();
console.log("saves  screenshot");

}


document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('btnCapture').addEventListener('click', clickHandlerCapture);
});
function saveImage(path, method) {
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

}

