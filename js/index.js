$(document).ready(function() {
    checkCookie(adminlogin, projectop);

    projectop = function() {
        $(".useroplist").click(function() {
            alert($(this).children('span').eq(0).text());
        });
    };
});