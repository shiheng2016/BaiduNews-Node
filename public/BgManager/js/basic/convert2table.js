define(['jquery', 'findTableName'], function($, findTableName) {
    //找到当前选中的table，返回tablename
    function convert2table() {
        var tablename;
        var leftitemsname = $(".clear-backend").children("input.focused").next().text();
        tablename = findTableName(leftitemsname);
        return tablename;
    }
    return convert2table;
});