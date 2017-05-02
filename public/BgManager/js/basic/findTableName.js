define(function() {
    //更具左边汉字的名字找到对应的Table的名字；
    //左边汉字-->table
    function findTableName(leftitemsname) {

        if (leftitemsname == "推荐") {
            return "news_recommend";
        }
        if (leftitemsname == "百家") {
            return "news_baijia";
        }
        if (leftitemsname == "本地") {
            return "news_local";
        }
        if (leftitemsname == "互联网") {
            return "news_internet";
        }
        if (leftitemsname == "科技") {
            return "news_science";
        }
        if (leftitemsname == "女人") {
            return "news_woman";
        }
        if (leftitemsname == "图片") {
            return "news_picture";
        }
        if (leftitemsname == "军事") {
            return "news_military";
        }
        if (leftitemsname == "社会") {
            return "news_society";
        }
        if (leftitemsname == "娱乐") {
            return "news_entertainment";
        }

    }
    
    return findTableName;
});