(function() {
  let fixed_for = 0;
  let frame = document.getElementsByTagName("iframe")[0];
  for (let img of frame.contentWindow.document.getElementsByTagName("img")) {
   if(img.style.width.includes("px")) {
  	img.setAttribute("width", img.style.width.replace("px", ""));
    fixed_for += 1;
   }
 }
 alert("Adjusted sizes for " + fixed_for + " images");
})();
