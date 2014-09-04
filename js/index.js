$(document).ready(function() {
    checkCookie(adminlogin);

    $(".useroplist").click(function() {
        alert($(this).children('span').eq(0).text());
    });
});