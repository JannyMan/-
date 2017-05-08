$(function(){


    //手风琴菜单创建js代码
    $('.con .con_left ul span').click(function(){
        if($(this).siblings('li').hasClass('on')){
            $(this).siblings('li').slideUp(500).removeClass('on');
        }else{
            $('.con .con_left ul li').slideUp(500).removeClass('on');
            $(this).siblings('li').slideDown(500).addClass('on')
        }
    });


    //需求
    /*
        1.用户调用创建函数就能直接创建一个默认的结构样式的界面显示在页面上
     */

    //假数据
    var option =[
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2017-5-8 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2017-5-8 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2017-5-8 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2017-5-8 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2017-5-8 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2017-5-8 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2017-5-8 11:22:49','state':'启动','view':'查看日志'}

    ];
    //创建显示对象
    function info(option) {
        var obj = Object();

    }
    //面向过程的创建方式
    function creatView(option) {

    }











    //详细信息显示界面
    /*
    $('.con .con_right .con_r_bd ul li').mousedown(function (index,val) {
        console.log($(this).index());
        $('.con .con_right .con_r_bd .info').html('').append('<p>这里显示的是第<b style="color: red">'+$(this).index()+'</b>条的详细信息</p>').css('display','block');
    });
    */




});