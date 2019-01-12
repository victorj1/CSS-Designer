
//Instances
var textSectionWidth = "";
var paraToChangeWidth = "";
var expanded = false;

//Box shadow object
var bsPropOb = {
    hshadow: "0",
    vshadow: "0",
    blur: "0",
    spread: "0",
    color: "rgba(0, 0, 0, 0)"
};//End of object

//Text shadow object
var tsPropOb = {
    hshadow: "0",
    vshadow: "0",
    blurRad: "0",
    color: "rgba(0, 0, 0, 0)"
};//End of object

//Border radius object
var borderRadiusObject = {
    borderLeftRadius: 0,
    borderRightRadius: 0,
    borderTopRadius: 0,
    borderBottomRadius: 0
};//End of object

var cntBS = 1;
var cntTS = 1;
var cntO = 1;
var cntBorder = 1;

var bsColor = "transparent";
var tsColor = "transparent";
var bColor = "transparent";

//Create color picker for color of the text itself
$("#customColor").spectrum({
    color: "(0,0,0)",
    preferredFormat: "rgb",
    showButtons: false,
    showPalette: true
});

//Create color picker for color of the text itself
$("#customBColor").spectrum({
    color: "rgba(0,0,0,0)",
    preferredFormat: "rgba",
    showButtons: false,
    showPalette: true
});

//Create color picker for box-shadow properties
$("#custom").spectrum({
    color: "transparent",
    preferredFormat: "rgb",
    showButtons: false,
    showPalette: true
});

//Create color picker for text-shadow properties
$("#tsColor").spectrum({
    color: "transparent",
    preferredFormat: "rgb",
    showButtons: false,
    showPalette: true
});

//Create color picker for border properties
$("#clrzleftBord, #clrzrightBord, #clrztopBord, #clrzbottomBord, #clrzallBord").spectrum({
    color: "rgb(0,0,0)",
    preferredFormat: "rgb",
    showButtons: false,
    showPalette: true
});

var paraToChange = $("#change-here");
var textInputField = $(".text_to_change");

//Color of the text
var textColor = "rgb(0,0,0)";
//Background-color of the text
var backColor = "transparent";

//Function to update span depends on the input value
$(textInputField).on("input", function () {
    paraToChange.html($(textInputField).val());
    paraToChangeWidth = Math.round(parseInt($("#change-here").width()));
    $("#width").val(paraToChangeWidth);
    $("#widthSpan").html(paraToChangeWidth + "px");
    switch ($(this).val() != "") {
        case true:
            $("#reset_text").prop("disabled", false);
            break;
        case false:
            $("#reset_text").prop("disabled", true);
            break;
    }
});//End of the function

//End of instances

//Function for Multi-line toggle
$("#change_line_number").on("click", function () {
    switch ($(this).attr("data-value")) {
        case "simple":
            $(textInputField).css("height", 45);
            $(this).attr("data-value", "multi").html("Make single-line");
            break;
        case "multi":
            $(textInputField).css("height", 15);
            $(this).attr("data-value", "simple").html("Make multi-line");
            break;
    }
});//End of function

//Function to reset input text
$("#reset_text").on("click", function () {
    textInputField.val("");
    paraToChange.html("");
    $(this).prop("disabled", true);
});//End of function

//Function to save CSS file
$("#saveAsCSS").on("click", function () {
    var paragraphs = $(".code_output p");
    var cssString = ".element {\r\n";
    paragraphs.each(function (index, element) {
        switch ($("#" + $(element).attr("id") + " .code_prop").html().length > 0) {
            case true:
                cssString += "\t" + $("#" + $(element).attr("id") + " .code_label").html() + $("#" + $(element).attr("id") + " .code_prop").html() + "\r\n";
                break;
        }
    });
    cssString += "}";
    console.log(cssString);
    switch (cssString.length <= 13) {
        case true:
            alert("Your CSS file is empty");
            break;
        case false:
            var file = new File([cssString], "element.css", {type: "text/css"});
            saveAs(file);
            break;
    }
});//End of function


//Randomize fulfill
//Text for fulfilling
var ffTextArray = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially",
    "unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over",
    "2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus"
];

//Function to fulfill input element
$("#randomFulfill").on("click", function () {
    var width = $("#width");
    var choice = Math.floor(Math.random() * 8);
    console.log(choice);
    $("#text-to-change").val(ffTextArray[choice].toString());
    $(paraToChange).html(ffTextArray[choice].toString());
    $(paraToChange).css("width", "300px");
    $(textInputField).val(ffTextArray[choice].toString());
    $("#width").val(300);
    $("#width_paragraph").css("display", "inline-block");
    $("#widthSpan").html("300px");
    $("#css_width").html($(width).val() + "px;");
    $("#css_width").prev().html("width: ");
    $("#reset_text").prop("disabled", false);
});//End of function
//End of randomize fulfill

//-------------General Style---------------//
//WIDTH
//Function to change width
function widthTrigger() {
    var width = $("#width");
    paraToChange.css("width", $(width).val());
    $("#widthSpan").html($(width).val() + "px");
    paraToChangeWidth = Math.round($("#change-here").width());
    $("#css_width").html($(width).val() + "px;");
    $("#css_width").prev().html("width: ");
    $("#width_paragraph").css("display", "inline-block");
}//End of function
//Width event handler
$("#width").on("change", widthTrigger);//Enf of function
//END OF WIDTH

//PADDING
//Function to change padding
function paddingTrigger() {
    var padding = "#padding";
    paraToChange.css("padding", $(padding).val());
    $("#paddingSpan").html($(padding).val() + "px");
    $("#css_padding").html($(padding).val() + "px;").prev().html("padding: ");
    $("#padding_paragraph").css("display", "inline-block");
    switch ($(padding).val() == 0) {
        case true:
            $("#css_padding").html("").prev().html("");
            $("#padding_paragraph").css("display", "none");
            break;
    }
}//End of function
//Padding event handler
$("#padding").on("input", paddingTrigger);//End of function
//END OF PADDING

//Function to change the color of the text
$("#customColor").on("move.spectrum", function () {
    $("#color_paragraph").find(".sp-replacer").remove();
    $("#color_paragraph").find("#cross-close").remove();
    $("#css_colorinput").remove();
    $("#css_color").css("display", "inline-block");
    paraToChange.css("color", $(this).spectrum("get").toRgbString());
    console.log(paraToChange.css("color"));
    $("#css_color").html(textColor + ";").prev().html("color: ");
    $("#color_paragraph").css("display", "inline-block");
    textColor = $(this).spectrum("get").toRgbString();
});//End of the function

//Function to reset color of the text
$("#resetColor").on("click", function () {
    paraToChange.css("color", "#000");
    $("#customColor").spectrum({
        color: "rgb(0,0,0)",
        preferredFormat: "rgb",
        showButtons: false,
        showPalette: true
    });
    $("#color_paragraph").find(".sp-replacer").remove();
    $("#css_colorinput").remove();
    textColor = "rgb(0,0,0)";
    $("#css_color").html("").prev().html("");
    $("#color_paragraph").css("display", "none");
});//End of function to reset color of the text

