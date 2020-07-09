// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

function setHeader(headers, header) {
  let hasSet = false
  for (var i = 0; i < headers.length; i++) {
    if (headers[i].name.toLowerCase() == name) {
      hasSet = true;
      headers.splice(i, 1, header);
      break;
    }
  }
  if (!hasSet) {
    console.log({header})
    headers.push(header);
  }
}

chrome.storage.sync.get('color', function (data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function (element) {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: 'document.body.style.backgroundColor = "' + color + '";' });
  });
};

$('#scrawer').on('click', () => {
  console.log('爬')
  $.ajax({
    type: 'POST',
    url: 'https://liveplatform.taobao.com/live/action.do?api=query_live_entry_permission',
    data: {
      _tb_token_: '56ee586ad49de',
      entries: JSON.stringify(["hierarchy", "exclusive"])
    }
  }).done(res => console.log('res:', res))
})
