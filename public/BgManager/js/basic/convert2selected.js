define(['jquery', 'findRightItem'], function($, findRightItem) {
    //传入tablename，找到被选中的新闻 selected
    function convert2selected(tablename) {
        var tab_item = findRightItem(tablename);
        //    alert(a);
        var selected = $("." + tab_item).find(".content-item-id.selected");
        return selected;
    }
    return convert2selected;
});