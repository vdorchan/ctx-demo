// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

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

chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    console.log({ details })
    setHeader(details.requestHeaders, { name: 'Referer', value: 'https://liveplatform.taobao.com/live/liveList.htm' })
    return { requestHeaders: details.requestHeaders };
  },
  // filters
  { urls: ['https://*/*', 'http://*/*'] },
  // extraInfoSpec
  ['blocking', 'requestHeaders', 'extraHeaders']);

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ color: '#3aa757' }, function () {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'developer.chrome.com' },
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

  console.log(123)
  $.ajaxSetup({
    referer: function (xhr) { xhr.setRequestHeader("referer", "https://liveplatform.taobao.com/live/liveList.htm") }
  })
  $.ajax({
    type: 'POST',
    url: 'https://liveplatform.taobao.com/live/action.do?api=query_live_entry_permission',
    data: {
      _tb_token_: '56ee586ad49de',
      entries: JSON.stringify(["hierarchy", "exclusive"])
    }
  }).done(res => console.log('res:', res))
});
