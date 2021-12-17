$(".signup-form").hide();
$(".login").css("background", "#F5F3F3");

$(".signup").hover(() => {
    $("this").css("background-color", "#F5F3F3");
});

$(".login").hover(() => {
    $("this").css("background-color", "#F5F3F3");
});

$(".login").click(() => {
    $(".signup-form").hide();
    $(".login-form").show();
    $(".signup").css("background", "none");
    $(".login").css("background", "#F5F3F3");
    $(".signup-form input").val("");
    // $(".signup").css("border-radius", "0px");
    // $(".login").css("border-radius", "30px");
});

$(".signup").click(() => {
    $(".signup-form").show();
    $(".login-form").hide();
    $(".login").css("background", "none");
    $(".signup").css("background", "#F5F3F3");
    $(".login-form input").val("");
    // $(".signup").css("border-radius", "30px");
    // $(".login").css("border-radius", "0px");
});

$("#email").keyup(() => {
    $("#message").html("lakshdf").css("color", "red");
    // alert("kljhasdf");
});