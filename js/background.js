// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict'

let taobaoCookiesStr = ''

console.log('load background')

const url =
  'https://h5api.m.taobao.com/h5/mtop.alibaba.iic.xinsightshop.olap.query/1.0/?jsv=2.5.8&appKey=27522521&t=1594347265190&sign=d48a35e48b0e6d1ff2dad12890e0ce66&api=mtop.alibaba.iic.xinsightshop.olap.query&v=1.0&type=originaljson&dataType=json&timeout=20000&H5Request=true&data=%7B%22param%22%3A%22%7B%5C%22queryId%5C%22%3A%5C%2211%7C49336521%7Cundefined%5C%22%2C%5C%22cubeId%5C%22%3A%5C%22tblive_rpt_item_indicator%5C%22%2C%5C%22queryDetail%5C%22%3Afalse%2C%5C%22startTime%5C%22%3A%5C%222020-07-07%2020%3A01%3A09%5C%22%2C%5C%22endTime%5C%22%3A%5C%222020-07-07%2022%3A02%3A59%5C%22%2C%5C%22timeType%5C%22%3A2%2C%5C%22sign%5C%22%3Anull%2C%5C%22limit%5C%22%3A2000%2C%5C%22row%5C%22%3A%5C%22%5B%7B%5C%5C%5C%22name%5C%5C%5C%22%3A%5C%5C%5C%22%E5%95%86%E5%93%81id%5C%5C%5C%22%2C%5C%5C%5C%22isMeasure%5C%5C%5C%22%3Afalse%7D%2C%7B%5C%5C%5C%22name%5C%5C%5C%22%3A%5C%5C%5C%22%E4%B8%BB%E5%9B%BE%E5%9C%B0%E5%9D%80%5C%5C%5C%22%2C%5C%5C%5C%22isMeasure%5C%5C%5C%22%3Afalse%7D%2C%7B%5C%5C%5C%22name%5C%5C%5C%22%3A%5C%5C%5C%22%E5%95%86%E5%93%81%E6%A0%87%E9%A2%98%5C%5C%5C%22%2C%5C%5C%5C%22isMeasure%5C%5C%5C%22%3Afalse%7D%5D%5C%22%2C%5C%22measure%5C%22%3A%5C%22%5B%7B%5C%5C%5C%22name%5C%5C%5C%22%3A%5C%5C%5C%22%E5%95%86%E5%93%81%E7%82%B9%E5%87%BB%E6%AC%A1%E6%95%B0%5C%5C%5C%22%2C%5C%5C%5C%22isMeasure%5C%5C%5C%22%3Atrue%7D%2C%7B%5C%5C%5C%22name%5C%5C%5C%22%3A%5C%5C%5C%22%E5%95%86%E5%93%81%E7%82%B9%E5%87%BB%E4%BA%BA%E6%95%B0%5C%5C%5C%22%2C%5C%5C%5C%22isMeasure%5C%5C%5C%22%3Atrue%7D%5D%5C%22%2C%5C%22column%5C%22%3A%5C%22%5B%5D%5C%22%2C%5C%22orders%5C%22%3A%5C%22%5B%5D%5C%22%2C%5C%22filter%5C%22%3A%5C%22%5B%7B%5C%5C%5C%22name%5C%5C%5C%22%3A%5C%5C%5C%22%E5%BC%80%E6%92%AD%E6%97%A5%E6%9C%9F%E5%88%86%E5%8C%BA%E5%AD%97%E6%AE%B5yyyymmdd%5C%5C%5C%22%2C%5C%5C%5C%22type%5C%5C%5C%22%3A%5C%5C%5C%22dimension%5C%5C%5C%22%2C%5C%5C%5C%22isMeasure%5C%5C%5C%22%3Afalse%2C%5C%5C%5C%22values%5C%5C%5C%22%3A%5B%5C%5C%5C%2220200707%5C%5C%5C%22%5D%2C%5C%5C%5C%22oper%5C%5C%5C%22%3A%5C%5C%5C%22%3D%5C%5C%5C%22%7D%2C%7B%5C%5C%5C%22name%5C%5C%5C%22%3A%5C%5C%5C%22%E7%9B%B4%E6%92%AD%E9%97%B4id%5C%5C%5C%22%2C%5C%5C%5C%22type%5C%5C%5C%22%3A%5C%5C%5C%22dimension%5C%5C%5C%22%2C%5C%5C%5C%22isMeasure%5C%5C%5C%22%3Afalse%2C%5C%5C%5C%22values%5C%5C%5C%22%3A%5B%5C%5C%5C%22271421666877%5C%5C%5C%22%5D%2C%5C%5C%5C%22oper%5C%5C%5C%22%3A%5C%5C%5C%22%3D%5C%5C%5C%22%7D%2C%7B%5C%5C%5C%22name%5C%5C%5C%22%3A%5C%5C%5C%22%E4%B8%BB%E6%92%ADid%5C%5C%5C%22%2C%5C%5C%5C%22type%5C%5C%5C%22%3A%5C%5C%5C%22dimension%5C%5C%5C%22%2C%5C%5C%5C%22isMeasure%5C%5C%5C%22%3Afalse%2C%5C%5C%5C%22values%5C%5C%5C%22%3A%5B2081592196%5D%2C%5C%5C%5C%22oper%5C%5C%5C%22%3A%5C%5C%5C%22%3D%5C%5C%5C%22%7D%5D%5C%22%2C%5C%22extra%5C%22%3Anull%7D%22%2C%22innerId%22%3A%22%22%7D'

