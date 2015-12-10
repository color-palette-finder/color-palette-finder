
function setDOMInfo(info) {
  document.getElementById('text1').innerHTML = info.paletteArray[0] + '<br>' + info.hexArray[0];
  document.getElementById('text2').innerHTML = info.paletteArray[1] + '<br>' + info.hexArray[1];
  document.getElementById('text3').innerHTML = info.paletteArray[2] + '<br>' + info.hexArray[2];
  document.getElementById('text4').innerHTML = info.paletteArray[3] + '<br>' + info.hexArray[3];
  document.getElementById('text5').innerHTML = info.paletteArray[4] + '<br>' + info.hexArray[4];
  document.getElementById('text6').innerHTML = info.paletteArray[5] + '<br>' + info.hexArray[5];

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
