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
        mapAdjustion();

        $('.nav-toggle').on('click', toggleSidNav);
    });
})(window, jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsid2luZG93IiwiJCIsIiRoZWFkZXIiLCIkY3VsdHVyYWxTZWNpb24iLCIkc2lkZW5hdiIsIiRhc2lkZSIsIiRtYWluSGVhZGVyIiwiaGVhZGVyRGltIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJwYXJlbnQiLCJhcHBlbmQiLCJib3JkZXJBZGp1c3QiLCJzZWN0aW9uc1BhZGRpbmciLCJjc3MiLCJzbGljZSIsImVhY2giLCJpIiwiZWwiLCJkaXN0YW5zZSIsImZpbmQiLCJwYXJlbnRzVW50aWwiLCJlcSIsImlubmVyV2lkdGgiLCJNYXRoIiwibWF4Iiwic2libGluZ3MiLCJmaWx0ZXIiLCJzd2l0Y2hTaXplIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwib24iLCJ0b2dnbGVTaWROYXYiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYXBBZGp1c3Rpb24iLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCQyxDQUFsQixFQUFxQjtBQUNsQkEsTUFBRSxZQUFZO0FBQ1YsWUFBTUMsVUFBVUQsRUFBRSxnQkFBRixDQUFoQjtBQUNBLFlBQU1FLGtCQUFrQkYsRUFBRSxnQkFBRixDQUF4QjtBQUNBLFlBQU1HLFdBQVdILEVBQUUsVUFBRixDQUFqQjtBQUNBLFlBQU1JLFNBQVNKLEVBQUUsT0FBRixDQUFmO0FBQ0EsWUFBTUssY0FBY0wsRUFBRSxjQUFGLENBQXBCO0FBQ0EsWUFBTU0sWUFBWSxTQUFaQSxTQUFZLEdBQU07QUFDcEJMLG9CQUFRTSxNQUFSLENBQWVSLE9BQU9TLFdBQXRCO0FBQ0gsU0FGRDs7QUFJQUY7QUFDQTtBQUNBTixVQUFFLGNBQUYsRUFBa0JTLE1BQWxCLEdBQ0tDLE1BREwsQ0FDWTtBQUFBLG1CQUFLViw4RUFBTDtBQUFBLFNBRFo7QUFFQSxZQUFNVyxlQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixnQkFBTUMsa0JBQWtCLENBQUNaLEVBQUUsVUFBRixFQUFjYSxHQUFkLENBQWtCLFNBQWxCLEVBQTZCQyxLQUE3QixDQUFtQyxDQUFuQyxFQUFzQyxDQUF0QyxDQUF6QjtBQUNBZCxjQUFFLGtCQUFGLEVBQXNCZSxJQUF0QixDQUEyQixVQUFDQyxDQUFELEVBQUlDLEVBQUosRUFBVztBQUM5QixvQkFBTUMsV0FBV2xCLEVBQUVpQixFQUFGLEVBQU1SLE1BQU4sR0FBZVUsSUFBZixDQUFvQixZQUFwQixFQUFrQ1osTUFBbEMsS0FBNkMsQ0FBOUQ7QUFDQSxvQkFBTUEsU0FBU1AsRUFBRWlCLEVBQUYsRUFBTUcsWUFBTixDQUFtQixTQUFuQixFQUE4QkMsRUFBOUIsQ0FBaUMsQ0FBakMsRUFBb0NkLE1BQXBDLEtBQStDLENBQS9DLEdBQW1ESyxrQkFBa0IsQ0FBcEY7QUFDQSxvQkFBSWIsT0FBT3VCLFVBQVAsR0FBb0IsR0FBeEIsRUFBNkI7QUFDekJ0QixzQkFBRWlCLEVBQUYsRUFBTVYsTUFBTixDQUFhQSxTQUFTVyxRQUF0QjtBQUNILGlCQUZELE1BRU87QUFDSGxCLHNCQUFFaUIsRUFBRixFQUFNVixNQUFOLENBQWFnQixLQUFLQyxHQUFMLENBQVNqQixTQUFTLENBQVQsR0FBYSxJQUFJVyxRQUExQixFQUFvQyxFQUFwQyxDQUFiO0FBQ0g7O0FBRURsQixrQkFBRWlCLEVBQUYsRUFBTVEsUUFBTixHQUFpQkMsTUFBakIsQ0FBd0IscUJBQXhCLEVBQStDbkIsTUFBL0MsQ0FBc0RBLFNBQVNXLFFBQS9EO0FBQ0gsYUFWTDtBQVlILFNBZEQ7QUFlQVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBTWdCLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCO0FBQ0EsZ0JBQUk1QixPQUFPdUIsVUFBUCxHQUFvQixHQUF4QixFQUE2QjtBQUN6QjtBQUNBLG9CQUFJLENBQUNqQixZQUFZdUIsUUFBWixDQUFxQixRQUFyQixDQUFMLEVBQXFDO0FBQ2pDdkIsZ0NBQVl3QixRQUFaLENBQXFCLFFBQXJCO0FBQ0ExQiw2QkFBUzJCLFdBQVQsQ0FBcUIsTUFBckI7QUFDQTlCLHNCQUFFLGVBQUYsRUFBbUJVLE1BQW5CLENBQTBCVixFQUFFLGdCQUFGLENBQTFCO0FBQ0g7QUFFSixhQVJELE1BUU87QUFDSEssNEJBQVl5QixXQUFaLENBQXdCLFFBQXhCO0FBQ0EzQix5QkFBUzBCLFFBQVQsQ0FBa0IsTUFBbEI7QUFDQXhCLDRCQUFZYyxJQUFaLENBQWlCLFFBQWpCLEVBQTJCVCxNQUEzQixDQUFrQ1YsRUFBRSxnQkFBRixDQUFsQztBQUVIO0FBQ0osU0FoQkQ7QUFpQkEyQjtBQUNBM0IsVUFBRUQsTUFBRixFQUFVZ0MsRUFBVixDQUFhLFFBQWIsRUFBdUJKLFVBQXZCO0FBQ0EsWUFBTUssZUFBZSxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QkEsY0FBRUMsY0FBRjtBQUNBLGdCQUFJOUIsT0FBT3dCLFFBQVAsQ0FBZ0IsUUFBaEIsQ0FBSixFQUErQjtBQUMzQnhCLHVCQUFPMEIsV0FBUCxDQUFtQixRQUFuQjtBQUNBO0FBQ0g7QUFDRDFCLG1CQUFPeUIsUUFBUCxDQUFnQixRQUFoQjtBQUVILFNBUkQ7QUFTQU07O0FBRUFuQyxVQUFFLGFBQUYsRUFBaUIrQixFQUFqQixDQUFvQixPQUFwQixFQUE2QkMsWUFBN0I7QUFFSCxLQXhFRDtBQXlFSCxDQTFFRCxFQTBFR2pDLE1BMUVILEVBMEVXcUMsTUExRVgiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAod2luZG93LCAkKSB7XHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCAkaGVhZGVyID0gJCgnLmNhcm91c2VsLWl0ZW0nKTtcclxuICAgICAgICBjb25zdCAkY3VsdHVyYWxTZWNpb24gPSAkKFwiLmN1bHR1cmFsIC5yb3dcIik7XHJcbiAgICAgICAgY29uc3QgJHNpZGVuYXYgPSAkKCcuc2lkZW5hdicpO1xyXG4gICAgICAgIGNvbnN0ICRhc2lkZSA9ICQoXCJhc2lkZVwiKTtcclxuICAgICAgICBjb25zdCAkbWFpbkhlYWRlciA9ICQoJy5tYWluLWhlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckRpbSA9ICgpID0+IHtcclxuICAgICAgICAgICAgJGhlYWRlci5oZWlnaHQod2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGhlYWRlckRpbSgpO1xyXG4gICAgICAgIC8vIGFkZGluZyBza2V3IGltZyBsaW5lXHJcbiAgICAgICAgJCgnLnNrZXctaG9sZGVyJykucGFyZW50KClcclxuICAgICAgICAgICAgLmFwcGVuZChfID0+ICQoYDxkaXYgY2xhc3M9XCJza2V3LWJvcmRlci10b3BcIj48L2Rpdj48ZGl2IGNsYXNzPVwic2tldy1ib3JkZXItYm90dG9tXCI+PC9kaXY+YCkpO1xyXG4gICAgICAgIGNvbnN0IGJvcmRlckFkanVzdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbnNQYWRkaW5nID0gKyQoJy5zdXBwb3J0JykuY3NzKFwicGFkZGluZ1wiKS5zbGljZSgwLCAyKTtcclxuICAgICAgICAgICAgJChcIi5za2V3LWJvcmRlci10b3BcIikuZWFjaCgoaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5zZSA9ICQoZWwpLnBhcmVudCgpLmZpbmQoJy5pbWctZmx1aWQnKS5oZWlnaHQoKSAvIDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gJChlbCkucGFyZW50c1VudGlsKFwic2VjdGlvblwiKS5lcSgxKS5oZWlnaHQoKSAvIDIgKyBzZWN0aW9uc1BhZGRpbmcgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2NSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGVsKS5oZWlnaHQoaGVpZ2h0IC0gZGlzdGFuc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZWwpLmhlaWdodChNYXRoLm1heChoZWlnaHQgLyAyIC0gMiAqIGRpc3RhbnNlLCAzMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChlbCkuc2libGluZ3MoKS5maWx0ZXIoXCIuc2tldy1ib3JkZXItYm90dG9tXCIpLmhlaWdodChoZWlnaHQgLSBkaXN0YW5zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJvcmRlckFkanVzdCgpO1xyXG4gICAgICAgIC8vIHRoZSBjdWx0dXJhbFxyXG4gICAgICAgIC8vIGNvbnN0IG1hcEFkanVzdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY1KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAkY3VsdHVyYWxTZWNpb24uaGVpZ2h0KE1hdGgubWluKDIwMCArICQoXCIuY3VsdHVyYWwgLm1hcCBpbWdcIikuaGVpZ2h0KCksIDQwMCkpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgJGN1bHR1cmFsU2VjaW9uLmhlaWdodChcImF1dG9cIik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgYm9yZGVyQWRqdXN0KCk7XHJcbiAgICAgICAgLy8gfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3dpdGNoU2l6ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gbWFwQWRqdXN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2NSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZGlzayB0b3BcclxuICAgICAgICAgICAgICAgIGlmICghJG1haW5IZWFkZXIuaGFzQ2xhc3MoJ2hpZGRlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1haW5IZWFkZXIuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzaWRlbmF2LnJlbW92ZUNsYXNzKFwibmFub1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmJyYW5kLWhvbGRlclwiKS5hcHBlbmQoJChcIi5icmFuZC1oZWFkaW5nXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkbWFpbkhlYWRlci5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICRzaWRlbmF2LmFkZENsYXNzKFwibmFub1wiKTtcclxuICAgICAgICAgICAgICAgICRtYWluSGVhZGVyLmZpbmQoXCIuYnJhbmRcIikuYXBwZW5kKCQoJy5icmFuZC1oZWFkaW5nJykpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3dpdGNoU2l6ZSgpO1xyXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgc3dpdGNoU2l6ZSk7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlU2lkTmF2ID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoJGFzaWRlLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkYXNpZGUucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJGFzaWRlLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIG1hcEFkanVzdGlvbigpO1xyXG5cclxuICAgICAgICAkKCcubmF2LXRvZ2dsZScpLm9uKCdjbGljaycsIHRvZ2dsZVNpZE5hdilcclxuXHJcbiAgICB9KVxyXG59KSh3aW5kb3csIGpRdWVyeSk7XHJcbiJdfQ==
