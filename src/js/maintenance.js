/**
 * Created by USALNVI on 13.03.2017.
 */

    function resizeTextAreaCodeOutput() {
        var screenSize = $(window).height();
        switch($(".modal-content").css("display") == "block"){
            case true:
                $("#code_output").css("height", (parseInt(screenSize) - 508) + "px");
                break;
            case false:
                switch($(".modal-content-input").css("display") == "block"){
                    case true:
                        $("#code_output").css("height", (parseInt(screenSize) - 343) + "px");
                        break;
                    case false:
                        $("#code_output").css("height", (parseInt(screenSize) - 180) + "px");
                        break;
                }
                break;
        }
    }

    $(window).on("load", function () {
        resizeTextAreaCodeOutput();
    });
    $(window).on("resize", function () {
        resizeTextAreaCodeOutput();
    });

    var cntOpen = 0;
    var cntOpenInput = 0;
    $("#open_options_reveal").on("click", function () {
        var screenSize = $(window).height();

        switch ($(".modal-content").css("display") == "none") {
            case true:
                $("#code_output").animate({
                    height: (parseInt(screenSize) - 508) + "px"
                }, 300);
                break;
            case false:
                $("#code_output").animate({
                    height: (parseInt(screenSize) - 180) + "px"
                }, 300);
                break;
        }

        cntOpen++;
    });

    $("#open_input_reveal").on("click", function () {
        var screenSize = $(window).height();

        switch ($(".modal-content-input").css("display") == "none") {
            case true:
                $("#code_output").animate({
                    height: (parseInt(screenSize) - 343) + "px"
                }, 300);
                break;
            case false:
                $("#code_output").animate({
                    height: (parseInt(screenSize) - 180) + "px"
                }, 300);
                break;
        }

        cntOpenInput++;
    });

