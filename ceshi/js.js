$(function(){



    //需求
    /*
     1.用户调用创建函数就能直接创建一个默认的结构样式的界面显示在页面上
     */

    //假数据
    var option =[
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2017-1-11 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2018-3-12 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2019-5-18 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2011-6-28 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2012-7-08 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2013-9-06 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2015-1-09 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2015-1-09 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2015-1-09 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2015-1-09 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2015-1-09 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2015-1-09 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2015-1-09 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2015-1-09 11:22:49','state':'启动','view':'查看日志'},
        {'name':'下载FTP文件','taskArr':'作业组一','taskType':'测试','time':'2015-1-09 11:22:49','state':'启动','view':'查看日志'}

    ];
    //创建显示对象
    // function info(option) {
    //     var obj = Object();
    //
    // }
    //面向过程的创建方式
    function creatView(option) {
        for(var i=0;i<option.length;i++){
            $('#info').append(
                '<ul>'+
                    '<li>'+
                        '<span>'+option[i].name+'</span>'+
                        '<span>'+option[i].taskArr+'</span>'+
                        '<span>'+option[i].taskType+'</span>'+
                        '<span>'+option[i].time+'</span>'+
                        '<span>'+option[i].state+'</span>'+
                        '<span>'+option[i].view+'</span>'+
                    '</li>'+
                '</ul>'
            );
        }

    }
    creatView(option);
});