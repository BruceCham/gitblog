(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };
}());
var speedX = 0,speedY = 0, $move = $("#box"),$w = $(window),moveL = 0,moveT = 0;
var w = $w.width(),h = $w.height();
window.onorientationchange = function (e) {
};
window.ondeviceorientation = function (e) {
    var _angleX, _angleY;
    var o = window.orientation;
    if (o == 90) {
        _angleX = e.beta;
        _angleY = e.gamma;
    }
    else if (o == -90) {
        _angleX = -e.beta;
        _angleY = -e.gamma;
    }
    else if (o == 0) {
        _angleX = e.gamma;
        _angleY = e.beta;
    }
    // 定义X方向的移动速度
    if (_angleX > 10) {
        speedX = 5;
    }
    else if (_angleX > 5) {
        speedX = 2;
    }
    else if (_angleX > 1) {
        speedX = 1;
    }
    else if (_angleX < -10) {
        speedX = -5;
    }
    else if (_angleX < -5) {
        speedX = -2;
    }
    else if (_angleX < -1) {
        speedX = -1;
    }
    else {
        speedX = 0;
    }
    // 定义Y方向的移动速度
    if (_angleY > 10) {
        speedY = 5;
    }
    else if (_angleY > 5) {
        speedY = 2;
    }
    else if (_angleY > 1) {
        speedY = 1;
    }
    else if (_angleY < -10) {
        speedY = -5;
    }
    else if (_angleY < -5) {
        speedY = -2;
    }
    else if (_angleY < -1) {
        speedY = -1;
    }
    else {
        speedY = 0;
    }
};
var _run = function() {
  moveL += speedX;
  moveT += speedY;
  if( moveL < 0 ){
    moveL =0;
  }else if( moveL > w-24 ){
    moveL = w-24;
  }
  if( moveT < 0 ){
    moveT =0;
  }else if( moveT > h-24 ){
    moveT = h-24;
  }

    $move.css({left:moveL + "px", top:moveT + "px"});
  requestAnimationFrame(_run);
};
_run();