// Standard Priority Calculator

var display1 = {
    operation: "",
    evaluation: "",
    answer: ""
};
var JSONObject = {
    "a": "",
    "b": "",
    "op": ""
    };


// default display values
$('#display1').val("");

// Set default theme (light)
$(".container").addClass("container-light");
$("form").addClass("form-light");
$("form input").addClass("form-input-light");
$(".operand-group").addClass("operand-group-light");
$(".operator-group").addClass("operator-group-light");
$("#equal").addClass("equal-light");
$("#clear").addClass("clear-light");
$("#backspace").addClass("backspace-light");


// Digits
$('#zero').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0030');
})

$('#one').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0031');
})

$('#two').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0032');

})

$('#three').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0033');

})

$('#four').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0034');

})

$('#five').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0035');

})

$('#six').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0036');

})

$('#seven').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0037');

})

$('#eight').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0038');

})

$('#nine').on('click', function () {
    $('#display1').val($('#display1').val() + '\u0039');

})
              
$('#decimal').on('click', function () {
    $('#display1').val($('#display1').val() + '\u002e');

})

// Operators

$('#add').on('click', function () {
    $('#Operator').val('add');
    $('#value1').val($('#display1').val());
    $('#display1').val("");
})

$('#subtract').on('click', function () {
    $('#Operator').val('sub');
    $('#value1').val($('#display1').val());
    $('#display1').val("");
})

$('#multiply').on('click', function () {
    $('#Operator').val('mul');
    $('#value1').val($('#display1').val());
    $('#display1').val("");
})

$('#divide').on('click', function () {
    $('#Operator').val('div');
    $('#value1').val($('#display1').val());
    $('#display1').val("");
})


// Clear
$('#clear').on('click', function () {
    display1.operation = "",
    display1.evaluation = "",
    $('#display1').val("");
    $('#value1').val("");
    $('#value2').val("");
    $('#Operator').val("");
    $('#result').val("");



})

// Equal
$('#equal').on('click', function Calculate() {
    $('#value2').val($('#display1').val());
    JSONObject.a = parseInt(validate(document.getElementById("value1").value));
    JSONObject.b = parseInt(validate(document.getElementById("value2").value));
    JSONObject.op = document.getElementById("Operator").value;

    $.getJSON("https://k852g204lf.execute-api.us-east-1.amazonaws.com/Default/Calc?"
    + "operand1=" + JSONObject.a + "&operand2="+JSONObject.b + "&operator="+ JSONObject.op)
    .done(function (json) {
    document.getElementById("result").value = json.c;
    });
})
function validate(value) {
    if (value == null || value == "") {
    alert("Required Field");
    return 0;
    } else if (isNaN(value)) {
        alert("Must be a Number Field");
        return 0;
    }
    else return value;
}


// Backspace
$('#backspace').on('click', function () {    
    display1.operation = display1.operation.slice(0, display1.operation.length-1);
    $('#display1').val($('#display1').val().slice(0, $('#display1').val().length-1));
    evaluate();
    $('#display2').val(display1.evaluation);
})

// Theme system
$("input[type='checkbox']").change(function () {
    // dark theme
    if (this.checked) {
        //alert("dark");
        $(".container").removeClass("container-light");
        $(".container").addClass("container-dark");
        $("form").removeClass("form-light");
        $("form").addClass("form-dark");
        $("form input").removeClass("form-input-light");
        $("form input").addClass("form-input-dark");
        $(".operand-group").removeClass("operand-group-light");
        $(".operand-group").addClass("operand-group-dark");
        $(".operator-group").removeClass("operator-group-light");
        $(".operator-group").addClass("operator-group-dark");
        $("#equal").removeClass("equal-light");
        $("#equal").addClass("equal-dark");
        $("#clear").removeClass("clear-light");
        $("#clear").addClass("clear-dark");
        $("#backspace").removeClass("backspace-light");
        $("#backspace").addClass("backspace-dark");
    }
    // light theme (default)
    else {
        //alert("light");
        $(".container").removeClass("container-dark");
        $(".container").addClass("container-light");
        $("form").removeClass("form-dark");
        $("form").addClass("form-light");
        $("form input").removeClass("form-input-dark");
        $("form input").addClass("form-input-light");
        $(".operand-group").removeClass("operand-group-dark");
        $(".operand-group").addClass("operand-group-light");
        $(".operator-group").removeClass("operator-group-dark");
        $(".operator-group").addClass("operator-group-light");
        $("#equal").removeClass("equal-dark");
        $("#equal").addClass("equal-light");
        $("#clear").removeClass("clear-dark");
        $("#clear").addClass("clear-light");
        $("#backspace").removeClass("backspace-dark");
        $("#backspace").addClass("backspace-light");
    }
})