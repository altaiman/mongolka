"use strict";!function(e){var i;function t(e){var i=$(e).attr("name");$(".radio input[name="+i+"]").closest(".radio").removeClass("radio_active"),$(e).closest(".radio").addClass("radio_active")}function a(e){var i=$(e).data("item"),t=$(e).closest(".lookbook").find('.lookbook__list .card[data-item="'+i+'"]');$(e).siblings(".point").addClass("point_disable"),$(t).removeClass("card_disable"),$(t).siblings().addClass("card_disable")}function o(){$(window).width()<=1e3?$(".info_vertical").get(0)||($(".info").unstick().removeClass("info_stick"),$(".info").insertAfter(".gallery"),$(".c-page__info").empty(),$(".info").removeClass("info_horizontal").addClass("info_vertical")):$(".info_horizontal").get(0)||($(".c-page__info").append($(".info")),$(".info").removeClass("info_vertical").addClass("info_horizontal"))}i={tile:{arrows:!1,dots:!0,fade:!0,autoplay:!0,autoplaySpeed:4e3,pauseOnHover:!1},recom:{slidesToShow:4,prevArrow:$(".arrow_prev"),nextArrow:$(".arrow_next"),responsive:[{breakpoint:1200,settings:{variableWidth:!0}},{breakpoint:1e3,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:500,settings:{slidesToShow:1}}]}},$(".slider").each(function(e,t){var a=$(t).data("slider");$(t).find(".slider__slides").slick(i[a])}),$(".gallery__view").addClass("show"),$(".gallery__items li").on("click",function(e){e.preventDefault(),$(this).parent().find(".active").removeClass("active"),$(this).addClass("active");var i=$(this).data("view");$(".gallery__view").removeClass("show"),setTimeout(function(){$(".gallery__view img").attr("src",i),$(".gallery__view").addClass("show")},300),$(".modal_view .modal__gallery img").attr("src",i)}),$(".gallery__items li").first().trigger("click"),$(".gallery__items").children().length<=1&&$(".modal_view .modal__nav").hide(),$(".tabs li").on("click",function(e){e.preventDefault(),$(this).parent().find(".active").removeClass("active"),$(this).addClass("active"),$("[data-tab]").hide();var i=$('[data-tab="'+$(this).index()+'"]').get(0);"FORM"===i.tagName?$(i).css("display","flex"):$(i).show()}),$(".tabs").each(function(e,i){$(i).find("li").first().trigger("click")}),$(".sidenav__item_drop > a").on("click",function(e){e.preventDefault(),$(this).parent().toggleClass("sidenav__item_show")}),$(".range input").ionRangeSlider(),$(".radio input:checked").each(function(e,i){t(i)}),$(".radio").on("click",function(){t($(this).find("input").get(0))}),$("[data-modal]").iziModal(),$(".modal__nav, .modal__close").each(function(e,i){var t=$(i).closest(".modal");$(t).append(i)}),$("[data-open]").on("click",function(e){e.preventDefault();var i=$(this).data("open"),t=$('[data-modal="'+i+'"]'),a=$(this).closest(".gallery");if("view"===i){var o=$(this).find("img").clone();$(t).find(".modal__gallery").html(o),$(".gallery__view").addClass("hidden"),$(".modal__nav .arrow").on("click",function(){var e=$(a).find(".active");if($(this).hasClass("arrow_prev")){var i=$(e).prev().get(0);i||(i=$(a).find(".gallery__items").children().last()),$(e).removeClass("active"),$(i).trigger("click")}else{var t=$(e).next().get(0);t||(t=$(a).find(".gallery__items").children().first()),$(e).removeClass("active"),$(t).trigger("click")}})}$(t).iziModal("open"),$(document).on("closed","[data-modal]",function(e){$(".gallery__view.hidden").removeClass("hidden"),$(".modal__nav .arrow").off()})}),setTimeout(function(){$(".grid").masonry({itemSelector:".grid__item",gutter:19,horizontalOrder:!0})},100),$(".point").hover(function(){$(this).parent().find(".point_active").removeClass("point_active").siblings(".point_disable").removeClass("point_disable"),a(this)},function(){var e;$(this).hasClass("point_active")||(e=this,$(e).siblings().removeClass("point_disable"),$(e).closest(".lookbook").find(".card_disable").removeClass("card_disable"))}),$(".point").on("click",function(){$(this).addClass("point_active"),a(this)}),$(".lookbook__list .card").hover(function(){$(this).siblings().addClass("card_disable");var e=$(this).data("item");$(".point[data-item="+e+"]").addClass("point_active")},function(){$(".lookbook__list .card").removeClass("card_disable"),$(".point_active").removeClass("point_active")}),o(),$(window).on("resize",o),$(".menu").on("click",function(e){e.preventDefault(),$(this).closest(".header").toggleClass("header_show-menu")}),$(".city__current").on("click",function(e){e.preventDefault(),$(".city").toggleClass("city_show")});var s=$(".point_move").get(0),n=$(".lookbook__set img"),l={top:$(n).height()-24,left:$(n).width()-24};function r(){$(window).width()>1e3&&($(".info").hasClass("info_stick")?$(".info").sticky("update"):$(".info").sticky({topSpacing:20,bottomSpacing:$(".page__wrapper").height()-$(".c-page__main").height()+$(".footer").height()}).addClass("info_stick"))}$(s).on("mousedown",function(e){e.preventDefault();var i,t={top:(i=s).offsetTop,left:i.offsetLeft},a=e.pageX-t.left,o=e.pageY-t.top;function n(e){var i=e.pageY-o,t=e.pageX-a;t>=l.left?t=l.left:t<=0&&(t=0),i<=0?i=0:i>=l.top&&(i=l.top),s.style.left=t+"px",s.style.top=i+"px",$("[data-coords]").each(function(e,a){var o=$(this).data("coords"),s=$(this).find("input");switch(o){case"top":$(s).val(i);break;case"left":$(s).val(t)}})}n(e),s.style.zIndex=1e3,document.onmousemove=function(e){n(e)},s.onmouseup=function(){document.onmousemove=null,s.onmouseup=null},s.ondragstart=function(){return!1}}),$(window).on("resize",r),r(),$(".lk__item").on("click",function(){$(".lookbook__set").sticky()}),$(".page__side-nav").on("click",function(){$(this).next(".sidenav").toggle()})}(window);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyb290IiwiZGF0YSIsIm5hbWUiLCJyYWRpbyIsIiQiLCJhdHRyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNsb3Nlc3QiLCJsa0FjdGl2ZSIsInBvaW50IiwiY2FyZCIsInNpYmxpbmdzIiwiZmluZCIsImxrRGlzYWJsZSIsImNhcmRBZGFwdGl2ZSIsIndpbmRvdyIsInVuc3RpY2siLCJnZXQiLCJpbnNlcnRBZnRlciIsImVtcHR5IiwiYXBwZW5kIiwidGlsZSIsImFycm93cyIsImRvdHMiLCJmYWRlIiwiYXV0b3BsYXkiLCJwYXVzZU9uSG92ZXIiLCJzbGlkZXNUb1Nob3ciLCJyZWNvbSIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJlYWNoIiwiaSIsInMiLCJzbGlkZXIiLCJzbGljayIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGhpcyIsInBhcmVudCIsInNyYyIsInNldFRpbWVvdXQiLCJmaXJzdCIsInRyaWdnZXIiLCJjaGlsZHJlbiIsImxlbmd0aCIsImhpZGUiLCJ0YWIiLCJpbmRleCIsInRhZ05hbWUiLCJjc3MiLCJzaG93IiwidGFicyIsInRvZ2dsZUNsYXNzIiwiaW9uUmFuZ2VTbGlkZXIiLCJyYWRpb1dvcmsiLCJpemlNb2RhbCIsIm5hdiIsIm1vZGFsIiwiZ2FsbGVyeSIsImltZyIsIm0iLCJjbG9uZSIsImh0bWwiLCJhY3RpdmUiLCJwcmV2IiwibGFzdCIsIm5leHQiLCJkb2N1bWVudCIsIm9mZiIsImhvcml6b250YWxPcmRlciIsIm1hc29ucnkiLCJpdGVtU2VsZWN0b3IiLCJndXR0ZXIiLCJob3ZlciIsImhhc0NsYXNzIiwiZCIsImxlZnQiLCJhcmVhIiwiYXJlYUJvcmRlcnMiLCJoZWlnaHQiLCJ3aWR0aCIsImluZm9TdGljayIsInN0aWNreSIsInRvcFNwYWNpbmciLCJib3R0b21TcGFjaW5nIiwic2hpZnRYIiwiY29vcmRzIiwibW92ZUF0IiwiZWxlbSIsInRvcCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJwYWdlWCIsInpJbmRleCIsInN0eWxlIiwiaW5wdXQiLCJmaWVsZCIsInZhbCIsIm9ubW91c2V1cCIsIm9ubW91c2Vtb3ZlIiwib25kcmFnc3RhcnQiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiJjQUFBLFNBQVVBLEdBQVQsSUFFQUMsRUFpSEMsU0FBSUMsRUFBT0MsR0FBWCxJQUFJRCxFQUFPRSxFQUFFRCxHQUFPRSxLQUFLLFFBR3pCRCxFQUFFRCxxQkFBZUQsRUFBVUksS0FBQUEsUUFBUyxVQUFwQ0MsWUFBQSxnQkFDQUgsRUFBQUQsR0FBQUssUUFBQSxVQUFBRixTQUFBLGdCQTBGQUYsU0FBQUssRUFBQUMsR0FDQU4sSUFBRU8sRUFBTUosRUFBQUEsR0FBWU4sS0FBQSxRQUNsQlUsRUFBTUMsRUFBQUEsR0FBUkosUUFBbUJGLGFBQVNPLEtBQTVCLG9DQUFBWixFQUFBLE1BRkFHLEVBQUVNLEdBQU9FLFNBQVMsVUFBVU4sU0FBUyxpQkFLdENGLEVBQUFPLEdBQVNHLFlBQVVKLGdCQUNsQk4sRUFBRU0sR0FBRkUsV0FBQU4sU0FBb0JDLGdCQWtDbkIsU0FBT1EsSUFDSlgsRUFBQVksUUFBU0MsU0FFVCxJQUNBYixFQUFBLGtCQUFxQmMsSUFBQSxLQUN2QmQsRUFBQSxTQUFBYSxVQUFBVixZQUFBLGNBTkZILEVBQUEsU0FPT2UsWUFBQSxZQUNOZixFQUFBLGlCQUFPZ0IsUUFDTmhCLEVBQUUsU0FBQUcsWUFBaUJjLG1CQUFuQmYsU0FBQSxrQkFHREYsRUFBQSxvQkFBQWMsSUFBQSxLQUNEZCxFQUFBLGlCQUFBaUIsT0FBQWpCLEVBQUEsVUFIRUEsRUFBRSxTQUFTRyxZQUFZLGlCQUFpQkQsU0FBUyxvQkFoUXBETCxHQUNDcUIsTUFDQUMsUUFBSXRCLEVBQ0hxQixNQUFNLEVBQ0xDLE1BQUFBLEVBQ0FDLFVBRkssRUFHTEMsY0FISyxJQUlMQyxjQUpLLEdBTUxDLE9BUFNDLGFBQUEsRUFTVkMsVUFBT3pCLEVBQUEsZUFDTndC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LEtBS1RBLEdBQUcsSUFDYmEsRUFBQSxHQUdBQSxHQUFBLEVBSEFBLEVBQU0sRUFLTEEsR0FBQVgsRUFBQVcsTUFDQXBGLEVBQU15RixFQUFZTCxLQUduQnBGLEVBQUlpRixNQUFTdkYsS0FBQTZFLEVBQWEsS0FBMUJ2RSxFQUNFMEYsTUFBUWhHLElBQUEwRixFQUFhLEtBRXZCMUYsRUFBQSxpQkFBQThCLEtBQUEsU0FBQUMsRUFBQWtFLEdBQ0MsSUFBQVYsRUFBQXZGLEVBQUFzQyxNQUFBekMsS0FBQSxVQUNDRyxFQUFBQSxFQUFTa0csTUFBVHpGLEtBQUEsU0FFRCxPQUFLOEUsR0FDSnZGLElBQUVnRyxNQUNGaEcsRUFBQWdHLEdBQUFFLElBQUFSLEdBTkYsTUFKRCxJQUFBLE9BYUMxRixFQUFBZ0csR0FBQUUsSUFBQXJCLE1BaENGVyxFQUFBcEQsR0FDQzlCLEVBQ0V1RSxNQUFPekMsT0FBVWtELElBb0NuQmhGLFNBQU02RixZQUFZLFNBQVcvRCxHQUMzQmdDLEVBQVNnQyxJQURYOUYsRUFBTTZGLFVBQVksV0FLbkI3RixTQUFNK0YsWUFBYyxLQUNsQi9GLEVBQU82RixVQUFQLE1BREY3RixFQUFNK0YsWUFBYyxXQUtyQixPQUFBLEtBc0JDckcsRUFBQUEsUUFBRW1DLEdBQUEsU0FBa0JnRCxHQUNwQkQsSUE1WEZsRixFQW1ZR1ksYUFuWUh1QixHQUFBLFFBQUEsV0EyWEVuQyxFQUFFLGtCQUFrQm1GLFdBR3JCbkYsRUFBRSxtQkFBbUJtQyxHQUFHLFFBQVMsV0FDaENuQyxFQUFFc0MsTUFBTTZCLEtBQUssWUFBWW1DLFdBL1gzQixDQW1ZRzFGIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihyb290KSB7XG5cblx0ZnVuY3Rpb24gc2xpZGVycygpIHtcblx0XHQvLyDQn9Cw0YDQsNC80LXRgtGA0Ysg0YHQu9Cw0LnQtNC10YDQvtCyXG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHR0aWxlOiB7XG5cdFx0XHRcdGFycm93czogZmFsc2UsXG5cdFx0XHRcdGRvdHM6IHRydWUsXG5cdFx0XHRcdGZhZGU6IHRydWUsXG5cdFx0XHRcdGF1dG9wbGF5OiB0cnVlLFxuXHRcdFx0XHRhdXRvcGxheVNwZWVkOiA0MDAwLFxuXHRcdFx0XHRwYXVzZU9uSG92ZXI6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0cmVjb206IHtcblx0XHRcdFx0c2xpZGVzVG9TaG93OiA0LFxuXHRcdFx0XHRwcmV2QXJyb3c6ICQoJy5hcnJvd19wcmV2JyksXG5cdFx0XHRcdG5leHRBcnJvdzogJCgnLmFycm93X25leHQnKSxcblx0XHRcdFx0cmVzcG9uc2l2ZTogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDEyMDAsXG5cdFx0XHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdFx0XHR2YXJpYWJsZVdpZHRoOiB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSx7XG5cdFx0XHRcdFx0XHRicmVha3BvaW50OiAxMDAwLFxuXHRcdFx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAzXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSx7XG5cdFx0XHRcdFx0XHRicmVha3BvaW50OiA3NjgsXG5cdFx0XHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LHtcblx0XHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDUwMCxcblx0XHRcdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyDQkNC60YLQuNCy0LDRhtC40Y8g0YHQu9Cw0LnQtNC10YDQvtCyXG5cdFx0JCgnLnNsaWRlcicpLmVhY2goZnVuY3Rpb24oaSwgcykge1xuXHRcdFx0dmFyIHNsaWRlciA9ICQocykuZGF0YSgnc2xpZGVyJyk7XG5cblx0XHRcdCQocykuZmluZCgnLnNsaWRlcl9fc2xpZGVzJykuc2xpY2soZGF0YVtzbGlkZXJdKTtcblx0XHR9KTtcblx0fVxuXG5cdHNsaWRlcnMoKTtcblxuXHQvLyDQk9Cw0LvQtdGA0LXRj1xuXHQkKCcuZ2FsbGVyeV9fdmlldycpLmFkZENsYXNzKCdzaG93Jyk7XG5cblx0JCgnLmdhbGxlcnlfX2l0ZW1zIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdHZhciBzcmMgPSAkKHRoaXMpLmRhdGEoJ3ZpZXcnKTtcblxuXHRcdCQoJy5nYWxsZXJ5X192aWV3JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcuZ2FsbGVyeV9fdmlldyBpbWcnKS5hdHRyKCdzcmMnLHNyYyk7XG5cdFx0XHQkKCcuZ2FsbGVyeV9fdmlldycpLmFkZENsYXNzKCdzaG93Jyk7XG5cdFx0fSwgMzAwKVxuXG5cdFx0JCgnLm1vZGFsX3ZpZXcgLm1vZGFsX19nYWxsZXJ5IGltZycpLmF0dHIoJ3NyYycsc3JjKTtcblx0fSk7XG5cblx0JCgnLmdhbGxlcnlfX2l0ZW1zIGxpJykuZmlyc3QoKS50cmlnZ2VyKCdjbGljaycpO1xuXG5cdGlmICgkKCcuZ2FsbGVyeV9faXRlbXMnKS5jaGlsZHJlbigpLmxlbmd0aCA8PSAxKSB7XG5cdFx0JCgnLm1vZGFsX3ZpZXcgLm1vZGFsX19uYXYnKS5oaWRlKCk7XG5cdH1cblxuXHQvLyDQotCw0LHRi1xuXHQkKCcudGFicyBsaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cblx0XHQkKCdbZGF0YS10YWJdJykuaGlkZSgpO1xuXG5cdFx0dmFyIHRhYiA9ICQoJ1tkYXRhLXRhYj1cIicrJCh0aGlzKS5pbmRleCgpKydcIl0nKS5nZXQoMCk7XG5cblx0XHRpZiAodGFiLnRhZ05hbWUgPT09ICdGT1JNJykge1xuXHRcdFx0JCh0YWIpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGFiKS5zaG93KCk7XG5cdFx0fVxuXG5cdH0pO1xuXG5cdCQoJy50YWJzJykuZWFjaChmdW5jdGlvbihpLCB0YWJzKSB7XG5cdFx0JCh0YWJzKS5maW5kKCdsaScpLmZpcnN0KCkudHJpZ2dlcignY2xpY2snKTtcblx0fSlcblxuXHQvLyDQkdC+0LrQvtCy0L7QtSDQvNC10L3RjiDQsiDQutCw0YLQsNC70L7Qs9C1XG5cdCQoJy5zaWRlbmF2X19pdGVtX2Ryb3AgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdCQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ3NpZGVuYXZfX2l0ZW1fc2hvdycpO1xuXHR9KTtcblxuXHQvLyDQn9C+0LvQt9GD0L3QvtC6XG5cdCQoJy5yYW5nZSBpbnB1dCcpLmlvblJhbmdlU2xpZGVyKCk7XG5cblx0Ly8g0KDQsNC00LjQvlxuXHRmdW5jdGlvbiByYWRpb1dvcmsocmFkaW8pIHtcblx0XHR2YXIgbmFtZSA9ICQocmFkaW8pLmF0dHIoJ25hbWUnKTtcblxuXHRcdCQoJy5yYWRpbyBpbnB1dFtuYW1lPScrbmFtZSsnXScpLmNsb3Nlc3QoJy5yYWRpbycpLnJlbW92ZUNsYXNzKCdyYWRpb19hY3RpdmUnKTtcblx0XHQkKHJhZGlvKS5jbG9zZXN0KCcucmFkaW8nKS5hZGRDbGFzcygncmFkaW9fYWN0aXZlJyk7XG5cdH1cblxuXHQkKCcucmFkaW8gaW5wdXQ6Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24oaSwgcmFkaW8pIHtcblx0XHRyYWRpb1dvcmsocmFkaW8pO1xuXHR9KTtcblxuXHQkKCcucmFkaW8nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgcmFkaW8gPSAkKHRoaXMpLmZpbmQoJ2lucHV0JykuZ2V0KDApO1xuXG5cdFx0cmFkaW9Xb3JrKHJhZGlvKTtcblx0fSk7XG5cblx0Ly8g0JzQvtC00LDQu9C60LhcblxuXHQkKCdbZGF0YS1tb2RhbF0nKS5pemlNb2RhbCgpO1xuXG5cdCQoJy5tb2RhbF9fbmF2LCAubW9kYWxfX2Nsb3NlJykuZWFjaChmdW5jdGlvbihpLCBuYXYpIHtcblx0XHR2YXIgbW9kYWwgPSAkKG5hdikuY2xvc2VzdCgnLm1vZGFsJyk7XG5cblx0XHQkKG1vZGFsKS5hcHBlbmQobmF2KTtcblx0fSlcblxuXHQkKCdbZGF0YS1vcGVuXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2YXIgbSA9ICQodGhpcykuZGF0YSgnb3BlbicpLFxuXHRcdFx0XHRtb2RhbCA9ICQoJ1tkYXRhLW1vZGFsPVwiJyttKydcIl0nKSxcblx0XHRcdFx0Z2FsbGVyeSA9ICQodGhpcykuY2xvc2VzdCgnLmdhbGxlcnknKTtcblxuXHRcdC8vINC/0YDQtdCy0YzRjlxuXG5cdFx0aWYgKG0gPT09ICd2aWV3Jykge1xuXHRcdFx0dmFyIGltZyA9ICQodGhpcykuZmluZCgnaW1nJykuY2xvbmUoKTtcblxuXHRcdFx0JChtb2RhbCkuZmluZCgnLm1vZGFsX19nYWxsZXJ5JykuaHRtbChpbWcpO1xuXHRcdFx0JCgnLmdhbGxlcnlfX3ZpZXcnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG5cblx0XHRcdCQoJy5tb2RhbF9fbmF2IC5hcnJvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdHZhciBhY3RpdmUgPSAkKGdhbGxlcnkpLmZpbmQoJy5hY3RpdmUnKTtcblxuXHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYXJyb3dfcHJldicpKSB7XG5cdFx0XHRcdFx0dmFyIHByZXYgPSAkKGFjdGl2ZSkucHJldigpLmdldCgwKTtcblxuXHRcdFx0XHRcdGlmICghcHJldikge1xuXHRcdFx0XHRcdFx0cHJldiA9ICQoZ2FsbGVyeSkuZmluZCgnLmdhbGxlcnlfX2l0ZW1zJykuY2hpbGRyZW4oKS5sYXN0KCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0JChhY3RpdmUpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkKHByZXYpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgbmV4dCA9ICQoYWN0aXZlKS5uZXh0KCkuZ2V0KDApO1xuXG5cdFx0XHRcdFx0aWYgKCFuZXh0KSB7XG5cdFx0XHRcdFx0XHRuZXh0ID0gJChnYWxsZXJ5KS5maW5kKCcuZ2FsbGVyeV9faXRlbXMnKS5jaGlsZHJlbigpLmZpcnN0KCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0JChhY3RpdmUpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHQkKG5leHQpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0JChtb2RhbCkuaXppTW9kYWwoJ29wZW4nKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbG9zZWQnLCAnW2RhdGEtbW9kYWxdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJCgnLmdhbGxlcnlfX3ZpZXcuaGlkZGVuJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuXHRcdFx0XHQkKCcubW9kYWxfX25hdiAuYXJyb3cnKS5vZmYoKTtcbiAgICB9KTtcblxuXG5cdH0pXG5cblx0Ly8g0KHQtdGC0LrQsFxuXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0JCgnLmdyaWQnKS5tYXNvbnJ5KHtcblx0XHRcdGl0ZW1TZWxlY3RvcjogJy5ncmlkX19pdGVtJyxcblx0XHRcdGd1dHRlcjogMTksXG5cdFx0XHRob3Jpem9udGFsT3JkZXI6IHRydWVcblx0XHR9KTtcblx0fSwgMTAwKVxuXG5cdC8vIGxvb2tib29rXG5cblx0ZnVuY3Rpb24gbGtBY3RpdmUocG9pbnQpIHtcblx0XHR2YXIgZGF0YSA9ICQocG9pbnQpLmRhdGEoJ2l0ZW0nKSxcblx0XHRcdFx0Y2FyZCA9ICQocG9pbnQpLmNsb3Nlc3QoJy5sb29rYm9vaycpLmZpbmQoJy5sb29rYm9va19fbGlzdCAuY2FyZFtkYXRhLWl0ZW09XCInK2RhdGErJ1wiXScpO1xuXG5cdFx0JChwb2ludCkuc2libGluZ3MoJy5wb2ludCcpLmFkZENsYXNzKCdwb2ludF9kaXNhYmxlJyk7XG5cdFx0JChjYXJkKS5yZW1vdmVDbGFzcygnY2FyZF9kaXNhYmxlJyk7XG5cdFx0JChjYXJkKS5zaWJsaW5ncygpLmFkZENsYXNzKCdjYXJkX2Rpc2FibGUnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxrRGlzYWJsZShwb2ludCkge1xuXHRcdCQocG9pbnQpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3BvaW50X2Rpc2FibGUnKTtcblx0XHQkKHBvaW50KS5jbG9zZXN0KCcubG9va2Jvb2snKS5maW5kKCcuY2FyZF9kaXNhYmxlJykucmVtb3ZlQ2xhc3MoJ2NhcmRfZGlzYWJsZScpO1xuXHR9XG5cblx0JCgnLnBvaW50JykuaG92ZXIoZnVuY3Rpb24oKSB7XG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcucG9pbnRfYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ3BvaW50X2FjdGl2ZScpLnNpYmxpbmdzKCcucG9pbnRfZGlzYWJsZScpLnJlbW92ZUNsYXNzKCdwb2ludF9kaXNhYmxlJyk7XG5cdFx0bGtBY3RpdmUodGhpcyk7XG5cdH0sIGZ1bmN0aW9uKCkge1xuXHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdwb2ludF9hY3RpdmUnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsa0Rpc2FibGUodGhpcyk7XG5cdH0pXG5cblx0JCgnLnBvaW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0JCh0aGlzKS5hZGRDbGFzcygncG9pbnRfYWN0aXZlJyk7XG5cdFx0bGtBY3RpdmUodGhpcyk7XG5cdH0pO1xuXG5cdCQoJy5sb29rYm9va19fbGlzdCAuY2FyZCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xuXHRcdFx0JCh0aGlzKS5zaWJsaW5ncygpLmFkZENsYXNzKCdjYXJkX2Rpc2FibGUnKTtcblx0XHRcdHZhciBkID0gJCh0aGlzKS5kYXRhKCdpdGVtJyk7XG5cdFx0XHQkKCcucG9pbnRbZGF0YS1pdGVtPScrZCsnXScpLmFkZENsYXNzKCdwb2ludF9hY3RpdmUnKTtcblx0fSwgZnVuY3Rpb24oKSB7XG5cdFx0JCgnLmxvb2tib29rX19saXN0IC5jYXJkJykucmVtb3ZlQ2xhc3MoJ2NhcmRfZGlzYWJsZScpO1xuXHRcdCQoJy5wb2ludF9hY3RpdmUnKS5yZW1vdmVDbGFzcygncG9pbnRfYWN0aXZlJyk7XG5cdH0pO1xuXG5cdC8vINCa0LDRgNGC0L7Rh9C60LAg0LDQtNCw0L/RgtC40LJcblxuXHRmdW5jdGlvbiBjYXJkQWRhcHRpdmUoKSB7XG5cdFx0dmFyIHcgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuXHRcdGlmICh3IDw9IDEwMDApIHtcblx0XHRcdGlmICghJCgnLmluZm9fdmVydGljYWwnKS5nZXQoMCkpIHtcblx0XHRcdFx0JChcIi5pbmZvXCIpLnVuc3RpY2soKS5yZW1vdmVDbGFzcygnaW5mb19zdGljaycpO1xuXHRcdFx0XHQkKCcuaW5mbycpLmluc2VydEFmdGVyKCcuZ2FsbGVyeScpO1xuXHRcdFx0XHQkKCcuYy1wYWdlX19pbmZvJykuZW1wdHkoKTtcblx0XHRcdFx0JCgnLmluZm8nKS5yZW1vdmVDbGFzcygnaW5mb19ob3Jpem9udGFsJykuYWRkQ2xhc3MoJ2luZm9fdmVydGljYWwnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCEkKCcuaW5mb19ob3Jpem9udGFsJykuZ2V0KDApKSB7XG5cdFx0XHRcdCQoJy5jLXBhZ2VfX2luZm8nKS5hcHBlbmQoJCgnLmluZm8nKSk7XG5cdFx0XHRcdCQoJy5pbmZvJykucmVtb3ZlQ2xhc3MoJ2luZm9fdmVydGljYWwnKS5hZGRDbGFzcygnaW5mb19ob3Jpem9udGFsJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2FyZEFkYXB0aXZlKCk7XG5cdCQod2luZG93KS5vbigncmVzaXplJywgY2FyZEFkYXB0aXZlKTtcblxuXHQvLyDQnNC10L3RjlxuXG5cdCQoJy5tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdCQodGhpcykuY2xvc2VzdCgnLmhlYWRlcicpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfc2hvdy1tZW51Jylcblx0fSlcblxuXHQvLyDQk9C+0YDQvtC0XG5cblx0JCgnLmNpdHlfX2N1cnJlbnQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0JCgnLmNpdHknKS50b2dnbGVDbGFzcygnY2l0eV9zaG93Jyk7XG5cdH0pXG5cblx0Ly8gbG9va2Jvb2sgZWRpdG9yXG5cblx0ZnVuY3Rpb24gZ2V0Q29vcmRzKGVsZW0pIHtcblx0ICByZXR1cm4ge1xuXHQgICAgdG9wOiBlbGVtLm9mZnNldFRvcCxcblx0ICAgIGxlZnQ6IGVsZW0ub2Zmc2V0TGVmdFxuXHQgIH07XG5cdH1cblxuXHR2YXIgcG9pbnQgPSAkKCcucG9pbnRfbW92ZScpLmdldCgwKSxcblx0XHRcdGFyZWEgPSAkKCcubG9va2Jvb2tfX3NldCBpbWcnKSxcblx0XHRcdGFyZWFCb3JkZXJzID0ge1xuXHRcdFx0XHR0b3A6ICQoYXJlYSkuaGVpZ2h0KCkgLSAyNCxcblx0XHRcdFx0bGVmdDogJChhcmVhKS53aWR0aCgpIC0gMjRcblx0XHRcdH07XG5cblx0JChwb2ludCkub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2YXIgY29vcmRzID0gZ2V0Q29vcmRzKHBvaW50KSxcblx0XHRcdFx0c2hpZnRYID0gZS5wYWdlWCAtIGNvb3Jkcy5sZWZ0LFxuICBcdFx0XHRzaGlmdFkgPSBlLnBhZ2VZIC0gY29vcmRzLnRvcDtcblxuXHQgIG1vdmVBdChlKTtcblxuXHQgIHBvaW50LnN0eWxlLnpJbmRleCA9IDEwMDA7IC8vINC90LDQtCDQtNGA0YPQs9C40LzQuCDRjdC70LXQvNC10L3RgtCw0LzQuFxuXG5cdFx0ZnVuY3Rpb24gbW92ZUF0KGUpIHtcblx0XHRcdHZhciB0b3AgPSBlLnBhZ2VZIC0gc2hpZnRZLFxuXHRcdFx0XHRcdGxlZnQgPSBlLnBhZ2VYIC0gc2hpZnRYO1xuXG5cdFx0XHRpZiAobGVmdCA+PSBhcmVhQm9yZGVycy5sZWZ0KSB7XG5cdFx0XHRcdGxlZnQgPSBhcmVhQm9yZGVycy5sZWZ0XG5cdFx0XHR9IGVsc2UgaWYgKGxlZnQgPD0gMCl7XG5cdFx0XHRcdGxlZnQgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodG9wIDw9IDApIHtcblx0XHRcdFx0dG9wID0gMDtcblx0XHRcdH0gZWxzZSBpZiAodG9wID49IGFyZWFCb3JkZXJzLnRvcCkge1xuXHRcdFx0XHR0b3AgPSBhcmVhQm9yZGVycy50b3Bcblx0XHRcdH1cblxuXHQgICAgcG9pbnQuc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuXHQgICAgcG9pbnQuc3R5bGUudG9wID0gdG9wICArICdweCc7XG5cblx0XHRcdCQoJ1tkYXRhLWNvb3Jkc10nKS5lYWNoKGZ1bmN0aW9uKGksIGZpZWxkKSB7XG5cdFx0XHRcdHZhciBjb29yZHMgPSAkKHRoaXMpLmRhdGEoJ2Nvb3JkcycpLFxuXHRcdFx0XHRcdFx0aW5wdXQgPSAkKHRoaXMpLmZpbmQoJ2lucHV0Jyk7XG5cblx0XHRcdFx0c3dpdGNoIChjb29yZHMpIHtcblx0XHRcdFx0XHRjYXNlICd0b3AnOlxuXHRcdFx0XHRcdFx0JChpbnB1dCkudmFsKHRvcCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdsZWZ0Jzpcblx0XHRcdFx0XHRcdCQoaW5wdXQpLnZhbChsZWZ0KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0ICB9XG5cblx0XHRkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uKGUpIHtcblx0ICAgIG1vdmVBdChlKTtcblx0ICB9O1xuXG5cdCAgcG9pbnQub25tb3VzZXVwID0gZnVuY3Rpb24oKSB7XG5cdCAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XG5cdCAgICBwb2ludC5vbm1vdXNldXAgPSBudWxsO1xuXHQgIH07XG5cblx0XHRwb2ludC5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uKCkge1xuXHRcdCAgcmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdH0pXG5cblx0Ly8g0JjQvdGE0L4g0LIg0LrQsNGA0YLQvtGH0LrQtVxuXG5cdGZ1bmN0aW9uIGluZm9TdGljaygpIHtcblx0XHRpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDAwKSB7XG5cdFx0XHRpZiAoJCgnLmluZm8nKS5oYXNDbGFzcygnaW5mb19zdGljaycpKSB7XG5cdFx0XHRcdCQoJy5pbmZvJykuc3RpY2t5KCd1cGRhdGUnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJy5pbmZvJykuc3RpY2t5KHtcblx0XHRcdFx0XHR0b3BTcGFjaW5nOiAyMCxcblx0XHRcdFx0XHRib3R0b21TcGFjaW5nOiAkKCcucGFnZV9fd3JhcHBlcicpLmhlaWdodCgpIC0gJCgnLmMtcGFnZV9fbWFpbicpLmhlaWdodCgpICsgJCgnLmZvb3RlcicpLmhlaWdodCgpXG5cdFx0XHRcdH0pLmFkZENsYXNzKCdpbmZvX3N0aWNrJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCBpbmZvU3RpY2spO1xuXHRpbmZvU3RpY2soKTtcblxuXG5cblxuXHQkKCcubGtfX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHQkKCcubG9va2Jvb2tfX3NldCcpLnN0aWNreSgpXG5cdH0pO1xuXG5cdCQoJy5wYWdlX19zaWRlLW5hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykubmV4dCgnLnNpZGVuYXYnKS50b2dnbGUoKTtcblx0fSlcblxuXG59KSh3aW5kb3cpO1xuIl19
