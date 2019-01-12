/**
 * Created by USALNVI on 14.03.2017.
 */
jQuery(function ($) {
    function openTab(e, tab) {
        var i, tabcontent, tablinks;

        $(".tabcontent").css("display", "none");
        $(".tablinks").removeClass("active").css("background-color", "#ccc");

        $("." + tab).css("display", "flex");
        $("#" + tab).addClass("active").css("background-color", "#455a64");
    }

    $("#gen_style, #f_form, #t_form, #b_s, #t_s, #bord, #opac").on("click", function (e) {
        openTab(e, $(this).attr("id"));
    });

});
