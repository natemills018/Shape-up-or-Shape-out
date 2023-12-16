let canvas = document.getElementById('canvas');
let shapeCanvas = document.getElementById('shapeCanvas');
let canvasContainer = document.getElementById('canvasConatiner');
//Buttons
let squareButton = document.getElementById('squareButton');
let rectangleButton = document.getElementById('rectangleButton');
let circleButton = document.getElementById('circleButton');
let triangleButton = document.getElementById('triangleButton');
let resetButton = document.getElementById('resetButton');
//Inputs
let widthInput = document.getElementById('rectangleinput1');
let heightInput = document.getElementById('rectangleinput2');
const sideLength = document.getElementById('sideLength');
let radiusInput = document.getElementById('radius');
let triangleInput = document.getElementById('triangleHieght');
//Spans and Labels

let shapeinformationList = document.getElementById('shapeinformationList');
let nameLabelSpan = document.getElementById('nameLabelSpan');
let nameValueSpan = document.getElementById('nameValueSpan');
let heightLabelSpan = document.getElementById('heightLabelSpan');
let heightValueSpan = document.getElementById('heightValueSpan');
let widthLabelSpan = document.getElementById('widthLabelSpan');
let widthValueSpan = document.getElementById('widthValueSpan');
let areaLabelSpan = document.getElementById('areaLabelSpan');
let areaValueSpan = document.getElementById('areaValueSpan');
let perimeterLabelSpan = document.getElementById('perimeterLabelSpan');
let perimeterValueSpan = document.getElementById('perimeterValueSpan');


let colors = ['gray', 'red', 'lightblue', 'green', 'orange', 'pink'];
let sidePanel = document.getElementById('sidePanelContainer');


let storedWidth = widthInput.value;
let storedHeight = heightInput.value;
let storedShapes = []

const MAX = 400;
// let shapeCount = () => {
//     if (storedShapes > 0) {
//         resetButton.removeAttribute('disabled');
//     } else if (storedShapes.length === 0) {
//         reset.setAttribute('disabled', 'true');
//     }
// }

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        
        this.div = document.createElement('div');
        this.div.classList.add('Shape');
        this.updateColor();
        // this.div.style.height = `${height}px`;
        // this.div.style.width = `${width}px`;
        this.updateLocation();
        
        this.div.addEventListener('click', () => {

        });
        shapeCanvas.appendChild(this.div);
        storedShapes.push(this);
    }

    updateLocation() {
        let xLocation = randomVal(0, MAX);
        let yLocation = randomVal(0, MAX);

        
         
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

    describeShape(id, height, width) {
        nameValueSpan.innerHTML = `${id}`;
        heightValueSpan.innerHTML = `${height}px`;
        widthValueSpan.innerHTML = `${width}px`
        //this is where I want to add the functionality for the side panel

    }

    resetShapes() {
        nameLabelSpan.innerHTML = "Name: ";
        heightLabelSpan.innerHTML = "Height: ";
        widthLabelSpan.innerHTML = "Width: ";
        areaLabelSpan.innerHTML = "Area: ";
        perimeterLabelSpan = "Perimeter: ";
        nameValueSpan.innerHTML = "";
        heightValueSpan.innerHTML = "";
        widthValueSpan.innerHTML = "";
        areaValueSpan.innerHTML = "";
        perimeterValueSpan = "";
        shapeCanvas.removeChild(this.div);
        storedShapes.splice(this, 1);
        // shapeCount();

    }


}

// I want to add a counter for the rectangles within the rectangle class... and somehow get a complete refresh once the button is clicked... I can get that from the tic tac toe lab



class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width)
        this.div.id = "Rectangle";
        this.div.style.height = `${height}px`;
        this.div.style.width = `${width}px`;
        this.updateColor();
        this.updateLocation();

        this.div.addEventListener("click", () => {
            this.describeShape(this.div.id, this.height, this.width);
            areaLabelSpan.innerHTML = "Area: ";
            perimeterLabelSpan.innerHTML = "Perimeter: ";
            areaValueSpan.innerHTML = `${Math.floor(height * width)}px`
            perimeterValueSpan.innerHTML = `${Math.floor(2 * (height + width))}px`
        })

        this.div.addEventListener("dblclick", () => {
            this.resetShapes();
        })

        // Creating a describe method thaat overrides that origin method to specific certain attributes to the rectangle



    }

    describeShape(id, height, width) {
        nameLabelSpan.innerHTML = "Name: ";
        heightLabelSpan.innerHTML = "Length: ";
        widthLabelSpan.innerHTML = "Width: ";
        nameValueSpan.innerHTML = `${id}`;
        heightValueSpan.innerHTML = `${height}`;
        widthValueSpan.innerHTML = `${width}`;
    }


    isRectangle() {
        if (this.width > this.height) {
            alert('This is a rectangle that you are buidling');
        }
    }
}

class Circle extends Shape {
    constructor(height) {
        super(height);
        this.div.id = "Circle";
        this.div.style.height = `${height}px`;
        this.div.style.width = `${height}px`;
        this.updateColor();
        this.updateLocation();

        this.div.addEventListener('click', () => {
            this.describeShape(this.div.id, this.height);
            widthLabelSpan.innerHTML = "Diameter: ";
            areaLabelSpan.innerHTML = "Area: ";
            perimeterLabelSpan.innerHTML = "Circumference: ";
            widthValueSpan.innerHTML = `${Math.floor(2 * height)}px`
            areaValueSpan.innerHTML = `${Math.floor(Math.PI * (height * height))}px`;
            perimeterValueSpan.innerHTML = `${Math.floor(2 * Math.PI * height)}px`;
        })

        this.div.addEventListener('dblclick', () => {
            this.resetShapes();
        })
    }

