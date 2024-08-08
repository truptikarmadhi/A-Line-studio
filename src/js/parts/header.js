export class Header {
  init() {
    this.Header();
  }

  Header() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > window.innerHeight) {
        $('header').addClass('white-header');
      } else {
        $('header').removeClass('white-header');
      }
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > (window.innerHeight * 2)) {
        $('.sub-header').addClass('sub-header-anim');
        $('header').removeClass('white-header');
        $('header').addClass('bg-white');
      } else {
        $('.sub-header').removeClass('sub-header-anim');
        $('header').removeClass('bg-white');
      }
    });

    $(document).ready(function () {
      var contentSection = $('.content-section');

      $(window).on('scroll', function () {
        updateNavigation();
      });

      function updateNavigation() {
        var anyActive = false;

        contentSection.each(function () {
          var sectionName = $(this).attr('id');
          var navigationMatch = $('.sub-header-anim a[id="' + sectionName + '"]');
          if (($(this).offset().top - $(window).height() / 2 < $(window).scrollTop()) &&
            ($(this).offset().top + $(this).height() - $(window).height() / 2 > $(window).scrollTop())) {
            navigationMatch.addClass('active-link');
            anyActive = true;
          } else {
            navigationMatch.removeClass('active-link');
          }
        });

        if (anyActive) {
          $('.sub-header-anim a').each(function () {
            if ($(this).hasClass('active-link')) {
              $(this).removeClass('not-active');
            } else {
              $(this).addClass('not-active');
            }
          });
        } else {
          $('.sub-header-anim a').removeClass('not-active');
        }
      }

      // Initial update
      updateNavigation();
    });

    $('#open-menu').on("click", function () {
      $("#bottomNav").css("height", "100%");
      $('body').addClass('overflow-hidden');
      $('.sub-header-anim').addClass('d-none');
    })
    $('.close-icon').on("click", function () {
      $("#bottomNav").css("height", "0");
      $('body').removeClass('overflow-hidden');
      $('.sub-header-anim').removeClass('d-none');
    })
  }
}