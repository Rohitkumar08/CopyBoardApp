$(function(){
    $("#div2").hide();
    
  $("#frst").on("click", function(){
    alert("hi");	
        $("#div2, #div1").toggle();
    });
});