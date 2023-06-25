const images = [
    "0.png",
    "1.png",
    "2.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");

bgImage.id = "bg-image";
bgImage.classList.add("img-fluid");
bgImage.src = `img/${chosenImage}`;
const container = document.createElement("div");
container.className = "col-3 col-me-7 col-sm-10 col-12 mx-auto";
container.appendChild(bgImage);

document.body.appendChild(container);