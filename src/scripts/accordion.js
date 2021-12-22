let accordion = (function () {

    let $accordion = $('.js-accordion');
    let $accordion_header = $accordion.find('.js-accordion-header');

    // default settings
    let settings = {
        // animation speed
        speed: 400,
        // close all other accordion items if true
        oneOpen: false
    };

    return {
        // pass configurable object literal
        init: function ($settings) {


            //$accordion_header.on('click', function () {
            $(document).on('click', '.js-accordion-header', function () {
                accordion.toggle($(this));
            });

            $.extend(settings, $settings);

            // ensure only one accordion is active if oneOpen is true
            if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                $('.js-accordion-item.active:not(:first)').removeClass('active');
            }

            // reveal the active accordion bodies
            $('.js-accordion-item.active').find('> .js-accordion-body').show();
        },
        toggle: function ($this) {

            if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
                $this.closest('.js-accordion')
                    .find('> .js-accordion-item')
                    .removeClass('active')
                    .find('.js-accordion-body')
                    .slideUp()
            }

            // show/hide the clicked accordion item
            $this.closest('.js-accordion-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
        }
    }
})();

$(document).ready(function () {
    accordion.init({speed: 300, oneOpen: true});
});



let carouselContainers = document.querySelectorAll('.s-room');

for ( let i=0; i < carouselContainers.length; i++ ) {
    let container = carouselContainers[i];
    initCarouselContainer( container );
}

function initCarouselContainer( container ) {
    let carousel = container.querySelector('.carousel'), flkty = new Flickity( carousel ), carouselStatus = container.querySelector('.carousel-status');

    function updateStatus() {
        var slideNumber = flkty.selectedIndex + 1;
        carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
    }
    updateStatus();

    flkty.on( 'select', updateStatus );


}