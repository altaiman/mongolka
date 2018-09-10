'use strict';

(function (root) {

	function sliders() {
		// Параметры слайдеров
		var data = {
			tile: {
				arrows: false,
				dots: true,
				fade: true,
				autoplay: true,
				autoplaySpeed: 4000,
				pauseOnHover: false
			},
			recom: {
				slidesToShow: 4,
				prevArrow: $('.arrow_prev'),
				nextArrow: $('.arrow_next'),
				responsive: [{
					breakpoint: 1200,
					settings: {
						variableWidth: true
					}
				}, {
					breakpoint: 1000,
					settings: {
						slidesToShow: 3
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				}, {
					breakpoint: 500,
					settings: {
						slidesToShow: 1
					}
				}]
			}
		};

		// Активация слайдеров
		$('.slider').each(function (i, s) {
			var slider = $(s).data('slider');

			$(s).find('.slider__slides').slick(data[slider]);
		});
	}

	sliders();

	// Галерея
	$('.gallery__view').addClass('show');

	$('.gallery__items li').on('click', function (e) {
		e.preventDefault();

		$(this).parent().find('.active').removeClass('active');
		$(this).addClass('active');

		var src = $(this).data('view');

		$('.gallery__view').removeClass('show');

		setTimeout(function () {
			$('.gallery__view img').attr('src', src);
			$('.gallery__view').addClass('show');
		}, 300);

		$('.modal_view .modal__gallery img').attr('src', src);
	});

	$('.gallery__items li').first().trigger('click');

	if ($('.gallery__items').children().length <= 1) {
		$('.modal_view .modal__nav').hide();
	}

	// Табы
	$('.tabs li').on('click', function (e) {
		e.preventDefault();
		if ($(this).is('[data-order-profile]')) {
			$(this).parent().find('.active').removeClass('active');
			$(this).addClass('active');
			$('[name=PERSON_TYPE]').eq($(this).index()).click();
			$('[data-tab="0"]').show();
		} else {
			$(this).parent().find('.active').removeClass('active');
			$(this).addClass('active');

			$('[data-tab]').hide();

			var tab = $('[data-tab="' + $(this).index() + '"]').get(0);

			if (tab.tagName === 'FORM') {
				$(tab).css('display', 'flex');
			} else {
				$(tab).show();
			}
		}
	});

	$('.tabs').each(function (i, tabs) {
		$(tabs).find('li').first().trigger('click');
	});

	// Боковое меню в каталоге
	$('.sidenav__item_drop > a').on('click', function (e) {
		// e.preventDefault();

		$(this).parent().toggleClass('sidenav__item_show');
	});

	// Ползунок
	$('.range input').ionRangeSlider();

	// Радио
	function radioWork(radio) {
		var name = $(radio).attr('name');

		$('.radio input[name=' + name + ']').closest('.radio').removeClass('radio_active');
		$(radio).closest('.radio').addClass('radio_active');
	}

	$('.radio input:checked').each(function (i, radio) {
		radioWork(radio);
	});

	$('.radio').on('click', function () {
		var radio = $(this).find('input').get(0);

		radioWork(radio);
	});

	// Модалки

	$('[data-modal]').iziModal();

	$('.modal__nav, .modal__close').each(function (i, nav) {
		var modal = $(nav).closest('.modal');

		$(modal).append(nav);
	});

	$('[data-open]').on('click', function (e) {
		e.preventDefault();

		var m = $(this).data('open'),
		    modal = $('[data-modal="' + m + '"]'),
		    gallery = $(this).closest('.gallery');

		// превью

		if (m === 'view') {
			var img = $(this).find('img').clone();

			$(modal).find('.modal__gallery').html(img);
			$('.gallery__view').addClass('hidden');

			$('.modal__nav .arrow').on('click', function () {

				var active = $(gallery).find('.active');

				if ($(this).hasClass('arrow_prev')) {
					var prev = $(active).prev().get(0);

					if (!prev) {
						prev = $(gallery).find('.gallery__items').children().last();
					}

					$(active).removeClass('active');
					$(prev).trigger('click');
				} else {
					var next = $(active).next().get(0);

					if (!next) {
						next = $(gallery).find('.gallery__items').children().first();
					}

					$(active).removeClass('active');
					$(next).trigger('click');
				}
			});
		}

		$(modal).iziModal('open');

		$(document).on('closed', '[data-modal]', function (e) {
			$('.gallery__view.hidden').removeClass('hidden');
			$('.modal__nav .arrow').off();
		});
	});

	// Сетка

	setTimeout(function () {
		$('.grid').masonry({
			itemSelector: '.grid__item',
			gutter: 19,
			horizontalOrder: true
		});
	}, 100);

	// lookbook

	function lkActive(point) {
		var data = $(point).data('item'),
		    card = $(point).closest('.lookbook').find('.lookbook__list .card[data-item="' + data + '"]');

		$(point).siblings('.point').addClass('point_disable');
		$(card).removeClass('card_disable');
		$(card).siblings().addClass('card_disable');
	}

	function lkDisable(point) {
		$(point).siblings().removeClass('point_disable');
		$(point).closest('.lookbook').find('.card_disable').removeClass('card_disable');
	}

	$('.point').hover(function () {
		$(this).parent().find('.point_active').removeClass('point_active').siblings('.point_disable').removeClass('point_disable');
		lkActive(this);
	}, function () {
		if ($(this).hasClass('point_active')) {
			return;
		}
		lkDisable(this);
	});

	$('.point').on('click', function () {
		$(this).addClass('point_active');
		lkActive(this);
	});

	$('.lookbook__list .card').hover(function () {
		$(this).siblings().addClass('card_disable');
		var d = $(this).data('item');
		$('.point[data-item=' + d + ']').addClass('point_active');
	}, function () {
		$('.lookbook__list .card').removeClass('card_disable');
		$('.point_active').removeClass('point_active');
	});

	// Карточка адаптив

	function cardAdaptive() {
		var w = $(window).width();

		if (w <= 1000) {
			if (!$('.info_vertical').get(0)) {
				$(".info").unstick().removeClass('info_stick');
				$('.info').insertAfter('.gallery');
				$('.c-page__info').empty();
				$('.info').removeClass('info_horizontal').addClass('info_vertical');
			}
		} else {
			if (!$('.info_horizontal').get(0)) {
				$('.c-page__info').append($('.info'));
				$('.info').removeClass('info_vertical').addClass('info_horizontal');
			}
		}
	}

	cardAdaptive();
	$(window).on('resize', cardAdaptive);

	// Меню

	$('.menu').on('click', function (e) {
		e.preventDefault();

		$(this).closest('.header').toggleClass('header_show-menu');
	});

	// Город

	$('.city__current').on('click', function (e) {
		e.preventDefault();

		$('.city').toggleClass('city_show');
	});

	// lookbook editor

	function getCoords(elem) {
		return {
			top: elem.offsetTop,
			left: elem.offsetLeft
		};
	}

	var point = $('.point_move').get(0),
	    area = $('.lookbook__set img'),
	    areaBorders = {
		top: $(area).height() - 24,
		left: $(area).width() - 24
	};

	$(point).on('mousedown', function (e) {
		e.preventDefault();

		var coords = getCoords(point),
		    shiftX = e.pageX - coords.left,
		    shiftY = e.pageY - coords.top;

		moveAt(e);

		point.style.zIndex = 1000; // над другими элементами

		function moveAt(e) {
			var top = e.pageY - shiftY,
			    left = e.pageX - shiftX;

			if (left >= areaBorders.left) {
				left = areaBorders.left;
			} else if (left <= 0) {
				left = 0;
			}

			if (top <= 0) {
				top = 0;
			} else if (top >= areaBorders.top) {
				top = areaBorders.top;
			}

			point.style.left = left + 'px';
			point.style.top = top + 'px';

			$('[data-coords]').each(function (i, field) {
				var coords = $(this).data('coords'),
				    input = $(this).find('input');

				switch (coords) {
					case 'top':
						$(input).val(top);
						break;
					case 'left':
						$(input).val(left);
						break;
				}
			});
		}

		document.onmousemove = function (e) {
			moveAt(e);
		};

		point.onmouseup = function () {
			document.onmousemove = null;
			point.onmouseup = null;
		};

		point.ondragstart = function () {
			return false;
		};
	});

	// Инфо в карточке

	function infoStick() {
		if ($(window).width() > 1000) {
			if ($('.info').hasClass('info_stick')) {
				$('.info').sticky('update');
			} else {
				$('.info').sticky({
					topSpacing: 20,
					bottomSpacing: $('.page__wrapper').height() - $('.c-page__main').height() + $('.footer').height()
				}).addClass('info_stick');
			}
		}
	}

	$(window).on('resize', infoStick);
	infoStick();

	$('.c-page .tabs li').on('click', infoStick);

	$('.lk__item').on('click', function () {
		$('.lookbook__set').sticky();
	});

	$('.page__side-nav').on('click', function () {
		$(this).next('.sidenav').toggle();
	});

	$(window).on('scroll', function () {
		var s = 100 * $(window).scrollTop() / $('.page').height() * 1.8;

		$('.bg').css('top', -s + '%');
	});
})(window);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyb290Iiwic2xpZGVycyIsImRhdGEiLCJ0aWxlIiwiYXJyb3dzIiwiZG90cyIsImZhZGUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJwYXVzZU9uSG92ZXIiLCJyZWNvbSIsInNsaWRlc1RvU2hvdyIsInByZXZBcnJvdyIsIiQiLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidmFyaWFibGVXaWR0aCIsImVhY2giLCJpIiwicyIsInNsaWRlciIsImZpbmQiLCJzbGljayIsImFkZENsYXNzIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsInNyYyIsInNldFRpbWVvdXQiLCJhdHRyIiwiZmlyc3QiLCJ0cmlnZ2VyIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJoaWRlIiwiaXMiLCJlcSIsImluZGV4IiwiY2xpY2siLCJzaG93IiwidGFiIiwiZ2V0IiwidGFnTmFtZSIsImNzcyIsInRhYnMiLCJ0b2dnbGVDbGFzcyIsImlvblJhbmdlU2xpZGVyIiwicmFkaW9Xb3JrIiwicmFkaW8iLCJuYW1lIiwiY2xvc2VzdCIsIml6aU1vZGFsIiwibmF2IiwibW9kYWwiLCJhcHBlbmQiLCJtIiwiZ2FsbGVyeSIsImltZyIsImNsb25lIiwiaHRtbCIsImFjdGl2ZSIsImhhc0NsYXNzIiwicHJldiIsImxhc3QiLCJuZXh0IiwiZG9jdW1lbnQiLCJvZmYiLCJtYXNvbnJ5IiwiaXRlbVNlbGVjdG9yIiwiZ3V0dGVyIiwiaG9yaXpvbnRhbE9yZGVyIiwibGtBY3RpdmUiLCJwb2ludCIsImNhcmQiLCJzaWJsaW5ncyIsImxrRGlzYWJsZSIsImhvdmVyIiwiZCIsImNhcmRBZGFwdGl2ZSIsInciLCJ3aW5kb3ciLCJ3aWR0aCIsInVuc3RpY2siLCJpbnNlcnRBZnRlciIsImVtcHR5IiwiZ2V0Q29vcmRzIiwiZWxlbSIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0IiwiYXJlYSIsImFyZWFCb3JkZXJzIiwiaGVpZ2h0IiwiY29vcmRzIiwic2hpZnRYIiwicGFnZVgiLCJzaGlmdFkiLCJwYWdlWSIsIm1vdmVBdCIsInN0eWxlIiwiekluZGV4IiwiZmllbGQiLCJpbnB1dCIsInZhbCIsIm9ubW91c2Vtb3ZlIiwib25tb3VzZXVwIiwib25kcmFnc3RhcnQiLCJpbmZvU3RpY2siLCJzdGlja3kiLCJ0b3BTcGFjaW5nIiwiYm90dG9tU3BhY2luZyIsInRvZ2dsZSIsInNjcm9sbFRvcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFVBQVNBLElBQVQsRUFBZTs7QUFFZixVQUFTQyxPQUFULEdBQW1CO0FBQ2xCO0FBQ0EsTUFBSUMsT0FBTztBQUNWQyxTQUFNO0FBQ0xDLFlBQVEsS0FESDtBQUVMQyxVQUFNLElBRkQ7QUFHTEMsVUFBTSxJQUhEO0FBSUxDLGNBQVUsSUFKTDtBQUtMQyxtQkFBZSxJQUxWO0FBTUxDLGtCQUFjO0FBTlQsSUFESTtBQVNWQyxVQUFPO0FBQ05DLGtCQUFjLENBRFI7QUFFTkMsZUFBV0MsRUFBRSxhQUFGLENBRkw7QUFHTkMsZUFBV0QsRUFBRSxhQUFGLENBSEw7QUFJTkUsZ0JBQVksQ0FDWDtBQUNDQyxpQkFBWSxJQURiO0FBRUNDLGVBQVU7QUFDVEMscUJBQWU7QUFETjtBQUZYLEtBRFcsRUFNVDtBQUNERixpQkFBWSxJQURYO0FBRURDLGVBQVU7QUFDVE4sb0JBQWM7QUFETDtBQUZULEtBTlMsRUFXVDtBQUNESyxpQkFBWSxHQURYO0FBRURDLGVBQVU7QUFDVE4sb0JBQWM7QUFETDtBQUZULEtBWFMsRUFnQlQ7QUFDREssaUJBQVksR0FEWDtBQUVEQyxlQUFVO0FBQ1ROLG9CQUFjO0FBREw7QUFGVCxLQWhCUztBQUpOO0FBVEcsR0FBWDs7QUF1Q0E7QUFDQUUsSUFBRSxTQUFGLEVBQWFNLElBQWIsQ0FBa0IsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFDaEMsT0FBSUMsU0FBU1QsRUFBRVEsQ0FBRixFQUFL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QWEsUUFBYixFQUF1QixZQUFXO0FBQ2pDLE1BQUlMLElBQUksTUFBTVIsRUFBRXVFLE1BQUYsRUFBVWlDLFNBQVYsRUFBTixHQUE4QnhHLEVBQUUsT0FBRixFQUFXb0YsTUFBWCxFQUE5QixHQUFrRCxHQUExRDs7QUFFQXBGLElBQUUsS0FBRixFQUFTa0MsR0FBVCxDQUFhLEtBQWIsRUFBb0IsQ0FBQzFCLENBQUQsR0FBRyxHQUF2QjtBQUNBLEVBSkQ7QUFPQSxDQS9ZRCxFQStZRytELE1BL1lIIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihyb290KSB7XG5cblx0ZnVuY3Rpb24gc2xpZGVycygpIHtcblx0XHQvLyDQn9Cw0YDQsNC80LXRgtGA0Ysg0YHQu9Cw0LnQtNC10YDQvtCyXG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHR0aWxlOiB7XG5cdFx0XHRcdGFycm93czogZmFsc2UsXG5cdFx0XHRcdGRvdHM6IHRydWUsXG5cdFx0XHRcdGZhZGU6IHRydWUsXG5cdFx0XHRcdGF1dG9wbGF5OiB0cnVlLFxuXHRcdFx0XHRhdXRvcGxheVNwZWVkOiA0MDAwLFxuXHRcdFx0XHRwYXVzZU9uSG92ZXI6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0cmVjb206IHtcblx0XHRcdFx0c2xpZGVzVG9TaG93OiA0LFxuXHRcdFx0XHRwcmV2QXJyb3c6ICQoJy5hcnJvd19wcmV2JyksXG5cdFx0XHRcdG5leHRBcnJvdzogJCgnLmFycm93X25leHQnKSxcblx0XHRcdFx0cmVzcG9uc2l2ZTogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDEyMDAsXG5cdFx0XHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdFx0XHR2YXJpYWJsZVdpZHRoOiB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSx7XG5cdFx0XHRcdFx0XHRicmVha3BvaW50OiAxMDAwLFxuXHRcdFx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAzXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSx7XG5cdFx0XHRcdFx0XHRicmVha3BvaW50OiA3NjgsXG5cdFx0XHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LHtcblx0XHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDUwMCxcblx0XHRcdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyDQkNC60YLQuNCy0LDRhtC40Y8g0YHQu9Cw0LnQtNC10YDQvtCyXG5cdFx0JCgnLnNsaWRlcicpLmVhY2goZnVuY3Rpb24oaSwgcykge1xuXHRcdFx0dmFyIHNsaWRlciA9ICQocykuZGF0YSgnc2xpZGVyJyk7XG5cblx0XHRcdCQocykuZmluZCgnLnNsaWRlcl9fc2xpZGVzJykuc2xpY2soZGF0YVtzbGlkZXJdKTtcblx0XHR9KTtcblx0fVxuXG5cdHNsaWRlcnMoKTtcblxuXHQvLyDQk9Cw0LvQtdGA0LXRj1xuXHQkKCcuZ2FsbGVyeV9fdmlldycpLmFkZENsYXNzKCdzaG93Jyk7XG5cblx0JCgnLmdhbGxlcnlfX2l0ZW1zIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdHZhciBzcmMgPSAkKHRoaXMpLmRhdGEoJ3ZpZXcnKTtcblxuXHRcdCQoJy5nYWxsZXJ5X192aWV3JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcuZ2FsbGVyeV9fdmlldyBpbWcnKS5hdHRyKCdzcmMnLHNyYyk7XG5cdFx0XHQkKCcuZ2FsbGVyeV9fdmlldycpLmFkZENsYXNzKCdzaG93Jyk7XG5cdFx0fSwgMzAwKVxuXG5cdFx0JCgnLm1vZGFsX3ZpZXcgLm1vZGFsX19nYWxsZXJ5IGltZycpLmF0dHIoJ3NyYycsc3JjKTtcblx0fSk7XG5cblx0JCgnLmdhbGxlcnlfX2l0ZW1zIGxpJykuZmlyc3QoKS50cmlnZ2VyKCdjbGljaycpO1xuXG5cdGlmICgkKCcuZ2FsbGVyeV9faXRlbXMnKS5jaGlsZHJlbigpLmxlbmd0aCA8PSAxKSB7XG5cdFx0JCgnLm1vZGFsX3ZpZXcgLm1vZGFsX19uYXYnKS5oaWRlKCk7XG5cdH1cblxuXHQvLyDQotCw0LHRi1xuXHQkKCcudGFicyBsaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmKCQodGhpcykuaXMoJ1tkYXRhLW9yZGVyLXByb2ZpbGVdJykpIHtcblx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgXHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgXHQkKCdbbmFtZT1QRVJTT05fVFlQRV0nKS5lcSgkKHRoaXMpLmluZGV4KCkpLmNsaWNrKCk7XG4gICAgICAgIFx0JCgnW2RhdGEtdGFiPVwiMFwiXScpLnNob3coKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0JCgnW2RhdGEtdGFiXScpLmhpZGUoKTtcblxuXHRcdFx0dmFyIHRhYiA9ICQoJ1tkYXRhLXRhYj1cIicgKyAkKHRoaXMpLmluZGV4KCkgKyAnXCJdJykuZ2V0KDApO1xuXG5cdFx0XHRpZiAodGFiLnRhZ05hbWUgPT09ICdGT1JNJykge1xuXHRcdFx0XHQkKHRhYikuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGFiKS5zaG93KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQkKCcudGFicycpLmVhY2goZnVuY3Rpb24oaSwgdGFicykge1xuXHRcdCQodGFicykuZmluZCgnbGknKS5maXJzdCgpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH0pXG5cblx0Ly8g0JHQvtC60L7QstC+0LUg0LzQtdC90Y4g0LIg0LrQsNGC0LDQu9C+0LPQtVxuXHQkKCcuc2lkZW5hdl9faXRlbV9kcm9wID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHQvLyBlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdzaWRlbmF2X19pdGVtX3Nob3cnKTtcblx0fSk7XG5cblx0Ly8g0J/QvtC70LfRg9C90L7QulxuXHQkKCcucmFuZ2UgaW5wdXQnKS5pb25SYW5nZVNsaWRlcigpO1xuXG5cdC8vINCg0LDQtNC40L5cblx0ZnVuY3Rpb24gcmFkaW9Xb3JrKHJhZGlvKSB7XG5cdFx0dmFyIG5hbWUgPSAkKHJhZGlvKS5hdHRyKCduYW1lJyk7XG5cblx0XHQkKCcucmFkaW8gaW5wdXRbbmFtZT0nK25hbWUrJ10nKS5jbG9zZXN0KCcucmFkaW8nKS5yZW1vdmVDbGFzcygncmFkaW9fYWN0aXZlJyk7XG5cdFx0JChyYWRpbykuY2xvc2VzdCgnLnJhZGlvJykuYWRkQ2xhc3MoJ3JhZGlvX2FjdGl2ZScpO1xuXHR9XG5cblx0JCgnLnJhZGlvIGlucHV0OmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uKGksIHJhZGlvKSB7XG5cdFx0cmFkaW9Xb3JrKHJhZGlvKTtcblx0fSk7XG5cblx0JCgnLnJhZGlvJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHJhZGlvID0gJCh0aGlzKS5maW5kKCdpbnB1dCcpLmdldCgwKTtcblxuXHRcdHJhZGlvV29yayhyYWRpbyk7XG5cdH0pO1xuXG5cdC8vINCc0L7QtNCw0LvQutC4XG5cblx0JCgnW2RhdGEtbW9kYWxdJykuaXppTW9kYWwoKTtcblxuXHQkKCcubW9kYWxfX25hdiwgLm1vZGFsX19jbG9zZScpLmVhY2goZnVuY3Rpb24oaSwgbmF2KSB7XG5cdFx0dmFyIG1vZGFsID0gJChuYXYpLmNsb3Nlc3QoJy5tb2RhbCcpO1xuXG5cdFx0JChtb2RhbCkuYXBwZW5kKG5hdik7XG5cdH0pXG5cblx0JCgnW2RhdGEtb3Blbl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dmFyIG0gPSAkKHRoaXMpLmRhdGEoJ29wZW4nKSxcblx0XHRcdFx0bW9kYWwgPSAkKCdbZGF0YS1tb2RhbD1cIicrbSsnXCJdJyksXG5cdFx0XHRcdGdhbGxlcnkgPSAkKHRoaXMpLmNsb3Nlc3QoJy5nYWxsZXJ5Jyk7XG5cblx0XHQvLyDQv9GA0LXQstGM0Y5cblxuXHRcdGlmIChtID09PSAndmlldycpIHtcblx0XHRcdHZhciBpbWcgPSAkKHRoaXMpLmZpbmQoJ2ltZycpLmNsb25lKCk7XG5cblx0XHRcdCQobW9kYWwpLmZpbmQoJy5tb2RhbF9fZ2FsbGVyeScpLmh0bWwoaW1nKTtcblx0XHRcdCQoJy5nYWxsZXJ5X192aWV3JykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXG5cdFx0XHQkKCcubW9kYWxfX25hdiAuYXJyb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHR2YXIgYWN0aXZlID0gJChnYWxsZXJ5KS5maW5kKCcuYWN0aXZlJyk7XG5cblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2Fycm93X3ByZXYnKSkge1xuXHRcdFx0XHRcdHZhciBwcmV2ID0gJChhY3RpdmUpLnByZXYoKS5nZXQoMCk7XG5cblx0XHRcdFx0XHRpZiAoIXByZXYpIHtcblx0XHRcdFx0XHRcdHByZXYgPSAkKGdhbGxlcnkpLmZpbmQoJy5nYWxsZXJ5X19pdGVtcycpLmNoaWxkcmVuKCkubGFzdCgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCQoYWN0aXZlKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0JChwcmV2KS50cmlnZ2VyKCdjbGljaycpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIG5leHQgPSAkKGFjdGl2ZSkubmV4dCgpLmdldCgwKTtcblxuXHRcdFx0XHRcdGlmICghbmV4dCkge1xuXHRcdFx0XHRcdFx0bmV4dCA9ICQoZ2FsbGVyeSkuZmluZCgnLmdhbGxlcnlfX2l0ZW1zJykuY2hpbGRyZW4oKS5maXJzdCgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCQoYWN0aXZlKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0JChuZXh0KS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdCQobW9kYWwpLml6aU1vZGFsKCdvcGVuJyk7XG5cblx0XHQkKGRvY3VtZW50KS5vbignY2xvc2VkJywgJ1tkYXRhLW1vZGFsXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICQoJy5nYWxsZXJ5X192aWV3LmhpZGRlbicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcblx0XHRcdFx0JCgnLm1vZGFsX19uYXYgLmFycm93Jykub2ZmKCk7XG4gICAgfSk7XG5cblxuXHR9KVxuXG5cdC8vINCh0LXRgtC60LBcblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5ncmlkJykubWFzb25yeSh7XG5cdFx0XHRpdGVtU2VsZWN0b3I6ICcuZ3JpZF9faXRlbScsXG5cdFx0XHRndXR0ZXI6IDE5LFxuXHRcdFx0aG9yaXpvbnRhbE9yZGVyOiB0cnVlXG5cdFx0fSk7XG5cdH0sIDEwMClcblxuXHQvLyBsb29rYm9va1xuXG5cdGZ1bmN0aW9uIGxrQWN0aXZlKHBvaW50KSB7XG5cdFx0dmFyIGRhdGEgPSAkKHBvaW50KS5kYXRhKCdpdGVtJyksXG5cdFx0XHRcdGNhcmQgPSAkKHBvaW50KS5jbG9zZXN0KCcubG9va2Jvb2snKS5maW5kKCcubG9va2Jvb2tfX2xpc3QgLmNhcmRbZGF0YS1pdGVtPVwiJytkYXRhKydcIl0nKTtcblxuXHRcdCQocG9pbnQpLnNpYmxpbmdzKCcucG9pbnQnKS5hZGRDbGFzcygncG9pbnRfZGlzYWJsZScpO1xuXHRcdCQoY2FyZCkucmVtb3ZlQ2xhc3MoJ2NhcmRfZGlzYWJsZScpO1xuXHRcdCQoY2FyZCkuc2libGluZ3MoKS5hZGRDbGFzcygnY2FyZF9kaXNhYmxlJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBsa0Rpc2FibGUocG9pbnQpIHtcblx0XHQkKHBvaW50KS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdwb2ludF9kaXNhYmxlJyk7XG5cdFx0JChwb2ludCkuY2xvc2VzdCgnLmxvb2tib29rJykuZmluZCgnLmNhcmRfZGlzYWJsZScpLnJlbW92ZUNsYXNzKCdjYXJkX2Rpc2FibGUnKTtcblx0fVxuXG5cdCQoJy5wb2ludCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLnBvaW50X2FjdGl2ZScpLnJlbW92ZUNsYXNzKCdwb2ludF9hY3RpdmUnKS5zaWJsaW5ncygnLnBvaW50X2Rpc2FibGUnKS5yZW1vdmVDbGFzcygncG9pbnRfZGlzYWJsZScpO1xuXHRcdGxrQWN0aXZlKHRoaXMpO1xuXHR9LCBmdW5jdGlvbigpIHtcblx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygncG9pbnRfYWN0aXZlJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGtEaXNhYmxlKHRoaXMpO1xuXHR9KVxuXG5cdCQoJy5wb2ludCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykuYWRkQ2xhc3MoJ3BvaW50X2FjdGl2ZScpO1xuXHRcdGxrQWN0aXZlKHRoaXMpO1xuXHR9KTtcblxuXHQkKCcubG9va2Jvb2tfX2xpc3QgLmNhcmQnKS5ob3ZlcihmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcykuc2libGluZ3MoKS5hZGRDbGFzcygnY2FyZF9kaXNhYmxlJyk7XG5cdFx0XHR2YXIgZCA9ICQodGhpcykuZGF0YSgnaXRlbScpO1xuXHRcdFx0JCgnLnBvaW50W2RhdGEtaXRlbT0nK2QrJ10nKS5hZGRDbGFzcygncG9pbnRfYWN0aXZlJyk7XG5cdH0sIGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5sb29rYm9va19fbGlzdCAuY2FyZCcpLnJlbW92ZUNsYXNzKCdjYXJkX2Rpc2FibGUnKTtcblx0XHQkKCcucG9pbnRfYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ3BvaW50X2FjdGl2ZScpO1xuXHR9KTtcblxuXHQvLyDQmtCw0YDRgtC+0YfQutCwINCw0LTQsNC/0YLQuNCyXG5cblx0ZnVuY3Rpb24gY2FyZEFkYXB0aXZlKCkge1xuXHRcdHZhciB3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cblx0XHRpZiAodyA8PSAxMDAwKSB7XG5cdFx0XHRpZiAoISQoJy5pbmZvX3ZlcnRpY2FsJykuZ2V0KDApKSB7XG5cdFx0XHRcdCQoXCIuaW5mb1wiKS51bnN0aWNrKCkucmVtb3ZlQ2xhc3MoJ2luZm9fc3RpY2snKTtcblx0XHRcdFx0JCgnLmluZm8nKS5pbnNlcnRBZnRlcignLmdhbGxlcnknKTtcblx0XHRcdFx0JCgnLmMtcGFnZV9faW5mbycpLmVtcHR5KCk7XG5cdFx0XHRcdCQoJy5pbmZvJykucmVtb3ZlQ2xhc3MoJ2luZm9faG9yaXpvbnRhbCcpLmFkZENsYXNzKCdpbmZvX3ZlcnRpY2FsJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghJCgnLmluZm9faG9yaXpvbnRhbCcpLmdldCgwKSkge1xuXHRcdFx0XHQkKCcuYy1wYWdlX19pbmZvJykuYXBwZW5kKCQoJy5pbmZvJykpO1xuXHRcdFx0XHQkKCcuaW5mbycpLnJlbW92ZUNsYXNzKCdpbmZvX3ZlcnRpY2FsJykuYWRkQ2xhc3MoJ2luZm9faG9yaXpvbnRhbCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNhcmRBZGFwdGl2ZSgpO1xuXHQkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGNhcmRBZGFwdGl2ZSk7XG5cblx0Ly8g0JzQtdC90Y5cblxuXHQkKCcubWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5oZWFkZXInKS50b2dnbGVDbGFzcygnaGVhZGVyX3Nob3ctbWVudScpXG5cdH0pXG5cblx0Ly8g0JPQvtGA0L7QtFxuXG5cdCQoJy5jaXR5X19jdXJyZW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdCQoJy5jaXR5JykudG9nZ2xlQ2xhc3MoJ2NpdHlfc2hvdycpO1xuXHR9KVxuXG5cdC8vIGxvb2tib29rIGVkaXRvclxuXG5cdGZ1bmN0aW9uIGdldENvb3JkcyhlbGVtKSB7XG5cdCAgcmV0dXJuIHtcblx0ICAgIHRvcDogZWxlbS5vZmZzZXRUb3AsXG5cdCAgICBsZWZ0OiBlbGVtLm9mZnNldExlZnRcblx0ICB9O1xuXHR9XG5cblx0dmFyIHBvaW50ID0gJCgnLnBvaW50X21vdmUnKS5nZXQoMCksXG5cdFx0XHRhcmVhID0gJCgnLmxvb2tib29rX19zZXQgaW1nJyksXG5cdFx0XHRhcmVhQm9yZGVycyA9IHtcblx0XHRcdFx0dG9wOiAkKGFyZWEpLmhlaWdodCgpIC0gMjQsXG5cdFx0XHRcdGxlZnQ6ICQoYXJlYSkud2lkdGgoKSAtIDI0XG5cdFx0XHR9O1xuXG5cdCQocG9pbnQpLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dmFyIGNvb3JkcyA9IGdldENvb3Jkcyhwb2ludCksXG5cdFx0XHRcdHNoaWZ0WCA9IGUucGFnZVggLSBjb29yZHMubGVmdCxcbiAgXHRcdFx0c2hpZnRZID0gZS5wYWdlWSAtIGNvb3Jkcy50b3A7XG5cblx0ICBtb3ZlQXQoZSk7XG5cblx0ICBwb2ludC5zdHlsZS56SW5kZXggPSAxMDAwOyAvLyDQvdCw0LQg0LTRgNGD0LPQuNC80Lgg0Y3Qu9C10LzQtdC90YLQsNC80LhcblxuXHRcdGZ1bmN0aW9uIG1vdmVBdChlKSB7XG5cdFx0XHR2YXIgdG9wID0gZS5wYWdlWSAtIHNoaWZ0WSxcblx0XHRcdFx0XHRsZWZ0ID0gZS5wYWdlWCAtIHNoaWZ0WDtcblxuXHRcdFx0aWYgKGxlZnQgPj0gYXJlYUJvcmRlcnMubGVmdCkge1xuXHRcdFx0XHRsZWZ0ID0gYXJlYUJvcmRlcnMubGVmdFxuXHRcdFx0fSBlbHNlIGlmIChsZWZ0IDw9IDApe1xuXHRcdFx0XHRsZWZ0ID0gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRvcCA8PSAwKSB7XG5cdFx0XHRcdHRvcCA9IDA7XG5cdFx0XHR9IGVsc2UgaWYgKHRvcCA+PSBhcmVhQm9yZGVycy50b3ApIHtcblx0XHRcdFx0dG9wID0gYXJlYUJvcmRlcnMudG9wXG5cdFx0XHR9XG5cblx0ICAgIHBvaW50LnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4Jztcblx0ICAgIHBvaW50LnN0eWxlLnRvcCA9IHRvcCAgKyAncHgnO1xuXG5cdFx0XHQkKCdbZGF0YS1jb29yZHNdJykuZWFjaChmdW5jdGlvbihpLCBmaWVsZCkge1xuXHRcdFx0XHR2YXIgY29vcmRzID0gJCh0aGlzKS5kYXRhKCdjb29yZHMnKSxcblx0XHRcdFx0XHRcdGlucHV0ID0gJCh0aGlzKS5maW5kKCdpbnB1dCcpO1xuXG5cdFx0XHRcdHN3aXRjaCAoY29vcmRzKSB7XG5cdFx0XHRcdFx0Y2FzZSAndG9wJzpcblx0XHRcdFx0XHRcdCQoaW5wdXQpLnZhbCh0b3ApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XG5cdFx0XHRcdFx0XHQkKGlucHV0KS52YWwobGVmdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdCAgfVxuXG5cdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbihlKSB7XG5cdCAgICBtb3ZlQXQoZSk7XG5cdCAgfTtcblxuXHQgIHBvaW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xuXHQgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuXHQgICAgcG9pbnQub25tb3VzZXVwID0gbnVsbDtcblx0ICB9O1xuXG5cdFx0cG9pbnQub25kcmFnc3RhcnQgPSBmdW5jdGlvbigpIHtcblx0XHQgIHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHR9KVxuXG5cdC8vINCY0L3RhNC+INCyINC60LDRgNGC0L7Rh9C60LVcblxuXHRmdW5jdGlvbiBpbmZvU3RpY2soKSB7XG5cdFx0aWYgKCQod2luZG93KS53aWR0aCgpID4gMTAwMCkge1xuXHRcdFx0aWYgKCQoJy5pbmZvJykuaGFzQ2xhc3MoJ2luZm9fc3RpY2snKSkge1xuXHRcdFx0XHQkKCcuaW5mbycpLnN0aWNreSgndXBkYXRlJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCcuaW5mbycpLnN0aWNreSh7XG5cdFx0XHRcdFx0dG9wU3BhY2luZzogMjAsXG5cdFx0XHRcdFx0Ym90dG9tU3BhY2luZzogJCgnLnBhZ2VfX3dyYXBwZXInKS5oZWlnaHQoKSAtICQoJy5jLXBhZ2VfX21haW4nKS5oZWlnaHQoKSArICQoJy5mb290ZXInKS5oZWlnaHQoKVxuXHRcdFx0XHR9KS5hZGRDbGFzcygnaW5mb19zdGljaycpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdCQod2luZG93KS5vbigncmVzaXplJywgaW5mb1N0aWNrKTtcblx0aW5mb1N0aWNrKCk7XG5cblx0JCgnLmMtcGFnZSAudGFicyBsaScpLm9uKCdjbGljaycsIGluZm9TdGljayk7XG5cblxuXHQkKCcubGtfX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHQkKCcubG9va2Jvb2tfX3NldCcpLnN0aWNreSgpXG5cdH0pO1xuXG5cdCQoJy5wYWdlX19zaWRlLW5hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykubmV4dCgnLnNpZGVuYXYnKS50b2dnbGUoKTtcblx0fSlcblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzID0gMTAwICogJCh3aW5kb3cpLnNjcm9sbFRvcCgpIC8gJCgnLnBhZ2UnKS5oZWlnaHQoKSoxLjg7XG5cblx0XHQkKCcuYmcnKS5jc3MoJ3RvcCcsIC1zKyclJyk7XG5cdH0pXG5cblxufSkod2luZG93KTtcbiJdfQ==
