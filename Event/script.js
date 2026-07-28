const hanldClick = () => {
    console.log('click');
}

const texth1 = document.getElementById('h1');

const changeText = () => {
    texth1.innerHTML = "Slownow";
}


// cách viết js không nhúng dô html

const changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", () => {
    texth1.style.color = "yellow";
})


const changeBack = document.getElementById("changeBack");

changeBack.addEventListener("click", () => {
    texth1.style.color = "black";
})