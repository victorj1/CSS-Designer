/**
 * Created by USALNVI on 14.03.2017.
 */
jQuery(function ($) {
    var css_reveal_main = $(".main_region--code");
    var btn = $("#css_code_reveal_control");

    var cnt = 1;
    btn.on("click", function () {
        switch (cnt % 2 != 0) {
            case true:
                css_reveal_main.animate({
                   width: "20%"
                }, 200);
                $(".main_region--changing_text").animate({
                    width: "80%"
                }, 200);
                $(this)
                    .html("Increase");
                break;
            case false:
                css_reveal_main.animate({
                   width: "35%"
                }, 200);
                $(".main_region--changing_text").animate({
                    width: "65%"
                }, 200);
                $(this)
                    .html("Decrease");
                break;
        }
        cnt++;
    })
});