//Function to change the background color of the text
$("#customBColor").on("move.spectrum", function () {
    paraToChange.css("background-color", $(this).spectrum("get").toRgbString());
    backColor = $(this).spectrum("get").toRgbString();
    console.log(backColor);
    switch (backColor != "rgba(0, 0, 0, 0)") {
        case true:
            $("#bcPara").css("display", "block");
            $("#bcRange").prop("disabled", false);
            $("#css_background_color").html(backColor + ";").prev().html("background-color: ");
            $("#background_color_paragraph").css("display", "inline-block");
            break;
        case false:
            $("#bcPara").css("display", "none");
            $("#bcRange").prop("disabled", true);
            $("#background_color_paragraph").css("display", "none");
            break;
    }
});//End of the function

//Function to reset background color of the text
$("#resetBgColor").on("click", function () {
    paraToChange.css("background-color", "");
    $("#customBColor").spectrum({
        color: "rgba(0,0,0,0)",
        preferredFormat: "rgb",
        showButtons: false,
        showPalette: true
    });
    $("#css_background_color").html("").prev().html("");
    $("#background_color_paragraph").css("display", "none");
});//End of function to reset background color of the text
//------------End of General Style------------//

//----------------Text Form-------------------//
//Letter-spacing function
function letterSpacingFunction() {
    paraToChange.css("letter-spacing", $("#letterSpacingInput").val() + "px");
    $("#letSpac").html($("#letterSpacingInput").val() + "px");
    $("#letter_spacing_paragraph").css("display", "inline-block");
    $("#css_letter_spacing").html($("#letterSpacingInput").val() + "px").prev().html("letter-spacing: ");
}
$("#letterSpacingInput").on("input", letterSpacingFunction);//End of Letter-spacing function

//Line-height function
function lineHeightFunction() {
    paraToChange.css("line-height", $("#lineHeightInput").val() + "px");
    $("#linHei").html($("#lineHeightInput").val() + "px");
    $("#line_height_paragraph").css("display", "inline-block");
    $("#css_line_height").html($("#lineHeightInput").val() + "px").prev().html("line-height: ");
}
$("#lineHeightInput").on("input", lineHeightFunction);//End of line-height function

//Text-alignment function
$("#left, #right, #center").on("change", function () {
    paraToChange.css("text-align", $(this).val());
    $("#css_text_align").html($(this).val()).prev().html("text-align: ");
    $("#text_align_paragraph").css("display", "inline-block");
});//End of text-alignment function

//Text-decoration function
var decorationChoice = "";
var thrh = "";
var undln = "";
var overln = "";

//Make the text striketrhough
$("#through").on("change", function () {
    // (this.checked) ? thrh = " line-through " : thrh = "";
    if (this.checked) {
        thrh = " line-through ";
        $("#line-through").prop("checked", true);
    } else {
        thrh = "";
        $("#line-through").prop("checked", false);
    }
});//End of the function

//Make the text strikethrough by CSS side
$("#line-through").on("change", function () {
    if (this.checked) {
        thrh = " line-through ";
        $("#through").prop("checked", true);
    } else {
        thrh = "";
        $("#through").prop("checked", false);
    }
});//End of function

//Make the text overlined
$("#over").on("change", function () {
    // (this.checked) ? overln = " overline " : overln = "";
    if (this.checked) {
        overln = " overline ";
        $("#overline").prop("checked", true);
    } else {
        overln = "";
        $("#overline").prop("checked", false);
    }
});//End of the function

//Make the text overlined by CSS side
$("#overline").on("change", function () {
    if (this.checked) {
        overln = " overline ";
        $("#over").prop("checked", true);
    } else {
        overln = "";
        $("#over").prop("checked", false);
    }
});//End of function

//Make the text underlined
$("#under").on("change", function () {
    // (this.checked) ? undln = " underline " : undln = "";
    if (this.checked) {
        undln = " undeline ";
        $("#underline").prop("checked", true);
    } else {
        undln = "";
        $("#underline").prop("checked", false);
    }
});//End of the function

//Make the text underlined by CSS side
$("#underline").on("change", function () {
    if (this.checked) {
        undln = " undeline ";
        $("#under").prop("checked", true);
    } else {
        undln = "";
        $("#under").prop("checked", false);
    }
});//End of function

//Add style to the text
$("#over, #under, #through, #overline, #underline, #line-through").on("change", function () {
    decorationChoice = thrh + undln + overln;
    (!decorationChoice.match(/^.{0}$/)) ? paraToChange.css("text-decoration", decorationChoice) : paraToChange.css("text-decoration", "");
    $("#css_text_decoration").html(decorationChoice).prev().html("text-decoration: ");
    $("#text_decoration_paragraph").css("display", "block");
    switch ($("#over").prop("checked") == false && $("#under").prop("checked") == false && $("#through").prop("checked") == false) {
        case true:
            $("#text_decoration_paragraph").css("display", "none");
            break;
    }
});//End of the function
//End of Text decoration function

//Text-transform function
$("#upper, #lower, #none").on("change", function () {
    if ($(this).val() == "none") {
        paraToChange.css("text-transform", "");
        $("#text_transform_paragraph").css("display", "none");
    } else {
        paraToChange.css("text-transform", $(this).val());
    }

    if ($(this).val() == "uppercase") {
        $("#scLabel").css("opacity", 0.5);
        $("#smallCaps").prop("disabled", "disabled");
        $("#css_text_transform").html($(this).val()).prev().html("text-transform: ");
        $("#text_transform_paragraph").css("display", "inline-block");
        alert("The 'small-caps' for 'font-variant' was disabled because it has no effect with 'text-transform: uppercase'");
    } else if ($(this).val() == "lowercase") {
        $("#scLabel").css("opacity", 1);
        $("#smallCaps").removeAttr("disabled");
        $("#css_text_transform").html($(this).val()).prev().html("text-transform: ");
        $("#text_transform_paragraph").css("display", "inline-block");
    }
}); //End of Text-transform function

//Word-spacing function
function wordSpacingFunction() {
    $("#wordSpac").html($("#wordSpacingInput").val() + "px");
    paraToChange.css("word-spacing", $("#wordSpacingInput").val() + "px");
    $("#word_spacing_paragraph").css("display", "inline-block");
    $("#css_word_spacing").html($("#wordSpacingInput").val() + "px").prev().html("word-spacing: ");
}
$("#wordSpacingInput").on("input", wordSpacingFunction);//End of word-spacing function
//------------End of Text Form----------------//

//---------------Font Format------------------//
//Font-size function
function fontSizeFunction() {
    $("#fonSi").html($("#fontSizeInput").val() + "px");
    paraToChange.css("font-size", $("#fontSizeInput").val() + "px");
    $("#font_size_paragraph").css("display", "inline-block");
    $("#css_font_size").html($("#fontSizeInput").val() + "px").prev().html("font-size: ");
}

$("#fontSizeInput").on("input", fontSizeFunction);//End of Font-size function

//Font-style function for
$("#italic, #oblique, #normalFS").on("change", function () {
    paraToChange.css("font-style", $(this).val());
    switch ($(this).val() != "normal") {
        case true:
            $("#font_style_paragraph").css("display", "inline-block");
            $("#css_font_style").html($(this).val()).prev().html("font-style: ");
            break;
        case false:
            $("#font_style_paragraph").css("display", "none");
            break;
    }
});//End of Font-style function

//Font-weight function
function fontWeightFunction() {
    paraToChange.css("font-weight", $("#fontWeightSelect").val());
    switch ($("#fontWeightSelect").val() != "400") {
        case true:
            $("#font_weight_paragraph").css("display", "inline-block");
            $("#css_font_weight").html($("#fontWeightSelect").val()).prev().html("font-weight: ");
            break;
        case false:
            $("#font_weight_paragraph").css("display", "none");
            break;
    }
}

