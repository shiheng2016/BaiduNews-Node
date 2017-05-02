define(['jquery', 'calculateSelectedNum','createInnerBoxFragment'], function($, calculateSelectedNum,createInnerBoxFragment) {

    //查找所有
    function findAll(table) {
        $.ajax({
            type: "get",
            //同步请求
            async: false,
            //用表名当url参数
            url: "/BgManager/" + table,
            // data: {
            //     "table": table
            // },
            success: function(data) {
                // console.log(data);
                createInnerBoxFragment(data, table);
            }
        });
        //动态添加的类，需要同步ajax，之后抛出它的选择器事件
        var contentitemid = $(".content-item-id").click(function() {
            var _this = $(this);
            _this.toggleClass("selected");
            calculateSelectedNum();
        });
        return contentitemid;
    }

    return findAll;
});