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
        $('#gnb form input').css({display:'block'}).stop( ).animate({opacity:1,left:'500px'},500);
    },function(){
        $('#gnb .nav').stop().animate({left:'50%'},500).show();
        $('#gnb form input').css({display:'none'}).stop().animate({opacity:0,left:'600px'},500);
    })



    var company = $('#companyArea .companys div');
    var company01 = $('#companyArea .companys .company01');
    var company02 = $('#companyArea .companys .company02');
    var company03 = $('#companyArea .companys .company03');
    var text = $('#companyArea .company_text .text');

    company01.hover(function(){
        $(this).css('opacity','1').stop().animate({width:'76%'},500);
        company02.css('opacity','1').stop().animate({left:'78%',width:'10%',opacity:0.3},500)
        company03.css('opacity','1').stop().animate({width:'10%',opacity:0.3},500)
        text.eq(0).css({display:'block'}).stop().animate({bottom:'200px',opacity:1},1000)
    },function(){
        company01.css('opacity','1').stop().animate({width:'32%',opacity:1},500);
        company02.css('opacity','0.3').stop().animate({left:'34%',width:'32%',opacity:1},500)
        company03.css('opacity','0.3').stop().animate({width:'32%',opacity:1},500)
        text.eq(0).css({display:'none'}).stop().animate({bottom:'0',opacity:0},1000)
    })

    company02.hover(function(){
        $(this).css('opacity','1').stop().animate({width:'76%', left:'12%'},500);
        company01.css('opacity','1').stop().animate({width:'10%',opacity:0.3},500)
        company03.css('opacity','1').stop().animate({width:'10%',opacity:0.3},500)
    },function(){
        company01.css('opacity','0.3').stop().animate({width:'32%',opacity:1},500);
        company02.css('opacity','1').stop().animate({left:'34%',width:'32%',opacity:1},500)
        company03.css('opacity','0.3').stop().animate({width:'32%',opacity:1},500)
    })

    company03.hover(function(){
        $(this).css('opacity','1').stop().animate({width:'76%'},500);
        company02.css('opacity','1').stop().animate({left:'12%',width:'10%',opacity:0.3},500)
        company01.css('opacity','1').stop().animate({width:'10%',opacity:0.3},500)
    },function(){
        company01.css('opacity','0.3').stop().animate({width:'32%',opacity:1},500);
        company02.css('opacity','0.3').stop().animate({left:'34%',width:'32%',opacity:1},500)
        company03.css('opacity','1').stop().animate({width:'32%',opacity:1},500)
    })











});
