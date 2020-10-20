var bottom = document.getElementById('bottom');
bottom.onmouseover = changeBackgroundColor;

function changeBackgroundColor() {
  bottom.style.backgroundColor = "red";
}

//add class to homebase element after image loads
let el = document.getElementById('baseImage');
el.className += " loaded";

//backInRight text 
