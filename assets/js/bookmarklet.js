(function(d) {
  var rwd = '<!DOCTYPE html><html>';
  rwd += '<head>';
  rwd += '<meta charset="UTF-8"><title>' + d.title + ' - Responsive test </title><link rel="stylesheet" href="//sekedus.github.io/rwd/assets/css/app.css"><link rel="icon" type="image/png" sizes="32x32" href="//sekedus.github.io/rwd/assets/img/web/favicon.png"><script src="//sekedus.github.io/rwd/assets/js/app.min.js"></script>';
  rwd += '</head>';
  rwd += '<body>';
  rwd += '<header><div class="menu"><div class="close"><a href="#">&#10005;</a></div><div id="size"><span class="width" contenteditable></span>x<span class="height" contenteditable></span></div><div class="rotate"><a href="#">I</a></div><div id="devices"><select></select></div><div class="cssrefresh"><a href="#">I</a></div><div class="reloadiframe"><a href="#">I</a></div></div></header>';
  rwd += '<section id="container"><div id="wrapper"><iframe src="' + d.URL + '" onLoad="resbook.changeUrl(this.contentWindow.location, this.contentDocument.title);"></iframe></div></section>';
  rwd += '</body></html>';
  d.write(rwd);
})(document);
