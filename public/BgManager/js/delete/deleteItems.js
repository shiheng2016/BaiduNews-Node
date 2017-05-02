//------------------删除-------------------------------------
define(['convert2selected','convert2table','findAll'], function(convert2selected,convert2table,findAll) {
    return {
        showBox: (
            //删除按钮，显示删除的画面，搜集需要显示及提示的消息
            $(".deleteitems").click(function() {
                $(".mask").css("display", "block");
                $(".masktodeleteitems").css("display", "block");
                var leftitems = $(".clear-backend").children(".focused").next().text();
                $(".masktodeleteitems").find(".innerHdItemsName").text(leftitems);
                var selected = convert2selected(convert2table());
                var num = selected.length;
                if (num == 0) {
                    //提示"如果要删除新闻请先选定！"，将下方的两个按钮设为禁止
                    $(".deleteConfirm").text("如果要删除新闻请先选定！");
                    $("#needReEdit").attr("disabled", "disabled");
                    $("#deleteConfirm").attr("disabled", "disabled");
                    return;
                } else {
                    //提示"确定要删除选定的"+num+"项吗？"
                    $(".deleteConfirm").html("确定要删除选定的&nbsp;" + num + "&nbsp;项吗？");
                }
            })),
        closeBox: (
            //右上角关闭按钮
            $(".inner-close").click(function() {
                $(".mask").css("display", "none");
                $(".masktodeleteitems").css("display", "none");
                //移除按钮的disable按钮
                $("#needReEdit").removeAttr("disabled");
                $("#deleteConfirm").removeAttr("disabled");
                //清楚删除提示框的消息
                $(".deleteConfirm").text("");
            })
        ),
        submitConfirm: (
            //如果选中“确认删除”则提交删除数据
            $("#deleteConfirm").click(function() {
                //选中需要删除的信息集合--selected
                var tablename = convert2table();
                var selected = convert2selected(tablename);

                //需要传递要删除的新闻id，和table表名tablename
                var idsDel = '';
                var delItem = 0;
                selected.each(function() {
                    idsDel = (idsDel + $(this).find("span").text()) + (((delItem + 1) == selected.length) ? '' : ',')
                    delItem++;
                });

//                console.log(idsDel);
                $.ajax({
                    type: "post",
                    url: "./" + tablename + "/delete",
                    data: {
                        "table": tablename,
                        "idsDel": idsDel
                    },
                    success: function(data) {
                        if (data) {
                            //刷新当前的右边栏
                            findAll(tablename);
                            //提示"删除成功"
                            $(".deleteConfirm").html("删除成功！正在返回……");
                            setTimeout(function() {
                                //close
                                $(".mask").css("display", "none");
                                $(".masktodeleteitems").css("display", "none");
                            }, 100);
                        } else {
                            $(".deleteConfirm").html("删除失败！");
                        }

                    }
                });
            })

        ),
        needReEdit: (
            //如果选中“还需要修改”则返回
            $("#needReEdit").click(function() {
                $(".inner-close").click();
                return;
            })
        )
    }
});
