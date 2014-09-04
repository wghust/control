$(document).ready(function() {
    projectop = function() {
        $(".useroplist").click(function() {
            alert($(this).children('span').eq(0).text());
        });
    };
    checkCookie(adminlogin, projectop);
});