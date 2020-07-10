const fetch = require('node-fetch')
const getToken = require('../js/getToken')
const md5 = require('../libs/md5')

function getTaobaoUrl(cookie) {
  var data = {
    param: JSON.stringify({
      queryId: '11|57240225|undefined',
      cubeId: 'tblive_rpt_item_indicator',
      queryDetail: false,
      startTime: '2020-07-07 20:01:09',
      endTime: '2020-07-07 22:02:59',
      timeType: 2,
      sign: null,
      limit: 2000,
      row: JSON.stringify([
        { name: '商品id', isMeasure: false },
        { name: '主图地址', isMeasure: false },
        { name: '商品标题', isMeasure: false },
      ]),
      measure: JSON.stringify([
        { name: '商品点击次数', isMeasure: true },
        { name: '商品点击人数', isMeasure: true },
      ]),
      column: JSON.stringify([]),
      orders: JSON.stringify([]),
      filter: JSON.stringify([
        { name: '开播日期分区字段yyyymmdd', type: 'dimension', isMeasure: false, values: ['20200707'], oper: '=' },
        { name: '直播间id', type: 'dimension', isMeasure: false, values: ['271421666877'], oper: '=' },
        { name: '主播id', type: 'dimension', isMeasure: false, values: [2081592196], oper: '=' },
      ]),
      extra: null,
    }),
    innerId: '',
  }

  // const cookie =
  //   'TbLiveDashboardThemeColor=false; t=14e2b7f8a0c77475ac938d293025835e; thw=cn; _tb_token_=ee8364e763534; XTrackerSession=1594358336467_qFuaX6KYW0rGQ99a; uc1=cookie14=UoTV6OItd%2FVltA%3D%3D&cookie21=U%2BGCWk%2F7oPIg; sn=%E6%AC%A7%E8%8E%B1%E9%9B%85%E9%9B%86%E5%9B%A2%E5%B0%8F%E7%BE%8E%E7%9B%92%E6%97%97%E8%88%B0%E5%BA%97%3A%E8%8C%89%E8%8E%89%E4%BC%A0%E5%AA%92; csg=80f881ba; _cc_=V32FPkk%2Fhw%3D%3D; v=0; cna=CxB6Fx5OZHcCAXkhk9cMKeZZ; _m_h5_tk=34ca0409911f885b7312e0bb367b1415_1594376430363; _m_h5_tk_enc=f107460e4a1c173f6ade56b6623a763b; l=eBj4blY7Qd8C7QIzBOfZnurza779sIRAguPzaNbMiOCP9EC25vVdWZltX88yCnGVh6kkR3RuWvqgBeYBcCme9nFqmGiJiIDmn; tfstk=chJGBbTjMwa5NXfHNA660ggyluWGZmeVrKJBLdQLzilXZ3JFi0PUar_nxNYMHS1..; isg=BDMz6Y0MaNJR9yX995CJfPMJwjFdaMcqO0P3FuXQjtKJ5FOGbTvReSV-nhQKxB8i'
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

  const signParams = `${token}&${t}&${appKey}&${JSON.stringify(data)}`
  const url = new URL('https://h5api.m.taobao.com/h5/mtop.alibaba.iic.xinsightshop.olap.query/1.0/')
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
    data: JSON.stringify(data),
  }

  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]))

  return url
}

// console.log({sign})

// fetch(url, {
//   headers: {
//     accept: 'application/json',
//     'content-type': 'application/x-www-form-urlencoded',
//     cookie: 't=14e2b7f8a0c77475ac938d293025835e; thw=cn; cookie2=5ba9c109d022022e67e406e8dbd688ec; _tb_token_=ee8364e763534; _samesite_flag_=true; enc=ygmUWLtytCfuVnq2IGskVLrali7u3CXBJWYEa7mD%2F6YyCdv0QE5wTZaAlIGA3jltmekEQk9VirD%2F%2Fwmibttjyl79YXkivpMUu8U6lhYi%2FPw%3D; sgcookie=ExGpI%2F%2FwTUNpRthKwgvc4; uc1=cookie14=UoTV6OItd%2FVltA%3D%3D&cookie21=U%2BGCWk%2F7oPIg; unb=2206875905710; sn=%E6%AC%A7%E8%8E%B1%E9%9B%85%E9%9B%86%E5%9B%A2%E5%B0%8F%E7%BE%8E%E7%9B%92%E6%97%97%E8%88%B0%E5%BA%97%3A%E8%8C%89%E8%8E%89%E4%BC%A0%E5%AA%92; csg=80f881ba; skt=5a4d103b9f2e0fc5; _cc_=V32FPkk%2Fhw%3D%3D; v=0; cna=CxB6Fx5OZHcCAXkhk9cMKeZZ; _m_h5_tk=34ca0409911f885b7312e0bb367b1415_1594376430363; _m_h5_tk_enc=f107460e4a1c173f6ade56b6623a763b; l=eBj4blY7Qd8C7XmFXOfwourza77OSIRAguPzaNbMiOCP9e5k5vVdWZltX8LDC3GVh6okR3RuWvqgBeYBcImy9nFqmGiJiIDmn; tfstk=cWlOBoNdeeQ9OczKzAp3cM1q1LNAZYKYANZcME0GWxpMRofAizlow9sJCrsT9eC..; isg=BM_PHgmwzM6NoclJ85ytEL_9XmXZ9CMWB_fbQuHcaz5FsO-y6cSzZs2msuAOyPuO',
//   },
//   referrer: 'https://liveplatform.taobao.com/live/liveList.htm',
//   referrerPolicy: 'no-referrer-when-downgrade',
//   body: null,
//   method: 'GET',
//   mode: 'cors',
// }).then((res) => {
//   return res.json()
// }).then(json => {
//   console.log(json);
// })
