$(document).ready(function() {
    var isrun = false;
    var window_height = $(window).height();
    $(".frameweb").css({
        'display': 'none',
        'bottom': '-' + window_height + 'px'
    });
    $(".output").css({
        'height': window_height - 40 + 'px'
    });
    projectop = function() {
        $(".useroplist").click(function() {
            var _this = $(this);
            var nexturl = _this.data('target');
            var _thisround = _this.children(".msg");
            _thisround.css({
                'display': 'inline-block'
            });
            $.ajax({
                type: 'GET',
                url: nexturl,
                success: function(data, textStatus, jqXHR) {
                    _thisround.css({
                        'display': 'none'
                    });
                    projectlistop(data);
                    // console.log(data);
                },
                error: function(data, textStatus, jqXHR) {
                    checkCookie(adminlogin, projectop);
                },
                dataType: 'json'
            });
        });
    };
    projectlistop = function(data) {
        // 置空
        $(".secopcontent").text('');
        $(".sectitle").text('');

        $(".sectitle").html("<span class='back'>返回</span>&nbsp;&nbsp;" + data.name);
        $(".back").click(function() {
            $(".sec").slideUp(200, function() {
                $(".userop").slideDown(200);
            });
        });
        for (i = 0; i < data.profile.length; i++) {
            if (data.name === 'server') {
                var str = "<div class='secdiv' data-target='" + data.url + "'><span class='hostname'>" + data.profile[i].hostname + "</span><span class='ansible_ssh_host'>" + data.profile[i].ansible_ssh_host + "</span></div>";
            } else {
                var str = "<div class='secdiv' data-target='" + data.profile[i].url + "'><span>" + data.profile[i].title + "</span></div>";
            }
            $(".secopcontent").append(str);
        }
        $(".userop").slideUp(200, function() {
            $(".sec").slideDown(200);
        });

        $(".secdiv").click(function() {
            var _this = $(this);
            var _thisurl = _this.data('target');
            // $(".bg").css({
            //     'display': 'block'
            // });
            $(".goback").data({
                'disabled': 'true'
            }).css({
                'opacity': '0.5'
            });
            // $(".goback").attr('disabled', 'disabled');
            if (data.name === 'server') {
                var _this_hostname = _this.children(".hostname").text();
                var _this_ansible_ssh_host = _this.children(".ansible_ssh_host").text();
                isrun = true;
                $(".frameweb").css({
                    'display': 'block'
                });
                $(".cmd").css({
                    'display': 'inline-block'
                });
                $(".newurl").css({
                    'display': 'block'
                });
                $(".frameweb").animate({
                    'bottom': '0'
                }, 300, function() {
                    // $(".output").attr({
                    //     'src': _thisurl
                    // });
                    // serverStop();
                });
                $(".newurl").click(function(e) {
                    var cmd = $(".cmd").val();
                    if (cmd != '') {
                        var _thisnowurl = _thisurl + "?server=" + _this_ansible_ssh_host + "&cmd=" + cmd;
                        $(".output").attr({
                            'src': _thisnowurl
                        });
                        serverStop();
                    }
                    return false;
                });
            } else {
                isrun = true;
                $(".frameweb").css({
                    'display': 'block'
                });
                $(".frameweb").animate({
                    'bottom': '0'
                }, 300, function() {
                    $(".output").attr({
                        'src': _thisurl
                    });
                    serverStop();
                });
            }
            // var iframe = $(".output");
            // if (iframe.attachEvent) {
            //     iframe.attachEvent("onload", function() {
            //         serverStop();
            //     });
            // } else {
            //     iframe.onload = function() {
            //         serverStop();
            //     }
            // }
            // serverStop();
        });
    };

    serverStop = function() {
        $(".output").load(function() {
            console.log("now");
            // $(".goback").removeAttr('disabled');
            $(".goback").data({
                'disabled': 'false'
            }).css({
                'opacity': '1'
            });
            isrun = false;
        });
    };
    $(".goback").click(function(e) {
        var _this = $(this);
        if (_this.data('disabled') === 'false') {
            $(".frameweb").animate({
                'bottom': '-30%'
            }, 300, function() {
                $(".frameweb").css({
                    'bottom': '-100%'
                });
                // $(".bg").css({
                //     'display': 'none'
                // });
                $(".output").attr({
                    'src': ''
                });
                $(".cmd").css({
                    'display': 'none'
                });
                $(".newurl").css({
                    'display': 'none'
                });
            });
        }
        return false;
    });
    showbackdata = function(data) {
        console.log(data);
    };
    checkCookie(adminlogin, projectop);
});