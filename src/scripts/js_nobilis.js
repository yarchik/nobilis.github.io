let front = {
    nav: $('.navbar'),
    slider_options_default: {
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: false,
        cellAlign: 'left',
        contain: true
    },

    init: function () {
        this.events();
        this.headerScroll();
    },

    newSlider: function (selector, options) {
        options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
        return new Flickity(selector, options);
    },

    headerScroll: function () {
        if ($(window).scrollTop() > 5) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    },


   events: function () {
        let self = this;
        $(window).on('scroll', function () {
            self.headerScroll();
        });
    }
};

let modal = {
    closeButton: $('.modal-content__close'),
    closeOverlay: $('.modal'),
    can: 1,
    init: function () {
        this.events();
    },
    openModal: function (id) {
        let modalWindow = $(id);
        modalWindow.fadeIn();
        modalWindow.find('.modal-content').removeClass('animate-away').addClass('animate-in');
        if (!($('.navigation').hasClass('open'))) {
            $("html, body").addClass("overflow-hidden");
        }
        // $('body, html').addClass('overflow-hidden');
    },

    closeModal: function (id) {
        let modalWindow = $(id);
        modalWindow.find('.modal-content').removeClass('animate-in').addClass('animate-away');
        modalWindow.fadeOut();

        //  $('body, html').removeClass('overflow-hidden');
        if (!($('.navigation').hasClass('open'))) {
            $("html, body").removeClass("overflow-hidden");
        }


    },

    events: function () {

        $(document).on('click', '.modalTrigger', function (e) {
            e.preventDefault();
            let self = $(this),
                target = self.attr('data-modal');
            modal.openModal(target);

        });

        $(document).on('click', '.modal', function (event) {
            let self = '#' + $(this).attr('id');
            if (event.target.className == 'modal-body') {
                modal.closeModal(self);
            }
        });

        $(document).on('click', '.modal-content__close', function () {
            let self = '#' + $(this).closest('.modal').attr('id');
            modal.closeModal(self);
        });
    }
};

jQuery(function () {
    front.init();
    modal.init();


    $(".burger").on("click", function () {
        $(this).toggleClass("active"),
            $(".navbar").toggleClass("is-visible")
    })


});
