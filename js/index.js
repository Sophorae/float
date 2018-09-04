/* $(".QR-code").on("mouseenter", function() {
    $(this).addClass("active")
    $(this).children("div").stop(true).fadeIn(150);
})
$(".QR-code").on("mouseleave", function() {
    $(this).removeClass("active")
    $(this).children("div").stop(true).fadeOut(150);
})
$(".my-collection, .browser-history").on("mouseenter", function() {
    $(this).addClass("active")
    $(this).children("div").show().stop(true).animate({
        width: "75px"
    }, 150);
})
$(".my-collection, .browser-history").on("mouseleave", function() {
    var this_ = this;
    $(this).children("div").stop(true).animate({
        width: "0"
    }, 150, function() {
        $(this).hide();
        $(this_).removeClass("active")
    });
}) */

$(".float-box").on("mouseenter", "div", function() {
    var className = $(this).attr("class");
    className = className ? className.split(" ")[0] : "";
    if (className == "QR-code") {
        $(this).addClass("active")
        $(this).children("div").stop(true).fadeIn(275);
    } else if (className == "my-collection" || className == "browser-history" || className == "feed-back" || className == "back-top") {
        $(this).addClass("active")
        $(this).children("div").show().stop(true).animate({
            width: "75px"
        }, 275);
    } else if(className == "contact-number") {
        $(this).addClass("active");
        $(this).children("div").show().stop(true).animate({
            width: "122px"
        }, 275);
    }
})
$(".float-box").on("mouseleave", "div", function() {
    var className = $(this).attr("class")
    className = className ? className.split(" ")[0] : "";
    if (className == "QR-code") {
        $(this).removeClass("active")
        $(this).children("div").stop(true).fadeOut(150);
    } else if (className == "my-collection" || className == "browser-history" || className == "contact-number" || className == "feed-back" || className == "back-top") {
        var this_ = this;
        $(this).children("div").stop(true).animate({
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