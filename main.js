(function() {
  var openComment, styles, time, writeStyleChar, writeStyles;
 styles = `
 /*
 * О привіт!
 * Ви на сайт?
 * Зараз зробимо!
 * Включаю магію HTML5...
 */
          
 body {
  background-color: #1a1c24; color: #fff;
  -webkit-font-smoothing: subpixel-antialiased;
 }
 
 pre { 
  position: fixed; width: 60%;
  top: 30px; bottom: 30px; left: 20%;
  transition: left 500ms;
  overflow: auto;
  background-color: #313744; color: #a6c3d4;
  padding: 24px 12px;
  box-sizing: border-box;
 }
 pre em:not(.comment) { font-style: normal; }
 /* 
 * Тепер збудуємо сайт...
 */ 
 
 pre { left: 20%; }
 /* 
 * Більше HTML5!!!
 */
 pre {
 display: none;
 }
 
.header-section,
.page-top-section,
.footer-section {
  opacity: 1;
  }
 
  `;
openComment = false;
writeStyleChar = function(which) {
    if (which === '/' && openComment === false) {
      openComment = true;
      styles = $('#style-text').html() + which;
    } else if (which === '/' && openComment === true) {
      openComment = false;
      styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
    } else if (which === ':') {
      styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
    } else if (which === ';') {
      styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
    } else if (which === '{') {
      styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
    } else {styles = $('#style-text').html() + which;}
    $('#style-text').html(styles);
    return $('#style-tag').append(which);
  };
  writeStyles = function(message, index, interval) {
    var pre;
    if (index < message.length) {
      pre = document.getElementById('style-text');
      pre.scrollTop = pre.scrollHeight;
      writeStyleChar(message[index++]);
      return setTimeout((function() {
        return writeStyles(message, index, interval);
      }), interval);
    }
  };
  time = window.innerWidth <= 578 ? 1 : 20;
  writeStyles(styles, 0, time);
}).call(this);


"use strict";
(function (a) {
function b() {
		if (a(window).width() > 767) {
			var c = a(".header-section").innerHeight();
			var d = a(".footer-section").innerHeight();
			var e = a(window).innerHeight();
			var f = ((e) - (c + d + 5));
			a(".hero-item").each(function () {
				a(this).height(f)
			})
		}
	}
	if (a(window).width() > 767) {
		b();
		a(window).resize(function () {
			b()
		})
	}
	a(".hero-slider").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
		mouseDrag: false,
		animateOut: "fadeOut",
		animateIn: "fadeIn",
		items: 1,
	})
})(jQuery);
