//var
const $header = $('.carousel-item');
const $culturalSecion = $(".cultural .row");

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
            $(el).height(height - distanse);

            $(el).siblings().filter(".skew-border-bottom").height(height - distanse);
        }
    )
};
borderAdjust();
// the cultural
const mapAdjustion = () => {
    $culturalSecion.height($culturalSecion.outerHeight() + $(".cultural .map").height());
    borderAdjust();

}
mapAdjustion();
