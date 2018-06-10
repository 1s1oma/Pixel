// Select color input
// Select size input
let row, width, height, color, submit, data;

let table = document.getElementById("pixelCanvas");
let input = document.querySelectorAll("input");

table.addEventListener("click", addColor);

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
function makeGrid(event) {
    // Your code goes here!
    event.preventDefault();
    
    while(table.firstChild){
table.removeChild(table.firstChild);
    }

     for (let i=0; i<height; i++){
          row= document.createElement("tr");
          let col_builder=document.createElement("td");
          for(let j=0; j<width; j++){
            row.appendChild(col_builder.cloneNode(true));
           // let column=document.createElement("td");
           // col_builder.insertAdjacentElement('afterend', column);
           console.log("col", col_builder);
             // let col_builder="<td></td>";
             // column+=col_builder;
          }
      table.append(row);
     }
  }

  //Change color
function addColor(event) {
    color = (document.getElementById("colorPicker")|| {}).value;
    if(event.target.nodeName === "TD"){
        event.target.style.backgroundColor = color;
    }
}

submit = document.getElementById("submit");
submit.addEventListener('click', makeGrid);



