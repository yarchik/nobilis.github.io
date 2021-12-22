window.addEventListener("load", function () {
    $(".carousel").addClass("loadSlider");


        let carouselContainers = document.querySelectorAll('.s-room-js');

        for (let i = 0; i < carouselContainers.length; i++) {
            let container = carouselContainers[i];
            initCarouselContainer(container);
        }



    function initCarouselContainer(container) {
        var carousel = container.querySelector('.carousel'), flkty = new Flickity(carousel),
            carouselStatus = container.querySelector('.carousel-status');

        function updateStatus() {
            var slideNumber = flkty.selectedIndex + 1;
            carouselStatus.innerHTML = `<span>${slideNumber}/</span><span>${flkty.slides.length}</span>`;
        }

        updateStatus();

        flkty.on('select', updateStatus);


    }



    /*  const rooms = document.querySelectorAll('.s-room');

      rooms.forEach(room => {
          elCarousel = front.newSlider(carousel, {
              cellAlign: 'center',
              contain: true,
              pageDots: false,
              verticalCells: true,
              prevNextButtons: true
          });
          let $this = carousel;


          let elCarouselStatus = $this.parent().find('.carousel-status');
          console.log(elCarouselStatus);
          function updateStatus() {
              let slideNumber = elCarousel.selectedIndex + 1;

              elCarouselStatus.innerText = slideNumber + '/' + elCarousel.slides.length;
          }

          updateStatus();
          elCarousel.on('select', updateStatus);

      });
  */

    var recommendedProductsCarousel = document.querySelector('.recommended-products__carousel');
    if (recommendedProductsCarousel !== null) {
        recommendedProductsCarousel = front.newSlider('.recommended-products__carousel', {
            cellAlign: 'center',
            contain: true,
            pageDots: false,
            verticalCells: true,
            prevNextButtons: true
        });
        $('.carousel-btn.--prev').on('click', function () {
            recommendedProductsCarousel.previous();
        });

        $('.carousel-btn.--next').on('click', function () {
            recommendedProductsCarousel.next();
        });
    }


    if (document.querySelector('.carousel-main') !== null) {
        let mainCarousel;


        mainCarousel = front.newSlider('.carousel-main', {
            cellAlign: 'center',
            contain: true,
            verticalCells: true,
            pageDots: false,
            prevNextButtons: true
        });

        let mainCarouselStatus = document.querySelector('.carousel-status');

        function updateStatus() {
            let slideNumber = mainCarousel.selectedIndex + 1;

            mainCarouselStatus.innerText = slideNumber + '/' + mainCarousel.slides.length;
        }

        updateStatus();
        mainCarousel.on('select', updateStatus);
    }
});