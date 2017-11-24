


chrome.tabs.executeScript( {
	code: "window.getSelection().toString();"
}, function(selection) {
	console.log(selection);
	document.getElementById("output").innerHTML = selection[0];

	var myname = "";

	chrome.storage.local.get('userName', function (result) {
		myname = result.userName;
		if(typeof(myname) == "undefined")
			myname="Bot";
			        //alert("stored name is :"+myname);
			        document.getElementById("uName").value=myname;
			        var part1='https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2F35303209.ngrok.io%2FCopyBoardBeta%2F';
			        var part2=myname;
			        var part3 = '&chs=180x180&choe=UTF-8&chld=L|2';
			        var finalsrc=part1+part2+part3;
					//alert(finalsrc);
					document.getElementById("image").src=finalsrc;
					var name=document.getElementById("uName").value;
		               // alert(name);
		                //alert("name is: "+name);
		                console.log(name);
		                console.log(selection[0]);
		                //alert(selection[0]);
		                //alert(name);
		                // alert(selection[0]);
		                post('http://35303209.ngrok.io/CopyBoardBeta/formSubmit/service', {name: name, content: selection[0]});
		            });

});
function sendServiceRequest(name, selectedText) {

	var xhttp = new XMLHttpRequest();
	var uri = 'http://35303209.ngrok.io/CopyBoardBeta/' + name +'/'+ encodeURIComponent(selectedText);
   // var res = encodeURIComponent(uri);
   // var dec= decodeURIComponent(res);
// alert(uri);
// alert(dec);
xhttp.open('POST', 'http://35303209.ngrok.io/CopyBoardBeta/'+ name + '/' +selectedText, true);
alert(selectedText);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("uName="+name+"&content="+selectedText);




  //chrome.tabs.create({url: serviceCall});
}
function clickHandler(e) {
	var name =document.getElementById("uName").value;
	if(name=="" || name.length<=2){
		document.getElementById("errorName").innerHTML="*not valid user name";
		return false;
	}
	document.getElementById("errorName").innerHTML="";
	chrome.tabs.create({url: "http://35303209.ngrok.io/CopyBoardBeta/"+name});
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
	

	//
	var name=document.getElementById("uName").value;
	if(name=="" || name.length<=2){
		document.getElementById("errorName").innerHTML="*not valid user name";
		return false;
	}
	document.getElementById("errorName").innerHTML="";
	document.getElementById("changeName").value = "Saved";
	
	chrome.storage.local.set({'userName': name});
    //alert(name);
    var content=document.getElementById("output").value;
	//alert(content);
	post('http://35303209.ngrok.io/CopyBoardBeta/formSubmit/service', {name: name, content: content});

	var part1='https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2F35303209.ngrok.io%2FCopyBoardBeta%2F';
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

