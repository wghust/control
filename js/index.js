$(document).ready(function() {
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
                    adminlogin();
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
            $(".sec").slideUp(1000, function() {
                $(".userop").slideDown(1000);
            });
        });

        for (i = 0; i < data.profile.length; i++) {
            var str = "<div class='secdiv' data-target='" + data.profile[i].url + "'><span>" + data.profile[i].title + "</span></div>";
            $(".secopcontent").append(str);
        }
        $(".userop").slideUp(1000, function() {
            $(".sec").slideDown(1000);
        });
        $(".secdiv").click(function() {
            var _this = $(this);
            var _thisurl = _this.data('target');
            var _thisnowurl = _thisurl.substring(4, _thisurl.length);
            var wsServer = 'ws' + _thisnowurl;
            var websocket = new WebSocket(wsServer);
            websocket.onopen = function(evt) {
                onOpen(evt);
            };
            websocket.onclose = function(evt) {
                onClose(evt);
            };
            websocket.onmessage = function(evt) {
                onMessage(evt);
            };
            websocket.onerror = function(evt) {
                onerror(evt);
            };
            onopen = function(evt) {
                console.log(evt);
            };
            onclose = function(evt) {
                console.log(evt);
            };
            onmessage = function(evt) {
                console.log(evt.data + '\n');
            };
            onerror = function(evt) {
                console.log(evt);
            };
            // $.ajax({
            //     type: 'GET',
            //     url: _thisurl,
            //     success: function(data, textStatus, jqXHR) {
            //         showbackdata(data);
            //     },
            //     error: function(data, textStatus, jqXHR) {

            //     },
            //     dataType: 'json'
            // })
        });
    };

    showbackdata = function(data) {
        console.log(data);
    };
    checkCookie(adminlogin, projectop);
});