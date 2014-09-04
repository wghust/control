$(document).ready(function() {
    adminlogin = function() {
        var sacookie = $.cookie('sa');

        // alert(sacookie);
        // $.cookie('sa', '');
        // if (sacookie == '' || sacookie == null) {
        // $.cookie('sa', '123');
        $(".admin").css({
            'display': 'block'
        });
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
                    console.log(data);
                    $(".submitadmin").val("登录成功!");
                    $(".admin").css({
                        'display': 'none'
                    });
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