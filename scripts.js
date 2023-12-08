let canvas = document.getElementById('canvas');
let shapeCanvas = document.getElementById('shapeCanvas');
let squareButton = document.getElementById('squarebutton');
let rectangleButton = document.getElementById('rectangleButton');
let circleButton = document.getElementById('circleButton');
let triangleButton = document.getElementById('triagnleButton');
// let calculatedDimensions = document.getElementById('calculatedArea');
let canvasContainer = document.getElementById('canvasConatiner');
let widthInput = document.getElementById('rectangleinput1');
let heightInput = document.getElementById('rectangleinput2');
let radiusInput = document.getElementById('radius');
let colors = ['gray', 'red', 'lightblue', 'green', 'orange', 'pink'];

let storedWidth = widthInput.value;
let storedHeight = heightInput.value;
let storedRectangles = [];

const MAX = 250;

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.div = document.createElement('div');
        this.div.classList.add('Shape');
        this.updateColor();
        this.div.style.height = `${height}px`;
        this.div.style.width = `${width}px`;
        this.updateLocation();
        this.div.addEventListener('click', () => {

        });
        shapeCanvas.appendChild(this.div);
    }

    updateLocation() {
        let xLocation = randomVal(0, MAX);
        let yLocation = randomVal(0,MAX);
        this.div.style.left = `${xLocation}px`;
        this.div.style.top = `${yLocation}px`;
    }

    retrieveInput() {

        // let widthValue = document.createTextNode(storedWidth);
        // this.div.style.height = `${storedHeight}px`;
        // this.div.style.width = `${storedWidth}px`;

    }
    updateColor() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        this.div.style.background = randomColor;
    }

    describe() {

    }


}

// I want to add a counter for the rectangles within the rectangle class... and somehow get a complete refresh once the button is clicked... I can get that from the tic tac toe lab



class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width)
        storedRectangles.push(this);
        this.isRectangle();

    }

    isRectangle() {
        if(this.width > this.height) {
            alert('This is a rectangle that you are buidling');
        }
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
    }
}

class Triangle extends Shape {

}

class Square extends Shape {

}

function insertRectangle() {
    const storedWidth = widthInput.value;
    const storedHeight = heightInput.value;
    new Rectangle(storedHeight, storedWidth);
}


function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min };


rectangleButton.addEventListener('click', insertRectangle);

circleButton.addEventListener('click', function () {
    const radius = radiusInput
    new Circle(radius);
})
