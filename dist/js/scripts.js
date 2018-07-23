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
        // const mapAdjustion = () => {
        //     if (window.innerWidth > 765) {
        //         $culturalSecion.height(Math.min(200 + $(".cultural .map img").height(), 400));
        //     } else {
        //         $culturalSecion.height("auto");
        //     }
        //     borderAdjust();
        // };

        var switchSize = function switchSize() {
            // mapAdjustion();
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
        // mapAdjustion();
        $('.nav-toggle').on('click', toggleSidNav);
        //scroll down
        $('.scroll-down a').on('click', function (e) {
            e.preventDefault();
            $(".content").animate({
                scrollTop: $(window).height()
            }, 1000);
        });
        // resize on last img load
        $("img").eq(-1).on("load", function () {
            switchSize();
        });
    });
})(window, jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsid2luZG93IiwiJCIsIiRoZWFkZXIiLCIkY3VsdHVyYWxTZWNpb24iLCIkc2lkZW5hdiIsIiRhc2lkZSIsIiRtYWluSGVhZGVyIiwiaGVhZGVyRGltIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJwYXJlbnQiLCJhcHBlbmQiLCJib3JkZXJBZGp1c3QiLCJzZWN0aW9uc1BhZGRpbmciLCJjc3MiLCJzbGljZSIsImVhY2giLCJpIiwiZWwiLCJkaXN0YW5zZSIsImZpbmQiLCJwYXJlbnRzVW50aWwiLCJlcSIsImlubmVyV2lkdGgiLCJNYXRoIiwibWF4Iiwic2libGluZ3MiLCJmaWx0ZXIiLCJzd2l0Y2hTaXplIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwib24iLCJ0b2dnbGVTaWROYXYiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsVUFBVUEsTUFBVixFQUFrQkMsQ0FBbEIsRUFBcUI7QUFDbEJBLE1BQUUsWUFBWTtBQUNWLFlBQU1DLFVBQVVELEVBQUUsZ0JBQUYsQ0FBaEI7QUFDQSxZQUFNRSxrQkFBa0JGLEVBQUUsZ0JBQUYsQ0FBeEI7QUFDQSxZQUFNRyxXQUFXSCxFQUFFLFVBQUYsQ0FBakI7QUFDQSxZQUFNSSxTQUFTSixFQUFFLE9BQUYsQ0FBZjtBQUNBLFlBQU1LLGNBQWNMLEVBQUUsY0FBRixDQUFwQjtBQUNBLFlBQU1NLFlBQVksU0FBWkEsU0FBWSxHQUFNO0FBQ3BCTCxvQkFBUU0sTUFBUixDQUFlUixPQUFPUyxXQUF0QjtBQUNILFNBRkQ7O0FBSUFGO0FBQ0E7QUFDQU4sVUFBRSxjQUFGLEVBQWtCUyxNQUFsQixHQUNLQyxNQURMLENBQ1k7QUFBQSxtQkFBS1YsOEVBQUw7QUFBQSxTQURaO0FBRUEsWUFBTVcsZUFBZSxTQUFmQSxZQUFlLEdBQU07QUFDdkIsZ0JBQU1DLGtCQUFrQixD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QixNQW5GSCxFQW1GV3NDLE1BbkZYIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKHdpbmRvdywgJCkge1xyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgJGhlYWRlciA9ICQoJy5jYXJvdXNlbC1pdGVtJyk7XHJcbiAgICAgICAgY29uc3QgJGN1bHR1cmFsU2VjaW9uID0gJChcIi5jdWx0dXJhbCAucm93XCIpO1xyXG4gICAgICAgIGNvbnN0ICRzaWRlbmF2ID0gJCgnLnNpZGVuYXYnKTtcclxuICAgICAgICBjb25zdCAkYXNpZGUgPSAkKFwiYXNpZGVcIik7XHJcbiAgICAgICAgY29uc3QgJG1haW5IZWFkZXIgPSAkKCcubWFpbi1oZWFkZXInKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJEaW0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICRoZWFkZXIuaGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBoZWFkZXJEaW0oKTtcclxuICAgICAgICAvLyBhZGRpbmcgc2tldyBpbWcgbGluZVxyXG4gICAgICAgICQoJy5za2V3LWhvbGRlcicpLnBhcmVudCgpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXyA9PiAkKGA8ZGl2IGNsYXNzPVwic2tldy1ib3JkZXItdG9wXCI+PC9kaXY+PGRpdiBjbGFzcz1cInNrZXctYm9yZGVyLWJvdHRvbVwiPjwvZGl2PmApKTtcclxuICAgICAgICBjb25zdCBib3JkZXJBZGp1c3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25zUGFkZGluZyA9ICskKCcuc3VwcG9ydCcpLmNzcyhcInBhZGRpbmdcIikuc2xpY2UoMCwgMik7XHJcbiAgICAgICAgICAgICQoXCIuc2tldy1ib3JkZXItdG9wXCIpLmVhY2goKGksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuc2UgPSAkKGVsKS5wYXJlbnQoKS5maW5kKCcuaW1nLWZsdWlkJykuaGVpZ2h0KCkgLyA0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9ICQoZWwpLnBhcmVudHNVbnRpbChcInNlY3Rpb25cIikuZXEoMSkuaGVpZ2h0KCkgLyAyICsgc2VjdGlvbnNQYWRkaW5nIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChlbCkuaGVpZ2h0KGhlaWdodCAtIGRpc3RhbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGVsKS5oZWlnaHQoTWF0aC5tYXgoaGVpZ2h0IC8gMiAtIDIgKiBkaXN0YW5zZSwgMzApKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoZWwpLnNpYmxpbmdzKCkuZmlsdGVyKFwiLnNrZXctYm9yZGVyLWJvdHRvbVwiKS5oZWlnaHQoaGVpZ2h0IC0gZGlzdGFuc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfTtcclxuICAgICAgICBib3JkZXJBZGp1c3QoKTtcclxuICAgICAgICAvLyB0aGUgY3VsdHVyYWxcclxuICAgICAgICAvLyBjb25zdCBtYXBBZGp1c3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2NSkge1xyXG4gICAgICAgIC8vICAgICAgICAgJGN1bHR1cmFsU2VjaW9uLmhlaWdodChNYXRoLm1pbigyMDAgKyAkKFwiLmN1bHR1cmFsIC5tYXAgaW1nXCIpLmhlaWdodCgpLCA0MDApKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICRjdWx0dXJhbFNlY2lvbi5oZWlnaHQoXCJhdXRvXCIpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGJvcmRlckFkanVzdCgpO1xyXG4gICAgICAgIC8vIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHN3aXRjaFNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIG1hcEFkanVzdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRpc2sgdG9wXHJcbiAgICAgICAgICAgICAgICBpZiAoISRtYWluSGVhZGVyLmhhc0NsYXNzKCdoaWRkZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtYWluSGVhZGVyLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2lkZW5hdi5yZW1vdmVDbGFzcyhcIm5hbm9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5icmFuZC1ob2xkZXJcIikuYXBwZW5kKCQoXCIuYnJhbmQtaGVhZGluZ1wiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJG1haW5IZWFkZXIucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAkc2lkZW5hdi5hZGRDbGFzcyhcIm5hbm9cIik7XHJcbiAgICAgICAgICAgICAgICAkbWFpbkhlYWRlci5maW5kKFwiLmJyYW5kXCIpLmFwcGVuZCgkKCcuYnJhbmQtaGVhZGluZycpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHN3aXRjaFNpemUoKTtcclxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHN3aXRjaFNpemUpO1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZVNpZE5hdiA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKCRhc2lkZS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgJGFzaWRlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRhc2lkZS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBtYXBBZGp1c3Rpb24oKTtcclxuICAgICAgICAkKCcubmF2LXRvZ2dsZScpLm9uKCdjbGljaycsIHRvZ2dsZVNpZE5hdik7XHJcbiAgICAgICAgLy9zY3JvbGwgZG93blxyXG4gICAgICAgICQoJy5zY3JvbGwtZG93biBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKFwiLmNvbnRlbnRcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQod2luZG93KS5oZWlnaHQoKVxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gcmVzaXplIG9uIGxhc3QgaW1nIGxvYWRcclxuICAgICAgICAkKFwiaW1nXCIpLmVxKC0xKS5vbihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzd2l0Y2hTaXplKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0pKHdpbmRvdywgalF1ZXJ5KTtcclxuIl19
