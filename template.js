function template() {
  var t = document.getElementById("myTemplate").value;
  var idText = document.getElementById('text');
 switch(t) {
  case "a":
    var string = "<a href='http://example.com' target='_blank'>\n\n</a>\n";
    break;
  case "html":
    var string = "<html>\n <head>\n </head>\n <body>\n \n</body>\n</html>\n";
    break;
  case "php":
    string = "<\?php\n\n\n?>\n";
	break
  case "svg":
    string = "<svg width='500' height='500' viewBox='0 0 500 500' >\n"+
	"<rect x='0 y='0' width='500' height='500' "+
	"style='stroke:black;stroke-width:1;fill:none;' />\n\n\n</svg>\n";
    break;
  default:
    string = "";
	}
  insert(idText, string);
}
