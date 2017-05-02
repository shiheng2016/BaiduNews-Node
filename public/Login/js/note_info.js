define(['jquery'], function($) {
    //信息提示
    function note_info(info) {
        //        alert(info);
        $("#login-Tips").html(info);
        $("#login-Tips").animate({
            top: '0px'
        }, "slow");
        setTimeout(function() {
            $("#login-Tips").animate({
                top: '-20px'
            }, "slow");
        }, 3000);
    }

    return note_info;
});