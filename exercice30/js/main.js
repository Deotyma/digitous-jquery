$(document).ready(function() {
    $("input").keydown(function() {
        if ($("input").val().length < 5) {
            $("input").addClass("is-invalid");
        } else {
            $("input").removeClass("is-invalid");
            $("input").addClass("is-valid");
        }
    });
});