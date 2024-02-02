console.log("etch-a-sketch");

const body = document.querySelector("body");
const container = document.querySelector(".container");

let mouseDown = false;
body.addEventListener("mousedown", () => mouseDown = true);
body.addEventListener("mouseup", () => mouseDown = false);

let gridSize = Number(prompt("enter grid size: "));

for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++) {
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.width = `${500 / gridSize}px`;
        pixel.style.height = `${500 / gridSize}px`;
        container.appendChild(pixel);
        pixel.addEventListener('mouseover', () => {
            if(mouseDown) {
                pixel.style.backgroundColor = "black";
            }
        });
    }
}

