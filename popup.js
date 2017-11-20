function clickHandler(e) {
    chrome.tabs.update({url: "http://41347b80.ngrok.io/CopyBoardBeta/"});
    window.close(); // Note: window.close(), not this.close()
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('click-me').addEventListener('click', clickHandler);
});




// document.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('checkPage');
//   checkPageButton.addEventListener('click', function() {

//     chrome.tabs.getSelected(null, function(tab) {
      
//       window.open= ("http://www.fb.com", '_blank');
//       d = document;
//       alert("hi there");
//       var f = d.createElement('form');
//       f.action = 'http://41347b80.ngrok.io/CopyBoardBeta/';
//       f.method = 'post';
//       d.body.appendChild(f);
//       f.submit();
//     });
//   },false);
// },false);

// $(document).ready(function(){
//       $('#checkPage').click(function(){
//         alert("hi kranthi");
//         window.location.href = "http://www.fb.com";
//       })
      
//       });
