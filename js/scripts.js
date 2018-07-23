'use strict';

(function (window, $) {
    $(function () {
        var $header = $('.carousel-item');
        var $culturalSecion = $(".cultural .row");
        var $sidenav = $('.sidenav');
        var $aside = $("aside");
        var $mainHeader = $('.main-header');
        var headerDim = function headerDim() {
            $header.height(window.innerHeight);
        };

        headerDim();
        // adding skew img line
        $('.skew-holder').parent().append(function (_) {
            return $('<div class="skew-border-top"></div><div class="skew-border-bottom"></div>');
        });
        var borderAdjust = function borderAdjust() {
            var sectionsPadding = +$('.support').css("padding").slice(0, 2);
            $(".skew-border-top").each(function (i, el) {
                var distanse = $(el).parent().find('.img-fluid').height() / 4;
                var height = $(el).parentsUntil("section").eq(1).height() / 2 + sectionsPadding / 2;
                if (window.innerWidth > 765) {
                    $(el).height(height - distanse);
                } else {
                    $(el).height(Math.max(height / 2 - 2 * distanse, 30));
                }

                $(el).siblings().filter(".skew-border-bottom").height(height - distanse);
            });
        };
        borderAdjust();
        // the cultural
        var mapAdjustion = function mapAdjustion() {
            if (window.innerWidth > 765) {
                $culturalSecion.height(Math.min(200 + $(".cultural .map img").height(), 400));
            } else {
                $culturalSecion.height("auto");
            }
            borderAdjust();
        };

        var switchSize = function switchSize() {
            mapAdjustion();
            if (window.innerWidth > 765) {
                // disk top
                if (!$mainHeader.hasClass('hidden')) {
                    $mainHeader.addClass('hidden');
                    $sidenav.removeClass("nano");
                    $(".brand-holder").append($(".brand-heading"));
                }
            } else {
                $mainHeader.removeClass("hidden");
                $sidenav.addClass("nano");
                $mainHeader.find(".brand").append($('.brand-heading'));
            }
        };
        switchSize();
        $(window).on('resize', switchSize);
        var toggleSidNav = function toggleSidNav(e) {
            e.preventDefault();
            if ($aside.hasClass("active")) {
                $aside.removeClass("active");
                return;
            }
            $aside.addClass("active");
        };
        mapAdjustion();

        $('.nav-toggle').on('click', toggleSidNav);
    });
})(window, jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsid2luZG93IiwiJCIsIiRoZWFkZXIiLCIkY3VsdHVyYWxTZWNpb24iLCIkc2lkZW5hdiIsIiRhc2lkZSIsIiRtYWluSGVhZGVyIiwiaGVhZGVyRGltIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJwYXJlbnQiLCJhcHBlbmQiLCJib3JkZXJBZGp1c3QiLCJzZWN0aW9uc1BhZGRpbmciLCJjc3MiLCJzbGljZSIsImVhY2giLCJpIiwiZWwiLCJkaXN0YW5zZSIsImZpbmQiLCJwYXJlbnRzVW50aWwiLCJlcSIsImlubmVyV2lkdGgiLCJNYXRoIiwibWF4Iiwic2libGluZ3MiLCJmaWx0ZXIiLCJtYXBBZGp1c3Rpb24iLCJtaW4iLCJzd2l0Y2hTaXplIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwib24iLCJ0b2dnbGVTaWROYXYiLCJlIiwicHJldmVudERlZmF1bHQiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCQyxDQUFsQixFQUFxQjtBQUNsQkEsTUFBRSxZQUFZO0FBQ1YsWUFBTUMsVUFBVUQsRUFBRSxnQkFBRixDQUFoQjtBQUNBLFlBQU1FLGtCQUFrQkYsRUFBRSxnQkFBRixDQUF4QjtBQUNBLFlBQU1HLFdBQVdILEVBQUUsVUFBRixDQUFqQjtBQUNBLFlBQU1JLFNBQVNKLEVBQUUsT0FBRixDQUFmO0FBQ0EsWUFBTUssY0FBY0wsRUFBRSxjQUFGLENBQXBCO0FBQ0EsWUFBTU0sWUFBWSxTQUFaQSxTQUFZLEdBQU07QUFDcEJMLG9CQUFRTSxNQUFSLENBQWVSLE9BQU9TLFdBQXRCO0FBQ0gsU0FGRDs7QUFJQUY7QUFDQTtBQUNBTixVQUFFLGNBQUYsRUFBa0JTLE1BQWxCLEdBQ0tDLE1BREwsQ0FDWTtBQUFBLG1CQUFLViw4RUFBTDtBQUFBLFNBRFo7QUFFQSxZQUFNVyxlQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixnQkFBTUMsa0JBQWtCLENB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clxuICAgICQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0ICRoZWFkZXIgPSAkKCcuY2Fyb3VzZWwtaXRlbScpO1xyXG4gICAgICAgIGNvbnN0ICRjdWx0dXJhbFNlY2lvbiA9ICQoXCIuY3VsdHVyYWwgLnJvd1wiKTtcclxuICAgICAgICBjb25zdCAkc2lkZW5hdiA9ICQoJy5zaWRlbmF2Jyk7XHJcbiAgICAgICAgY29uc3QgJGFzaWRlID0gJChcImFzaWRlXCIpO1xyXG4gICAgICAgIGNvbnN0ICRtYWluSGVhZGVyID0gJCgnLm1haW4taGVhZGVyJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyRGltID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAkaGVhZGVyLmhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaGVhZGVyRGltKCk7XHJcbiAgICAgICAgLy8gYWRkaW5nIHNrZXcgaW1nIGxpbmVcclxuICAgICAgICAkKCcuc2tldy1ob2xkZXInKS5wYXJlbnQoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKF8gPT4gJChgPGRpdiBjbGFzcz1cInNrZXctYm9yZGVyLXRvcFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJza2V3LWJvcmRlci1ib3R0b21cIj48L2Rpdj5gKSk7XHJcbiAgICAgICAgY29uc3QgYm9yZGVyQWRqdXN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uc1BhZGRpbmcgPSArJCgnLnN1cHBvcnQnKS5jc3MoXCJwYWRkaW5nXCIpLnNsaWNlKDAsIDIpO1xyXG4gICAgICAgICAgICAkKFwiLnNrZXctYm9yZGVyLXRvcFwiKS5lYWNoKChpLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbnNlID0gJChlbCkucGFyZW50KCkuZmluZCgnLmltZy1mbHVpZCcpLmhlaWdodCgpIC8gNDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAkKGVsKS5wYXJlbnRzVW50aWwoXCJzZWN0aW9uXCIpLmVxKDEpLmhlaWdodCgpIC8gMiArIHNlY3Rpb25zUGFkZGluZyAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZWwpLmhlaWdodChoZWlnaHQgLSBkaXN0YW5zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChlbCkuaGVpZ2h0KE1hdGgubWF4KGhlaWdodCAvIDIgLSAyICogZGlzdGFuc2UsIDMwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGVsKS5zaWJsaW5ncygpLmZpbHRlcihcIi5za2V3LWJvcmRlci1ib3R0b21cIikuaGVpZ2h0KGhlaWdodCAtIGRpc3RhbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYm9yZGVyQWRqdXN0KCk7XHJcbiAgICAgICAgLy8gdGhlIGN1bHR1cmFsXHJcbiAgICAgICAgY29uc3QgbWFwQWRqdXN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjUpIHtcclxuICAgICAgICAgICAgICAgICRjdWx0dXJhbFNlY2lvbi5oZWlnaHQoTWF0aC5taW4oMjAwICsgJChcIi5jdWx0dXJhbCAubWFwIGltZ1wiKS5oZWlnaHQoKSwgNDAwKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkY3VsdHVyYWxTZWNpb24uaGVpZ2h0KFwiYXV0b1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib3JkZXJBZGp1c3QoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzd2l0Y2hTaXplID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBtYXBBZGp1c3Rpb24oKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY1KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkaXNrIHRvcFxyXG4gICAgICAgICAgICAgICAgaWYgKCEkbWFpbkhlYWRlci5oYXNDbGFzcygnaGlkZGVuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWFpbkhlYWRlci5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNpZGVuYXYucmVtb3ZlQ2xhc3MoXCJuYW5vXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYnJhbmQtaG9sZGVyXCIpLmFwcGVuZCgkKFwiLmJyYW5kLWhlYWRpbmdcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRtYWluSGVhZGVyLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgJHNpZGVuYXYuYWRkQ2xhc3MoXCJuYW5vXCIpO1xyXG4gICAgICAgICAgICAgICAgJG1haW5IZWFkZXIuZmluZChcIi5icmFuZFwiKS5hcHBlbmQoJCgnLmJyYW5kLWhlYWRpbmcnKSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzd2l0Y2hTaXplKCk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBzd2l0Y2hTaXplKTtcclxuICAgICAgICBjb25zdCB0b2dnbGVTaWROYXYgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICgkYXNpZGUuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgICAgICRhc2lkZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkYXNpZGUuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWFwQWRqdXN0aW9uKCk7XHJcblxyXG4gICAgICAgICQoJy5uYXYtdG9nZ2xlJykub24oJ2NsaWNrJywgdG9nZ2xlU2lkTmF2KVxyXG5cclxuICAgIH0pXHJcbn0pKHdpbmRvdywgalF1ZXJ5KTtcclxuIl19
