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
            $.post("http://sa.kascend.com/auth/login", {
                'username': username,
                'password': password
            }, function(callback) {
                console.log(callback);
            });
        });
    }
    // }
});