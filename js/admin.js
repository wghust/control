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
        $(".admin").animate({
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
                    var data = data;
                    $(".submitadmin").val("登录成功!");
                    $(".admin").animate({
                        'left': '100%'
                    }, 1000);
                    $(".userifm .user_admin").text(data.name);
                },
                error: function() {
                    $(".submitadmin").val("账户密码错误!");
                },
                dataType: 'json'
            });
        });
    }
    // }
});