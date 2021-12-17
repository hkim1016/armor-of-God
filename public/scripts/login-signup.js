$(".signup-form").hide();
$(".login").css("background", "#F5F3F3");

$(".login").click(() => {
    $(".signup-form").hide();
    $(".login-form").show();
    $(".signup").css("background", "none");
    $(".login").css("background", "#F5F3F3");
    $(".signup-form input").val("");
});

$(".signup").click(() => {
    $(".signup-form").show();
    $(".login-form").hide();
    $(".login").css("background", "none");
    $(".signup").css("background", "#F5F3F3");
    $(".login-form input").val("");
});

// checks if values for password and confirm password for signing up are the same
$("#signup-password, #confirm-password").on('keyup', () => {
    if($("#signup-password").val() != $("#confirm-password").val()) {
        $("#signup-message").html("Passwords do not match").css({"color": "red"});
        document.getElementById('signup').disabled = true;
    }

    if($("#signup-password").val() == $("#confirm-password").val()) {
        $("#signup-message").html("")
        document.getElementById('signup').disabled = false;
    }
});