//Fig. 10. 10: RollDice.js
//Summarizing die-rolling frequencies with an array instead of a switch
var frequency =  [0, 0, 0, 0, 0, 0, 0 ]; 
var totalDice = 0;
var dieImages = new Array(12);

function start()
{
	var button = document.getElementById("rollButton");
	button.addEventListener("click", rollDice, false);
	var length = dieImages.length;
	
	for (var i = 0; i < length; ++i)
		{
			dieImages[ i ]= document.getElementById( "die" + (i+1));
		}
}

function rollDice()
{
	var face;
	var length = dieImages.length;
	
	for(var  i = 0; i<length; ++i)
		{
			face = Math.floor(1 +Math.random() * 6);
			tallyRolls(face);
			setImage(i, face);
			++totalDice;
		}
	updateFrequencyTable();
}

function tallyRolls(face)
{
	++frequency[face];
}

function setImage(dienumber,face)
{
	dieImages[dienumber].setAttribute("src","Pictures/die" + face + ".png" );
	dieImages[dienumber].setAttribute("alt", "die with" + face + "spot(s)");
}

function updateFrequencyTable()
{
	var results ="<table><caption>Die Rolling Frequencies</caption>" + "<thead><th>Face</th><th>Frequency</th>" + "<th>Percent</th></thead><tbody>";
	
	var length = frequency.length;
	
	for (var i = 1; i<length; ++i)
		{
			results +="<tr><td>1</td><td>" + i +"</td><td>" + formatPercent(frequency[i]/totalDice) + "</td></tr>";
		}
	results += "</tbody></table>";
	document.getElementById("frequencyTableDiv").innerHTML = results;
}

function formatPercent(value)
{
	value *=100;
	return value.toFixed(2);
}

window.addEventListener("load", start, false);