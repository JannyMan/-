$(function(){
    $('.con .con_left ul span').click(function(){
        if($(this).siblings('li').hasClass('on')){
            $(this).siblings('li').slideUp(500).removeClass('on');
        }else{
            $('.con .con_left ul li').slideUp(500).removeClass('on');
            $(this).siblings('li').slideDown(500).addClass('on')
        }
    });

    $('.con .con_right .con_r_bd ul li').mousedown(function (index,val) {
        console.log($(this).index());
        $('.con .con_right .con_r_bd .info').html('').append('<p>这里显示的是第<b style="color: red">'+$(this).index()+'</b>条的详细信息</p>').css('display','block');
    });
});