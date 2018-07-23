(function (window, $) {
    $(function () {
        const $header = $('.carousel-item');
        const $culturalSecion = $(".cultural .row");
        const $sidenav = $('.sidenav');
        const $aside = $("aside");
        const $mainHeader = $('.main-header');
        const headerDim = () => {
            $header.height(window.innerHeight)
        };

        headerDim();
        // adding skew img line
        $('.skew-holder').parent()
            .append(_ => $(`<div class="skew-border-top"></div><div class="skew-border-bottom"></div>`));
        const borderAdjust = () => {
            const sectionsPadding = +$('.support').css("padding").slice(0, 2);
            $(".skew-border-top").each((i, el) => {
                    const distanse = $(el).parent().find('.img-fluid').height() / 4;
                    const height = $(el).parentsUntil("section").eq(1).height() / 2 + sectionsPadding / 2;
                    if (window.innerWidth > 765) {
                        $(el).height(height - distanse);
                    } else {
                        $(el).height(Math.max(height / 2 - 2 * distanse, 30));
                    }

                    $(el).siblings().filter(".skew-border-bottom").height(height - distanse);
                }
            )
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

        const switchSize = () => {
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
        const toggleSidNav = (e) => {
            e.preventDefault();
            if ($aside.hasClass("active")) {
                $aside.removeClass("active");
                return;
            }
            $aside.addClass("active");

        };
        mapAdjustion();

        $('.nav-toggle').on('click', toggleSidNav)

    })
})(window, jQuery);