$("#fontWeightSelect").on("change", fontWeightFunction);//End of the Font-weight function

//Font-variant function
function fontVariantFunction() {
    paraToChange.css("font-variant", $(this).val());
    if ($(this).val() == "small-caps") {
        $("#upperLabel").css("opacity", 0.5);
        $("#upper").prop("disabled", "disabled");
        $("#font_variant_paragraph").css("display", "inline-block");
        $("#css_font_variant").html($(this).val()).prev().html("font-variant: ");
        alert("'Uppercase' choice was disabled because it has no effect if you chose 'font-variant: small-caps'")
    } else {
        $("#upperLabel").css("opacity", 1);
        $("#upper").removeAttr("disabled");
        $("#font_variant_paragraph").css("display", "none");
    }
}

$("#smallCaps, #normalFV").on("change", fontVariantFunction);//End of the Font-variant function
//------------End of Font Format--------------//

//---------------Box Shadow-------------------//
//Function to reset all box-shadow properties
$("#bsResetBtn").on("click", function (e) {
    e.preventDefault();
    console.log(bsPropOb);
    $(".box-shadow-section :checkbox").prop("checked", "");
    $(".box-shadow-section [type='range']").prop("disabled", "disabled").val(0);
    $(".box-shadow-section [id$='Span']").html("0px");
    $("#custom").spectrum({
        color: "rgba(0, 0, 0, 0)",
        preferredFormat: "rgba",
        showButtons: false,
        showPalette: true
    });
    bsPropOb = {
        hshadow: "0",
        vshadow: "0",
        blur: "0",
        spread: "0",
        color: "rgba(0, 0, 0, 0)"
    };

    $("#box_shadow_paragraph").css("display", "none");
    $("#bsPara").css("display", "none");
    $("#bsRange").prop("disabled", true);
    $("#box_shadow_paragraph").css("display", "none");
    $("#moz_box_shadow_paragraph").css("display", "none");
    $("#webkit_box_shadow_paragraph").css("display", "none");
    paraToChange.css("box-shadow", "");
});//End of function

//Function is responsible for checkboxes with the label 'include'
$("#hs, #vs, #b, #sp").on("change", function () {
    var dataAttr = $(this).data("role");
    var id = "#" + $(this).val() + "Range";
    if (this.checked) {
        $(id).removeAttr("disabled");
        bsPropOb[dataAttr] = $(id).val() + "px";
    } else {
        $(id).attr("disabled", "disabled");
        bsPropOb[dataAttr] = 0;
    }
});//End of the function

//Function is responsible for the box-shadow color change
$("#custom").on("change", function () {
    bsColor = $(this).spectrum("get").toRgbString();
    bsPropOb.color = $(this).spectrum("get").toRgbString();
});//End of the function

//Function is responsible for the changing properties of vertical, horizontal shadow, blur and spread
$("#hsRange, #vsRange, #bRange, #spRange").on("input", function () {
    $("#" + $(this).attr("id") + "Span").html($(this).val() + "px");
    var objectElement = $(this).data("attribute");
    if ($(this).val() != 0) {
        bsPropOb[objectElement] = $(this).val() + "px";
    } else {
        bsPropOb[objectElement] = 0;
    }
});//End of the function

//Function is responsible for the button to generate box-shadow property for the text
$("#boxShadowGen").on("click", function () {
    addBoxShadow();
});//End of the function

function addBoxShadow(){
    $("#boxShadowGen").val(bsPropOb.hshadow + " " + bsPropOb.vshadow + " " + bsPropOb.blur + " " + bsPropOb.spread + " " + bsPropOb.color);
    paraToChange.css("box-shadow", $("#boxShadowGen").val());
    switch (bsPropOb.color != "rgba(0, 0, 0, 0)" && ((bsPropOb.hshadow != 0 && bsPropOb.hshadow != "0px") || (bsPropOb.vshadow != 0 && bsPropOb.vshadow != "0px") || (bsPropOb.blur != 0 && bsPropOb.blur != "0px") || (bsPropOb.spread != 0 && bsPropOb.spread != "0px"))) {
        case true:
            $("#bsPara").css("display", "block");
            $("#bsRange").prop("disabled", false);

            $("#box_shadow_paragraph").css("display", "inline-block");
            $("#webkit_box_shadow_paragraph").css("display", "inline-block");
            $("#moz_box_shadow_paragraph").css("display", "inline-block");

            $("#css_box_shadow").prev().html("box-shadow: ");
            $("#bs_hs").html(bsPropOb.hshadow);
            $("#bs_vs").html(bsPropOb.vshadow);
            $("#bs_blur").html(bsPropOb.blur);
            $("#bs_spread").html(bsPropOb.spread);
            $("#bs_color").html(bsPropOb.color);

            $("#webkit_css_box_shadow").prev().html("-webkit-box-shadow: ");
            $("#webkit_bs_hs").html(bsPropOb.hshadow);
            $("#webkit_bs_vs").html(bsPropOb.vshadow);
            $("#webkit_bs_blur").html(bsPropOb.blur);
            $("#webkit_bs_spread").html(bsPropOb.spread);
            $("#webkit_bs_color").html(bsPropOb.color);

            //Functionality for box shadow with -moz- prefix 
            $("#moz_css_box_shadow").prev().html("-moz-box-shadow: ");
            $("#moz_bs_hs").html(bsPropOb.hshadow);
            $("#moz_bs_vs").html(bsPropOb.vshadow);
            $("#moz_bs_blur").html(bsPropOb.blur);
            $("#moz_bs_spread").html(bsPropOb.spread);
            $("#moz_bs_color").html(bsPropOb.color);
            break;
        case false:
            $("#bsPara").css("display", "none");
            $("#bsRange").prop("disabled", true);
            $("#box_shadow_paragraph").css("display", "none");
            $("#webkit_box_shadow_paragraph").css("display", "none");
            $("#moz_box_shadow_paragraph").css("display", "none");
            break;
    }
}

//--------------End of Box Shadow-------------//

//-------------Text Shadow--------------------//
//Function to reset all text-shadow properties
$("#bsTSResetBtn").on("click", function (e) {
    e.preventDefault();
    $(".text-shadow-properties :checkbox").prop("checked", "");
    $(".text-shadow-properties [type='range']").prop("disabled", "disabled").val(0);
    $("[id$='TSSpan']").html("0px");
    $("#tsColor").spectrum({
        color: "rgba(0, 0, 0, 0)",
        preferredFormat: "rgba",
        showButtons: false,
        showPalette: true
    });
    tsPropOb = {
        hshadow: "0",
        vshadow: "0",
        blurRad: "0",
        color: "rgba(0, 0, 0, 0)"
    };
    $("#tsPara").css("display", "none");
    $("#tsRange").prop("disabled", true);
    $("#text_shadow_paragraph").css("display", "none");
    paraToChange.css("text-shadow", "");
});//End of the function

//Function os responsible for checkboxes with the label 'include'
$("#hsTS, #vsTS, #bTS").on("change", function () {
    var id = "#" + $(this).val() + "TSRange";
    var dataAttr = $(this).data("role");
    if (this.checked) {
        $(id).removeAttr("disabled");
        tsPropOb[dataAttr] = $(id).val() + "px";
    } else {
        $(id).prop("disabled", "disabled");
        tsPropOb[dataAttr] = 0;
    }
});//End of the function