function setHeader(headers, header) {
  let hasSet = false
  for (var i = 0; i < headers.length; i++) {
    if (headers[i].name.toLowerCase() == name) {
      hasSet = true
      headers.splice(i, 1, header)
      break
    }
  }
  if (!hasSet) {
    headers.push(header)
  }
}

chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {

    console.log('header', details.requestHeaders);
    setHeader(details.requestHeaders, { name: 'Referer', value: 'https://liveplatform.taobao.com/live/liveList.htm' })
    setHeader(details.requestHeaders, { name: 'Origin', value: 'https://databot.taobao.com' })
    setHeader(details.requestHeaders, { name: 'origin', value: 'https://databot.taobao.com' })
    setHeader(details.requestHeaders, { name: 'Sec-Fetch-Site', value: 'same-site' })
    setHeader(details.requestHeaders, { name: 'accept', value: 'application/json' })
    setHeader(details.requestHeaders, { name: 'bx-ua', value: '125#coPcaW1PcWQTTwQKzNfjQPdSuDf2r14YEXzdh0wkDabeTy+7lLrzizUry2DYvGZJP5aGwjm+HikyYKtwz6J8+ArgPTl5We9NsJtJOiNbljnNvcYsdbW3FLgx2z4tReU3AphNThGsBlOW8t41Mg93Gtr2x5CZy0NQ4acGcUiccgapEgscUXoScvsONhMpc37fJmwP+lKBN+XWapS1SaILV5jdQMmfDZ4AoH7Cllu0VhVulFCP700YSoDhaeU9U89QNLpLDIlnpiMTFtkcSUSOlRqdMcTlw/U/5zenxL8huRUd46mrV0B+oYU66G5mryG5SD4ReFEyPxG9k/HeVABMcKUceFW94TFC+QoZt+4g2e4f2Waf9dV8TH1IEbNOdHPhmFjwPq2MWp0L2ANuaQsZob7Cta31lVeUL34XDx5KFcfml8gt2tL4eIGLJLvb2oW/PikngUF8O/SqLy8Lx7nBI+/lLHIREvY92wh8HGWGhzD/qUMrRbo/poN0zUukj+KixfG+Xo2UV6gOXv5m9tWxeh8g9utz2kOjnZ7D3xpuUrWKrRgOKw1IEzuN095JGkcSRKmAbJh/iT4r4vkXGA/7g66ZLseQz/KphGAr3CQtFBGGVUrx5JiCasvK6XmLGfCOkMl1hdg2UHbY/FSKZ9+PWwpD32qgx5VvrrcWW5CszfQMVdcxFiETZ0E7fa5zs7swj8of7dnKj37GHoRiNRX8w3yTisjU5JphMr2xTzoRY66YCXfGHaAdlev3L11zLoeERm2slIAko8o8936X9ZZPzw3v+0OZzzxaoze7uGpJIcQQCfZXsbdvZwTekRd6VX7X1OVZ/dVGn1E9vhyOgEc/jexLNQybKUjZGww2ek5I2LE3' })
  
    return { requestHeaders: details.requestHeaders }
  },
  // filters
  { urls: ['https://*/*', 'http://*/*'] },
  // extraInfoSpec
  ['blocking', 'requestHeaders', 'extraHeaders']
)

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ color: '#3aa757' }, function () {
    console.log('The color is green.')
  })

  chrome.cookies.getAll({}, function (cookies) {
    const taobaoCookies = cookies.filter((c) => c.domain.includes('taobao.com'))
    taobaoCookiesStr = taobaoCookies.map((c) => `${c.name}=${c.value}`).join('; ')
    console.log({ cookies, taobaoCookies, taobaoCookiesStr })
  })

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'developer.chrome.com' },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ])
  })
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension')

  const { type, data } = request

  if (type === 'crawlTaobao') {
    console.log({ taobaoCookiesStr })
    ;(async () => {
      const url = getTaobaoUrl(taobaoCookiesStr)
      let _data = await fetch(url, {
        referrerPolicy: 'no-referrer-when-downgrade',
        body: null,
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
      })
      _data = await _data.json()

      console.log('fetch finish', _data)

      sendResponse({ farewell: _data })
    })()

    return true
  }

  if (request.greeting == 'hello') {
    console.log('start fetch')

    // const cookie = new CookieCache()
    // console.log({cookie});
    ;(async () => {
      //   let _data = await fetch(url, {
      //     referrerPolicy: 'no-referrer-when-downgrade',
      //     body: null,
      //     method: 'GET',
      //     mode: 'cors',
      //     credentials: 'include',
      //   })
      //   _data = await _data.json()

      console.log('fetch finish', _data)

      sendResponse({ farewell: _data })
    })()
    return true
  }
})
