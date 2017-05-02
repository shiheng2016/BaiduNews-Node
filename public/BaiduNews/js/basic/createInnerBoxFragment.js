define(['jquery', 'time2Units'], function($, time2Units) {
    //将返回的json转化为html片段
    function createInnerBoxFragment(data, table) {
        var innerBoxHTML = "";
        $.each(data, function(index, value) {
            // alert(index);
            var title = $(value).attr("title");
            var img_url = $(value).attr("img_url");
            var content = $(value).attr("content");
            var from = $(value).attr("from");
            var time = $(value).attr("time");
            time = time.substring(0, 19).replace("T", " ");
            var newsdate = new Date(time);
            var datanow = new Date();
            //8小时的时间差，北京时间
            var differ = datanow.getTime() - 8 * 3600 * 1000 - newsdate.getTime();
            time = time2Units(differ) + "前";
            innerBoxHTML += '<div class="newsInnerBox"><div class="newsInnerBox_img"><img src="' + img_url +
                '"></div><div class="newsInnerBox_right"><div class="newsInnerBox_right_text"><div class="newsInnerBox_title">' + title +
                '</div><div class="newsInnerBox_content">' + content +
                '</div></div></div><div class="newsInnerBox_time_from"><span class="newsInnerBox_time">' + time +
                '</span><span class="newsInnerBox_from">' + from +
                '</span></div></div>';
        });
        $(".selected").find(".loadMore").before(innerBoxHTML);
    }
    return createInnerBoxFragment;
});