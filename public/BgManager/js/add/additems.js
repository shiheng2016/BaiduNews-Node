//--------------增加----------------------------
define(['jquery','convert2table','findAll'], function($,convert2table,findAll) {
    return {
        showBox: (
            //显示添加新闻的画面
            $(".additems").click(function() {
                $(".mask").css("display", "block");
                $(".masktoadditems").css("display", "block");
                var leftitems = $(".clear-backend").children(".focused").next().text();

                $(".masktoadditems").find(".innerHdItemsName").text(leftitems);

                //清空之前输入的内容。
                var timenow = new Date();
                var string = timenow.getFullYear() + "-" + (timenow.getMonth() + 1) + "-" + timenow.getDate() + " " + timenow.getHours() + ":" + timenow.getMinutes() + ":" + timenow.getSeconds();
                // alert(string);
                $("#title").val("");
                $("#content").val("");
                $("#img_url").val("");
                $("#time").val(string);
                $("#from").val("");
            })
        ),
        closeBox: (
            //点击右上角关闭按钮
            $(".inner-close").click(function() {
                $(".mask").css("display", "none");
                $(".masktoadditems").css("display", "none");
            })
        ),
        submitConfirm: (
            //提交添加的新闻
            $("#submitOfAddItems").click(function() {
                var tablename = convert2table();
                var title = $("#title").val();
                var img_url = $("#img_url").val();
                var content = $("#content").val();
                var time = $("#time").val();
                var from = $("#from").val();
                if (title == "" || title == "undefined" ||
                    img_url == "" || img_url == "undefined" ||
                    content == "" || content == "undefined" ||
                    time == "" || time == "undefined" ||
                    from == "" || from == "undefined"
                ) {
                    $(".addConfirm").text("所填内容不能为空！");
                    setTimeout(function() {
                        //内容清除
                        $(".addConfirm").text("");
                    }, 1000);
                    return;
                }
                $.ajax({
                    type: "post",
                    url: "./" + tablename + "/add",
                    data: {
                        "table": tablename,
                        "title": title,
                        "img_url": img_url,
                        "content": content,
                        "time": time,
                        "from": from
                    },
                    success: function(data) {
                        //刷新右边栏
                        findAll(tablename);
                        $(".addConfirm").text("添加成功，正在返回……");
                        setTimeout(function() {
                            //close
                            $(".mask").css("display", "none");
                            $(".masktoadditems").css("display", "none");
                            $(".addConfirm").text("");
                        }, 100);
                    }
                });
            })
        )
    }
});
