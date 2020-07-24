// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict'

let taobaoCookiesStr = ''

console.log('load background')

// const url = 'https://h5api.m.taobao.com/h5/mtop.alibaba.iic.xinsightshop.olap.query/1.0/?jsv=2.5.8'

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

async function fetchTaobao(url) {
  let _data = await fetch(url, {
    referrerPolicy: 'no-referrer-when-downgrade',
    body: null,
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  })
  _data = await _data.json()

  return _data
}

// async function fetchTaobao(url) {
//   return new Promise((resolve, reject) => (
//     $.get(url, data => resolve(data))
//   ))
// }

async function queryUrl(url) {
  return new Promise((resolve, reject) => $.get(url, (data) => resolve(data)))
}

chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    console.log({ details })
    if (details.tabId === -1) {
      if (details.url.includes('h5api.m.taobao.com')) {
        // console.log('header', details.requestHeaders);
        setHeader(details.requestHeaders, {
          name: 'Referer',
          value: LIVE_PAGE_URL,
        })
        setHeader(details.requestHeaders, {
          name: 'Origin',
          value: 'https://databot.taobao.com',
        })
        setHeader(details.requestHeaders, {
          name: 'origin',
          value: 'https://databot.taobao.com',
        })
        setHeader(details.requestHeaders, {
          name: 'Sec-Fetch-Site',
          value: 'same-site',
        })
        setHeader(details.requestHeaders, {
          name: 'accept',
          value: 'application/json',
        })
        setHeader(details.requestHeaders, {
          name: 'bx-umidtoken',
          value: 'T2gAZawjIGWojnNFN0-a2HZNDNxvtSrMT_N3bnNuX5Tig2ELVHM_pg8X77s1DspSqH6Vg9zAODVXzxEeygV54W5S'
        })
        setHeader(details.requestHeaders, {
          name: 'bx-ua',
          value: '130#dwoHrDFFwZyDODxruDHDkCC4xQYDDD997EOBfQRVDx7EwFbiDfSW4XafVrHWTQx9/sfyDP0Dco+vpWDOFIiQmnjXH2PfDD99kkU+HUOyQOQGrwDDSt0DQWgySD9I62tcSnBDSI9KDxYFq+kliEv5TlSDD+mN2hBjMDDYSsj0SHE0FDOlmGJ5U0SxHbYAsF4v9N4xr3gJtXQG6LxNDzm+887XUky6ukqAFIfXTivU9KUm6CfRdGgA0iDx563/rO4C75VAIwgf7sECgM04+lJ98QMz7/aGsOlXFL9AxEy4ITrkc50nqlK2wE7mw7me593YPH+JY0m/xrmIDSRLVGH788FWlUH6skxgO2rxd3VU+JIx5G0RO/0ChQ2zFiXauhWsDllzjiV/kMsxQtI4xLkIGkDApwgdui+1WtriFcZhIgZPog0nrlipch2ONCYNp9x9tJ+krNmJ53r4FYOlph40TnSYD+MN2Ea/MDQDMlmX23r0FDOlphJ5TnSYD+Ml29LcMDPpoRJ52lrNzWFH6vdMDlSDDFPNooHMYDQDaDY8rYvHZEz+C0RQgj6sCf1n8hShv04ab2mJQflpRcd6X8s6K2cFdbnLWtb9pZaSlOfxtzwDCLXVhA1C0r9kQ09gyJ6STWRpMyTG4BDZzsewFTZICWahb7cRGe9eT2ATA1AWj153B6aJpmjG44qeY2x4gdlt25mKAxIwU/uBBrILz9OaNNecbzq8+G/mclEXez0EcsDHhr59betA025QGc0GyPIuM7OrhSH/eR91ebPnNgXVqjzlxv+Atrmlg/DF69IKvmRS526bAEIofhHvfOShKHtECZoMq6AprDRQVx1TPCPeuh1GhI3xwUnX9CcAtbpBOL7xYrjWfYU/J9mvMfA02hcyBcLzgViogROap7KB4aBjSRNGS++HU03Z2K9Bqyud7zwaDqgNReCp/9Lyx/+6p4kKWML1Xg+a5hdo'
        })
        // setHeader(details.requestHeaders, { name: 'bx-ua', value: '125#coPcaW1PcWQTTwQKzNfjQPdSuDf2r14YEXzdh0wkDabeTy+7lLrzizUry2DYvGZJP5aGwjm+HikyYKtwz6J8+ArgPTl5We9NsJtJOiNbljnNvcYsdbW3FLgx2z4tReU3AphNThGsBlOW8t41Mg93Gtr2x5CZy0NQ4acGcUiccgapEgscUXoScvsONhMpc37fJmwP+lKBN+XWapS1SaILV5jdQMmfDZ4AoH7Cllu0VhVulFCP700YSoDhaeU9U89QNLpLDIlnpiMTFtkcSUSOlRqdMcTlw/U/5zenxL8huRUd46mrV0B+oYU66G5mryG5SD4ReFEyPxG9k/HeVABMcKUceFW94TFC+QoZt+4g2e4f2Waf9dV8TH1IEbNOdHPhmFjwPq2MWp0L2ANuaQsZob7Cta31lVeUL34XDx5KFcfml8gt2tL4eIGLJLvb2oW/PikngUF8O/SqLy8Lx7nBI+/lLHIREvY92wh8HGWGhzD/qUMrRbo/poN0zUukj+KixfG+Xo2UV6gOXv5m9tWxeh8g9utz2kOjnZ7D3xpuUrWKrRgOKw1IEzuN095JGkcSRKmAbJh/iT4r4vkXGA/7g66ZLseQz/KphGAr3CQtFBGGVUrx5JiCasvK6XmLGfCOkMl1hdg2UHbY/FSKZ9+PWwpD32qgx5VvrrcWW5CszfQMVdcxFiETZ0E7fa5zs7swj8of7dnKj37GHoRiNRX8w3yTisjU5JphMr2xTzoRY66YCXfGHaAdlev3L11zLoeERm2slIAko8o8936X9ZZPzw3v+0OZzzxaoze7uGpJIcQQCfZXsbdvZwTekRd6VX7X1OVZ/dVGn1E9vhyOgEc/jexLNQybKUjZGww2ek5I2LE3' })3
      } else if (
        [LIVE_LIST_API_URL, LIVE_LIST_PAGE_URL].includes(details.url)
      ) {
        setHeader(details.requestHeaders, {
          name: 'Referer',
          value: LIVE_LIST_PAGE_URL,
        })
      }
    }

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
    taobaoCookiesStr = taobaoCookies
      .map((c) => `${c.name}=${c.value}`)
      .join('; ')
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
  console.log(
    sender.tab
      ? 'from a content script:' + sender.tab.url
      : 'from the extension'
  )

  const { type, data } = request

  if (type === 'crawlTaobao') {
    console.log({ taobaoCookiesStr })
    ;(async () => {
      await queryUrl(LIVE_LIST_PAGE_URL)
      await queryUrl(LIVE_LIST_API_URL)
      await queryUrl(LIVE_PAGE_URL)
      const urls = getTaobaoUrlList(taobaoCookiesStr)
      console.log('==getTaobaoUrlList==', urls)

      try {
        const totalData = await Promise.all(urls.map((url) => fetchTaobao(url)))
        console.log('fetch finish', totalData)
        sendResponse({ farewell: totalData })
      } catch (error) {
        sendResponse({ farewell: 'error' })
      }
    })()

    return true
  }
})
