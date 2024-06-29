(function(d) {
  var rwd = '<!DOCTYPE html><html>';
  rwd += '<head>';
  rwd += '<meta charset="UTF-8"><title>' + d.title + ' - Responsive test </title><link rel="stylesheet" href="//cdn.jsdelivr.net/gh/sekedus/rwd@master/assets/css/app.css"><script src="//cdn.jsdelivr.net/gh/sekedus/rwd@master/assets/js/app.min.js"></script>';
  rwd += '</head>';
  rwd += '<body>';
  rwd += '<header><div class="menu"><div class="close"><a href="#">&#10005;</a></div><div id="size"><span class="width" contenteditable></span>x<span class="height" contenteditable></span></div><div class="rotate"><a href="#">I</a></div><div id="devices"><select></select></div><div class="cssrefresh"><a href="#">I</a></div><div class="reloadiframe"><a href="#">I</a></div></div></header>';
  rwd += '<section id="container"><div id="wrapper"><iframe src="' + d.URL + '" onLoad="resbook.changeUrl(this.contentWindow.location, this.contentDocument.title);"></iframe></div></section>';
  rwd += '</body></html>';
  d.write(rwd);
})(document);