//Function to change the properties of text-shadow
$("#hsTSRange, #vsTSRange, #bTSRange").on("input", function () {
    var id = "#" + $(this).attr("id") + "TSSpan";
    var dataAttr = $(this).data("attribute");
    $(id).html($(this).val() + "px");
    if ($(this).val() != 0) {
        tsPropOb[dataAttr] = $(this).val() + "px";
    } else {
        tsPropOb[dataAttr] = 0;
    }
});//End of the function

//Function to change the color of text-shadow
$("#tsColor").on("change", function () {
    tsColor = $(this).spectrum("get").toRgbString();
    tsPropOb.color = $(this).spectrum("get").toRgbString();
});//Enf of the function

$("#boxTSShadowGen").on("click", function (e) {
    e.preventDefault();
    $(this).val(tsPropOb.vshadow + " " + tsPropOb.hshadow + " " + tsPropOb.blurRad + " " + tsPropOb.color);
    paraToChange.css("text-shadow", $(this).val());
    switch (tsPropOb.color != "rgba(0, 0, 0, 0)" && ((tsPropOb.hshadow != 0 && tsPropOb != "0px") || (tsPropOb.vshadow != 0 && tsPropOb.vshadow != "0px") || (tsPropOb.blurRad != 0 && tsPropOb.blurRad != "0px"))) {
        case true:
            $("#tsPara").css("display", "block");
            $("#tsRange").prop("disabled", false);
            $("#text_shadow_paragraph").css("display", "inline-block");
            $("#css_text_shadow").prev().html("text-shadow: ");
            $("#ts_hs").html(tsPropOb.vshadow);
            $("#ts_vs").html(tsPropOb.hshadow);
            $("#ts_blur").html(tsPropOb.blurRad);
            $("#ts_color").html(tsPropOb.color);
            break;
        case false:
            $("#tsPara").css("display", "none");
            $("#tsRange").prop("disabled", true);
            $("#text_shadow_paragraph").css("display", "none");
            break;
    }
    console.log(tsPropOb);
    console.log(tsPropOb.color != "rgba(0, 0, 0, 0)");
});//End of the function
//-----------End of Text Shadow---------------//

//----------------Border----------------------//
var borderObject = {};
var AllBorder = $("#allBord");
var PartialBorder = $("#leftBord, #rightBord, #topBord, #bottomBord");

//Function to change border radius
$("#borderRadius").on("input", function () {
    $("#borderRadiusSpan").html($(this).val() + "px");
    $(paraToChange).css("border-radius", $(this).val() + "px");
    switch ($(this).val() != 0) {
        case true:
            $("#css_border_radius").html($(this).val() + "px").prev().html("border-radius: ");
            $("#webkit-css_border_radius").html($(this).val() + "px").prev().html("-webkit-border-radius: ");
            $("#moz-css_border_radius").html($(this).val() + "px").prev().html("-moz-border-radius: ");

            $("#border_radius_paragraph").css("display", "inline-block");
            $("#webkit-border_radius_paragraph").css("display", "inline-block");
            $("#moz-border_radius_paragraph").css("display", "inline-block");

            $("#borderLeftRadius").prop("disabled", true);
            $("#borderRightRadius").prop("disabled", true);
            $("#borderTopRadius").prop("disabled", true);
            $("#borderBottomRadius").prop("disabled", true);
            $("#reset_parts").attr("disabled", true);
            $("#reset_border_radius").prop("disabled", false);
            break;
        case false:
            $("#border_radius_paragraph").css("display", "none");
            $("#webkit-border_radius_paragraph").css("display", "none");
            $("#moz-border_radius_paragraph").css("display", "none");
            $("#borderLeftRadius").prop("disabled", false);
            $("#borderRightRadius").prop("disabled", false);
            $("#borderTopRadius").prop("disabled", false);
            $("#borderBottomRadius").prop("disabled", false);
            $("#reset_border_radius").prop("disabled", true);
            break;
    }
});//End of border radius function

//Function to reset border radius
$("#reset_border_radius").on("click", function () {
    $("#borderLeftRadius").prop("disabled", false);
    $("#borderRightRadius").prop("disabled", false);
    $("#borderTopRadius").prop("disabled", false);
    $("#borderBottomRadius").prop("disabled", false);
    $("#borderRadius").val(0);
    $("#borderRadiusSpan").html("0px");
    $(this).prop("disabled", true);
    $(paraToChange).css("border-radius", "");

    $("#border_radius_paragraph").css("display", "none");
    $("#webkit-border_radius_paragraph").css("display", "none");
    $("#moz-border_radius_paragraph").css("display", "none");
});

//Function to change different sides of border radius;
$("#borderLeftRadius, #borderRightRadius, #borderTopRadius, #borderBottomRadius").on("input", function () {
    switch ($("#borderLeftRadius").val() != 0 || $("#borderRightRadius").val() != 0 || $("#borderTopRadius").val() != 0 || $("#borderBottomRadius").val() != 0) {
        case true:
            $("#borderRadius").prop("disabled", true);
            $("#reset_parts").prop("disabled", false);
            $("#css_border_radius").html(borderRadiusObject.borderTopRadius + " " + borderRadiusObject.borderRightRadius + " " + borderRadiusObject.borderBottomRadius + " " + borderRadiusObject.borderLeftRadius + ";").prev().html("border-radius: ");
            $("#webkit-css_border_radius").html(borderRadiusObject.borderTopRadius + " " + borderRadiusObject.borderRightRadius + " " + borderRadiusObject.borderBottomRadius + " " + borderRadiusObject.borderLeftRadius + ";").prev().html("-webkit-border-radius: ");
            $("#moz-css_border_radius").html(borderRadiusObject.borderTopRadius + " " + borderRadiusObject.borderRightRadius + " " + borderRadiusObject.borderBottomRadius + " " + borderRadiusObject.borderLeftRadius + ";").prev().html("-moz-border-radius: ");
            $("#border_radius_paragraph").css("display", "inline-block");
            $("#webkit-border_radius_paragraph").css("display", "inline-block");
            $("#moz-border_radius_paragraph").css("display", "inline-block");
            console.log("act");
            break;
        case false:
            $("#borderRadius").prop("disabled", false);
            $("#reset_parts").attr("disabled", true);
            $("#border_radius_paragraph").css("display", "none");
            $("#webkit-border_radius_paragraph").css("display", "none");
            $("#moz-border_radius_paragraph").css("display", "none");
            console.log("dis");
            break;
    }

    switch ($(this).val() != 0) {
        case true:
            borderRadiusObject[$(this).attr("id")] = $(this).val() + "px";
            break;
        case false:
            borderRadiusObject[$(this).attr("id")] = 0;
            break;
    }

    $("#" + $(this).attr("id") + "Span").html($(this).val() + "px");
    paraToChange.css("border-radius", borderRadiusObject.borderTopRadius + " " + borderRadiusObject.borderRightRadius + " " + borderRadiusObject.borderBottomRadius + " " + borderRadiusObject.borderLeftRadius);

});//End of function

