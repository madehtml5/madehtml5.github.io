"use strict";
(function (a) {
	a("#menu-canvas-show").on("click", function () {
		a(".offcanvas-menu-wrapper").fadeIn(400, function () {
			a(".offcanvas-menu-wrapper").addClass("active")
		}).css("display", "flex")
	});
	a("#menu-canvas-close").on("click", function () {
		a(".offcanvas-menu-wrapper").removeClass("active").delay(1100);
		a(".offcanvas-menu-wrapper").fadeOut(400)
	});
	a(".set-bg").each(function () {
		var c = a(this).data("setbg");
		a(this).css("background-image", "url(" + c + ")")
	});

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