/**
 * Created by USALNVI on 17.04.2017.
 */

var elements_DOM_and_CSS_object = {
    //Main input DOM element to type text to change
    input_text_changing_element: $(".text_to_change"),
    //Main span DOM element with text to change
    span_changed_element: $("#change-here"),
    //The property which contains CSS properties of the element, which will be changed,
    //used inside the CSS editor, and saved inside CSS file
    css_prop_obj: {
        width: 0,
        padding: 0,
        color: "rgb(0,0,0)",
        background_color: "transparent",
        letter_spacing: 0,
        line_height: 0,
        text_align: "center",
        text_decoration: "",
        text_transform: "",
        word_spacing: 0,
        font_size: 0,
        font_style: "default",
        font_weight: 400,
        font_variant: "default",
        box_shadow: {
            hshadow: 0,
            vshadow: 0,
            blur: 0,
            spread: 0,
            color: "transparent"
        },
        text_shadow: {
            hshadow: 0,
            vshadow: 0,
            blurRad: 0,
            color: "transparent"
        },
        border_radius: {
            left: "0",
            right: "0",
            top: "0",
            bottom: "0"
        },
        border: {
            left: "0",
            right: "0",
            top: "0",
            bottom: "0"
        },
        opacity: 1
    },
    //The property which contains the buttons to open reveals
    //In the future the button to open HTML DOM elements reveal will be added
    reveal_DOM_triggers: {
        open_options: $("#open_options_reveal"),
        open_input: $("#open_input_reveal")
    },
    //The property which contains triggers to open tabs with options and buttons to maintain input section
    tabs_and_buttons_DOM_triggers: {
        input_section: {
            random_fulfill: $("#randomFulfill"),
            reset_text: $("#reset_text"),
            change_line_number: $("#change_line_number")
        },
        options_section: {
            tabs_DOM_triggers: {
                general_style: $("#gen_style"),
                text_format: $("#t_form"),
                font_format: $("#f_form"),
                box_shadow: $("#b_s"),
                text_shadow: $("#t_s"),
                border: $("#bord"),
                opacity: $("#opacity")
            }
        }
    },
    //The property which contains triggers to change CSS elements of the text. It contains main options triggers
    //and also the triggers to change CSS property inside CSS editor
    triggers_to_change_CSS_properties_DOM_elements: {
        color_pickers: {
            main: {
                font_color: {
                    change: $("#customColor"),
                    reset: $("#resetColor")
                },
                background_color: {
                    change: $("#customBColor"),
                    reset: $("#resetBColor")
                },
                //There is no need to add reset button to this DOM elements
                box_shadow_color: $("#custom"),
                text_shadow_color: $("#tsColor"),
                border_color: {
                    left_border: $("#clrzleftBord"),
                    right_border: $("#clrzrightBord"),
                    top_border: $("#clrztopBord"),
                    bottom_border: $("#clrzbottomBord"),
                    whole_border: $("#clrzallBord")
                }
            },
            mode: {
                font_color: {
                    change: $("#css_colorinput"),
                    reset: $("#cross_close_css_color")
                },
                background_color: {
                    change: $("#css_background_colorinput"),
                    reset: $("#cross_close_css_background_color")
                },
                box_shadow_color: {
                    change: "Add Colorpicker",
                    reset: "Add reset Button"
                },
                text_shadow_color: {
                    change: "Add Colorpicker",
                    reset: "Add reset Button"
                },
                border_color: {
                    change: {
                        left: "Add Colorpicker",
                        right: "Add Colorpicker",
                        top: "Add Colorpicker",
                        bottom: "Add Colorpicker"
                    },
                    reset: {
                        left: "Add reset Button",
                        right: "Add reset Button",
                        top: "Add reset Button",
                        bottom: "Add reset Button"
                    }
                }
            }
        },
        triggers: {
            width: {
                span: $("#widthSpan"),
                change: {
                    main: $("#width"),
                    mode: $("#widthinput")
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            padding: {
                span: $("#paddingSpan"),
                change: {
                    main: $("#padding"),
                    mode: $("#paddinginput")
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            letter_spacing: {
                span: $("#letSpac"),
                change: {
                    main: $("#letterSpacingInput"),
                    mode: $("#css_letter_spacinginput")
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            line_height: {
                span: $("#linHei"),
                change: {
                    main: $("#lineHeightInput"),
                    mode: $("#css_line_heightinput")
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            text_alignment: {
                change: {
                    main: {
                        left: $("#left"),
                        right: $("#right"),
                        center: $("#center")
                    },
                    mode: {
                        select: $("#css_text_alignselect")
                    }
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            text_decoration: {
                change: {
                    main: {
                        overline: $("#over"),
                        underline: $("#under"),
                        line_through: $("#through")
                    },
                    mode: {
                        overline: $("#overline"),
                        underline: $("#underline"),
                        line_through: $("#line-through")
                    }
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            text_transform: {
                change: {
                    main: {
                        uppercase: $("#upper"),
                        lowercase: $("#lower"),
                        none: $("#none")
                    },
                    mode: {
                        select: $("#css_text_transformselect")
                    }
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            word_spacing: {
                span: $("#wordSpac"),
                change: {
                    main: $("#wordSpacingInput"),
                    mode: $("#css_word_spacingselect")
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            font_size: {
                span: $("#fonSi"),
                change: {
                    main: $("#fontSizeInput"),
                    mode: $("#css_font_sizeinput")
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            font_style: {
                change: {
                    main: {
                        italic: $("#italic"),
                        normal: $("#normalFS"),
                        oblique: $("#oblique")
                    },
                    mode: {
                        select: $("#css_font_styleselect")
                    }
                },
                reset: {
                    main: "Add Button",
                    mode: "On Blur"
                }
            },
            font_weight: {
                change: {
                    main: $("#fontWeightSelect"),
                    mode: $("#css_font_weightselect")
                },
                reset: {
                    main: "Add Button",
                    mode: "Choose 'Regular' option"
                }
            },
            font_variant: {
                change: {
                    main: {
                        small_caps: $("#smallCaps"),
                        default: $("#default")
                    },
                    mode: {
                        select: $("#css_font_variantselect")
                    }
                },
                reset: {
                    main: "On 'default' radio",
                    mode: "On 'default' radio"
                }
            },
            box_shadow: {
                spans: {
                    h_shadow_span: $("#hsRangeSpan"),
                    v_shadow_span: $("#vsRangeSpan"),
                    blur_span: $("#bRangeSpan"),
                    spread_span: $("#spRangeSpan")
                },
                main_change: {
                    h_shadow: $("#hsRange"),
                    v_shadow: $("#vsRange"),
                    blur: $("#bRange"),
                    spread: $("#spRange")
                },
                include: {
                    h_shadow: $("#hs"),
                    v_shadow: $("#vs"),
                    blur: $("#b"),
                    spread: $("#sp")
                },
                prefixes: {
                    usual: {
                        h_shadow: $("#bs_hsinput"),
                        v_shadow: $("bs_vsinput"),
                        blur: $("#bs_blurinput"),
                        spread: $("#bs_spreadinput")
                    },
                    moz: {
                        h_shadow: $("#moz_bs_hsinput"),
                        v_shadow: $("moz_bs_vsinput"),
                        blur: $("#moz_bs_blurinput"),
                        spread: $("#moz_bs_spreadinput")
                    },
                    webkit: {
                        h_shadow: $("#webkit_bs_hsinput"),
                        v_shadow: $("webkit_bs_vsinput"),
                        blur: $("#webkit_bs_blurinput"),
                        spread: $("#webkit_bs_spreadinput")
                    }
                },
                reset: {
                    main: $("#bsResetBtn"),
                    mode: "Add Button"
                },
                add: $("#boxShadowGen")
            },
            text_shadow: {
                spans: {
                    h_shadow: $("#hsTSRangeTSSpan"),
                    v_shadow: $("#vsTSRangeTSSpan"),
                    blur: $("#bTSRangeTSSpan")
                },
                change: {
                    main: {
                        h_shadow: $("#hsTSRange"),
                        v_shadow: $("#vsTSRange"),
                        blur: $("#bTSRange")
                    },
                    mode: {
                        h_shadow: $("#ts_hsinput"),
                        v_shadow: $("#ts_vsinput"),
                        blur: $("#ts_blurinput")
                    }
                },
                include: {
                    h_shadow: $("#hsTS"),
                    v_shadow: $("#vsTS"),
                    blur: $("#bTS")
                }
            },
            border: {
                left_border: {
                    span: $("#border-left-span"),
                    checkbox: $("#leftBord"),
                    size: $("#leftBordRange"),
                    type: $("#leftBordStyle")
                },
                right_border: {
                    span: $("#border-right-span"),
                    checkbox: $("#rightBord"),
                    size: $("#rightBordRange"),
                    type: $("#rightBordStyle")
                },
                top_border: {
                    span: $("#border-top-span"),
                    checkbox: $("#topBord"),
                    size: $("#topBordRange"),
                    type: $("#topBordStyle")
                },
                bottom_border: {
                    span: $("#border-bottom-span"),
                    checkbox: $("#bottomBord"),
                    size: $("#bottomBordRange"),
                    type: $("#bottomBordStyle")
                },
                all_side_border: {
                    span: $("#border-span"),
                    checkbox: $("#allBord"),
                    size: $("#allBordRange"),
                    type: $("#allBordStyle")
                }
            },
            border_radius: {
                spans: {
                    left_span: $("#borderLeftRadiusSpan"),
                    right_span: $("#borderRightRadiusSpan"),
                    top_span: $("#borderTopRadiusSpan"),
                    bottom_span: $("#borderBottomRadiusSpan"),
                    all_side_radius: $("#borderRadiusSpan")
                },
                main_change: {
                    left_border_radius: $("#borderLeftRadius"),
                    right_border_radius: $("#borderRightRadius"),
                    top_border_radius: $("#borderTopRadius"),
                    bottom_border_radius: $("#borderBottomRadius")
                },
                prefixes: {
                    usual: {
                        t_r: $("#t_r"),
                        r_r: $("#r_r"),
                        b_r: $("#b_r"),
                        l_r: $("#l_r")
                    },
                    moz: {
                        t_r: $("#moz_t_r"),
                        r_r: $("#moz_r_r"),
                        b_r: $("#moz_b_r"),
                        l_r: $("#moz_l_r")
                    },
                    webkit: {
                        t_r: $("#webkit_t_r"),
                        r_r: $("#webkit_r_r"),
                        b_r: $("#webkit_b_r"),
                        l_r: $("#webkit_l_r")
                    }
                },
                reset: {
                    reset_all: $("#reset_border_radius"),
                    reset_parts: $("#reset_parts")
                }
            },
            opacity: {
                spans: {
                    opacity_span: $("#allSpan"),
                    color_span: $("#cSpan"),
                    b_color_span: $("#bcSpan"),
                    bs_color_span: $("#bsSpan"),
                    ts_color_span: $("#tsSpan"),
                    all_side_border_span: $("#allBordSpan"),
                    left_border_span: $("#leftBordSpan"),
                    right_border_span: $("#rightBordSpan"),
                    bottom_border_span: $("#bottomBordSpan"),
                    top_border_span: $("#topBordSpan")
                },
                opacity_prop: $("#allRange"),
                color_opacity: $("#cRange"),
                b_color_opacity: $("#bcRange"),
                bs_color_opacity: $("#bsRange"),
                ts_color_opacity: $("#tsRange"),
                all_side_border_opacity: $("#allBordRangeOpacity"),
                left_border_opacity: $("#leftBordRangeOpacity"),
                right_border_opacity: $("#rightBordRangeOpacity"),
                bottom_border_opacity: $("#bottomBordRangeOpacity"),
                top_border_opacity: $("#topBordRangeOpacity")
            }
        },
        css_editable_mode__spans_and_paragraphs: {
            general_style: {
                width: {
                    p: $("#width_paragraph"),
                    span: $("#css_width")
                },
                padding: {
                    p: $("#padding_paragraph"),
                    span: $("#css_padding")
                },
                color: {
                    p: $("#color_paragraph"),
                    span: $("#css_color")
                },
                b_color: {
                    p: $("#background_color_paragraph"),
                    span: $("#css_background_color")
                }
            },
            text_format: {
                letter_spacing: {
                    p: $("#letter_spacing_paragraph"),
                    span: $("#css_letter_spacing")
                },
                line_height: {
                    p: $("#line_height_paragraph"),
                    span: $("#css_line_height")
                },
                text_align: {
                    p: $("#text_align_paragraph"),
                    span: $("#css_text_align")
                },
                text_decoration: {
                    p: $("#text_decoration_paragraph"),
                    span: $("#css_text_decoration")
                },
                word_spacing: {
                    p: $("#word_spacing_paragraph"),
                    span: $("#css_word_spacing")
                }
            },
            font_format: {
                font_size: {
                    p: $("#font_size_paragraph"),
                    span: $("#css_font_size")
                },
                font_style: {
                    p: $("#font_style_paragraph"),
                    span: $("#css_font_style")
                },
                font_weight: {
                    p: $("#font_weight_paragraph"),
                    span: $("#css_font_weight")
                },
                font_variant: {
                    p: $("#font_variant_paragraph"),
                    span: $("#css_font_variant")
                }
            },
            box_shadow: {
                no_prefix: {
                    p: $("#box_shadow_paragraph"),
                    spans: {
                        h_shadow: $("#bs_hs"),
                        v_shadow: $("#bs_vs"),
                        blur: $("#bs_blur"),
                        spread: $("#bs_spread"),
                        color: $("#bs_color")
                    }
                },
                moz: {
                    p: $("#moz_box_shadow_paragraph"),
                    spans: {
                        h_shadow: $("#moz_bs_hs"),
                        v_shadow: $("#moz_bs_vs"),
                        blur: $("#moz_bs_blur"),
                        spread: $("#moz_bs_spread"),
                        color: $("#moz_bs_color")
                    }
                },
                webkit: {
                    p: $("#webkit_box_shadow_paragraph"),
                    spans: {
                        h_shadow: $("#webkit_bs_hs"),
                        v_shadow: $("#webkit_bs_vs"),
                        blur: $("#webkit_bs_blur"),
                        spread: $("#webkit_bs_spread"),
                        color: $("#webkit_bs_color")
                    }
                }
            },
            text_shadow: {
                p: $("#text_shadow_paragraph"),
                spans: {
                    h_shadow: $("#ts_hs"),
                    v_shadow: $("#ts_vs"),
                    blur: $("#ts_blur"),
                    color: $("#ts_color")
                }
            },
            border: {
                border: {
                    all_border: {
                        p: $("#border_paragraph"),
                        spans: {
                            size: $("border_size_span"),
                            type: $("#border_type_span"),
                            color: $("#border_color_span")
                        }
                    },
                    left_border: {
                        p: $("#border-left_paragraph"),
                        spans: {
                            size: $("#border-left_size_span"),
                            type: $("#border-left_type_span"),
                            color: $("#border-left_color_span")
                        }
                    },
                    right_border: {
                        p: $("#border-right_paragraph"),
                        spans: {
                            size: $("#border-right_size_span"),
                            type: $("#border-right_type_span"),
                            color: $("#border-right_color_span")
                        }
                    },
                    top_border: {
                        p: $("#border-top_paragraph"),
                        spans: {
                            size: $("#border-top_size_span"),
                            type: $("#border-top_type_span"),
                            color: $("#border-top_color_span")
                        }
                    },
                    bottom_border: {
                        p: $("#border-bottom_paragraph"),
                        spans: {
                            size: $("#border-bottom_size_span"),
                            type: $("#border-bottom_type_span"),
                            color: $("#border-bottom_color_span")
                        }
                    }
                },
                border_radius: {
                    no_prefix: {
                        p: $("#border-radius-paragraph"),
                        spans: {
                            left: $("#left-radius"),
                            right: $("#right-radius"),
                            top: $("#top-radius"),
                            bottom: $("#bottom-radius")
                        }
                    },
                    moz: {
                        p: $("#webkit-border_radius_paragraph"),
                        spans: {
                            left: $("#webkit-left-radius"),
                            right: $("#webkit-right-radius"),
                            top: $("#webkit-top-radius"),
                            bottom: $("#webkit-bottom-radius")
                        }
                    },
                    webkit: {
                        p: $("#moz-border_radius_paragraph"),
                        spans: {
                            left: $("#moz-left-radius"),
                            right: $("#moz-right-radius"),
                            top: $("#moz-top-radius"),
                            bottom: $("#moz-bottom-radius")
                        }
                    }
                }
            },
            opacity: {
                p: $("#opacity_paragraph"),
                span: $("#css_opacity")
            }
        }
    }
};



