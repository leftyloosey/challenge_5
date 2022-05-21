var now = moment()
var hour = now.format("H")

$("#currentDay").text(now.format("MMM Do, YYYY"))
$("#currentHour").text(now.format("h:mm a"))

var input9 = []
var input10 = []
var input11 = []
var input12 = []
var input1 = []
var input2 = []
var input3 = []
var input4 = []
var input5 = []

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

// sets the colors of the hourly rows
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

// gets and prints the information from storage
function init(a,b) {
    var storage = localStorage.getItem(a)
    console.log(storage)
    $(b).prepend(storage)
}

//takes row input and sends it to storage
function clickAlarm(row,text,array,local) {
    array.push($(text).val())
    console.log(array, "in function")
    $(row).html(array.join("<br>"))
    $(text).val('')
    $(row).append(text)
  
    localStorage.setItem(local, array)
    var storage = localStorage.getItem(local)
    console.log(storage)
}


// i wanted to do this without so many lines. that would be a really 
// complicated kind of loop and i don't know how to write it. advice?
$("#btn9").click(function(){
    clickAlarm($('#event9'), $('#input9'), input9, 'stored9')
})
$("#btn10").click(function(){
    clickAlarm($('#event10'), $('#input10'), input10, 'stored10')
})
$("#btn11").click(function(){
    clickAlarm($('#event11'), $('#input11'), input11, 'stored11')
})
$("#btn12").click(function(){
    clickAlarm($('#event12'), $('#input12'), input12, 'stored12')
})
$("#btn1").click(function(){
    clickAlarm($('#event1'), $('#input1'), input1, 'stored1')
})
$("#btn2").click(function(){
    clickAlarm($('#event2'), $('#input2'), input2, 'stored2')
})
$("#btn3").click(function(){
    clickAlarm($('#event3'), $('#input3'), input3, 'stored3')
})
$("#btn4").click(function(){
    clickAlarm($('#event4'), $('#input4'), input4, 'stored4')
})
$("#btn5").click(function(){
    clickAlarm($('#event5'), $('#input5'), input5, 'stored5')
})

init('stored9', $('#event9'))
init('stored10', $('#event10'))
init('stored11', $('#event11'))
init('stored12', $('#event12'))
init('stored1', $('#event1'))
init('stored2', $('#event2'))
init('stored3', $('#event3'))
init('stored4', $('#event4'))
init('stored5', $('#event5'))

nowColor()