    updateLocation() {
        let xLocation = randomVal(0, MAX);
        let yLocation = randomVal(0, MAX);
        
        this.div.style.left = `${xLocation}px`;
        this.div.style.top = `${yLocation}px`;
    }

    describeShape(id, height) {
        nameLabelSpan.innerHTML = "Name: ";
        heightLabelSpan.innerHTML = "Height: ";
        nameValueSpan.innerHTML = `${id}`;
        heightValueSpan.innerHTML = `${height}px`
    }

}

class Triangle extends Shape {
    constructor(height) {
        super(height)
        this.div.id = "Triangle";
        this.div.style.borderBottomWidth = `${height}px`;
        this.div.style.borderRightWidth = `${height}px`;
        this.updateColor();
        this.updateLocation();

        this.div.addEventListener('click', () => {
            this.describeShape(this.div.id,this.height);
            areaLabelSpan.innerHTML = "Area: ";
            perimeterLabelSpan.innerHTML = "Perimeter: ";
            areaValueSpan.innerHTML = `${Math.floor(0.5 * height * height)}px`
            perimeterValueSpan.innerHTML = `${Math.floor(2 * (height * height) + Math.sqrt(2) * height)}px`

        })

        this.div.addEventListener('dblclick', () => {
            this.resetShapes();
        })
    }

    updateColor() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        this.div.style.borderBottomColor = randomColor;
    }

    updateLocation() {
        let xLocation = randomVal(0, MAX);
        let yLocation = randomVal(0, MAX);
        this.div.style.left = `${xLocation}px`;
        this.div.style.top = `${yLocation}px`;
    }

    describeShape(id, height) {
        nameLabelSpan.innerHTML = "Name: ";
        heightLabelSpan.innerHTML = "Height: ";
        widthLabelSpan.innerHTML = "Base: "
        nameValueSpan.innerHTML = `${id}`;
        heightValueSpan.innerHTML = `${height}px`
        widthValueSpan.innerHTML = `${height}px`
    }




}

class Square extends Shape {
    constructor(height) {
        super(height)
        this.div.id = 'Square';
        this.div.style.height = `${height}px`;
        this.div.style.width = `${height}px`;
        this.updateColor();
        this.updateLocation();

        this.div.addEventListener('click', () => {
            this.describeShape(this.div.id,this.height,this.height);
            areaLabelSpan.innerHTML = "Area: ";
            perimeterLabelSpan.innerHTML = "Perimeter: ";
            areaValueSpan.innerHTML = `${Math.floor(height * height)}px`
            perimeterValueSpan.innerHTML = `${Math.floor(4 * (height + height))}px`
        })

        this.div.addEventListener('dblclick', () => {
            this.resetShapes();
        })
    }

    updateLocation() {
        let xLocation = randomVal(0, MAX);
        let yLocation = randomVal(0, MAX);
        this.div.style.left = `${xLocation}px`;
        this.div.style.top = `${yLocation}px`;
    }

    describeShape(id,height) {
        nameLabelSpan.innerHTML = "Name: ";
        heightLabelSpan.innerHTML = "Side: ";
        widthLabelSpan.innerHTML = "Side: "
        nameValueSpan.innerHTML = `${id}`;
        heightValueSpan.innerHTML = `${height}px`
        widthValueSpan.innerHTML = `${height}px`
    }

}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
};


rectangleButton.addEventListener('click', function () {
    let rectangleLengthValue = document.getElementById("rectangleinput2").value;
    let rectangleWidthValue = document.getElementById("rectangleinput1").value;
    // error logic
    if (rectangleLengthValue > MAX - 1 && rectangleWidthValue > MAX - 1) {
        alert("Try again! Enter a value that's less than 400 for the Length and Width");
    } else if (rectangleLengthValue > MAX - 1) {
        alert(`Try again! ${rectangleLengthValue} is too high. Please Enter a value less than ${MAX} for the length!`);
    } else if (rectangleWidthValue > MAX - 1) {
        alert(`Try again! ${rectangleWidthValue} is too high. Please Enter a value lass than ${MAX} for the width`);
    } else {
        let newRectangle = new Rectangle(rectangleLengthValue, rectangleWidthValue);
    }

    document.getElementById('rectangleinput1').value = "";
    document.getElementById('rectangleinput2').value = "";
    // shapeCount();
});

circleButton.addEventListener('click', function () {
    let radiusValue = document.getElementById('radius').value;
    if (radiusValue > MAX - 1) {
        alert("Try again! Enter a value that's less than 400 for the radius");
    } else {
        let newCircle = new Circle(radiusValue);
    }
    document.getElementById('radius').value = "";
    // shapeCount();
})


squareButton.addEventListener('click', function() {
    let squareInputValue = document.getElementById("sideLength").value;
    if (squareInputValue > MAX - 1) {
        alert(`Try Again! ${squareInputValue} is too high! Please Enter a value less than ${MAX} for the sidelength of the square`)
    } else {
        let newSquare = new Square(squareInputValue);

        console.log(newSquare);
    }


    document.getElementById('sideLength').value = "";
    // shapeCount();

})

triangleButton.addEventListener('click', function() {
    let triangleHeightValue = document.getElementById('triangleHeight').value;
    if (triangleHeightValue > MAX - 1) {
        alert(`Try Again! ${triangleHeightValue} is too high! Please Enter a value less than ${MAX} for the sidelength of the square`)
    } else {
        let newTriangle = new Triangle(triangleHeightValue);
        console.log(newTriangle);
    }

    document.getElementById('triangleHeight').value = "";
    // shapeCount();
})


resetButton.addEventListener('click', () => {
    location.reload();
})


function addtoSidePanel() {

}