
var view = {
    //动态创建节点显示数据
    crDateView:function(option) {
        for(var i=0;i<option.length;i++){
            $('.info').append(
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
    },

    //菜单
    crDropMenu:function (showClassName,hiddenClassName,callback) {
        $('#menu>ul>li').mousedown(function (e) {
            //阻止事件冒泡
            e = window.event || e;
            e.stopPropagation();
            var cur = $(this).find('ul').attr('class');
            if (cur == showClassName) {
                //隐藏
                $(this).find('ul').removeClass(showClassName).addClass(hiddenClassName);
            } else {
                $('#menu>ul>li').find('ul').addClass(hiddenClassName);
                //添加显示类
                $(this).find('ul').removeClass(hiddenClassName).addClass(showClassName).children('li').each(function () {
                    $(this).mousedown(function () {
                        callback(this);
                    });
                });
            }
        });
    }
};












