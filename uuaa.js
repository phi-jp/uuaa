/*
 * uuaa
 */

;(function() {
  var nav = window.navigator;
  var ua = nav.userAgent;
  var device = (function() {
    var name = ua.match(/(Android|iPhone|iPad|iPod|Windows|Mac OS X)/)[1];

    return {
      name: name,
    };
  })();
  var os = (function() {
    var name = ua.match(/(Android|iOS|Windows|Mac OS X|CrOS|Firefox)/)[1];

    if (name === 'CrOS') name = 'Chrome OS';
    if (name === 'Firefox') name = 'Firefox OS';

    return {
      name: name,
    };
  })();
  var browser = (function() {
    var name = '';

    if (ua.indexOf('CriOS') !== -1) { name = 'Chrome for iOS'; }
    else if (ua.indexOf('Edge') !== -1) { name = 'Edge'; }
    else if (ua.indexOf('Chrome') !== -1) { name = 'Chrome'; }
    else if (ua.indexOf('Firefox') !== -1) { name = 'Firefox'; }
    else if (ua.indexOf('MSIE') !== -1) { name = 'MSIE'; }
    else if (ua.indexOf('Safari') !== -1) { name = 'Safari'; }
    else if (ua.indexOf('AppleWebKit') !== -1) { name = 'WebKit'; }

    return {
      name: name,
    };
  })();
  var mobile = (function() {
    return ['Android', 'iOS'].indexOf(os.name) !== -1;
  })();
  var standalone = !!nav.standalone;
  var webview = (function() {
    if (os.name === 'iOS') {
      if (!standalone) {
        if (ua.indexOf('Safari') !== -1) {
          return false;
        }
        else {
          return true;
        }
      }
    }
    if (os.name === 'Android') {
      if ('requestFileSystem' in window || 'webkitRequestFileSystem' in window) {
          return false;
      }
      else {
          return true;
      }
    }
    else {
      return false;
    }
  })();

  var uuaa = {
    device: device,
    os: os,
    browser: browser,
    mobile: mobile,
    standalone: standalone,
    webview: webview,
  };

  window.uuaa = uuaa;
})();