(function (f) {
	document.getElementsByTagName("body")[0].addEventListener("mousemove", function (a) {
		k.style.left = a.clientX + "px", k.style.top = a.clientY + "px", h.style.left = a.clientX + "px", h.style.top = a.clientY + "px", g.style.left = a.clientX + "px", g.style.top = a.clientY + "px"
	});
	var k = document.getElementById("cursor"),
		h = document.getElementById("cursor2"),
		g = document.getElementById("cursor3");

	function d(a) {
		h.classList.add("hover"), g.classList.add("hover")
	}

	function l(a) {
		h.classList.remove("hover"), g.classList.remove("hover")
	}
	l();
	for (var b = document.querySelectorAll("a"), j = b.length - 1; j >= 0; j--) {
		c(b[j])
	}

	function c(a) {
		a.addEventListener("mouseover", d), a.addEventListener("mouseout", l)
	}
	f(document).ready(function () {
		f(".slide-buttons li:nth-child(1)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(1)").addClass("active")
		});
		f(".slide-buttons li:nth-child(2)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(2)").addClass("active")
		});
		f(".slide-buttons li:nth-child(3)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(3)").addClass("active")
		});
		f(".slide-buttons li:nth-child(4)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(4)").addClass("active")
		});
		f(".slide-buttons li:nth-child(5)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(5)").addClass("active")
		});
		f(".slide-buttons li:nth-child(6)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(6)").addClass("active")
		});
		f(".slide-buttons li:nth-child(7)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(7)").addClass("active")
		});
		f(".slide-buttons li:nth-child(8)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(8)").addClass("active")
		});
		f(".slide-buttons li:nth-child(9)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(9)").addClass("active")
		});
		f(".slide-buttons li:nth-child(10)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(10)").addClass("active")
		});
		f(".slide-buttons li:nth-child(11)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(11)").addClass("active")
		})
		f(".slide-buttons li:nth-child(12)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(12)").addClass("active")
		})
		f(".slide-buttons li:nth-child(13)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(12)").addClass("active")
		})
		f(".slide-buttons li:nth-child(14)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(12)").addClass("active")
		})
		f(".slide-buttons li:nth-child(15)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(12)").addClass("active")
		})
		f(".slide-buttons li:nth-child(16)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(12)").addClass("active")
		})
		f(".slide-buttons li:nth-child(17)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(12)").addClass("active")
		})
		f(".slide-buttons li:nth-child(18)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(12)").addClass("active")
		})
		f(".slide-buttons li:nth-child(19)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(12)").addClass("active")
		})
		f(".slide-buttons li:nth-child(20)").on("mouseenter", function () {
			f(".slide-buttons li.active").removeClass("active");
			f(".slide-buttons li:nth-child(12)").addClass("active")
		})
	})
})(jQuery);