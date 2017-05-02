requirejs.config({
    baseUrl: 'js',
    paths: {
        bg_main: 'bg_main',
        jquery: 'lib/jquery.min',

        findTableName: 'basic/findTableName',
        findRightItem: 'basic/findRightItem',
        convert2table: 'basic/convert2table',
        convert2selected: 'basic/convert2selected',
        calculateSelectedNum: 'basic/calculateSelectedNum',
        createInnerBoxFragment: 'findAll/createInnerBoxFragment',

        additems: 'add/additems',
        findAll: 'findAll/findAll',
        deleteitems: 'delete/deleteitems',
        edititems: 'edit/edititems',

        leftBarSelected: 'basic/leftBarSelected'
    }
});

//主入口
requirejs(['jquery', 'additems', 'findAll', 'deleteitems', 'edititems', 'leftBarSelected'], function($, additems, findAll, deleteitems, edititems, leftBarSelected) {
    //开始载入--->推荐 
    $(document).ready(function() {
        var table = "news_recommend";
        findAll(table);
    });
    //添加新闻-模块,返回全部功能
    additems;
    //删除新闻-模块,返回全部功能
    deleteitems;
    //修改新闻-模块，,返回全部功能
    edititems;
    //左侧栏目选择事件
    leftBarSelected;

    //---------------退出--------------------
    //显示退出界面
    $(".quit").click(function() {
        $(".mask").css("display", "block");
        $(".masktoquit").css("display", "block");
    });
    //右上关闭按钮
    $(".inner-close").click(function() {
        $(".mask").css("display", "none");
        $(".masktoquit").css("display", "none");
    });
    //返回按钮
    $("#goback").click(function() {
        $(".inner-close").click();
        return;
    });
    //退出按钮并跳转
    $("#quitConfirm").click(function() {
        window.location.href = '../login';
        $(".mask").css("display", "none");
        $(".masktoquit").css("display", "none");
        return;
    });
    
});