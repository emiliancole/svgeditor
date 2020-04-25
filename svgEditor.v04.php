<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>svgEditor</title>
<?php 
include("insertSvgAtCursor.js");
include("utilityFunctions.js");

 ?>

</head>
<body style="background-color:lightgrey;">

<h3>SVG-HTML EDITOR v04<input id="myFile" type="file"/>
<button onclick="load()">Load</button>
<select id="myTemplate" onchange="template()">
<option value="">TEMPLATE</option>
  <option value="a">a</option>
  <option value="html">html</option>
  <option value="svg">svg</option>
  <option value="php">php</option>
</select>
</h3>
<button onclick="update()">Update</button>
<button onclick="copy()">Copy</button>
<button onclick="download()">Download</button>
<button onclick="erase()">Clear</button>
<button onclick="help()">Help</button>
<input type="button" id="g" value="g">
<input type="button" id="defs" value="defs">
<input type="button" id="desc" value="desc">
<input type="button" id="symbol" value="symbol">

<select id="mySelect" onchange="draw()">
<option value="">SHAPE</option>
  <option value="circle">circle</option>
  <option value="ellipse">ellipse</option>
  <option value="polygon">polygon</option>
  <option value="rect">rect</option>
</select>

<hr>
<table><tr><td style="vertical-align: top;">
 <textarea id="text" rows="40" cols="50" style="overflow:scroll;">
  
</textarea></td><td style="vertical-align: top;">
 <div id="content"></div></td>
 </tr></table>

<?php 
include("buttonSvgFunctions.js");
include("drawFunctions.js");
 ?>
</body>
</html>