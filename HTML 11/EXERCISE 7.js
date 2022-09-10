// JavaScript Document
// Fig.12.14: collection.js
//Script to demonstrate using the links collection.
function processlinks()
{
	var linkslist = document.links; //get the document's links
	var contents = "<ul>";
	
	// concatenate each link contents
	for (var i = 0; i<linkslist.length; ++i)
		{
			var currentlink = linkslist[i];
			contents += "<li><a href='" + currentlink.href + "'>" +
				currentlink.innerHTML + "</li>";
		}// end for
	contents += "</ul>";
	document.getElementById("links").innerHTML = contents;
} // end function processlinks

window.addEventListener("load", processlinks, false);
