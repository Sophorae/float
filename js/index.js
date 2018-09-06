$(".float-box").on("mouseenter", "div", function() {
    var className = $(this).attr("class");
    className = className ? className.split(" ")[0] : "";
    if (className == "QR-code") {
        $(this).addClass("active")
        $(this).children(".code-info").stop(true).fadeIn(275);
    } else if (className == "my-collection" || className == "browser-history" || className == "feed-back" || className == "back-top") {
        $(this).addClass("active")
        $(this).children(".slide-info").show().stop(true).animate({
            width: "75px"
        }, 275);
    } else if(className == "contact-number") {
        $(this).addClass("active");
        $(this).children(".slide-info").show().stop(true).animate({
            width: "122px"
        }, 275);
    }
})
$(".float-box").on("mouseleave", "div", function() {
    var className = $(this).attr("class")
    className = className ? className.split(" ")[0] : "";
    if (className == "QR-code") {
        $(this).removeClass("active")
        $(this).children(".code-info").stop(true).fadeOut(150);
    } else if (className == "my-collection" || className == "browser-history" || className == "contact-number" || className == "feed-back" || className == "back-top") {
        var this_ = this;
        $(this).children(".slide-info").stop(true).animate({
            width: "0"
        }, 150, function() {
            $(this).hide();
            $(this_).removeClass("active")
        });
    }
})
$(".back-top").on("click", function() {
    $("html, body").animate({
        "scrollTop": "0"
    }, 200)
})
$(".float-box").children("div").on("click", function() {
    if ($(this).attr("data-info") == "info") {
        $(".slide-left").removeClass("clicked")
        $(".content-info").fadeOut(150);
        $(this).addClass("clicked")
        $(this).children(".content-info").fadeIn(275);
    } else {
        $(".slide-left").removeClass("clicked")
        $(".content-info").fadeOut(150);
    }
})
$(".close-info").on("click", function(e) {
    var evt = window.event ? window.event : e;
    evt.stopPropagation ? evt.stopPropagation() : evt.cancelBubble = true;
    $(".content-info").fadeOut(150);
    $(".slide-left").removeClass("clicked")
})
$(document).on("click", "", function(e) {
    var evt = window.event ? window.event : e;
    var $el = $(evt.target);
    if($el.hasClass("my-collection") || $el.hasClass("browser-history") || $el.parents(".my-collection").length > 0 || $el.parents(".browser-history").length > 0) {

    } else {
        $(".slide-left").removeClass("clicked")
        $(".content-info").fadeOut(150);
    }
})
