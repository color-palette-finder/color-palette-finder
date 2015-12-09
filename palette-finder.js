var elements = document.getElementsByTagName('*');
console.log('elements: ', elements);
var colorObject = {};


// ------------------- SCRAPE PAGE FOR ALL COLORS AND BACKGROUNDCOLORS ------------------------
function colorHelper ( property ) {
	for(var i = 0; i < elements.length; i++) {
		var style = window.getComputedStyle(elements[i]); 
		var color = style.getPropertyValue( property ); 
		if(color !== 'rgb(0, 0, 0)' && color !== 'rgb(255, 255, 255)' && color !== 'rgba(0, 0, 0, 0)') {
			if(!colorObject[color]){
				colorObject[color]=1;
			} else {
				colorObject[color]++;
			}
		}
	}
}
colorHelper('color');
colorHelper('background-color');
console.log('before:', colorObject);

//FIND TOP 6 MOST COMMON COLORS ON PAGE
var paletteArray = [];
function getObjectMax () {
	var currentMax = {};
	currentMax.max = 0;
	for (var key in colorObject) {
		if (colorObject[key] > currentMax.max) {
			currentMax.max = colorObject[key];
			currentMax.colorValue = key;
		}
	}
	paletteArray.push(currentMax.colorValue);
	delete colorObject[currentMax.colorValue];
}
for (var i = 0; i < 6; i++) {
	getObjectMax();
}

console.log(paletteArray);
//-------------------------------------------------------------------------------------------




//------------------------------ CONVERT RGB TO HEXIDECIMAL ---------------------------------
var hexArray = [];
function toHex (c) {
	var hex = c.toString(16);
	return hex.length === 1 ? '0'+hex : hex;
}

function rgbToHex (r, g, b) {
	var hexCode = '#' +toHex(r) +toHex(g) +toHex(b);
	hexArray.push(hexCode);
}

for(var j = 0; j < paletteArray.length; j++) {
	var rgbCode = paletteArray[j];
	var rgb = rgbCode.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
		rgbToHex(parseInt(rgb[1]), parseInt(rgb[2]), parseInt(rgb[3]));
}

console.log(hexArray);
//-------------------------------------------------------------------------------------------


//------------------------------ ADD INFO TO HTML FILE, ADD COLORS TO DOM ELEMENTS ---------------------------------
// for (var i = 0; i < paletteArray.length; i++) {
//   var extnDiv = document.getElementById('paletteDisplay');
//   var paletteDiv = document.createElement('div');
//   var displayDiv = document.createElement('div');
//   var valueDiv = document.createElement('div');
//   var rgbValue = document.createElement('p');
//   var hexValue = document.createElement('p');

//   rgbValue.innerHTML = "VALUE FROM FUNCTION";
//   hexValue.innerHTML = "VALUE FROM FUNCTION";

//   paletteDiv.setAttribute("class", "paletteDiv");
//   displayDiv.setAttribute("class","displayDiv");
//   valueDiv.setAttribute("class","valueDiv");

//   paletteDiv.style.backgroundColor = i;

//   valueDiv.appendChild(rgbValue);
//   valueDiv.appendChild(hexValue);
//   paletteDiv.appendChild(displayDiv);
//   paletteDiv.appendChild(valueDiv);
//   extnDiv.appendChild(paletteDiv);
// }










