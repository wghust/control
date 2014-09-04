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
                    $(".useropcontent").text('');
                    for (i = 0; i < data.profile.length; i++) {
                        var str = "<div class='useroplist' data-target='" + data.profile[i].url + "'><span>标题:" + data.profile[i].title + "</span><br><span>项目名:" + data.profile[i].name + "</span></div>";
                        $(".useropcontent").append(str);
                    }
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