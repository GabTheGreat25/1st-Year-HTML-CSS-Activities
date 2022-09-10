// JavaScript Document
// Fig.12.19: coverviewer.js
// Script to demonstrate dynamic styles used for animation.
var interval = null; // keeps tracks of the interval
var speed = 6; //deteermines the speed of the animation 
var count = 0; //size of the image during the animation 

// called repeatedly to animate the book cover
function run()
{
	count += speed;
	
	//stop the animation when the imahge is large enough
	if (count >= 375)
		{
			window.clearInterval(interval);
			interval = null;
		}// end if
	var bigImage = document.getElementById("imgCover");
	bigImage.setAttribute("style", "width: " + (0.7656 * count + "px;") +
	"height: " + (count + "px;") );

}//end function run
//inserts the proper image into the main area and
// begins the animation

function display (imgfile)
{
	if (interval)
		return;
	
	var bigImage = document.getElementById("imgCover");
	bigImage.setAttribute("style", "width: 0px; height: 0px;");
	bigImage.setAttribute("src", "fullsize/" + imgfile);
	bigImage.setAttribute("alt", "Large version of" + imgfile);
	count = 0; //start the image size at 0
	interval = window.setInterval("run()", 10); //animate
}//end function display

//register event handlers
function start()
{
	run;
	document.getElementById("Pictures/Java.jpg").addEventListener(
	"click", function(){display ("Pictures/Java.jpg");}, false);
	document.getElementById("iw3htp").addEventListener(
	"click", function(){display ("Pictures/WWW.jpg");}, false);
	document.getElementById("cpphtp").addEventListener(
	"click", function(){display ("Pictures/C++.jpg");}, false);
	document.getElementById("jhtplov").addEventListener(
	"click", function(){display ("Pictures/Java 2.jpg");}, false);
	document.getElementById("cpphtplov").addEventListener(
	"click", function(){display ("Pictures/C++2.jpg");}, false);
	document.getElementById("vcsharphtp").addEventListener(
	"click", function(){display ("Pictures/C-Sharp.jpg");}, false);
}//end function start

window.addEventListener("load", start, false);