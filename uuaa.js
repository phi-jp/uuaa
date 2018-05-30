/*
 * uuaa
 */

;(function() {
  var nav = window.navigator;
  var ua = nav.userAgent || '';
  var device = (function() {
    // 優先度順にdevice名を配列に入れる
    var targets = ['Android','iPhone','iPad','iPod','Windows','Mac OS X','Linux','PhantomJS'];
    var names = ua.match(new RegExp(targets.join('|'), 'g'));

    // userAgentの中で、上記に一致するものを返す
    // (Android の場合 ["Android", "Linux"] が返ってくる)
    name = targets.find(function(device) {
      return names.indexOf(device) !== -1;
    });

    return {
      name: name,
    };
  })();
  var os = (function() {
    // 優先度順にOS名を配列に入れる
    var targets = ['Android','iPhone','iPad','iPod','Windows','Mac OS X','CrOS','Linux','Firefox','PhantomJS'];

    // userAgentの中で、上記に一致するものを返す
    // (Android の場合 ["Android", "Linux"] が返ってくる)
    var names = ua.match(new RegExp(targets.join('|'), 'g'));
  
    var name = targets.find(function(os) {
      return names.indexOf(os) !== -1;
    });

    if (['iPhone', 'iPad', 'iPod'].indexOf(name) !== -1) name = 'iOS';
    else if (name === 'CrOS') name = 'Chrome OS';
    else if (name === 'Firefox') name = 'Firefox OS';

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
        if (ua.indexOf('Crosswalk') !== -1) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return true;
      }
    }
    else {
      return false;
    }
  })();

  var service = {
    name: '',
  };
  if (ua.indexOf('Messenger') !== -1) {
    service.name = 'Messenger';
  }
  else if (ua.indexOf('Line') !== -1) {
    service.name = 'Line';
  }
  else if (ua.indexOf('FBAN') !== -1) {
    service.name = 'Facebook';
  }
  else if (ua.indexOf('Twitter') !== -1) {
    service.name = 'Twitter';
  }

  var uuaa = {
    device: device,
    os: os,
    browser: browser,
    service: service,
    mobile: mobile,
    standalone: standalone,
    webview: webview,
    language: nav.language.substr(0, 2),
    userAgent: ua,
  };

  window.uuaa = uuaa;
})();