//Function to reset all parts of border radius
$("#reset_parts").on("click", function () {

    $("#borderLeftRadius").val(0);
    $("#borderRightRadius").val(0);
    $("#borderTopRadius").val(0);
    $("#borderBottomRadius").val(0);

    $("#borderLeftRadiusSpan").html("0px");
    $("#borderRightRadiusSpan").html("0px");
    $("#borderTopRadiusSpan").html("0px");
    $("#borderBottomRadiusSpan").html("0px");

    $("#reset_parts").prop("disabled", true);
    $("#borderRadius").prop("disabled", false);

    $("#border_radius_paragraph").css("display", "none");
    $("#webkit-border_radius_paragraph").css("display", "none");
    $("#moz-border_radius_paragraph").css("display", "none");

    $(paraToChange).css("border-radius", "");
    borderRadiusObject = {
        borderLeftRadius: 0,
        borderRightRadius: 0,
        borderTopRadius: 0,
        borderBottomRadius: 0
    };//End of object

});//End of function

//Function to open border properties
$("#leftBord, #rightBord, #topBord, #bottomBord, #allBord").on("change", function () {
    var id = $(this).attr("id");
    var item = $(this);
    setTimeout(function () {
        switch ($(item).is(":checked")) {
            //When checkbox is checked
            case true:
                switch (id != "allBord") {
                    //When partial border checkbox is checked
                    case true:
                        AllBorder.prop("disabled", true);
                        break;
                    //When the whole border checkbox is checked
                    case false:
                        PartialBorder.prop("disabled", true);
                        break;
                }

                $("#" + id + "Include").css("display", "block");
                $("#" + id + "RangeOpacity").prop("disabled", false);

                Object.defineProperty(borderObject, $(item).val(), {
                    value: {},
                    configurable: true,
                    writable: true,
                    enumerable: true
                });
                Object.defineProperty(borderObject[$(item).val()], "size", {
                    value: "1px",
                    configurable: true,
                    writable: true,
                    enumerable: true
                });
                Object.defineProperty(borderObject[$(item).val()], "color", {
                    value: "rgb(0,0,0)",
                    configurable: true,
                    writable: true,
                    enumerable: true
                });
                Object.defineProperty(borderObject[$(item).val()], "type", {
                    value: "solid",
                    configurable: true,
                    writable: true,
                    enumerable: true
                });

                $("#" + item.val() + "_paragraph").css("display", "inline-block");
                var property = borderObject[$(item).val()].size + " " + borderObject[$(item).val()].color + " " + borderObject[$(item).val()].type;
                //$("#" + "css_" + item.val()).html(property + ";").prev().html(item.val() + ": ");
                $("#css_" + item.val()).prev().html(item.val() + ": ");
                $("#" + item.val() + "_size_span").html(borderObject[$(item).val()].size);
                $("#" + item.val() + "_type_span").html(borderObject[$(item).val()].type);
                $("#" + item.val() + "_color_span").html(borderObject[$(item).val()].color);
                $(paraToChange).css($(item).val(), property);

                break;
            //When checkbox is unchecked
            case false:
                $("#" + item.val() + "_paragraph").css("display", "none");
                switch (id != "allBord") {
                    //When partial border checkbox is unchecked
                    case true:
                        switch (PartialBorder.is(":checked")) {
                            //When all checkboxes is unchecked
                            case false:
                                AllBorder.prop("disabled", false);
                                break;
                        }
                        break;
                    //When the whole border checkbox is unchecked
                    case false:
                        PartialBorder.prop("disabled", false);
                        break;
                }
                $("#" + id + "Include").css("display", "none");
                $("#" + id + "RangeOpacity").prop("disabled", true).val(1);
                $("#" + id + "Span").html(1);
                $(paraToChange).css($(item).val(), "");
                delete borderObject[$(item).val()];
                $("#clrz" + id).spectrum({
                    color: "rgb(0,0,0)",
                    preferredFormat: "rgb",
                    showButtons: false,
                    showPalette: true
                });
                $("#" + id + "Range").val(1);
                $("#" + $(item).val() + "-span").html("1px");
                $("#" + id + "Style" + " option[value='solid']").prop("selected", true);
                break;
        }
        $("#" + id + "ColorPara").toggle(300);
    }, 100);
});
//End of Open Border Properties Function

//Function to change border color
$("#clrzleftBord, #clrzrightBord, #clrztopBord, #clrzbottomBord, #clrzallBord").on("move.spectrum", function () {
    var side = $(this).data("side");
    borderObject[side].color = $(this).spectrum("get").toRgbString();
    $(paraToChange).css(side, borderObject[side].size + " " + borderObject[side].color + " " + borderObject[side].type);
    //$("#" + "css_" + side).html(borderObject[side].size + " " + borderObject[side].color + " " + borderObject[side].type + ";").prev().html(side + ": ");
    $("#" + side + "_size_span").html(borderObject[side].size);
    $("#" + side + "_type_span").html(borderObject[side].type);
    $("#" + side + "_color_span").html(borderObject[side].color);
});//End of function to change border color

//Function to change border size
$("#leftBordRange, #rightBordRange, #topBordRange, #bottomBordRange, #allBordRange").on("input", function () {
    var side = $(this).data("side");
    borderObject[side].size = $(this).val() + "px";
    $("#" + side + "-span").html($(this).val() + "px");
    $(paraToChange).css(side, borderObject[side].size + " " + borderObject[side].color + " " + borderObject[side].type);
    //$("#" + "css_" + side).html(borderObject[side].size + " " + borderObject[side].color + " " + borderObject[side].type + ";").prev().html(side + ": ");
    $("#" + side + "_size_span").html(borderObject[side].size);
    $("#" + side + "_type_span").html(borderObject[side].type);
    $("#" + side + "_color_span").html(borderObject[side].color);
});//End of function to change border size

//Function to change border type
$("#leftBordStyle, #rightBordStyle, #topBordStyle, #bottomBordStyle, #allBordStyle").on("change", function () {
    var side = $(this).data("side");
    borderObject[side].type = $(this).val();
    $(paraToChange).css(side, borderObject[side].size + " " + borderObject[side].color + " " + borderObject[side].type);
    //$("#" + "css_" + side).html(borderObject[side].size + " " + borderObject[side].color + " " + borderObject[side].type + ";").prev().html(side + ": ");
    $("#" + side + "_size_span").html(borderObject[side].size);
    $("#" + side + "_type_span").html(borderObject[side].type);
    $("#" + side + "_color_span").html(borderObject[side].color);
});//End of function to change border type
//------------End of Border-------------------//

//--------------Opacity-----------------------//
//Function to change color opacity
$("#cRange").on("input", function () {
    var tempColor = textColor.replace("rgb", "rgba");
    console.log(tempColor);
    $("#" + $(this).attr("id").replace("Range", "Span")).html($(this).val());
    var rgbaTextColor = tempColor.replace(/\)/i, ',' + $(this).val() + ')');
    $(paraToChange).css("color", rgbaTextColor);
    $("#css_color").html(rgbaTextColor + ";").prev().html("color: ");
    $("#color_paragraph").css("display", "inline-block");
});//End of function to change color opacity

//Function to change background color opacity
$("#bcRange").on("input", function () {
    var tempColor = backColor.replace("rgb", "rgba");
    $("#" + $(this).attr("id").replace("Range", "Span")).html($(this).val());
    var rgbaTextColor = tempColor.replace(/\)/i, ',' + $(this).val() + ')');
    $(paraToChange).css("background-color", rgbaTextColor);
    $("#css_background_color").html(rgbaTextColor + ";").prev().html("background-color: ");
});//End of function to change background color opacity

