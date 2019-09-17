$(function(){


    $('#gnb .nav>li').hover(function() {
        $(this).find('ul').slideDown(500);
    },function () {
        $(this).find('ul').slideUp(500);
    });

    $('#gnb .nav>li>ul>li a').hover(function(){
        $(this).css({background:'#3d3d3d'}).stop().animate({color:'#fff'},500);
    },function(){
        $(this).css({background:'#fff'}).stop().animate({color:'#3d3d3d'},500);
    })


    $('#gnb .etc .userBox a').toggle(function(){
        $('#gnb .etc .userBox').find('ul').slideDown(500);
    },function(){
        $('#gnb .etc .userBox').find('ul').slideUp(500);
    })

    $('#gnb .etc .searchBtn a').toggle(function(){
        $('#gnb .nav').stop().animate({left:'30%'},1000).hide();
        $('#gnb form input').css({display:'block'}).stop( ).animate({opacity:1,left:'20%'},500);
    },function(){
        $('#gnb .nav').stop().animate({left:'50%'},500).show();
        $('#gnb form input').css({display:'none'}).stop().animate({opacity:0,left:'60%'},500);
    })



    $('#section03 .gallery_area .gallery').hover(function(){
        $(this).find('.gallery_bg').stop().animate({top:0,opacity:1},500);
        $(this).find('.gallery_bg div').stop().delay(200).animate({marginTop:'15%',opacity:1},500);
    },function(){
        $(this).find('.gallery_bg').stop().delay(200).animate({top:'100%',opacity:0},500);
        $(this).find('.gallery_bg div').stop().animate({marginTop:'30%',opacity:0 },500);
    })

    $('#section04 .product_link>ul>li.link').hover(function(){
        $(this).find('ul').css({display:'block',zIndex:98})
        $(this).find('a').css({zIndex:99})
    },function(){
        $(this).find('ul').css({display:'none',zIndex:1})
        $(this).find('a').css({zIndex:97})
    })


    $('#section04 .product_link>ul>.link').each(function(){
        var link=$(this);
        var current=0;
        link.find('li').not(':first').hide();

        setInterval(function(){
            link.find('li:visible').css({display:'none'});
            current++;
            if(current==link.find('li').size()){current=0}
            link.find('li').eq(current).css({display:'block'});
        },300);
    });
















});
