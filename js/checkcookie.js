$(document).ready(function() {
    //确认Cookie函数
    checkCookie = function(fn) {
        var sa = $.cookie('sa');
        if (sa == '' || sa == null) {
            fn();
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
                },
                error: function(error) {
                    // console.log(jqXHR);
                    fn();
                },
                dataType: 'json'
            })
        }
    };
});