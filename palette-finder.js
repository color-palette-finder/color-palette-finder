console.log('in color palette');

var elements = document.getElementsByTagName('*');

console.log('elements: ', elements);

var colorObject = {};


function colorHelper ( property ) {
	for(var i = 0; i < elements.length; i++) {

		var style = window.getComputedStyle(elements[i]); 
		var color = style.getPropertyValue( property ); 

		console.log( property );
		
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


var paletteArray = [];

function getObjectMax () {
	var currentMax = {};
	currentMax.max = 0;

	for (var key in colorObject) {
		if (colorObject[key] > currentMax.max) {
			currentMax.max = colorObject[key];
			currentMax.colorValue = key;
		}
		console.log('key:', currentMax.colorValue);
	}
	paletteArray.push(currentMax.colorValue);
	delete colorObject[currentMax.colorValue];
}
for (var i = 0; i < 6; i++) {
	getObjectMax();
}
for (var keys in colorObject) {
	console.log('for in result: ', colorObject[keys]);
}
console.log('after:', colorObject);
console.log(paletteArray);
