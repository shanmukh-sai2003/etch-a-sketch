console.log("etch-a-sketch");

const body = document.querySelector("body");
const container = document.querySelector(".container");
const penColorPicker = document.querySelector(".pen-color");
const gridSizeSelector = document.querySelector(".grid-size");
const eraserBtn = document.querySelector(".eraser");
const penBtn = document.querySelector(".pen");
const clearBtn = document.querySelector(".clear");
const year = document.querySelector(".year");
const date = new Date();
year.textContent = date.getFullYear();

let penColor = "black";
let mouseDown = false;
let gridSize = 16;
let isEraser = false;

constructGrid(gridSize);

penColorPicker.addEventListener("change", (e) => {
    penColor = e.target.value;
});

gridSizeSelector.addEventListener("change", (e) => {
    gridSize = e.target.value;
    container.innerHTML = "";
    constructGrid(gridSize);
});

body.addEventListener("mousedown", () => mouseDown = true);
body.addEventListener("mouseup", () => mouseDown = false);

eraserBtn.addEventListener("click", () => {
    isEraser = !isEraser;
    eraserBtn.classList.toggle("btn-clicked");
    penBtn.classList.toggle("btn-clicked");
});

penBtn.addEventListener("click", () => {
    isEraser = false;
    eraserBtn.classList.toggle("btn-clicked");
    penBtn.classList.toggle("btn-clicked");
});

clearBtn.addEventListener("click", () => {
    container.innerHTML = "";
    constructGrid(gridSize);
});

function constructGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            const pixel = document.createElement("div");
            pixel.className = "pixel";
            pixel.style.width = `${500 / gridSize}px`;
            pixel.style.height = `${500 / gridSize}px`;
            container.appendChild(pixel);
            pixel.addEventListener('mouseover', () => {
                if(mouseDown && isEraser) {
                    pixel.style.backgroundColor = "#fff";
                } else if(mouseDown) {
                    pixel.style.backgroundColor = penColor;
                }
            });
        }
    }
}
