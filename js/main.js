'use strict';

$(function(){
    $("#top-image li:not(:first-child)").hide();

    let count = $("#top-image li").length;
    let current = 1;
    let next = 2;
    let interval = 3000;
    let duration = 500;
    let timer;

    timer = setInterval(slideTimer,interval);

    function slideTimer(){
        $("#top-image li:nth-child("+ current +")").fadeOut(duration);
        $("#top-image li:nth-child("+ next +")").fadeIn(duration);

        current = next;
        next++;

        if(next > count){
            next = 1;
        }
    };


    $(window).scroll(function(){
        $('div').each(function(){
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();

            if (scroll > elemPos  - windowHeight){
                $(this).addClass('appear');
            } else{
                $(this).removeClass('appear');
            }
        });

        $('#Strongpoint div.sidebox-left').each(function(){
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();

            if(scroll > elemPos - windowHeight){
                $(this).stop().css('transform','translateX(-5px)');
            } else{
                $(this).stop().css('transform','translateX(-1700px)');   
            }     
        })

        $('#Strongpoint div.sidebox-right').each(function(){
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();

            if(scroll > elemPos - windowHeight){
                $(this).stop().css('transform','translateX(5px)');
            } else{
                $(this).stop().css('transform','translateX(1700px)');   
            }
        })
    });

    $('.omakebox').hide();

    $('#Omake h3').click(function(){
        $(this).next('.omakebox').toggle();
    })

    $('#page-top a img').hover(function(){
        $(this).attr('src','img/topbtn-open.png');
    },function(){
        $(this).attr('src','img/topbtn-close.png');
    });

        let images = [
            'img/topbtn-up.png',
            'img/topbtn-down.png',
            'img/topbtn-close.png'
        ];
        $.each(images, function(index, value) {
            $('<img>').attr('src', value);
        });

    $('#page-top a img').click(function(){
        $(this).stop().attr('src','img/topbtn-up.png').animate({ top: '-200%' },500,function(){
            $(this).attr('src','img/topbtn-down.png').animate({ top: '-70%' },300,function(){
                $(this).animate({ top: '-60%' },500,function(){

                    $('html, body').animate({ scrollTop: 0 }, 1300, 'swing');
                    $('#page-top a img').attr('src','img/topbtn-up.png').animate({ top: '-4500%',opacity: 0},1300,'swing',function(){

                        $('#page-top a img').css({'top':'-70%','opacity':1});
                        $('#page-top a img').attr('src','img/topbtn-close.png');
                    });
               
                });

            });
        
        });
        
        return false;
    
    });

    $('#top-menu ul li a').click(function(){
        let gap = 70;
        let target = $(this).attr('href');
        let Jumpto = $(target).offset().top-gap;

        $('html,body').animate({ scrollTop:Jumpto },500,'swing');

        return false;
    });
    
});