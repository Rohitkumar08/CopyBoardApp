<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
	<%@ taglib uri = "http://java.sun.com/jsp/jstl/functions" prefix = "fn" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<title>CopyBoard</title>
<style>
body{
background-color: white;
}

#divActivites{
border:1px solid black;

}
.textinput {
width: 50%;
min-height: 75px;
outline: none;
resize: none;
/*border: 1px solid grey;*/
}
.text-content{
  box-shadow: 10px 10px 5px grey;
}


/*sfjgvdwhw*/
.url{
margin-left:-159px;
}

.popup {
    position: relative;
    display: inline-block;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* The actual popup */
.popup .popuptext {
    visibility: hidden;
    width: 160px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -80px;
}

/* Popup arrow */
.popup .popuptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.popup .show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
    from {opacity: 0;} 
    to {opacity: 1;}
}

@keyframes fadeIn {
    from {opacity: 0;}
    to {opacity:1 ;}
}

#div2{
    display:none;
  }

</style>

<script>
function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("Copy");
    var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
  }

function access() {
	var part1='https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2F23e94283.ngrok.io%2FCopyBoardBeta%2F';
	var part2="${model.name}";
	
	var part3 = '&chs=180x180&choe=UTF-8&chld=L|2';
	var finalsrc=part1+part2+part3;
	var image=document.getElementById('image');
	image.src=finalsrc;
	
}
function checkMessage() {
	var message = document.getElementById("myInput").value;
	var name= document.getElementById("name").value;
	console.log(name+" "+message);
	if(message==="")
	return false;
}

function clickHandlerExpiration(){
	console.log("inside expiration time window");
	var x = document.getElementById("div2");
	console.log(x.style.display);
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}

</script>

</head>
<body onload="access()">

<nav class="navbar navbar-default navbar-fixed-top navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.jsp">CopyBoard</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="navbar">     
      <ul class="nav navbar-nav navbar-right">
        <li><a href="howItWorks.jsp">How it works</a></li>
      	<!-- <li><a href="#">About us</a></li> -->
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

<div class="container text-center"  style="margin-top:100px;">



<form method="post" action="save" >
 <div class="form-group">
  <!-- <label for="url">Enter your custom url :</label> -->
   your custom url(Edit if you want) :<input  type="text" class="text-content" id="name" name="custUrl" style="width: 36%;" value="${model.name}">
 </div>
  <br>

<div class="form-group ">
 <c:set var = "theString" value = "${model.message}"/>
 <c:choose>
  <c:when test = "${fn:contains(theString, 'image/png')}">
   <img id="myInput" name="message" src="<c:url value="${model.message}"/>" width="800" height="500" />
  </c:when>
  <c:otherwise>
  			<div id = "errorName"></div>
           <textarea id="myInput"  class="textinput text-content" rows="15" cols="70" name="message"><c:out value="${model.message}" /></textarea> 
	</c:otherwise>
</c:choose>
  
</div>



<div class="form-group">
<c:set var = "theString" value = "${model.message}"/>
 <c:choose>
  <c:when test = "${fn:contains(theString, 'image/png')}">
  </c:when>
  <c:otherwise>
		<input type="checkbox" id="expiration" name="check" onclick="clickHandlerExpiration()"/>set expiration time(in seconds)
		<div id="div2">
		          <input type="text"  id="time" name="time"  value="180">
		         <p> *click save button to save<p>
		</div>
		<br>
	<input  type="submit" onclick="checkMessage()" value="save" class ="btn btn-success " style="margin-top: 5px;">
	<button type="button" style="margin-top: 5px;" class="btn btn-primary popup" onclick="myFunction()">Copy text
    <span class="popuptext" id="myPopup">copied!</span></button>
</c:otherwise>
</c:choose>
</div>

</form>
<div class="">
<div id="divActivites">
    
</div> 

<h4>scan the QR code and get your link</h4>
<a rel='nofollow' href='' border='0' style='cursor:default'>
	<img id="image" src='https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2F23e94283.ngrok.io%2FCopyBoardBeta%2Fshow&chs=180x180&choe=UTF-8&chld=L|2' alt=''>
</a></div>
</div>

</body>
</html>
