// JavaScript Document
// Fig. 13.2: load.js
// Script  to demonstrate the load event.
var seconds = 0;

function updateTime()
{
	++seconds;
	document.getElementById( "soFar" ).innerHTML = seconds;
} // end function updateTime

window.addEventListener( "load", startTimer, false );

// called when the page loads to begin the timer
function startTimer()
{
	updateTime;
	window.setInterval( "updateTime()", 1000 );
} // end function startTimer

// called every 1000 ms to update the timer
