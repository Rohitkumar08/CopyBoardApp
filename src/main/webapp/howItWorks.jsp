<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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



</style>

<script>
function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("Copy");
    var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
  }

</script>

</head>
<body>

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

<p>
CopyBoard is a platform for sharing content by generating simple and customized url.<br>

It can be used in two ways:<br>
<p>
<h4>1. CopyBoard chrome extension.</h4>

<p>After installing CopyBoard chrome extension into your browser you can start using it.</p>
<p>From any web page just select the content you want to share and click the extension icon</p>
<p>After that left everything upon us..we will do it for you.</p>
<p>click the share content button to share the content you selected, no need to copy and paste, your content will automatically be pasted to the message box.</p>
<p>save and share the generated link with any one.</p>
<p><b>BINGO...!!!! DONE</b></p>
<h3>OR</h3>
<p>you can just simply scan the QR code generated from any device and you will have the link to the content.</p>
</p>
<p>

<h4>2. CopyBoard website.</h4>

<p>browse through the URL <a href="http://www.CopyBoardBeta.com">http://www.CopyBoardBeta.com</a></p>
<p>put the URL name as your friends first name and then enter the content you want to share, hit the submit button and its done share the current url with anyone.</p>
</p>
</p>

</div>
</body>
</html>
