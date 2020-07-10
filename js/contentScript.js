// var port = chrome.runtime.connect()

console.log('this message is from contentScript', document.cookie)

window.addEventListener(
  'message',
  async (event) => {
    if (event.source != window) return

    const { type, data } = event.data

    if (type === 'crawlTaobao') {
      chrome.runtime.sendMessage({ type: 'crawlTaobao', data: document.cookie }, function (response) {
        window.postMessage({ type: 'crawlTaobaoFinish', data: response.farewell })
        //   console.log(response.farewell)
        //   port.postMessage({ type: 'crawlTaobaoFinish', data: response.farewell })
      })
    }
  },
  false
)
