requirejs.config({
    baseUrl: 'js',
    paths: {
        login_main: 'login_main',
        jquery: 'jquery-2.1.1.min',
        note_info: 'note_info',
        enter_submit: 'enter_submit'
    }
});

//主入口
requirejs(['jquery', 'note_info', 'enter_submit'],
    function($, note_info, enter_submit) {
        //登录
        $("#login-button").click(function(event) {
            event.preventDefault();
            var username = $("#username").val();
            var password = $("#password").val();
            if (username == "" || username == "undefined") {
                // alert("");
                note_info("用户名不能为空！");
                $("#username").focus();
                return;
            }

            if (password == "" || password == "undefined") {
                note_info("密码不能为空！");
                $("#password").focus();
                return;
            }

            $.ajax({
                type: "post",
                //信息提交地址
                url: "./doLogin",
                //        async:false,
                data: {
                    "username": username,
                    "password": password
                },
                success: function(data) {
                    // console.log(data);
                    if (data == true) {
                        //跳转地址
                        setTimeout(function() {
                            window.location.href = '/BgManager';
                            // window.location.href = 'http://www.baidu.com';
                        }, 2000);
                        $('.form').fadeOut(500);
                        $('.wrapper').addClass('form-success');

                    } else {
                        $("#password").val("");
                        $("#password").focus();
                        note_info("用户名或密码错误!");
                    }
                }
            });
        });
        //回车键触发提交
        enter_submit;

    });
