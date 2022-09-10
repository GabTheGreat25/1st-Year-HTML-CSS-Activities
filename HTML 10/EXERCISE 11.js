// Fig. 11.19: FavoriteTwitterSearchs.js
// Storing and retrieving key/value pairs using
// HTML 5 localStroage and sessionStrorage

var tags; //array of tags for queries

//loads previously saved searches and displays them in the page

function loadSearches()
{
	if ( !sessionStorage.getItem( "herePreviously" ) ) 
		{
			sessionStorage.setItem ("herePreviously", "true" );
			document.getElementById ("welcomeMessage").innerHTML = "Welcome to the Favorite Twitter Searches App";
		} //end if
	
	var length = localStorage.length; //number of key/va;ue pairs
	tags = []; //create empty array
	
	//load for all keys
	for (var i = 0; i <length; ++i)
		{
			tags[i] = localStorage.key(i);
		} //end for
	
	tags.sort(); // sort the keys
	
	var markup = "<ul>"; //use to store search link markup
	var url = "http://search.twitter.com/search?q=";
	
	//build list of links
	for (var tag in tags)
		{
			var query = url + localStorage.getItem(tags[tag]) ;
			markup+= "<li><span><a href = '" + query + "'>" + tags[tag] + "</a></span>" +
				"<input id = '" + tags[tag] + "' type = 'button' " + "value = 'Edit' onClick = 'editTag(id)'>" +
				"<input id = '" + tags[tag] + "' type = 'button' " + "value = 'Delete' onClick = 'deleteTag(id)'>";
		} // end for
	
	markup += "</ul>";
	document.getElementById("searches").innerHTML = markup;
} //end function loadSearches

//deletes all key/value pairs from localStorage
function clearAllSearches()
{
	localStorage.clear();
	loadSearches(); //reload searches
} // end function cleaseAllSearches

//saves a newly tagged search into localStorage
function saveSearch()
{
	var query = document.getElementById("query");
	var tag = document.getElementById("tag");
	localStorage.setItem(tag.value, query.value);
	tag.value = ""; //clear tag input
	query.value = ""; //clear query input
	loadSearches(); //reload searches
} //end function saveSearch

//deletes a specific key/value pair from localStorage
function deleteTag ( tag )
{
	localStorage.removeItem(tag);
	loadSearches(); //reload searches
} //end function deleteTag

//display existing tagged query for editing
function editTag( tag )
{
	document.getElementById("query").value = localStorage[ tag ];
	document.getElementById("tag").value = tag;
	loadSearches(); // reload searches
} // end function editTag

//register event handles then load searches
function start()
{
	var saveButton = document.getElementById ( "saveButton" );
	saveButton.addEventListener( "click", saveSearch, false);
	var clearButton = document.getElementById( "clearButton" );
	clearButton.addEventListener( "click", clearAllSearches, false);
	loadSearches(); //load the previously saved searches
} //end function start

window.addEventListener( "load", start, false);
