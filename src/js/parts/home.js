import Swiper from "swiper";

export class Home {
    init() {
        this.Home();
    }

    Home() {
        $(document).ready(function () {
            const $arrows = $('.arrow-image');
            const $hoverArea = $('.span-arrow-hover');
            let index = 0;
            let hoverInterval;

            const addShowImageClass = () => {
                if (index > 0) {
                    $($arrows[index - 1]).removeClass('show-image');
                }
                if (index < $arrows.length) {
                    $($arrows[index]).addClass('show-image');
                    index++;
                    setTimeout(addShowImageClass, 400);
                } else {
                    setTimeout(() => {
                        $arrows.removeClass('show-image');
                        index = 0;
                    }, 400);
                }
            };

            addShowImageClass();

            const hoverAnimation = () => {
                if (index > 0) {
                    $($arrows[index - 1]).removeClass('show-image');
                }
                if (index < $arrows.length) {
                    $($arrows[index]).addClass('show-image');
                    index++;
                } else {
                    $($arrows[index - 1]).removeClass('show-image');
                    index = 0;
                }
            };

            const startHoverAnimation = () => {
                hoverInterval = setInterval(hoverAnimation, 400);
            };

            const stopHoverAnimation = () => {
                clearInterval(hoverInterval);
                $arrows.removeClass('show-image');
                index = 0;
            };

            $hoverArea.hover(startHoverAnimation, stopHoverAnimation);

            const updateImagePosition = (e) => {
                const hoverAreaWidth = $hoverArea.width();
                const hoverAreaHeight = $hoverArea.height();
                const hoverAreaOffset = $hoverArea.offset();
                const cursorPositionX = e.pageX - hoverAreaOffset.left;
                const cursorPositionY = e.pageY - hoverAreaOffset.top;
                const percentageX = cursorPositionX / hoverAreaWidth;
                const percentageY = cursorPositionY / hoverAreaHeight;
                const moveAmountX = (percentageX - 0.5) * 20;
                const moveAmountY = (percentageY - 0.5) * 20;

                $('.arrow-image.show-image').css('transform', `translate(${moveAmountX}%, ${moveAmountY}%)`);
            };


            $hoverArea.mousemove(updateImagePosition);

            $hoverArea.mouseleave(function () {
                $('.arrow-image').css('transform', 'translate(0, 0)');
            });


            // slider

            var swiper = new Swiper(".video-slider", {
                spaceBetween: 30,
                centeredSlides: true,
                speed: 800,
                autoplay: {
                    delay: 2000,  // 5000 milliseconds = 5 seconds
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        });
    }
}