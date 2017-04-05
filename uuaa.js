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
  var webview = (function() {

  })();
  var mobile = (function() {

  })();

  var uuaa = {
    device: device,
    os: os,
  };

  window.uuaa = uuaa;
})();