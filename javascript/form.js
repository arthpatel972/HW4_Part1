//  File: form.js
//  Assignment: Multiplication table using javascript
//  File description: This javascript file uses Jquery validation to find all the errors from user and post them
//  Arth Patel, UMass Lowell Computer Science, Arth_patel@student.uml.edu
//  Copyright (c) 2022 by Arth Patel. All rights reserved. May be
//  freely copied or excerpted for educational purposes with credit to the
//  author.
//  Updated by Arth Patel on June 23, 2022 at 3:00 PM

$(document).ready(function(){

    $("#Form").submit(function(e){
        e.preventDefault();

    }).validate({
        rules:{
            digit1:{
                required: true,
                number:true,
                range: [-50, 50]
                
            },
            digit2:{
                required: true,
                number:true,
                range: [-50, 50]
            },
            digit3:{
                required: true,
                number:true,
                range: [-50, 50]
            },
            digit4:{
                required: true,
                number:true,
                range: [-50, 50]
            },
        },

        messages:{
            digit1:{
                required: "Please fill out this field",
                range:"Please enter a number between -50 to 50",
                
            },
            digit2:{
                required: "Please fill out this field",
                range:"Please enter a number between -50 to 50",
                
            },
            digit3:{
                required: "Please fill out this field",
                range:"Please enter a number between -50 to 50",
                
            } ,
            digit4:{
                required: "Please fill out this field",
                range:"Please enter a number between -50 to 50",
                
            }
        }


    });


});

let tableContainer = document.getElementById("tableContainer");
function makeTable() {
  // get all the values in int
  var digit1 = document.getElementById('digit1').value;
  var digit2 = document.getElementById('digit2').value;
  var digit3 = document.getElementById('digit3').value;
  var digit4 = document.getElementById('digit4').value;

  deleteTable(tableContainer);
  //generates the table
  tableGen(digit1, digit2, digit3, digit4)
};

function tableGen(digit1, digit2, digit3, digit4) {
    // make a new table
    const newTable = document.createElement("table");

    // check if input values are correct
    if (validator(digit1, digit2, digit3, digit4) != 0) {
      let x, y;
      let table = "";
  
      // Create table
      for (y = digit3 - 1; y <= digit4; y++) {
        table += "<tr>";
        if (y == digit3 - 1) {
          table += "<th></th>";
          for (x = digit1; x <= digit2; x++) {
            table += "<th>" + x + "</th>";
          }
        } else {
          table += "<td>" + y + "</td>";
          for (x = digit1; x <= digit2; x++) {
            table += "<td>" + x * y + "</td>";
          }
        }
        table += "</tr>";
      }
      // Insert table
      newTable.innerHTML = table;
      tableContainer.append(newTable)
    }
  }

function validator(digit1, digit2, digit3, digit4){
    if (digit1 == "" || digit2 == "" || digit3 == "" || digit4 == "")
        return 0;
    if (digit1 < -50 || digit2 > 50 || digit3 < -50 || digit4 > 50)
        return 0;
    else 
        return 1;
}

function deleteTable(table){
    while(table.firstChild){
        table.removeChild(table.firstChild)
    }
}