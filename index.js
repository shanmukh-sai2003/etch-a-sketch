console.log("etch-a-sketch");


const container = document.querySelector(".container");
console.log(container);

let gridSize = Number(prompt("enter grid size: "));

for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++) {
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.width = `${500 / gridSize}px`;
        pixel.style.height = `${500 / gridSize}px`;
        container.appendChild(pixel);
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = "black";
        });
    }
}

