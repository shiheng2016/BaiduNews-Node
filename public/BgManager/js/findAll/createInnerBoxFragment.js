define(['jquery', 'findRightItem'], function($, findRightItem) {
    //将返回的json转化为html片段
    function createInnerBoxFragment(data, table) {
        var innerBoxHTML = "";
        $.each(data, function(index, value) {
            // alert(index);
            var id = $(value).attr("id");
            var title = $(value).attr("title");
            var img_url = $(value).attr("img_url");
            var content = $(value).attr("content");
            var from = $(value).attr("from");
            var time = $(value).attr("time");
            time = time.substring(0, 19).replace("T", " ");

            innerBoxHTML += '<div class="content-innerbox"><table class="table-position" border="1"><tbody><tr><td rowspan="4" scope="row" class="content-item-id"><span class="itemid">' +
                id + '</span></th><th class="context-item-title"><span class="fa fa-server"></span> 新闻标题</th><td class="context-item-contant1" colspan="3">' +
                title + '</td></tr><tr><th class="context-item-title"><span class="fa fa-image"></span> 图片地址</th><td class="context-item-contant1" colspan="3">' +
                img_url + '</td></tr><tr><th class="context-item-title"><span class="fa fa-bars"></span> 新闻内容</th><td class="context-item-contant1" colspan="3">' +
                content + '</td></tr><tr><th class="context-item-title"><span class="fa fa-calendar"></span> 新闻日期</th><td class="newsTime">' +
                time + '</td><th class="context-item-title"><span class="fa fa-cart-arrow-down"></span> 新闻来源</th><td class="newsFrom">' +
                from + '</td></tr></tbody></table></div>';
        });
        $("." + findRightItem(table)).children(".content-box").html(innerBoxHTML);
    }


    return createInnerBoxFragment;
});