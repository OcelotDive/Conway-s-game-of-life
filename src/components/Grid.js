import React from "react";

var mainGrid;
var mirrorGrid;
let p = 0;
export class Grid extends React.Component {
    //constructor
        constructor(props) {
        super(props);
        this.state = {
           aboutClicked: false,
            genCount: 0
            
        };
            
      mainGrid =  this.createArrayGrid(300)
           mirrorGrid = this.createArrayGrid(300)
            this.startGrid(mainGrid);
             this.updateGrid();
           this.tick = this.tick.bind(this)
        
    }
    


    componentDidMount() {
        this.tick();
    }
    
   

    
    tick (){
        if(this.props.isPaused === false) {
        this.drawGrid();
        this.updateGrid();
       
       p <= 4999 ? p++ : p = 'Generation Count Exceeds 5000';
        if(p !== 5001) {
       requestAnimationFrame(this.tick)
        }
        else { return}
        this.setState({
            genCount: p 
        })
            
        }
        else {
            !requestAnimationFrame(this.tick);
        }
    
    }
    
    
    createArrayGrid(rowNum) {
        
        let grid = [];
        
        for(let i = 0; i < rowNum; i++) {
            grid[i] = [];
        }
     
       return grid;
    }
    
    
startGrid(mainGrid) { //fill the grid randomly

for (var j = 0; j < 300; j++) { //iterate through rows

for (var k = 0; k < 300; k++) { //iterate through columns

var randomBin = Math.floor(Math.random() * 2); //random number



if (randomBin === 1) {

mainGrid[j][k] = 1;

} else {

mainGrid[j][k] = 0;

}

}

}
//End start Grid
    
}
    
 drawGrid() { //draw the contents of the grid onto a canvas
 
const ctx = this.refs.canvas.getContext('2d');


ctx.clearRect(0, 0, 300, 300); //this should clear the canvas ahead of each redraw

for (var j = 1; j < 300; j++) { //iterate through rows

for (var k = 1; k < 300; k++) { //iterate through columns

if (mainGrid[j][k] === 1) {

ctx.fillStyle = '#ffe34c';

ctx.fillRect(j, k, 1, 1);

}

}

}
 
}
   //update
    
    
    
updateGrid() { //perform one iteration of grid update

for (var j = 1; j < 300 - 1; j++) { //iterate through rows

for (var k = 1; k < 300 - 1; k++) { //iterate through columns

var totalCells = 0;

//add up the total values for the surrounding cells

totalCells += mainGrid[j - 1][k - 1]; //top left

totalCells += mainGrid[j - 1][k]; //top center

totalCells += mainGrid[j - 1][k + 1]; //top right

totalCells += mainGrid[j][k - 1]; //middle left

totalCells += mainGrid[j][k + 1]; //middle right

totalCells += mainGrid[j + 1][k - 1]; //bottom left

totalCells += mainGrid[j + 1][k]; //bottom center

totalCells += mainGrid[j + 1][k + 1]; //bottom right

//apply the rules to each cell

if (mainGrid[j][k] === 0) {

switch (totalCells) {

case 3:

mirrorGrid[j][k] = 1; //if cell is dead and has 3 neighbours, switch it on

break;

default:

mirrorGrid[j][k] = 0; //otherwise leave it dead

}

} else if (mainGrid[j][k] === 1) { //apply rules to living cell

switch (totalCells) {

case 0:

case 1:

mirrorGrid[j][k] = 0; //die of lonelines

break;

case 2:

case 3:

mirrorGrid[j][k] = 1; //carry on living

break;

case 4:

case 5:

case 6:

case 7:

case 8:

mirrorGrid[j][k] = 0; //die of overcrowding

break;

default:

mirrorGrid[j][k] = 0; //

}

}

}

}

//copy mirrorGrid to theGrid

for (var j = 0; j < 300; j++) { //iterate through rows

for (var k = 0; k < 300; k++) { //iterate through columns

mainGrid[j][k] = mirrorGrid[j][k];


}

}

}    
    
 aboutOnOff() {
     this.setState({
         aboutClicked: !this.state.aboutClicked
     })
     
 }   
    
    
  
    render() {
        const aboutClass = this.props.isClicked  ? 'info animated fadeInLeft' : 'infoOff animated fadeOutLeft';
        
        return(
            <div>
            <div className="genCounter"><label>Generation Count</label><div>{this.state.genCount}</div></div>
            <div className={aboutClass}>
            <h2 className="aboutrulesHeader">Rules</h2>
            <div><p>
            The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbours, which are the cells that are directly horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:</p>
            </div>
            <ol>
<li>Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure[1]).</li>
<li>Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).</li>
<li>Any live cell with two or three live neighbours lives, unchanged, to the next generation.</li>
<li>Any dead cell with exactly three live neighbours will come to life.</li>
        </ol>
            </div>
            <canvas ref="canvas" className="myCanvas" width={150} height={150}></canvas>
            </div>
        );
    }
}



















