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
                url: 'sa.kascend.com/auth/info',
                data: data,
                success: function(data, textStatus, jqXHR) {
                    if (jqXHR.status == 200) {

                    } else {
                        fn();
                    }
                },
                dataType: 'json'
            })
        }
    };
});