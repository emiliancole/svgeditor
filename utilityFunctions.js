
function load() {
var file = document.getElementById("myFile").files[0];
var reader = new FileReader();
reader.onload = function (e) {
    var textArea = document.getElementById("text");
    textArea.value = e.target.result;
};
reader.readAsText(file);
}

function update() {
var md = document.getElementById("text").value;
  document.getElementById("content").innerHTML = md;
}

function copy() {
  let textarea = document.getElementById("text");
  textarea.select();
  document.execCommand("copy");
}

function download(){
    var text = document.getElementById("text").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "out.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
 
 function help() {
	 alert("1. [Choose File] and [Load] or write html/svg code.\n"+
	 "2. [Update] to side-render textarea code.\n"+
	 "3. [Copy] to copy textarea content to clipboard.\n"+
	 "4. [Download] textarea content.\n"+
	 "5. [Clear] to delete textarea.\n"+
	 "6. [Help] to open this tutorial.");
}

function erase() {
	 document.getElementById("text").value = " ";
}



