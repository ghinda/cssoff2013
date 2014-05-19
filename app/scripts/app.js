/* Had to put some scripts in the <head> because codepen ran this code too soon.
 */

/* Abbey Road map
 */

(function() {
  'use strict';

  var mapStyle = [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}];

  var abbeyRoad = function() {

    var toggleClass = function(elem, className) {
      var current = elem.className.split(/\s+/),
          exist =  ~current.indexOf(className);
current.splice(exist ? current.indexOf(className) : 0,
               exist ? 1 : 0,
               exist ? null : className);
elem.className = current.join(' ').replace(/^\s+|\s+$/,'');
    }
    
    var init = function() {

      var $container = document.getElementById('js-abbeyroad-media'),
        $photo = $container.querySelector('.js-standalone-photo');

      var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(51.53403,-0.179799),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: mapStyle,
        scrollwheel: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false
      };

      var map = new google.maps.Map(document.getElementById('js-abbeyroad-map'), mapOptions);

      $photo.addEventListener('click', function() {
        toggleClass($container, 'show-map');
      }, false);

    };

    return {
      init: init
    }

  }();

  google.maps.event.addDomListener(window, 'load', abbeyRoad.init);

})();

/* Overflow animated water title
 * Maybe a bit too subtle, but see the lower half of the "Overflow" text.
 */

