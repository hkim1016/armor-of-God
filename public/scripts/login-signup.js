$(".signup-form").hide();
$(".signup").css("background", "#fff");

$(".login").click(() => {
    $(".signup-form").hide();
    $(".login-form").show();
    $(".signup").css("background", "#fff");
    $(".login").css("background", "#F5F3F3");
    $(".signup").css("border-radius", "0px");
    $(".login").css("border-radius", "30px");
});

$(".signup").click(() => {
    $(".signup-form").show();
    $(".login-form").hide();
    $(".login").css("background", "#fff");
    $(".signup").css("background", "#F5F3F3");
    $(".signup").css("border-radius", "30px");
    $(".login").css("border-radius", "0px");
});