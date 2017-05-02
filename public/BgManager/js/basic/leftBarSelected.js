define(['findAll', 'findTableName'], function(findAll, findTableName) {
    return {
        leftBarSelected: (
            //左边边栏选择后添加focused类，并刷新右边的边栏
            $(".clear-backend").children("input").click(function() {
                var _this = $(this);
                _this.siblings().removeClass("focused");
                _this.addClass("focused");
                var leftitemsname = _this.next().text();
                var table = findTableName(leftitemsname);
                //查找右侧边栏的内容
                findAll(table);
                //当前选中的新闻数目改为0
                $(".selectedItemNum").text(0);
            }))
    }
});