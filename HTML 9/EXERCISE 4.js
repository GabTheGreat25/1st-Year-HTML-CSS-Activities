// Fig. 10.6: InitArray2.js
// Initializing arrays with initializer lists.
function start()
{
// Initializer list specifies the number of elements and
// a value for each element.
var colors = new Array( "cyan", "magenta","yellow", "black" );
var integers1 = [ 2, 4, 6, 8 ];
var integers2 = [ 2, 0,0, 8 ];
	
outputArray( "Array colors contains", colors,
document.getElementById( "output1" ) );
outputArray( "Array integers1 contains", integers1,
document.getElementById( "output2" ) );
outputArray( "Array integers2 contains", integers2,
document.getElementById( "output3" ) );
} // end function start// JavaScript Document

// output the heading followed by a two-column table
// containing indices and elements of "theArray"
function outputArray( heading, theArray, output )
{
var content = "<h2>" + heading + "</h2><table>" +
"<thead><th>Index</th><th>Value</th></thead><tbody>";
// output the index and value of each array element
var length = theArray.length; // get array's length once before loop
for ( var i = 0; i < length; ++i )
{
content += "<tr><td>" + i + "</td><td>" + theArray[ i ] +
"</td></tr>";
} // end for
content += "</tbody></table>";
output.innerHTML = content; // place the table in the output element
} // end function outputArray
window.addEventListener( "load", start, false );