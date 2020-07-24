function getTaobaoUrl(url, data, cookie) {
  // const data = {
  //   param: JSON.stringify({
  //     queryId: '11|57240225|undefined',
  //     cubeId: 'tblive_rpt_item_indicator',
  //     queryDetail: false,
  //     startTime: '2020-07-07 20:01:09',
  //     endTime: '2020-07-07 22:02:59',
  //     timeType: 2,
  //     sign: null,
  //     limit: 2000,
  //     row: JSON.stringify([
  //       { name: '商品id', isMeasure: false },
  //       { name: '主图地址', isMeasure: false },
  //       { name: '商品标题', isMeasure: false },
  //     ]),
  //     measure: JSON.stringify([
  //       { name: '商品点击次数', isMeasure: true },
  //       { name: '商品点击人数', isMeasure: true },
  //     ]),
  //     column: JSON.stringify([]),
  //     orders: JSON.stringify([]),
  //     filter: JSON.stringify([
  //       { name: '开播日期分区字段yyyymmdd', type: 'dimension', isMeasure: false, values: ['20200707'], oper: '=' },
  //       { name: '直播间id', type: 'dimension', isMeasure: false, values: ['271421666877'], oper: '=' },
  //       { name: '主播id', type: 'dimension', isMeasure: false, values: [2081592196], oper: '=' },
  //     ]),
  //     extra: null,
  //   }),
  //   innerId: '',
  // }

  const jsv = '2.5.8'
  const appKey = '27522521'
  const t = Date.now()
  const api = 'mtop.alibaba.iic.xinsightshop.olap.query'
  const v = '1.0'
  const type = 'originaljson'
  const dataType = 'json'
  const timeout = '20000'
  const H5Request = 'true'
  const token = getToken(cookie)

  const signParams = `${token}&${t}&${appKey}&${data}`
  url = new URL(url)
  const sign = md5(signParams)

  const params = {
    jsv,
    appKey,
    t,
    sign,
    api,
    v,
    type,
    dataType,
    timeout,
    H5Request,
    token,
    // data: JSON.stringify(data),
    data
  }

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  )

  return url
}

function getTaobaoUrlList(cookie) {
  // const urls = ['https://h5api.m.taobao.com/h5/mtop.alibaba.iic.xinsightshop.olap.query/1.0/']
  return urls.map((url) => {
    const { origin, pathname, searchParams } = new URL(url)
    return getTaobaoUrl(
      `${origin}${pathname}`,
      searchParams.get('data'),
      cookie
    )
  })
  // return urls.map((url) => getTaobaoUrl(url, cookie))
}
