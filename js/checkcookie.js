$(document).ready(function() {
    //确认Cookie函数
    checkCookie = function(fn) {
        var sa = $.cookie('sa');
        if (sa == '' || sa == null) {
            fn();
        } else {
            var data = {
                'sa': sa
            };
            $.ajax({
                type: 'POST',
                url: 'http://sa.kascend.com/auth/info',
                data: data,
                success: function(data, textStatus, jqXHR) {
                    if (jqXHR.status == 200) {

                    } else {
                        fn();
                    }
                },
                error: function(error, jqXHR) {
                    console.log(jqXHR);
                },
                dataType: 'json'
            })
        }
    };
});