var now = moment()
var hour = now.format("H")

var input9 = []
var input10 = []
var input11 = []
var input12 = []
var input1 = []
var input2 = []
var input3 = []
var input4 = []
var input5 = []


$("#currentDay").text(now.format("MMM Do, YYYY"))
$("#currentHour").text(now.format("h:mm a"))


const hourRows = {
    row9: $("#row9"),
    row10: $("#row10"),
    row11: $("#row11"),
    row12: $("#row12"),
    row1: $("#row1"),
    row2: $("#row2"),
    row3: $("#row3"),
    row4: $("#row4"),
    row5: $("#row5"),
}
console.log(hour)
function nowColor() {Object.keys(hourRows).forEach(key => {
    if ($(hourRows[key]).attr("data-hour") == hour) {
        ($(hourRows[key]).attr("class", "table-secondary"))
    }
    else if ($(hourRows[key]).attr("data-hour") < hour) {
        ($(hourRows[key]).attr("class", "table-warning"))
    }
    else if ($(hourRows[key]).attr("data-hour") > hour) {
        ($(hourRows[key]).attr("class", "table-success"))
        }
})}

$("#btn9").click(function(){
    clickFunction($('#event9'), $('#input9'), input9)
})

function clickFunction(a,b,c) {
    c.push($(b).val())
    console.log(c, "in function")
    $(a).html(c.join("<br>"))
    $(b).val('')
    $(a).append(b)
    // localStorage.setItem('stored9', JSON.stringify(c))
    // var storage = localStorage.getItem(JSON.stringify('stored9'))
    // console.log(storage)
    localStorage.setItem('stored9', c)
    var storage = localStorage.getItem('stored9')
    console.log(storage)

}

function init() {
    $('#event9').text(localStorage.getItem('stored9'))
}

nowColor()
init()