(function() {
  'use strict';

  var titleWater = function() {

    /* Inspired by
     * http://codepen.io/fussinatto/pen/oCiFc
     *
     * Still needs more work, to make the woobbles more wattery.
     */
    var jsonobj = {
      E: [{ x: 127, y: 149 }, { x: 142, y: 149 }, { x: 142, y: 254 }, { x: 127, y: 254 }, { x: 127, y: 286 }, { x: 273, y: 286 }, { x: 273, y: 231 }, { x: 231, y: 231 }, { x: 231, y: 254 }, { x: 192, y: 254 }, { x: 192, y: 214 }, { x: 238, y: 214 }, { x: 238, y: 182 }, { x: 192, y: 182 }, { x: 192, y: 149 }, { x: 231, y: 149 }, { x: 231, y: 170 }, { x: 273, y: 170 }, { x: 273, y: 117 }, { x: 127, y: 117 }],
      F: [{ x: 129, y: 149 }, { x: 144, y: 149 }, { x: 144, y: 254 }, { x: 129, y: 254 }, { x: 129, y: 286 }, { x: 219, y: 286 }, { x: 219, y: 254 }, { x: 194, y: 254 }, { x: 194, y: 223 }, { x: 240, y: 223 }, { x: 240, y: 191 }, { x: 194, y: 191 }, { x: 194, y: 149 }, { x: 231, y: 149 }, { x: 231, y: 170 }, { x: 274, y: 170 }, { x: 274, y: 117 }, { x: 129, y: 117 }],
      L: [{ x: 132, y: 149 }, { x: 146, y: 149 }, { x: 146, y: 254 }, { x: 132, y: 254 }, { x: 132, y: 286 }, { x: 268, y: 286 }, { x: 268, y: 223 }, { x: 227, y: 223 }, { x: 227, y: 254 }, { x: 196, y: 254 }, { x: 196, y: 149 }, { x: 209, y: 149 }, { x: 209, y: 117 }, { x: 132, y: 117 }],
      O: [{ x: 237, y: 283 }, { c1x: 248, c1y: 279, c2x: 257, c2y: 273, x: 264, y: 266 }, { c1x: 271, c1y: 258, c2x: 277, c2y: 249, x: 280, y: 238 }, { c1x: 284, c1y: 227, c2x: 286, c2y: 215, x: 286, y: 201 }, { c1x: 286, c1y: 188, c2x: 284, c2y: 175, x: 281, y: 164 }, { c1x: 277, c1y: 153, c2x: 272, c2y: 144, x: 265, y: 136 }, { c1x: 258, c1y: 128, c2x: 249, c2y: 122, x: 238, y: 118 }, { c1x: 227, c1y: 113, c2x: 214, c2y: 111, x: 199, y: 111 }, { c1x: 186, c1y: 111, c2x: 175, c2y: 113, x: 165, y: 118 }, { c1x: 154, c1y: 122, c2x: 145, c2y: 128, x: 138, y: 136 }, { c1x: 130, c1y: 144, c2x: 124, c2y: 153, x: 120, y: 164 }, { c1x: 116, c1y: 175, c2x: 114, c2y: 187, x: 114, y: 200 }, { c1x: 114, c1y: 215, c2x: 116, c2y: 228, x: 121, y: 239 }, { c1x: 125, c1y: 250, c2x: 131, c2y: 260, x: 138, y: 267 }, { c1x: 146, c1y: 275, c2x: 155, c2y: 280, x: 166, y: 284 }, { c1x: 177, c1y: 287, c2x: 188, c2y: 289, x: 201, y: 289 }, { c1x: 214, c1y: 289, c2x: 227, c2y: 287, x: 237, y: 283 }, { x: 237, y: 260 }, { x: 190, y: 248 }, { c1x: 187, c1y: 245, c2x: 184, c2y: 242, x: 181, y: 237 }, { c1x: 179, c1y: 233, c2x: 177, c2y: 227, x: 176, y: 221 }, { c1x: 175, c1y: 215, c2x: 174, c2y: 207, x: 174, y: 200 }, { c1x: 174, c1y: 192, c2x: 174, c2y: 185, x: 176, y: 179 }, { c1x: 177, c1y: 173, c2x: 179, c2y: 167, x: 181, y: 163 }, { c1x: 183, c1y: 158, c2x: 186, c2y: 155, x: 189, y: 152 }, { c1x: 191, c1y: 150, c2x: 195, c2y: 149, x: 199, y: 149 }, { c1x: 203, c1y: 149, c2x: 207, c2y: 150, x: 211, y: 153 }, { c1x: 214, c1y: 155, c2x: 217, c2y: 159, x: 219, y: 164 }, { c1x: 221, c1y: 169, c2x: 223, c2y: 174, x: 224, y: 181 }, { c1x: 225, c1y: 187, c2x: 225, c2y: 194, x: 225, y: 201 }, { c1x: 225, c1y: 209, c2x: 225, c2y: 216, x: 224, y: 222 }, { c1x: 223, c1y: 228, c2x: 221, c2y: 233, x: 219, y: 238 }, { c1x: 217, c1y: 242, c2x: 214, c2y: 245, x: 211, y: 248 }, { c1x: 208, c1y: 250, c2x: 205, c2y: 251, x: 201, y: 251 }, { c1x: 197, c1y: 251, c2x: 193, c2y: 250, x: 190, y: 248 }],
      R: [{ x: 117, y: 148 }, { x: 130, y: 148 }, { x: 130, y: 253 }, { x: 117, y: 253 }, { x: 117, y: 285 }, { x: 195, y: 285 }, { x: 195, y: 253 }, { x: 180, y: 253 }, { x: 180, y: 216 }, { c1x: 186, c1y: 216, c2x: 190, c2y: 216, x: 193, y: 217 }, { c1x: 196, c1y: 218, c2x: 199, c2y: 219, x: 200, y: 221 }, { c1x: 202, c1y: 223, c2x: 203, c2y: 226, x: 204, y: 229 }, { c1x: 204, c1y: 233, c2x: 204, c2y: 237, x: 204, y: 243 }, { c1x: 204, c1y: 257, c2x: 208, c2y: 268, x: 216, y: 276 }, { c1x: 224, c1y: 284, c2x: 235, c2y: 288, x: 251, y: 288 }, { c1x: 258, c1y: 288, c2x: 264, c2y: 287, x: 268, y: 285 }, { c1x: 273, c1y: 282, c2x: 277, c2y: 280, x: 279, y: 276 }, { c1x: 282, c1y: 272, c2x: 284, c2y: 268, x: 285, y: 264 }, { c1x: 286, c1y: 259, c2x: 287, c2y: 254, x: 287, y: 249 }, { x: 287, y: 236 }, { x: 271, y: 236 }, { x: 271, y: 244 }, { c1x: 271, c1y: 249, c2x: 269, c2y: 252, x: 265, y: 252 }, { c1x: 263, c1y: 252, c2x: 261, c2y: 250, x: 260, y: 247 }, { c1x: 260, c1y: 244, c2x: 259, c2y: 240, x: 259, y: 235 }, { c1x: 259, c1y: 231, c2x: 258, c2y: 227, x: 257, y: 223 }, { c1x: 255, c1y: 219, c2x: 252, c2y: 215, x: 249, y: 212 }, { c1x: 247, c1y: 209, c2x: 243, c2y: 207, x: 239, y: 205 }, { c1x: 236, c1y: 203, c2x: 232, c2y: 201, x: 227, y: 201 }, { c1x: 232, c1y: 200, c2x: 237, c2y: 199, x: 241, y: 197 }, { c1x: 246, c1y: 195, c2x: 249, c2y: 192, x: 253, y: 189 }, { c1x: 256, c1y: 186, c2x: 258, c2y: 183, x: 260, y: 179 }, { c1x: 262, c1y: 175, c2x: 263, c2y: 170, x: 263, y: 166 }, { c1x: 263, c1y: 159, c2x: 262, c2y: 152, x: 260, y: 146 }, { c1x: 258, c1y: 140, c2x: 255, c2y: 135, x: 250, y: 130 }, { c1x: 245, c1y: 126, c2x: 238, c2y: 122, x: 230, y: 120 }, { c1x: 221, c1y: 117, c2x: 210, c2y: 116, x: 196, y: 116 }, { x: 117, y: 116 }, { x: 117, y: 148 }, { x: 192, y: 147 }, { c1x: 199, c1y: 147, c2x: 205, c2y: 149, x: 209, y: 153 }, { c1x: 213, c1y: 156, c2x: 214, c2y: 162, x: 214, y: 169 }, { c1x: 214, c1y: 175, c2x: 212, c2y: 180, x: 208, y: 183 }, { c1x: 204, c1y: 187, c2x: 198, c2y: 188, x: 191, y: 188 }, { x: 180, y: 188 }, { x: 180, y: 147 }, { x: 192, y: 147 }],
      V: [{ x: 208, y: 232 }, { x: 180, y: 148 }, { x: 193, y: 148 }, { x: 193, y: 117 }, { x: 104, y: 117 }, { x: 104, y: 148 }, { x: 117, y: 148 }, { x: 181, y: 286 }, { x: 226, y: 286 }, { x: 284, y: 148 }, { x: 296, y: 148 }, { x: 296, y: 117 }, { x: 227, y: 117 }, { x: 227, y: 148 }, { x: 240, y: 148 }, { x: 218, y: 201 }],
      W: [{ x: 155, y: 231 }, { x: 141, y: 148 }, { x: 155, y: 148 }, { x: 155, y: 117 }, { x: 75, y: 117 }, { x: 75, y: 148 }, { x: 88, y: 148 }, { x: 120, y: 286 }, { x: 176, y: 286 }, { x: 191, y: 228 }, { x: 198, y: 198 }, { x: 219, y: 286 }, { x: 276, y: 286 }, { x: 312, y: 148 }, { x: 325, y: 148 }, { x: 325, y: 117 }, { x: 256, y: 117 }, { x: 256, y: 148 }, { x: 269, y: 148 }, { x: 261, y: 185 }, { x: 253, y: 231 }, { x: 230, y: 117 }, { x: 180, y: 117 }, { x: 168, y: 171 }]
    }

    var generateLetter = function(_letter) {

      var points = [],
        _letterarray = Object(),
        c = document.createElement('canvas'),
        $container = document.getElementById('js-water-effect'),
        ctx = c.getContext('2d');

      c.width = '320';
      c.height = '300';

      $container.appendChild(c);

      function show() {

        points.length = 0;
        _letterarray = Object(jsonobj[_letter]);

        for (var i = 0; i < _letterarray.length; i++) {
          var p = {};
          if (_letterarray[i].c1x) {
            p = {
              x: _letterarray[i].x + 20,
              y: _letterarray[i].y + 20,
              c1x: _letterarray[i].c1x - 10,
              c1y: _letterarray[i].c1y + 40,
              c2x: _letterarray[i].c2x - 10,
              c2y: _letterarray[i].c2y + 40,
              bazier: true
            }
          } else {
            p = {
              x: _letterarray[i].x,
              y: _letterarray[i].y - 20,
              bazier: false
            }
          }
          points.push(p);
        };

        TweenLite.ticker.addEventListener('tick', drawAllDots);
        animate();
      };

      var drawAllDots = function() {
        ctx.clearRect(0, 0, 400, 400);
        ctx.beginPath();
        ctx.fillStyle = 'rgba(160,180,192,0.5)';
        drawLetter(points);
      };

      var drawLetter = function(_points) {
        ctx.moveTo(_points[0].x, _points[0].y);
        for (var i = 1; i < _points.length; i++) {
          if (_points[i].bazier) {
            ctx.bezierCurveTo(_points[i].c1x, _points[i].c1y, _points[i].c2x, _points[i].c2y, _points[i].x, _points[i].y);
          } else {
            ctx.lineTo(_points[i].x, _points[i].y);
          }
        };
        ctx.closePath();
        ctx.fill();
      };

      var wooble = function() {
        this.seek(.65);
        this.timeScale(0.6);
      };

      var animate = function() {
        for (var j = 0; j < _letterarray.length; j++) {
          var _t = Math.floor(Math.random() * 10) / 10 + 3;
          if (_letterarray[j].c1x) {
            TweenLite.to(points[j], _t, {
              x: _letterarray[j].x,
              y: _letterarray[j].y,
              c1x: _letterarray[j].c1x,
              c1y: _letterarray[j].c1y,
              c2x: _letterarray[j].c2x,
              c2y: _letterarray[j].c2y,
              ease: Elastic.easeOut,
              onComplete: wooble
            });
          } else {
            TweenLite.to(points[j], _t, {
              x: _letterarray[j].x,
              y: _letterarray[j].y,
              ease: Elastic.easeOut,
              onComplete: wooble
            });
          }
        };
      };

      show();
    };

    var init = function() {

      var $header = document.getElementById('js-overflow-text'),
        headerText = $header.textContent;

      var i;
      for(i = 0; i < headerText.length; i++) {
        generateLetter(headerText[i].toUpperCase());
      }

    };

    return {
      init: init
    }

  }();

  document.addEventListener('DOMContentLoaded', titleWater.init);

})();