//Function to change the whole element opacity
$("#allRange").on("input", function () {
    $(paraToChange).css("opacity", $(this).val());
    $("#" + $(this).attr("id").replace("Range", "Span")).html($(this).val());
    $("#css_opacity").html($(this).val()).prev().html("opacity: ");
    $("#opacity_paragraph").css("display", "inline-block");
});//End of function to change the whole element opacity

//Function to change box-shadow color opacity
$("#bsRange").on("input", function () {
    var tempColor = bsColor.replace("rgb", "rgba");
    $("#" + $(this).attr("id").replace("Range", "Span")).html($(this).val());
    bsPropOb.color = tempColor.replace(/\)/i, ',' + $(this).val() + ')');
    $(paraToChange).css("box-shadow", bsPropOb.hshadow + " " + bsPropOb.vshadow + " " + bsPropOb.blur + " " + bsPropOb.spread + " " + bsPropOb.color);
    $("#css_box_shadow").html(bsPropOb.hshadow + " " + bsPropOb.vshadow + " " + bsPropOb.blur + " " + bsPropOb.spread + " " + bsPropOb.color + ";").prev().html("box-shadow: ");
    $("#webkit_css_box_shadow").html(bsPropOb.hshadow + " " + bsPropOb.vshadow + " " + bsPropOb.blur + " " + bsPropOb.spread + " " + bsPropOb.color + ";").prev().html("-webkit-box-shadow: ");
    $("#moz_css_box_shadow").html(bsPropOb.hshadow + " " + bsPropOb.vshadow + " " + bsPropOb.blur + " " + bsPropOb.spread + " " + bsPropOb.color + ";").prev().html("-moz-box-shadow: ");
});//End of function to change box-shadow color opacity

//Function to change text-shadow color opacity
$("#tsRange").on("input", function () {
    var tempColor = tsColor.replace("rgb", "rgba");
    $("#" + $(this).attr("id").replace("Range", "Span")).html($(this).val());
    tsPropOb.color = tempColor.replace(/\)/i, ',' + $(this).val() + ')');
    $(paraToChange).css("text-shadow", tsPropOb.vshadow + " " + tsPropOb.hshadow + " " + tsPropOb.blurRad + " " + tsPropOb.color);
    $("#css_text_shadow").html(tsPropOb.vshadow + " " + tsPropOb.hshadow + " " + tsPropOb.blurRad + " " + tsPropOb.color + ";").prev().html("text-shadow: ");
});//End of function to change box-shadow color opacity

//Function to change border opacity
$("#allBordRangeOpacity, #rightBordRangeOpacity, #leftBordRangeOpacity, #topBordRangeOpacity, #bottomBordRangeOpacity").on("input", function () {
    var id = $(this).attr("id").split("R")[0];
    var bordSide = $(this).data("side");
    var newColor = borderObject[bordSide].color.replace("rgb", "rgba").replace(/\)/i, ',' + $(this).val() + ')');
    $(paraToChange).css(bordSide, borderObject[bordSide].size + " " + newColor + " " + borderObject[bordSide].type);
    $("#" + id + "Span").html($(this).val());
    $("#" + "css_" + bordSide).html(borderObject[bordSide].size + " " + newColor + " " + borderObject[bordSide].type + ";").prev().html(bordSide + ": ");
});
//------------End of Opacity------------------//

//-------CSS editable mode functionality------//
var textAlignChosenVar = "";
var chosenVar = "";
var checkboxesArray = [
    '<label for="one"><input type="checkbox" id="one" />First checkbox</label>',
    '<label for="two"><input type="checkbox" id="two" />Second checkbox</label>',
    '<label for="three"><input type="checkbox" id="three" />Third checkbox</label>'
];

//Function to close input element on blur 
$(".code_prop").on("click", function (e) {
    textAlignChosenVar = $(this).attr("id");
    chosenVar = $(this).attr("id");
    var input = "";
    var span = "#" + $(this).attr("id");
    var spanWidth = $(this).width() + "px";
    var value = $(this).html();
    $(span).css("display", "none");
    switch (e.target.id) {
        case "css_color":
            //$(span).css("display", "none");
            input = "<input type='text' id='" + $(this).attr("id") + "input" + "'><i data-val='" + span + "' data-input='" + $(this).attr("id") + "input' class='fa fa-times' id='cross-close'></i>";
            $(span).parent("p").append(input);
            $(span).parent("p").find("input").spectrum({
                color: $("#customColor").spectrum("get").toRgbString(),
                preferredFormat: "rgb",
                showButtons: false,
                showPalette: true
            });
            break;
        case "css_background_color":
            //$(span).css("display", "none");
            input = "<input type='text' id='" + $(this).attr("id") + "input" + "'><i data-val='" + span + "' data-input='" + $(this).attr("id") + "input' class='fa fa-times' id='cross-close_" + $(this).attr('id') + "'></i>";
            $(span).parent("p").append(input);
            $(span).parent("p").find("input").spectrum({
                color: $("#customBColor").spectrum("get").toRgbString(),
                preferredFormat: "rgb",
                showButtons: false,
                showPalette: true
            });
            break;
        case "css_text_align":
            //$(span).css("display", "none");
            input = "<select name='text_align' data-val='" + span + "' id='css_text_alignselect'>" +
                "<option disabled selected value='no_select'></option>" +
                "<option value='left'>left</option>" +
                "<option value='right'>right</option>" +
                "<option value='center'>center</option>" +
                "</select>";
            $(span).parent("p").append(input);
            break;
        case "css_text_transform":
            //$(span).css("display", "none");
            input = "<select name='text_transform' data-val='" + span + "' id='css_text_transformselect'>" +
                "<option disabled selected value='no_select'></option>" +
                "<option value='none'>none</option>" +
                "<option value='uppercase'>uppercase</option>" +
                "<option value='lowercase'>lowercase</option>" +
                "</select>";
            $(span).parent("p").append(input);
            $(document).on("blur", "#code_output #css_text_transformselect", tabBlurEventOfTransform);
            break;
        case "css_text_decoration":
            //$(span).css("display", "none");
            $(".multiselect_form").css("display", "inline-block");
            break;
        case "css_font_style":
            //$(span).css("display", "none");
            input = "<select name='font_style' data-val='" + span + "' id='css_font_styleselect'>" +
                "<option disabled selected value='no_select'></option>" +
                "<option value='default'>default</option>" +
                "<option value='oblique'>oblique</option>" +
                "<option value='italic'>italic</option>" +
                "</select>";
            $(span).parent("p").append(input);
            $(document).on("blur", "#css_font_styleselect", tabBlueEventOfFontStyle);
            break;
        case "css_font_weight":
            //$(span).css("display", "none");
            input = "<select name='font_weight' data-val='" + span + "' id='css_font_weightselect'>" +
                '<option disabled selected value="no_select"></option>' +
                '<option value="100">Thin</option>' +
                '<option value="200">Ultra Light</option>' +
                '<option value="300">Light</option>' +
                '<option value="400">Regular</option>' +
                '<option value="500">Medium</option>' +
                '<option value="600">Semi Bold</option>' +
                '<option value="700">Bold</option>' +
                '<option value="800">Extra Bold</option>' +
                '<option value="900">Heavy</option>' +
                '</select>';
            $(span).parent("p").append(input);
            $("#css_font_weightselect").val($("#fontWeightSelect").val()).prop("selected", true);
            $(document).on("blur", "#css_font_weightselect", tabBlurEventOfFontWeight);
            break;
        case "css_font_variant":
            //$(span).css("display", "none");
            input = "<select name='font_variant' data-val='" + span + "' id='css_font_variantselect'>" +
                '<option disabled selected value="no_select"></option>' +
                '<option value="default">default</option>' +
                '<option value="small-caps">small-caps</option>' +
                '</select>';
            $(span).parent("p").append(input);
            $(document).on("blur", "#css_font_variantselect", tabBlurEventOfFontVariant);
            break;

        //BOX SHADOW
        case "bs_hs":
        case "bs_vs":
        case "bs_blur":
        case "bs_spread":
            input = "<input type='text' class='no_prefix' style='width:" + spanWidth + "' value='" + value + "' id='" + $(this).attr("id") + "input" + "' data-val='" + span + "'>";
            $(span).html(input);
            $(span + " input").focus();
            break;
        
        case "bs_color":

            break;
        
        //WEBKIT BOX SHADOW
        case "webkit_bs_hs":
        case "webkit_bs_vs":
        case "webkit_bs_blur":
        case "webkit_bs_spread":
            input = "<input type='text' class='webkit' style='width:" + spanWidth + "' value='" + value + "' id='" + $(this).attr("id") + "input" + "' data-val='" + span + "'>";
            $(span).html(input);
            $(span + " input").focus();
            break;
            break;
        
        case "webkit_bs_color":

            break;
        
        //MOZ BOW SHADOW
        case "moz_bs_hs":
        case "moz_bs_vs":
        case "moz_bs_blur":
        case "moz_bs_spread":
            input = "<input type='text' class='moz' style='width:" + spanWidth + "' value='" + value + "' id='" + $(this).attr("id") + "input" + "' data-val='" + span + "'>";
            $(span).html(input);
            $(span + " input").focus();
            break;
        
        case "moz_bs_color":
            
            break;
        default:
            input = "<input type='text' style='width:" + spanWidth + "' value='" + value + "' id='" + $(this).attr("id") + "input" + "' data-val=" + span + ">";
            $(span).parent("p").append(input);
            $(span + "input").focus();
            break;
    }
    $(document).on("blur", "#code_output input, #code_output #css_text_alignselect", tabBlurEvent);


});//End of function

