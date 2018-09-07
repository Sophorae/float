$(".float-box").on("mouseenter", "div", function () { //悬浮窗鼠标滑入
    var className = $(this).attr("class");
    className = className ? className.split(" ")[0] : "";
    if (className == "QR-code") {
        $(this).addClass("active").children(".code-info").stop(true).fadeIn(275);
    } else if (className == "my-collection" || className == "browser-history" || className == "feed-back" || className == "back-top") {
        $(this).addClass("active").children(".slide-text").show().stop(true).animate({
            width: "75px"
        }, 275);
    } else if (className == "contact-number") {
        $(this).addClass("active").children(".slide-text").show().stop(true).animate({
            width: "122px"
        }, 275);
    }
})
$(".float-box").on("mouseleave", "div", function () { //悬浮窗鼠标滑出
    var className = $(this).attr("class")
    className = className ? className.split(" ")[0] : "";
    if (className == "QR-code") {
        $(this).removeClass("active").children(".code-info").stop(true).fadeOut(150);
    } else if (className == "my-collection" || className == "browser-history" || className == "contact-number" || className == "feed-back" || className == "back-top") {
        var this_ = this;
        $(this).children(".slide-text").stop(true).animate({
            width: "0"
        }, 150, function () {
            $(this).hide();
            $(this_).removeClass("active")
        });
    }
})
$(".back-top").on("click", function () { //回到顶部
    $("html, body").animate({
        "scrollTop": "0"
    }, 200)
})
$(".close-info").on("click", function (e) { //关闭悬浮窗
    var evt = window.event ? window.event : e;
    evt.stopPropagation ? evt.stopPropagation() : evt.cancelBubble = true;
    $(".content-info").hide();
    $(".slide-left").removeClass("clicked")
})
function getCookie(key) {
    var cookie = document.cookie;
    if (cookie) {
        var arr = cookie.split("; ");
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i].split("=");
            if (key == item[0]) {
                return item[1]
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}
/* 
<li>
    <a href="url">
        <img src="imgUrl" alt="">
        <div class="car-info">
            <p class="car-name">  carname  </p>
            <p class="car-tips">
                <span>  year  </span>
                |
                <span>  distance  </span>
            </p>
            <p class="car-price">
                price
                <span>万</span>
            </p>
        </div>
    </a>
</li>
格式
{
    url: "",
    imgUrl: "",
    carname: "",
    year: "",
    distance: "",
    price: "",
}
*/
function showCollection() {
    $(".my-collection").addClass("clicked").children(".content-info").show();
    if (getCookie("collection")) {
        var collectionArray = getCookie("collection");
        var html = "";
        collectionArray.forEach(function(currentValue, index, arr) {
            html += `<li>
                        <a href="${currentValue.url}">
                            <img src="${currentValue.imgUrl}" alt="">
                            <div class="car-info">
                                <p class="car-name">${currentValue.carName}</p>
                                <p class="car-tips">
                                    <span>${currentValue.year}</span>
                                    |
                                    <span>${currentValue.distance}</span>
                                </p>
                                <p class="car-price">
                                    ${currentValue.price}
                                    <span>万</span>
                                </p>
                            </div>
                        </a>
                    </li>`
        });
        $(".collection-info .cars-list").html(html);
    } else {
        $(".collection-info .have-info").hide();
        $(".collection-info .no-info").show();
    }
}
function showBrowserHistory() {
    $(".browser-history").addClass("clicked").children(".content-info").show();
    if (getCookie("history")) {
        var historyArray = getCookie("history");
        historyArray.forEach(function(currentValue, index, arr) {
            var collectionArray = getCookie("collection");
            var html = "";
            collectionArray.forEach(function(currentValue, index, arr) {
                html += `<li>
                            <a href="${currentValue.url}">
                                <img src="${currentValue.imgUrl}" alt="">
                                <div class="car-info">
                                    <p class="car-name">${currentValue.carName}</p>
                                    <p class="car-tips">
                                        <span>${currentValue.year}</span>
                                        |
                                        <span>${currentValue.distance}</span>
                                    </p>
                                    <p class="car-price">
                                        ${currentValue.price}
                                        <span>万</span>
                                    </p>
                                </div>
                            </a>
                        </li>`
            });
            $(".collection-info .cars-list").html(html);
        });
    } else {
        $(".history-info .have-info").hide();
        $(".history-info .no-info").show();
    }
}
$(document).on("click", function (e) { // 收藏和历史展示
    var evt = window.event ? window.event : e;
    target = evt.target ? evt.target : evt.originalEvent.srcElement;
    var $el = $(evt.target);
    if ($el.hasClass("my-collection") || $el.parents(".my-collection").length > 0) {
        if ($(".browser-history").hasClass("clicked")) {
            $(".browser-history").removeClass("clicked").children(".content-info").hide();
            showCollection();
        } else {
            showCollection();
        }
    } else if ($el.hasClass("browser-history") || $el.parents(".browser-history").length > 0) {
        if ($(".my-collection").hasClass("clicked")) {
            $(".my-collection").removeClass("clicked").children(".content-info").hide();
            showBrowserHistory();
        } else {
            showBrowserHistory();
        }
    } else {
        $(".slide-left").removeClass("clicked");
        $(".content-info").hide();
    }
})
