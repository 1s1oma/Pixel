// Select color input
// Select size input
let row, column, width, height, color, submit;

let table = document.getElementById("pixelCanvas");
let input = document.querySelectorAll("input");

for(let i=0; i<input.length; i++){
    if(input[i].type != "submit"){
        input[i].addEventListener("input", selectInput);
    }
 }

//Select input
function selectInput() {
    height = (document.getElementById("inputHeight") || {}).value;   console.log(height);
    width = (document.getElementById("inputWidth") || {}).value;    console.log(width);
    color = (document.getElementById("colorPicker")|| {}).value; console.log(color);
}

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    // Your code goes here!
     for (let i=0; i<height; i++){
          row="<tr>"; column="";
  
          for(let j=0; j<width; j++){
              let col_builder="<td></td>";
              column+=col_builder;
          }
          row=row+column+"</tr>";
          console.log("ty", row);
      table.append(row);
     }
  }

submit = document.getElementById("submit");
submit.addEventListener('click', makeGrid);



