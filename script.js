
// from https://dirask.com/posts/JavaScript-dynamically-create-grid-of-divs-using-flexbox-139abp
// to be dynamic - add input id to columns and rows variable - DONE
// needs color change added - toggle class - DONE
// fix gridSize prompt



//set default size
var gridSize = 16;

//on input click
function promptGrid () {
var gridSize = prompt('Enter grid size x by x:');
console.log(gridSize);
}
// alternate;
//document.querySelector('#gridSize').addEventListener('click', promptGrid);


let columns = gridSize;
let rows = gridSize;

var grid = document.createElement('div');

grid.className = 'grid';

for (var i = 0; i < columns; ++i) {
    var column = document.createElement('div'); // create column
    column.className = 'column';
    for (var j = 0; j < rows; ++j) {
        var row = document.createElement('div'); // create row
        row.className = 'row';
        row.classList.add('box'); //add box class

        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
    
}
document.body.appendChild(grid);

// bypass hover function
grid.addEventListener('mouseover', function (e) {
    //add active class
    if (e.target.matches('.box')) {
      e.target.classList.add('active');
    }
  });
// add delete function by clicking
  grid.addEventListener('click', function (e) {
    //remove active class
    if (e.target.matches('.box')) {
      e.target.classList.remove('active');
    }
  });