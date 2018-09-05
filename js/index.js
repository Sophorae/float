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
        $(".content-info").hide();
        $(this).addClass("clicked")
        $(this).children(".content-info").show();
    } else {
        $(".slide-left").removeClass("clicked")
        $(".content-info").hide();
    }
})
$(".close-info").on("click", function(e) {
    var evt = window.event ? window.event : e.originalEvent;
    evt.stopPropagation ? evt.stopPropagation() : evt.cancelBubble = true;
    $(".content-info").hide();
    $(".slide-left").removeClass("clicked")
})
