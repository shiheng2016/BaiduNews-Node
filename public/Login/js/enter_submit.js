define(['jquery'], function($) {
    var enter_submit = $(function() {
        $("body").keydown(function(event) {
            if (event.keyCode == "13") {
                //keyCode=13是回车键
                $('#login-button').click();
            }
        });
    });
    return enter_submit;
});