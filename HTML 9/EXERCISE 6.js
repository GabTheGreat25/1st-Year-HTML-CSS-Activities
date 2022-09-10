// Fig. 10.8: SumArray.js
// Summing the elements of an array with for and for...in
function start()
{
var theArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var total1 = 0, total2 = 0;
// iterates through the elements of the array in order and adds
// each element's value to totall
var length = theArray.length; // get array's length once before loop
for ( var i = 0; i < length; ++i )
{
total1 += theArray[ i ];
} // end for
var results = "<p>Total using indices: " + total1 + "</p>";// JavaScript Document

// iterates through the elements of the array using a for... in
// statement to add each element's value to total2
for ( var element in theArray )
{
total2 += theArray[ element ];
} // end for
results += "<p>Total using for...in: " + total2 + "</p>";
document.getElementById( "output" ).innerHTML = results;
} // end function start
window.addEventListener( "load", start, false );