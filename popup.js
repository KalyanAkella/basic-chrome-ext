// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
  var command = e.target.id;
  switch (command) {
    case "up":
      chrome.tabs.executeScript(null, {code:"window.scrollBy(0, -100);"});
      break;
    case "down":
      chrome.tabs.executeScript(null, {code:"window.scrollBy(0, 100);"});
      break;
    case "left":
      chrome.tabs.executeScript(null, {code:"window.history.back();"});
      break;
    case "right":
      chrome.tabs.executeScript(null, {code:"window.history.forward();"});
      break;
  }
//  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
