(function ($) {
    let hwSlideSpeed = 0;
    let hwTimeOut = 3000;
    let hwNeedLinks = true;
    let slilinkss = true;

    $(document).ready(function(e) {
        $('.slide').css(
            {
                "top":'0', "left": '0'}).hide().eq(0).show();
        let slideNum = 0;
        let slideTime;
        slideCount = $("#slider .slide").length;

        let animSlide = function(arrow){
            clearTimeout(slideTime);
            $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
            if(arrow == "next"){
                if (slideNum == (slideCount-1)) {
                    slideNum = 0;
                } else {
                    slideNum++;
                }
            } else if(arrow == "prev") {
                if(slideNum == 0) {
                    slideNum = slideCount-1;
                } else{slideNum-=1}

            }  else {
                slideNum = arrow;
            }
            $('.slide').eq(slideNum).fadeIn(hwSlideSpeed);
            $(".control-slide.active").removeClass("active");
            $('.control-slide').eq(slideNum).addClass('active');
        };

        let sliderNumText = 0;
        const rooms = ['Для зала', 'Для гостиной', 'Для кухни', 'Для спальни'];
        const prices = [50, 60, 70, 80];
        const roomCount = rooms.length;
        $('.slider-dest').text(rooms[0]);
        $('.slider-price.num').text(prices[0]);
        let animText = function (arrow) {
            if(arrow == "next"){
                if (sliderNumText == (roomCount-1)) {
                    sliderNumText = 0;
                } else {
                    sliderNumText++
                }
            } else if(arrow == "prev") {
                if(sliderNumText == 0) {
                    sliderNumText = roomCount-1;
                } else {
                    sliderNumText-=1
                }

            }  else {
                sliderNumText = arrow;
            }
            $('.slider-dest').text(rooms[sliderNumText]);
            $('.slider-price.num').text(prices[sliderNumText]);
        };
        if(hwNeedLinks){
            let nextButton = $('#nextbutton');
            let prevButton = $('#prevbutton');
            nextButton.click(function(){
                animSlide("next");
                animText("next");
                return false;
            });
            prevButton.click(function(){
                animSlide("prev");
                animText("prev");
                return false;
            })
        }
        let $adderSpan = '';
        $('.slide').each(function(index) {
            $adderSpan += '<span class = "control-slide">' + index + '</span>';
        });
        $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('.slider-nav');
        $(".control-slide:first").addClass("active");
        $('.control-slide').click(function(){
            let goToNum = parseFloat($(this).text());
            animSlide(goToNum);
        });
        let pause = false;
        let rotator = function(){
            if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
        }
        $('#slider-wrap').hover(
            function(){clearTimeout(slideTime); pause = true;},
            function(){pause = false;
            });



        // rotator();


        if (!slilinkss)  $('.sli-links').css({"display" : "none"});
    });



})(jQuery);

$(document).ready(function() {

    $('.burg-menu').click(function () {
        let mobBurg = $(this);
        let body = $('body');
        let mobMenu = mobBurg.parent('.header-top')
            .parent('.container')
            .siblings('.header-bottom')
            .find('.container')
            .find('.nav');

        let backDrop = mobBurg.parent('.header-top')
            .parent('.container')
            .siblings('.header-bottom')
            .find('.backdrop');
        mobMenu.toggleClass('open');
        mobBurg.toggleClass('open');
        backDrop.toggleClass('open');
        body.toggleClass('hidden');

        backDrop.click(function () {
            let thisEl = $(this);
            thisEl.siblings(mobMenu, mobBurg ).removeClass('open');
            thisEl.parent('.header-bottom')
                .siblings('.container')
                .find('.header-top')
                .find('.burg-menu').removeClass('open');

            thisEl.siblings('.container').find('.nav').removeClass('open');
            thisEl.removeClass('open');
            body.removeClass('hidden');
        });
    });
});
