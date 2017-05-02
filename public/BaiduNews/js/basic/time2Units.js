define(function() {
    function time2Units(time) {
        var year = Math.floor(time / 60 / 60 / 24 / 365 / 1000);
        time -= year * 60 * 60 * 24 * 365;
        var month = Math.floor(time / 60 / 60 / 24 / 30 / 1000);
        time -= month * 60 * 60 * 24 * 30;
        var week = Math.floor(time / 60 / 60 / 24 / 7 / 1000);
        time -= week * 60 * 60 * 24 * 7;
        var day = Math.floor(time / 60 / 60 / 24 / 1000);
        time -= day * 60 * 60 * 24;
        var hour = Math.floor(time / 60 / 60 / 1000);
        time -= hour * 60 * 60;
        var minute = Math.floor(time / 60 / 1000);
        time -= minute * 60;
        var second = Math.floor(time / 1000);
        var elapse = '';

        var chinese = new Array('年', '个月', '周', '天', '小时', '分钟', '秒');
        var value = new Array(year, month, week, day, hour, minute, second);

        for (var i = 0; value.length > i; i++) {
            if (value[i] > 0) {
                elapse = value[i] + chinese[i];
                break;
            }
        }
        return elapse;
    }
    return time2Units;
});