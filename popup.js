
function setDOMInfo(info) {
  document.getElementById('text1').innerHTML = '<div id="hex1" class="hexText">' + info.hexArray[0] + '</div><br><div class="rgbText">' +  info.paletteArray[0] + '</div>';
  document.getElementById('text2').innerHTML = '<div id="hex2" class="hexText">' + info.hexArray[1] + '</div><br><div class="rgbText">' +  info.paletteArray[1] + '</div>';
  document.getElementById('text3').innerHTML = '<div id="hex3" class="hexText">' + info.hexArray[2] + '</div><br><div class="rgbText">' +  info.paletteArray[2] + '</div>';
  document.getElementById('text4').innerHTML = '<div id="hex4" class="hexText">' + info.hexArray[3] + '</div><br><div class="rgbText">' +  info.paletteArray[3] + '</div>';
  document.getElementById('text5').innerHTML = '<div id="hex5" class="hexText">' + info.hexArray[4] + '</div><br><div class="rgbText">' +  info.paletteArray[4] + '</div>';
  document.getElementById('text6').innerHTML = '<div id="hex6" class="hexText">' + info.hexArray[5] + '</div><br><div class="rgbText">' +  info.paletteArray[5] + '</div>';

  document.getElementById('color1').style.backgroundColor = info.hexArray[0];
  document.getElementById('color2').style.backgroundColor = info.hexArray[1];
  document.getElementById('color3').style.backgroundColor = info.hexArray[2];
  document.getElementById('color4').style.backgroundColor = info.hexArray[3];
  document.getElementById('color5').style.backgroundColor = info.hexArray[4];
  document.getElementById('color6').style.backgroundColor = info.hexArray[5];
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
        setDOMInfo);
  });
});


new Clipboard('.colorBox');
// copy to clipboard








