jQuery(function ($) {
    var modal = $(".modal-content");
    var btn = $("#open_options_reveal");

    var cntModal = 1;
    btn.on("click", function () {
        toggleOptionsReveal();
    });

    var modalInput = $(".modal-content-input");
    var btnInput = $("#open_input_reveal");

    var cntInput = 1;
    btnInput.on("click", function () {
        toggleInputReveal();
    });

    function toggleOptionsReveal() {
        switch (cntModal % 2 == 0) {
            case true:
                $("#open_options_reveal").html("Open Options");
                modal.hide("fast");
                break;
            case false:
                $("#open_options_reveal").html("Close Options");
                modal.show("fast");

                switch (modalInput.css("display") != "none") {
                    case true:
                        $("#open_input_reveal").html("Open Input Text");
                        modalInput.hide();
                        cntInput++;
                        break;
                }
                break;
        }
        cntModal++;
        console.log("Modal Counter: " + cntModal);
    }

    function toggleInputReveal() {
        switch (cntInput % 2 == 0) {
            case true:
                $("#open_input_reveal").html("Open Input Text");
                modalInput.hide("fast");
                break;
            case false:
                $("#open_input_reveal").html("Close Input Text");

                modalInput.show("fast");

                switch (modal.css("display") != "none") {
                    case true:
                        $("#open_options_reveal").html("Open Options");
                        modal.hide("fast");
                        cntModal++;
                        break;
                }
                break;
        }
        cntInput++;
        console.log("Input Counter: " + cntInput);
    }
});