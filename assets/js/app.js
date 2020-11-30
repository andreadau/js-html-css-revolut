$(function() {
    
$(".dropdown > a").mouseenter(function () { 
    $(".dropdown-menu").removeClass("d-block");
    $(this).next(".dropdown-menu").addClass("d-block");
});

$(".dropdown").mouseleave(function () { 
    $(this).next(".dropdown-menu").addClass("d-block");
    $(".dropdown-menu").removeClass("d-block");
});


});