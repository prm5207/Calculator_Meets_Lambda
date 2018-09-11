var JSONObject = {
    "a": "",
    "b": "",
    "op": ""
    };
function calculate() {
    JSONObject.a = parseInt(validate(document.getElementById("value1").value));
    JSONObject.b = parseInt(validate(document.getElementById("value2").value));
    JSONObject.op = document.getElementById("Operator").value;

    $.getJSON("https://k852g204lf.execute-api.us-east-1.amazonaws.com/Default/Calc?"
    + "operand1=" + JSONObject.a + "operand2="+JSONObject.b + "operator="+ JSONObject.op)
    .done(function (json) {
    document.getElementById("result").value = json.c;
    });
}
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