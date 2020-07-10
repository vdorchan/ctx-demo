var y = "_m_h5_c",
    z = "_m_h5_tk",
    A = "_m_h5_tk_enc";
function k(cookie, a, b, c) {
  var d = new Date;
  d.setTime(d.getTime() - 864e5);
  var e = "/";
  cookie += a + "=;path=" + e + ";domain=." + b + ";expires=" + d.toGMTString(), cookie += a + "=;path=" + e + ";domain=." + c + "." + b + ";expires=" + d.toGMTString()
  return cookie;
}
function j(a, cookie) {
  var b = new RegExp("(?:^|;\\s*)" + a + "\\=([^;]+)(?:;\\s*|$)").exec(cookie);
  // console.log(b);
  return b ? b[1] : void 0
}
function ii(cookie, a, b, c) {
  var d = c || {};
  cookie += a.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + b.replace(/[^+#$&\/:<-\[\]-}]/g, encodeURIComponent) + (d.domain ? ";domain=" + d.domain : "") + (d.path ? ";path=" + d.path : "") + (d.secure ? ";secure" : "") + (d.httponly ? ";HttpOnly" : "")
  return cookie;
}
var pageDomain = 'taobao.com';
var mainDomain = 'taobao.com';
var subDomain = 'm';

var getToken = function(cookie) {
  cookie = k(cookie, z, mainDomain, subDomain);
  cookie = ii(cookie, y, mainDomain, subDomain);
  return j(z, cookie).split("_")[0];
};