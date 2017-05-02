requirejs.config({
    baseUrl: 'BaiduNews/js',
    paths: {
        bdnews_main: 'bdnews_main',
        jquery: 'lib/jquery.min',
        time2Units: 'basic/time2Units',
        createInnerBoxFragment: 'basic/createInnerBoxFragment',
        findAll: 'basic/findAll'
    }
});

//主入口
requirejs(['jquery', 'findAll'], function($, findAll) {


    //一次查找条数
    var findNum = 5;
    //查询偏移
    var offset;
    
    //开始加载并发送数据
    $(document).ready(function() {
        var table = "news_recommend";
        //从第几条开始
        offset = 0;
        offset = findAll(table, offset, findNum);
    });

    //设置flag保证多次点击按顺序执行
    var loadMoreFlag = 1;
    $(".loadMore").click(function() {
        var _this = $(this);
        if (loadMoreFlag == 0) {
            return;
        }
        var table = _this.parent().attr("name");
        loadMoreFlag = 0;
        offset = findAll(table, offset, findNum);
        loadMoreFlag = 1;
    });

    //nav的选择
    $(".anvRowBox").click(function() {
        var _this = $(this);
        $(".anvRowBox").removeClass("focused");
        _this.addClass("focused");
        var table = _this.attr("name")
        $(".selected").removeClass("selected");
        $("." + table + "_box").addClass("selected");
        //清除之前加载的数据
        $("." + table + "_box").find(".newsInnerBox").remove();
        //刷新数据
        offset = 0;
        //点击加载更多-可进入
        loadMoreFlag = 1;
        //    alert(table);
        offset = findAll(table, offset, findNum);
    });

});