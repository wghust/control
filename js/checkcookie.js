$(document).ready(function() {
    //确认Cookie函数
    checkCookie = function(fn, fn2) {
        var sa = $.cookie('sa');
        if (sa == '' || sa == null) {
            fn(fn2);
        } else {
            // var data = {
            //     'sa': sa
            // };

            $.ajax({
                type: 'GET',
                url: 'http://sa.kascend.com/auth/info',
                success: function(data, textStatus, jqXHR) {
                    // dataop(data);
                    // console.log(data);
                    var data = data;
                    $(".userifm .user_name").text(data.name);
                    $(".useropcontent").text('');
                    for (i = 0; i < data.profile.length; i++) {
                        var str = "<div class='useroplist' data-target='" + data.profile[i].url + "'><span>" + data.profile[i].title + "</span><span class='msg'><img src='../imgs/hc.gif'></span></div>";
                        $(".useropcontent").append(str);
                    }
                    fn2();
                },
                error: function(error) {
                    // console.log(jqXHR);
                    fn(fn2);
                },
                dataType: 'json'
            })
        }
    };
});