
function setDOMInfo(info) {
  document.getElementById('text1').innerHTML = '<div class="hexText">' + info.hexArray[0] + '</div><br><div class="rgbText">' +  info.paletteArray[0] + '</div>';
  document.getElementById('text2').innerHTML = '<div class="hexText">' + info.hexArray[1] + '</div><br><div class="rgbText">' +  info.paletteArray[1] + '</div>';
  document.getElementById('text3').innerHTML = '<div class="hexText">' + info.hexArray[2] + '</div><br><div class="rgbText">' +  info.paletteArray[2] + '</div>';
  document.getElementById('text4').innerHTML = '<div class="hexText">' + info.hexArray[3] + '</div><br><div class="rgbText">' +  info.paletteArray[3] + '</div>';
  document.getElementById('text5').innerHTML = '<div class="hexText">' + info.hexArray[4] + '</div><br><div class="rgbText">' +  info.paletteArray[4] + '</div>';
  document.getElementById('text6').innerHTML = '<div class="hexText">' + info.hexArray[5] + '</div><br><div class="rgbText">' +  info.paletteArray[5] + '</div>';

  document.getElementById('color1').style.backgroundColor = info.hexArray[0];
  document.getElementById('color2').style.backgroundColor = info.hexArray[1];
  document.getElementById('color3').style.backgroundColor = info.hexArray[2];
  document.getElementById('color4').style.backgroundColor = info.hexArray[3];
  document.getElementById('color5').style.backgroundColor = info.hexArray[4];
  document.getElementById('color6').style.backgroundColor = info.hexArray[5];
  console.log('paletteArray:', info.paletteArray);
  console.log('hexArray:', info.hexArray);
}

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', function () {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        // ...also specifying a callback to be called
        //    from the receiving end (content script)
        setDOMInfo);
  });
});

// function displayColors () {
//   document.getElementById('text1').innerHTML = paletteArray[0] + '<br><br>' + hexArray[0];
//   document.getElementById('text2').innerHTML = paletteArray[1] + '<br><br>' + hexArray[1];
//   document.getElementById('text3').innerHTML = paletteArray[2] + '<br><br>' + hexArray[2];
//   document.getElementById('text4').innerHTML = paletteArray[3] + '<br><br>' + hexArray[3];
//   document.getElementById('text5').innerHTML = paletteArray[4] + '<br><br>' + hexArray[4];
//   document.getElementById('text6').innerHTML = paletteArray[5] + '<br><br>' + hexArray[5];

//   console.log(paletteArray, hexArray)
// }

// document.getElementById('colorButton').addEventListener('click', displayColors);
