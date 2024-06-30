// Responsive Bookmarklet namespace
window.resbook = {};

(function(rb) {
  // Private var & methods
  var d = document,
    w = window,
    url = d.URL,
    title = d.title,
    body = null,
    container = null,
    wrapper = null,
    sizeWidth = null,
    sizeHeight = null,
    devices = null,
    rotate = null,
    refreshBtn = null,
    reloadBtn = null,
    close = null,
    area = null,
    sizes = null,
    isResized = false,
    isAnimated = false,
    viewPort = {
      phone: [
        [320, 568, 'iPhone 5'],
        [360, 740, 'Galaxy S9'],
        [375, 812, 'iPhone X'],
        [385, 640, 'Optimus G E975'], //384
        [393, 873, 'Mi 10T Pro'],
        [430, 932, 'iPhone 15 Pro Max'],
        [480, 854, 'OnePlus 3'] //853
      ],
      tablet: [
        [601, 962, 'Nexus 7'],
        [768, 1024, 'iPad Mini'],
        [800, 1280, 'Galaxy Tab 3 10.1'],
        [810, 1080, 'iPad 10.2'],
        [820, 1180, 'iPad Air 4'],
        [834, 1194, 'iPad Pro 11']
      ],
      desktop: [
        [1280, 720, 'Surface 3'],
        [1366, 768, 'Surface RT'],
        [1440, 900, 'MacBook Pro 15"'],
        [1536, 864, 'MacBook Pro 16"'],
        [1600, 900, 'Monitor 20"'],
        [1680, 1050, 'Monitor 22"'],
        [1920, 1080, 'Monitor 23"'],
        [2560, 1440, 'Monitor 27"']
      ]
    },
    firstUCase = function(str) {
      // Uppercase first character
      return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
    },
    isNumeric = function(data) {
      if (typeof data == 'number') return true;
      return !isNaN(data) && !isNaN(parseFloat(data));
    },
    removeParam = function(url, param) {
      url = new URL(url),
        qs = url.search ? url.search.substring(1).split('&') : [];
      if (qs.length > 0) {
        for (var i = 0; i < qs.length; i++) {
          var items = qs[i].split('=');
          if (items[0] == param) {
            qs.splice(i);
            break;
          }
        }
      }
      url.search = qs.length > 0 ? ('?' + qs.join('&')) : '';
      return url;
    },
    keyEvent = function(e, kc) {
      var keyMap = {
        "Enter": 13,
        "KeyR": 82,
        "F5": 116
      };
      return e.code ? keyMap[e.code] : e.keyCode;
    },
    refreshCss = function(disable) {
      var ifrm = d.querySelector('#wrapper iframe');
      ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
      var b = ifrm.document.querySelector('body');
      if (disable) {
        var el = ifrm.document.getElementById('cssrefresh');
        if (el) {
          el.parentNode.removeChild(el);
          b.classList.remove('cssrefresh');
        }
      } else {
        var t = ifrm.document.createTextNode("(function(){var script=document.createElement('script');script.setAttribute('src','//sekedus.github.io/rwd/assets/js/cssrefresh.min.js');script.setAttribute('id','cssrefresh');document.getElementsByTagName('head')[0].appendChild(script)})()"),
          s = ifrm.document.createElement('script');
        b.classList.add('cssrefresh');
        s.appendChild(t);
        ifrm.document.body.appendChild(s);
      }
    },
    reloadIframe = function() {
      var ifrm = d.querySelector('#wrapper iframe'),
        url = removeParam(ifrm.src, 'nocache'),
        ms = new Date().getTime(); //number of milliseconds for date
      url.search += (url.search ? '&' : '?') + 'nocache=' + ms;
      ifrm.src = url.href;
    },
    showSize = function(w, h) {
      w = isNumeric(w) ? w : area.width;
      h = isNumeric(h) ? h : area.height;
      sizes = [w, h];
      sizeWidth.innerHTML = w;
      sizeHeight.innerHTML = h;
    },
    setPosition = function(wh, t) {
      var width = wh == 'auto' ? area.width : wh[0],
        height = wh == 'auto' ? area.height : wh[1],
        style = 'width:' + width + 'px;height:' + height + 'px;';
      if (typeof width == 'undefined' || typeof height == 'undefined') return false;
      showSize(width, height);

      if (wh === 'auto' && !t) {
        isResized = false;
        setTimeout(function() {
          wrapper.removeAttribute('style');
          isAnimated = false;
        }, 260);
        return false;
      }

      var finalWidth = 0,
        overWidth = false,
        overHeight = false;

      if (width <= area.width) {
        finalWidth = width;
      } else {
        finalWidth = area.width;
        overWidth = true;
      }

      var scaleValue = finalWidth / width,
        newHeight = height * scaleValue;

      if (newHeight > area.height) {
        scaleValue = area.height / height;
        finalWidth = width * scaleValue;
        overWidth = true;
        overHeight = true;
      }

      var resizeHeight = height * scaleValue,
        posTop = (height - resizeHeight) / 2 + 1;

      var resizeWidth = overHeight ? area.width : finalWidth,
        posLeft = (width - resizeWidth) / 2;

      if (overWidth) {
        style += 'transform:scale(' + scaleValue + ');-webkit-transform:scale(' + scaleValue + ');position:absolute;top:' + (-1 * posTop) + 'px;left:' + (-1 * posLeft) + 'px;margin:0;';
      } else {
        style += 'transform:scale(1);-webkit-transform:scale(1);position:static;top:0;left:0;margin:0 auto;';
      }

      wrapper.setAttribute('style', style);
      isAnimated = false;
    },
    readyElement = function(id, callback) {
      var interval = setInterval(function() {
        if (d.getElementById(id)) {
          clearInterval(interval);
          callback(d.getElementById(id));
        }
      }, 60);
    },
    setDevice = function(device) {
      var data = viewPort[device],
        opts = '';
      if (data.length > 0) {
        opts += '<option value="" disabled>------------------------------------</option>';
        opts += `<option value="" disabled># ${firstUCase(device)}</option>`;
        [].forEach.call(data, function(item, i) {
          opts += `<option value="${i}" data-device="${device}">${item[2]} (${item[0]}x${item[1]})</option>`;
        });
      }
      return opts;
    };

  // "document ready"
  readyElement('wrapper', function() {

    // Set var cache
    body = d.querySelector('body');
    container = d.getElementById('container');
    wrapper = d.getElementById('wrapper');
    sizeWidth = d.querySelector('#size .width');
    sizeHeight = d.querySelector('#size .height');
    devices = d.querySelector('#devices select');
    rotate = d.querySelector('.rotate a');
    refreshBtn = d.querySelector('.cssrefresh a');
    reloadBtn = d.querySelector('.reloadiframe a');
    close = d.querySelector('.close a');
    area = {
      "width": container.clientWidth,
      "height": container.clientHeight
    };

    // Devices
    var opts = '<option value="auto" selected>Auto</option>';
    opts += '<option value="custom" hidden>Custom</option>';
    opts += setDevice('phone');
    opts += setDevice('tablet');
    opts += setDevice('desktop');
    devices.innerHTML = opts;

    devices.addEventListener('change', function(e) {

      var self = this;
      if ((self.value == 'auto' && isResized === false) || isAnimated === true) return false;

      isAnimated = true;
      isResized = true;

      setTimeout(function() {
        if (self.value == 'auto') {
          setPosition(self.value, false);
        } else {
          var opt = self.options[self.selectedIndex],
            screenSize = viewPort[opt.dataset.device][Number(opt.value)];
          setPosition(screenSize, false,);
        }
      }, 10);
    });

    var oldValue = '';
    [sizeWidth, sizeHeight].forEach(function(el) {
      el.addEventListener('keydown', function(e) {
        oldValue = e.target.innerText;
        if (keyEvent(e) == 13) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
      el.addEventListener('input', function(e) {
        if (e.data && !isNumeric(e.data) || e.target.innerText.length > 4) e.target.innerHTML = oldValue;
      });
      el.addEventListener('blur', function() {
        var size = [sizeWidth.innerText, sizeHeight.innerText];
        if (size.join(',') != sizes.join(',')) {
          devices.value = 'custom';
          isResized = true;
          setTimeout(function(){ setPosition(size, false); }, 260);
        }
      });
    });

    rotate.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.toggle('active');
      sizes = sizes.reverse();
      setPosition(sizes, false);
    }, false);

    // Disabled css refresh if we are not on server environment
    if (w.location.protocol.search(/https?:/) == -1) refreshBtn.parentElement.style.display = 'none';

    refreshBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.toggle('active');
      if (this.classList.contains('active')) {
        refreshCss();
      } else {
        refreshCss(true);
      }
    }, false);

    reloadBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      reloadIframe();
    }, false);

    close.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      w.location.reload();
    }, false);

    w.addEventListener('resize', function() {
      area = {
        "width": container.clientWidth,
        "height": container.clientHeight
      };
      if (devices.value == 'auto') showSize();
      setPosition(sizes, false);
    }, false);

    w.addEventListener('keyup', function(e) {
      var key = keyEvent(e);
      if (key == 13 && d.getElementById('size').contains(d.activeElement)) d.activeElement.blur();
    }, false);

    showSize();
  });

  // === Public methods ====
  /**
   * Change url and the document title with pushState method
   * @param  {string} u   url of the new page
   * @param  {title} t title of the new page
   */
  rb.changeUrl = function(u, t) {
    d.title = t + ' - Responsive test';
    if (history.pushState) {
      try {
        var url = removeParam(u, 'nocache');
        history.pushState({}, "New Page", url.href);
      } catch (e) {}
    }
    if (refreshBtn.classList.contains('active')) {
      refreshCss();
    } else {
      refreshCss(true);
    }
  };
})(resbook);
