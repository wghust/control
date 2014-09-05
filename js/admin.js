$(document).ready(function() {
    adminlogin = function() {
        var sacookie = $.cookie('sa');

        // alert(sacookie);
        // $.cookie('sa', '');
        // if (sacookie == '' || sacookie == null) {
        // $.cookie('sa', '123');
        // $(".admin").css({
        //     'display': 'block'
        // });
        $(".admin").css({
            'display': 'inline-block'
        });
        $(".admin").animate({
            'display': 'inline-block',
            'left': '0'
        }, 1000);
        $(".submitadmin").click(function() {
            var username = $('.username').val();
            var password = $('.password').val();
            var data = {
                'username': username,
                'password': password
            };
            $(".submitadmin").val("登陆中");
            $.ajax({
                type: 'POST',
                url: 'http://sa.kascend.com/auth/login',
                data: data,
                success: function(data) {
                    // console.log(data);
                    // var data = data;
                    // console.log(data);
                    // console.log(data.name);
                    $(".submitadmin").val("登录成功!");
                    $(".admin").css({
                        'display': 'none'
                    });
                    $(".admin").animate({
                        'left': '100%'
                    }, 1000);
                    $(".user_name").text(data.name);
                    $(".useropcontent").text('');
                    for (i = 0; i < data.profile.length; i++) {
                        var str = "<div class='useroplist' data-target='" + data.profile[i].url + "'><span>" + data.profile[i].title + "</span><span class='msg'><img src='imgs/hc.gif'></span></div>";
                        $(".useropcontent").append(str);
                    }
                    setTimeout(function() {
                        $(".submitadmin").val("登录");
                    }, 1000);
                    projectop();
                },
                error: function() {
                    $(".submitadmin").val("账户密码错误!");
                    setTimeout(function() {
                        $(".submitadmin").val("登录");
                    }, 1000);
                },
                dataType: 'json'
            }, 'json');
        });
    }
    // }
});