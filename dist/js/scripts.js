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

        // heading adjectment
        function SectionHeading() {
            $('.label').each(function (i, el) {
                var $el = $(el);
                if (i !== 0) $el.width($el.siblings('h2').width());
            });
        }

        SectionHeading();
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
        // called by window resize event
        var switchSize = function switchSize() {
            // mapAdjustion();
            SectionHeading();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsid2luZG93IiwiJCIsIiRoZWFkZXIiLCIkY3VsdHVyYWxTZWNpb24iLCIkc2lkZW5hdiIsIiRhc2lkZSIsIiRtYWluSGVhZGVyIiwiaGVhZGVyRGltIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJTZWN0aW9uSGVhZGluZyIsImVhY2giLCJpIiwiZWwiLCIkZWwiLCJ3aWR0aCIsInNpYmxpbmdzIiwicGFyZW50IiwiYXBwZW5kIiwiYm9yZGVyQWRqdXN0Iiwic2VjdGlvbnNQYWRkaW5nIiwiY3NzIiwic2xpY2UiLCJkaXN0YW5zZSIsImZpbmQiLCJwYXJlbnRzVW50aWwiLCJlcSIsImlubmVyV2lkdGgiLCJNYXRoIiwibWF4IiwiZmlsdGVyIiwic3dpdGNoU2l6ZSIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIm9uIiwidG9nZ2xlU2lkTmF2IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFVBQVVBLE1BQVYsRUFBa0JDLENBQWxCLEVBQXFCO0FBQ2xCQSxNQUFFLFlBQVk7QUFDVixZQUFNQyxVQUFVRCxFQUFFLGdCQUFGLENBQWhCO0FBQ0EsWUFBTUUsa0JBQWtCRixFQUFFLGdCQUFGLENBQXhCO0FBQ0EsWUFBTUcsV0FBV0gsRUFBRSxVQUFGLENBQWpCO0FBQ0EsWUFBTUksU0FBU0osRUFBRSxPQUFGLENBQWY7QUFDQSxZQUFNSyxjQUFjTCxFQUFFLGNBQUYsQ0FBcEI7QUFDQSxZQUFNTSxZQUFZLFNBQVpBLFNBQVksR0FBTTtBQUNwQkwsb0JBQVFNLE1BQVIsQ0FBZVIsT0FBT1MsV0FBdEI7QUFDSCxTQUZEOztBQUlBRjs7QUFFQTtBQUNBLGlCQUFTRyxjQUFULEdBQTBCO0FBQ3RCVCxjQUFFLFFBQUYsRUFBWVUsSUFBWixDQUFpQixVQUFDQyxDQUFELEVBQUlDLEVBQUosRUFBVztBQUN4QixvQkFB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dUIsT0FBdkIsRUFBZ0MsVUFBVUUsQ0FBVixFQUFhO0FBQ3pDQSxjQUFFQyxjQUFGO0FBQ0FyQyxjQUFFLFVBQUYsRUFBY3NDLE9BQWQsQ0FBc0I7QUFDbEJDLDJCQUFXdkMsRUFBRUQsTUFBRixFQUFVUSxNQUFWO0FBRE8sYUFBdEIsRUFFRyxJQUZIO0FBR0gsU0FMRDs7QUFRQTtBQUNBUCxVQUFFLEtBQUYsRUFBU3lCLEVBQVQsQ0FBWSxDQUFDLENBQWIsRUFBZ0JTLEVBQWhCLENBQW1CLE1BQW5CLEVBQTJCLFlBQVk7QUFDbkNKO0FBQ0gsU0FGRDtBQUdILEtBakdEO0FBa0dILENBbkdELEVBbUdHL0IsTUFuR0gsRUFtR1d5QyxNQW5HWCIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICh3aW5kb3csICQpIHtcclxuICAgICQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0ICRoZWFkZXIgPSAkKCcuY2Fyb3VzZWwtaXRlbScpO1xyXG4gICAgICAgIGNvbnN0ICRjdWx0dXJhbFNlY2lvbiA9ICQoXCIuY3VsdHVyYWwgLnJvd1wiKTtcclxuICAgICAgICBjb25zdCAkc2lkZW5hdiA9ICQoJy5zaWRlbmF2Jyk7XHJcbiAgICAgICAgY29uc3QgJGFzaWRlID0gJChcImFzaWRlXCIpO1xyXG4gICAgICAgIGNvbnN0ICRtYWluSGVhZGVyID0gJCgnLm1haW4taGVhZGVyJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyRGltID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAkaGVhZGVyLmhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaGVhZGVyRGltKCk7XHJcblxyXG4gICAgICAgIC8vIGhlYWRpbmcgYWRqZWN0bWVudFxyXG4gICAgICAgIGZ1bmN0aW9uIFNlY3Rpb25IZWFkaW5nKCkge1xyXG4gICAgICAgICAgICAkKCcubGFiZWwnKS5lYWNoKChpLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gMClcclxuICAgICAgICAgICAgICAgICAgICAkZWwud2lkdGgoJGVsLnNpYmxpbmdzKCdoMicpLndpZHRoKCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgU2VjdGlvbkhlYWRpbmcoKTtcclxuICAgICAgICAvLyBhZGRpbmcgc2tldyBpbWcgbGluZVxyXG4gICAgICAgICQoJy5za2V3LWhvbGRlcicpLnBhcmVudCgpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXyA9PiAkKGA8ZGl2IGNsYXNzPVwic2tldy1ib3JkZXItdG9wXCI+PC9kaXY+PGRpdiBjbGFzcz1cInNrZXctYm9yZGVyLWJvdHRvbVwiPjwvZGl2PmApKTtcclxuICAgICAgICBjb25zdCBib3JkZXJBZGp1c3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25zUGFkZGluZyA9ICskKCcuc3VwcG9ydCcpLmNzcyhcInBhZGRpbmdcIikuc2xpY2UoMCwgMik7XHJcbiAgICAgICAgICAgICQoXCIuc2tldy1ib3JkZXItdG9wXCIpLmVhY2goKGksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuc2UgPSAkKGVsKS5wYXJlbnQoKS5maW5kKCcuaW1nLWZsdWlkJykuaGVpZ2h0KCkgLyA0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9ICQoZWwpLnBhcmVudHNVbnRpbChcInNlY3Rpb25cIikuZXEoMSkuaGVpZ2h0KCkgLyAyICsgc2VjdGlvbnNQYWRkaW5nIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChlbCkuaGVpZ2h0KGhlaWdodCAtIGRpc3RhbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGVsKS5oZWlnaHQoTWF0aC5tYXgoaGVpZ2h0IC8gMiAtIDIgKiBkaXN0YW5zZSwgMzApKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoZWwpLnNpYmxpbmdzKCkuZmlsdGVyKFwiLnNrZXctYm9yZGVyLWJvdHRvbVwiKS5oZWlnaHQoaGVpZ2h0IC0gZGlzdGFuc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfTtcclxuICAgICAgICBib3JkZXJBZGp1c3QoKTtcclxuICAgICAgICAvLyB0aGUgY3VsdHVyYWxcclxuICAgICAgICAvLyBjb25zdCBtYXBBZGp1c3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2NSkge1xyXG4gICAgICAgIC8vICAgICAgICAgJGN1bHR1cmFsU2VjaW9uLmhlaWdodChNYXRoLm1pbigyMDAgKyAkKFwiLmN1bHR1cmFsIC5tYXAgaW1nXCIpLmhlaWdodCgpLCA0MDApKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICRjdWx0dXJhbFNlY2lvbi5oZWlnaHQoXCJhdXRvXCIpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGJvcmRlckFkanVzdCgpO1xyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gY2FsbGVkIGJ5IHdpbmRvdyByZXNpemUgZXZlbnRcclxuICAgICAgICBjb25zdCBzd2l0Y2hTaXplID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBtYXBBZGp1c3Rpb24oKTtcclxuICAgICAgICAgICAgU2VjdGlvbkhlYWRpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY1KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkaXNrIHRvcFxyXG4gICAgICAgICAgICAgICAgaWYgKCEkbWFpbkhlYWRlci5oYXNDbGFzcygnaGlkZGVuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWFpbkhlYWRlci5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNpZGVuYXYucmVtb3ZlQ2xhc3MoXCJuYW5vXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYnJhbmQtaG9sZGVyXCIpLmFwcGVuZCgkKFwiLmJyYW5kLWhlYWRpbmdcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJG1haW5IZWFkZXIucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAkc2lkZW5hdi5hZGRDbGFzcyhcIm5hbm9cIik7XHJcbiAgICAgICAgICAgICAgICAkbWFpbkhlYWRlci5maW5kKFwiLmJyYW5kXCIpLmFwcGVuZCgkKCcuYnJhbmQtaGVhZGluZycpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzd2l0Y2hTaXplKCk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgc3dpdGNoU2l6ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZVNpZE5hdiA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKCRhc2lkZS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgJGFzaWRlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRhc2lkZS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBtYXBBZGp1c3Rpb24oKTtcclxuICAgICAgICAkKCcubmF2LXRvZ2dsZScpLm9uKCdjbGljaycsIHRvZ2dsZVNpZE5hdik7XHJcbiAgICAgICAgLy9zY3JvbGwgZG93blxyXG4gICAgICAgICQoJy5zY3JvbGwtZG93biBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKFwiLmNvbnRlbnRcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQod2luZG93KS5oZWlnaHQoKVxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gcmVzaXplIG9uIGxhc3QgaW1nIGxvYWRcclxuICAgICAgICAkKFwiaW1nXCIpLmVxKC0xKS5vbihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzd2l0Y2hTaXplKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0pKHdpbmRvdywgalF1ZXJ5KTtcclxuIl19
