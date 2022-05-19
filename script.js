var now = moment()
// var hour = now.format("h")
//var hour = 3
$("#currentDay").text(now.format("MMM Do, YYYY"));

$("#currentHour").text(now.format("h:mm:ss a"));
$("#currentHour").text(now.format("h:mm:ss a"));
$("#currentH").text(hour);


console.log("hello")
if ($("#row2").attr("data-hour") === hour) {
    console.log("yes, it equals hour")
} else console.log("nope")



const hourRows = {
    row9: $("#row9").attr("data-hour"),
    row10: $("#row10").attr("data-hour"),
    row11: $("#row11").attr("data-hour"),
    row12: $("#row12").attr("data-hour"),
    row1: $("#row1").attr("data-hour"),
    row2: $("#row2").attr("data-hour"),
    row3: $("#row3").attr("data-hour"),
    row4: $("#row4"),
    row5: $("#row5").attr("data-hour"),
}



// Object.values(hourRows).forEach(val => {
//     console.log(val)
//     if (val == hour ) {
//         console.log(val, " is the current hour")

//     }
// });

// Object.keys(hourRows).forEach(key => {
//     if (hourRows[key] == hour) {
//         console.log("blah blah ", key)
//         hourRows[key] 
//     }

// })

//$("#row9").attr("class", "table-success")

var hour = 4

$.each(hourRows, function(key, value) {
    if (value == hour) {
        console.log("ok", value, key)
    $(key).attr("class", "table-success")
    }
  });
  console.log($('.bob'))