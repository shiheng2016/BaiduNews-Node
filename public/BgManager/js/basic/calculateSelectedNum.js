define(['jquery', 'convert2table','findRightItem','convert2selected'], function($, convert2table,findRightItem,convert2selected) {
    //计算选中的新闻数目，在 推荐 旁边。
    function calculateSelectedNum() {
        var tablename = convert2table();
        var tab_item = findRightItem(tablename);
        var selected = convert2selected(tablename);
        var num = selected.length;
        //设置num值
        $("." + tab_item).find(".selectedItemNum").text(num);
    }
    return calculateSelectedNum;
});