//Function to close color picker in css code
$(document).on("click", "#cross-close", function () {
    $($(this).attr("data-val")).css("display", "inline-block").html($(this).val());
    $(this).remove();
    switch ($(this).attr("data-input")) {
        case "css_colorinput":
            $($(this).attr("data-val")).css("display", "inline-block").html($("#css_colorinput").spectrum("get").toRgbString());
            $("#customColor").spectrum({
                color: $("#css_colorinput").spectrum("get").toRgbString(),
                preferredFormat: "rgb",
                showButtons: false,
                showPalette: true
            });
            paraToChange.css("color", $("#css_colorinput").spectrum("get").toRgbString());
            textColor = $("#css_colorinput").spectrum("get").toRgbString();
            $("#color_paragraph").find(".sp-replacer").remove();
            $("#css_colorinput").remove();
            break;
        case "css_background_colorinput":
            $($(this).attr("data-val")).css("display", "inline-block").html($("#css_background_colorinput").spectrum("get").toRgbString());
            $("#customBColor").spectrum({
                color: $("#css_background_colorinput").spectrum("get").toRgbString(),
                preferredFormat: "rgb",
                showButtons: false,
                showPalette: true
            });
            paraToChange.css("background-color", $("#css_background_colorinput").spectrum("get").toRgbString());
            backColor = $("#css_background_colorinput").spectrum("get").toRgbString();
            $("#background_color_paragraph").find(".sp-replacer").remove();
            $("#css_background_colorinput").remove();
            break;
    }
});

//Functions to change options in reference to manually changed CSS code
//Function to close input on blur
function tabBlurEvent() {
    if ($(this).attr("type") != "checkbox") {
        if (textAlignChosenVar != "css_text_align" || textAlignChosenVar == "css_text_align" && $("#" + textAlignChosenVar + "select").val() != undefined) {
            $($(this).attr("data-val")).css("display", "inline-block").html($(this).val());
            $(this).remove();
        }
    }

}//End of function

//Function to close select text_transform on blur
function tabBlurEventOfTransform() {
    if (chosenVar == "css_text_transform" && $("#" + chosenVar + "select").val() != undefined) {
        $($(this).attr("data-val")).css("display", "inline-block").html($(this).val());
        $(this).remove();
    }
}//End of function

//Function to close select font_style on blur
function tabBlueEventOfFontStyle() {
    if (chosenVar == "css_font_style" && $("#" + chosenVar + "select").val() != undefined) {
        $($(this).attr("data-val")).css("display", "inline-block").html($(this).val());
        $(this).remove();
    }
}//End of function

//Function to close select font_weight on blur
function tabBlurEventOfFontWeight() {
    if (chosenVar == "css_font_weight" && $("#" + chosenVar + "select").val() != undefined) {
        $($(this).attr("data-val")).css("display", "inline-block").html($(this).val());
        $(this).remove();
    }
}//End of function

//Function to close select font_variant on blur
function tabBlurEventOfFontVariant() {
    if (chosenVar == "css_font_variant" && $("#" + chosenVar + "select").val() != undefined) {
        $($(this).attr("data-val")).css("display", "inline-block").html($(this).val());
        $(this).remove();
    }
}

//Event handler to close input on blur
$(document).on("blur", "#code_output input", tabBlurEvent);//End of function

//Function to close input on ENTER press
$(document).on("keydown", "#code_output input", function (e) {
    if (e.which == 13) {
        $(document).off("blur", "#code_output input", tabBlurEvent);
        $($(this).attr("data-val")).css("display", "inline-block").html($(this).val());
        $(this).remove();
    }
});//End of function

//Function to change options (GENERAL STYLE)
//Function to change width and padding css
$(document).on("keydown", "#css_widthinput, #css_paddinginput", function (e) {
    var value = parseInt($(this).val().match(/\d+/));
    var new_Value = value;
    switch ($(this).attr("id")) {
        case "css_widthinput":
            switch (e.which) {
                case 38:
                    new_Value = value + 1;
                    break;
                case 40:
                    if (new_Value > 0) {
                        new_Value = value - 1;
                    }
                    break;
            }
            $(this).val(new_Value + "px;");
            $("#width").val(new_Value);
            $("#widthSpan").val(new_Value + "px");
            widthTrigger();
            break;
        case "css_paddinginput":
            switch (e.which) {
                case 38:
                    if (new_Value < 100) {
                        new_Value = value + 1;
                    }
                    break;
                case 40:
                    if (new_Value > 0) {
                        new_Value = value - 1;
                    }
                    break;
            }
            $(this).val(new_Value + "px;");
            $("#padding").val(new_Value);
            $("#paddingSpan").html(new_Value + "px");
            paddingTrigger();
            break;
    }
});//End of function
//End of function for GENERAL STYLE

