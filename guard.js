/* 网站保护：
   1. 不允许别的网站用 iframe 把我们的页面嵌进去（防钓鱼、防点击劫持）：被嵌入时整页隐藏
   2. 页面被整站复制到别的网址、或存成本地文件打开时，自动跳回 yzstudio.com.my */
(function(){
  var HOME = 'https://yzstudio.com.my';
  var OK = /^(yzstudio\.com\.my|www\.yzstudio\.com\.my|localhost|127\.0\.0\.1)$/;
  var framed = false;
  try {
    framed = window.top !== window.self && window.top.location.hostname !== location.hostname;
  } catch (e) { framed = true; }
  if (framed) {
    document.documentElement.style.display = 'none';
    try { window.top.location = location.href; } catch (e) {}
    return;
  }
  if (!OK.test(location.hostname)) {
    location.replace(HOME + location.pathname.replace(/^.*?(\/games\/[^\/]+|\/[^\/]*)$/, '$1') + location.hash);
  }
})();
