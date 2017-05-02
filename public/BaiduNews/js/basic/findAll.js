define(['jquery', 'createInnerBoxFragment'], function($, createInnerBoxFragment) {


    var offsetback;

    function findAll(table, offset, findNum) {
        //    console.log("findNow::" + table);
        $.ajax({
            type: "get",
            url: "/index/" + table + "/",
            async: false,
            beforeSend: function() {
                $(".loadMore").text("正在加载……");
            },
            data: {
                "table": table,
                "findNum": findNum,
                "offset": offset
            },
            success: function(data) {
                //console.log(data);
                if (data == "") {
                    $(".loadMore").text("已全部加载完毕！");
                    loadMoreFlag = 0;
                    return;
                }
                $(".loadMore").text("点击加载更多");
                //查询成功后offset计数
                offsetback = offset + findNum;
                //console.log("当前offset:" + offsetback);
                //插入返回的新闻html片段,插入在“更多”之前
                createInnerBoxFragment(data, table);
                $(".page-loading").css("display", "none");
            },
            //        complete: function(){
            //
            //            $(".loadMore").text("点击加载更多");
            //        },
            error: function(data) {
                console.log(data);
                console.log("error: " + data.responseText);
            }
        });

        return offsetback;
    }
    return findAll;
});