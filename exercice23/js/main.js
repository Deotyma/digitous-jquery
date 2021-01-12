$(document).ready(function() {
    $(".btn").click(function() {
        $("#square").animate({
                height: '200px',
                width: '200px',
            },
            1000);
    });
});