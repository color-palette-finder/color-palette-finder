alert('Im a palette, yo!');


var pallette = [];

function grabObjectMax() {
  var currentMax = {
    this.colorValue: "",
    this.max: 0
  };
  for (var key in object) {
    if (key > currentMax.max) {
      currentMax[max] = key;
      currentMax[colorValue] = object[key];
    }
  }
  pallette.push(currentMax.colorValue);
  delete object[currentMax.colorValue];
}
