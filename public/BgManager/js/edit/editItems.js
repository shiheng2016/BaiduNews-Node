//------------------修改-------------------------------------
define(['convert2table', 'convert2selected', 'findRightItem','findAll'], function(convert2table, convert2selected, findRightItem,findAll) {
    //修改新闻的ID
    var editNewsID;
    return {
        showBox: (
            //显示修改画面
            $(".edititems").click(function() {
                //判断选中修改的个数，如果是多个或者没有则提示
                var tablename = convert2table();
                var selected = convert2selected(tablename);
                if (selected.length == 0) {
                    alert("请选择需要修改的新闻！");
                    return;
                }
                if (selected.length > 1) {
                    alert("一次只能修改一条新闻！");
                    return;
                }

                var tab_item = findRightItem(tablename);
                //找到被选中的那条新闻的标题 th 集合
                var titles = $("." + tab_item).find(".content-item-id.selected").parent().parent().find(".context-item-title");
                //找到修改的新闻ID
                editNewsID = $("." + tab_item).find(".content-item-id.selected").text();
                //根据栏目标题添加新闻内容 
                titles.each(function() {
                    if ($(this).text() == " 新闻标题") {
                        $("#editTitle").val($(this).next("td").text());
                    }
                    if ($(this).text() == " 图片地址") {
                        $("#editImg_url").val($(this).next("td").text());
                    }
                    if ($(this).text() == " 新闻内容") {
                        $("#editContent").val($(this).next("td").text());
                    }
                    if ($(this).text() == " 新闻日期") {
                        $("#editTime").val($(this).next("td").text());
                    }
                    if ($(this).text() == " 新闻来源") {
                        $("#editFrom").val($(this).next("td").text());
                    }
                });
                $(".mask").css("display", "block");
                $(".masktoedititems").css("display", "block");
                var leftitems = $(".clear-backend").children(".focused").next().text();
                $(".masktoedititems").find(".innerHdItemsName").text(leftitems);

            })
        ),
        closeBox: (
            //右上角关闭按钮
            $(".inner-close").click(function() {
                $(".mask").css("display", "none");
                $(".masktoedititems").css("display", "none");
            })),
        submitConfirm: (
            //提交修改按钮
            $("#submitOfEditItems").click(function() {
                var tablename = convert2table();
                var id = editNewsID;
                var title = $("#editTitle").val();
                var img_url = $("#editImg_url").val();
                var content = $("#editContent").val();
                var time = $("#editTime").val();
                var from = $("#editFrom").val();

                if (title == "" || title == "undefined" ||
                    img_url == "" || img_url == "undefined" ||
                    content == "" || content == "undefined" ||
                    time == "" || time == "undefined" ||
                    from == "" || from == "undefined"
                ) {
                    $(".editConfirm").text("所填内容不能为空！");
                    setTimeout(function() {
                        //提示内容清除
                        $(".editConfirm").text("");
                    }, 1000);
                    return;
                }

                $.ajax({
                    type: "post",
                    url: "./" + tablename + "/edit",
                    data: {
                        "table": tablename,
                        "id": id,
                        "title": title,
                        "img_url": img_url,
                        "content": content,
                        "time": time,
                        "from": from
                    },
                    success: function(data) {
                        //刷新当前的右边栏
                        if (data) {
                            findAll(tablename);
                            $(".editConfirm").text("修改成功，正在返回……");
                            setTimeout(function() {
                                //close
                                $(".mask").css("display", "none");
                                $(".masktoedititems").css("display", "none");
                                $(".editConfirm").text("");
                            }, 100);
                        } else {
                            $(".editConfirm").text("修改失败！");
                            setTimeout(function() {
                                $(".editConfirm").text("");
                            }, 100);
                        }

                    }
                });
            }))
    }
});