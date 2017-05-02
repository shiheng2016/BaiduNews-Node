define(function() {
    //根据table的名字找到右侧专栏的class name
    //table-->右边栏目class标志
    function findRightItem(table) {
        if (table == "news_recommend") {
            return "tab-item-1"
        }
        if (table == "news_baijia") {
            return "tab-item-2"
        }
        if (table == "news_local") {
            return "tab-item-3"
        }
        if (table == "news_internet") {
            return "tab-item-4"
        }
        if (table == "news_science") {
            return "tab-item-5"
        }
        if (table == "news_woman") {
            return "tab-item-6"
        }
        if (table == "news_picture") {
            return "tab-item-7"
        }
        if (table == "news_military") {
            return "tab-item-8"
        }
        if (table == "news_society") {
            return "tab-item-9"
        }
        if (table == "news_entertainment") {
            return "tab-item-10"
        }
    }

    return findRightItem;
});