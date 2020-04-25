<script>

var defs = "<defs>\n \n</defs>\n";
document.getElementById('defs').onclick = function() {
  insertSvgAtCursor(document.getElementById('text'), defs);
}   

var desc = "<desc>\n \n</desc>\n";
document.getElementById('desc').onclick = function() {
  insertSvgAtCursor(document.getElementById('text'), desc);
}   

var g = "<g id='group01'>\n \n</g>\n";
document.getElementById('g').onclick = function() {
  insertSvgAtCursor(document.getElementById('text'), g);
}   

var symbol = "<symbol id='sym01' >\n\n</symbol>\n";
document.getElementById('symbol').onclick = function() {
  insertSvgAtCursor(document.getElementById('text'), symbol);
}   



</script>