//Function to change options (TEXT FORMAT)
//Function to change letter spacing, line height and word spacing
$(document).on("keydown", "#css_letter_spacinginput, #css_line_heightinput, #css_word_spacinginput", function (e) {
    var value = 0;
    if ($(this).val().indexOf('-') != -1) {
        value = parseInt('-' + $(this).val().match(/\d+/));
    } else {
        value = parseInt($(this).val().match(/\d+/));
    }
    var new_Value = value;
    switch ($(this).attr("id")) {
        case "css_letter_spacinginput":
            switch (e.which) {
                case 38:
                    if (new_Value < 100) {
                        new_Value = value + 1;
                    }
                    break;
                case 40:
                    if (new_Value > -20) {
                        new_Value = value - 1;
                    }
                    break;
            }
            letterSpacingFunction();
            $(this).val(new_Value + "px;");
            $("#letterSpacingInput").val(new_Value);
            $("#letSpac").html(new_Value + "px");
            break;
        case "css_line_heightinput":
            switch (e.which) {
                case 38:
                    if (new_Value < 100) {
                        new_Value = value + 1;
                    }
                    break;
                case 40:
                    if (new_Value > -20) {
                        new_Value = value - 1;
                    }
                    break;
            }
            lineHeightFunction();
            $(this).val(new_Value + "px;");
            $("#lineHeightInput").val(new_Value);
            $("#linHei").html(new_Value + "px");
            break;
        case "css_word_spacinginput":
            switch (e.which) {
                case 38:
                    if (new_Value < 80) {
                        new_Value = value + 1;
                    }
                    break;
                case 40:
                    if (new_Value > -20) {
                        new_Value = value - 1;
                    }
                    break;
            }
            wordSpacingFunction();
            $(this).val(new_Value + "px;");
            $("#wordSpacingInput").val(new_Value);
            $("#wordSpac").html(new_Value + "px");
            break;
    }
});//End of function

//Function to change text alignment
$(document).on("change", "#css_text_alignselect", function () {
    paraToChange.css("text-align", $(this).val());
});//End of function

//Function to change text transform prop
$(document).on("change", "#css_text_transformselect", function () {
    paraToChange.css("text-transform", $(this).val());
    switch ($(this).val()) {
        case "none":
            $("#none").click();
            break;
        case "uppercase":
            $("#upper").click();
            break;
        case "lowercase":
            $("#lower").click();
            break;
    }
    if ($(this).val() == "none") {
        $("#text_transform_paragraph").css("display", "none");
        $(this).remove();
    }
});//End of function

// Function to change text decoration
$(document).on("click", ".selectBox", function () {
    if (!expanded) {
        $("#checkboxes").css("display", "block");
        expanded = true;
    } else {
        $("#checkboxes").css("display", "none");
        expanded = false;
    }
});
$(document).on("mousedown", function (e) {
    if ($.inArray(e.target.id, ["overSelect", "overline", "underline", "line-through", "overline_lbl", "underline_lbl", "line-through_lbl"]) == -1) {
        $("#multiselect_form").css("display", "none");
        $("#css_text_decoration").css("display", "inline-block");
    }
});
//End of function to change text decoration
//End of function for TEXT FORMAT

//Function to change options (FONT FORMAT)
//Function to change the font size
$(document).on("keydown", "#css_font_sizeinput", function (e) {
    var value = 0;
    value = parseInt($(this).val().match(/\d+/));
    var new_Value = value;
    switch (e.which) {
        case 38:
            if (new_Value < 100) {
                new_Value = value + 1;
            }
            break;
        case 40:
            if (new_Value > 0) {
                new_Value = value - 1;
            }
            break;
    }
    fontSizeFunction();
    $(this).val(new_Value + "px;");
    $("#fontSizeInput").val(new_Value);
    $("#fonSi").html(new_Value + "px");
});//End of function

//Function to change style of the font
$(document).on("change", "#css_font_styleselect", function () {
    paraToChange.css("font-style", $(this).val());
    switch ($(this).val()) {
        case "default":
            $("#normalFS").click();
            $("#font_style_paragraph").css("display", "none");
            $(this).remove();
            break;
        case "italic":
            $("#italic").click();
            break;
        case "oblique":
            $("#oblique").click();
            break;
    }
});//End of function

//Function to change weight of the font
$(document).on("change", "#css_font_weightselect", function () {
    paraToChange.css("font-style", $(this).val());
    $("#fontWeightSelect").val($(this).val()).prop("selected", true);
    fontWeightFunction();
});//End of function

//Function to change variant of the font
$(document).on("change", "#css_font_variantselect", function () {
    paraToChange.css("font-style", $(this).val());
    switch ($(this).val()) {
        case "default":
            $("#normalFV").click();
            break;
        case "small-caps":
            $("#smallCaps").click();
            break;
    }
    fontVariantFunction();
});//End of funtion
//End of function for FONT FORMAT

//Function to change options (BOX SHADOW)
$(document).on("keydown", "input.no_prefix, input.webkit, input.moz", function(e){
    e.preventDefault();
    var el_class = $(this).attr("class");
    var value = parseInt($(this).val().match(/\d+/));
    var new_Value = value;
    switch(el_class){
        case "no_prefix":
            switch($(this).attr("id")){
                case "bs_hsinput":
                    switch(e.which){
                        case 38:
                            if (new_Value < 20){
                                new_Value++;
                            }
                            break;
                        case 40:
                            if (new_Value > -20){
                                new_Value--;
                            }                            
                            break;
                    }
                    $(this).val(new_Value + "px");
                    $("#hsRange").val(new_Value);
                    $("hsRangeSpan").html(new_Value + "px");
                    $("#webkit_bs_hs").html(new_Value + "px");
                    $("#moz_bs_hs").html(new_Value + "px");
                    bsPropOb.hshadow = new_Value + "px";
                    addBoxShadow();
                    break;
                case "bs_vsinput":
                    switch(e.which){
                        case 38:
                            if (new_Value < 20){
                                new_Value++;
                            }
                            break;
                        case 40:
                            if (new_Value > -20){
                                new_Value--;
                            }
                            break;
                    }
                    break;
                case "bs_blurinput":
                    switch(e.which){
                        case 38:
                            if (new_Value < 20){
                                new_Value++;
                            }
                            break;
                        case 40:
                            if (new_Value > 0){
                                new_Value--;
                            }
                            break;
                    }
                    break;
                case "bs_spreadinput":
                    switch(e.which){
                        case 38:
                            if (new_Value < 20){
                                new_Value++;
                            }
                            break;
                        case 40:
                            if (new_Value > 0){
                                new_Value--;
                            }
                            break;
                    }
                    break;
            }
            break;
        case "webkit":
            switch($(this).attr("id")){
                case "webkit_bs_hsinput":
                    switch(e.which){
                        case 38:

                            break;
                        case 40:

                            break;
                    }
                    break;
                case "webkit_bs_vsinput":
                    switch(e.which){
                        case 38:

                            break;
                        case 40:

                            break;
                    }
                    break;
                case "webkit_bs_blurinput":
                    switch(e.which){
                        case 38:

                            break;
                        case 40:

                            break;
                    }
                    break;
                case "webkit_bs_spreadinput":
                    switch(e.which){
                        case 38:

                            break;
                        case 40:

                            break;
                    }
                    break;
            }
            break;
        case "moz":
            switch($(this).attr("id")){
                case "moz_bs_hsinput":
                    switch(e.which){
                        case 38:

                            break;
                        case 40:

                            break;
                    }
                    break;
                case "moz_bs_vsinput":
                    switch(e.which){
                        case 38:

                            break;
                        case 40:

                            break;
                    }
                    break;
                case "moz_bs_blurinput":
                    switch(e.which){
                        case 38:

                            break;
                        case 40:

                            break;
                    }
                    break;
                case "moz_bs_spreadinput":
                    switch(e.which){
                        case 38:

                            break;
                        case 40:

                            break;
                    }
                    break;
            }
            break;
    }
});
//End of function for BOX SHADOW

//-------End of CSS editable mode func.-------//