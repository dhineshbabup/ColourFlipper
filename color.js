const color = ["red","green","#3a3a3a","blue","lightgray","#F1f5f8","rgb(151, 203, 200)"];
const myDiv = document.querySelector(".myDiv");
const h2 = myDiv.querySelector("#text");
const myBtn = document.querySelector("#myBtn");

function changeColor() {
    const colorValue = Math.floor(Math.random() * color.length );
    console.log(colorValue);
    document.body.style.backgroundColor = color[colorValue];
    h2.innerHTML  = ` "${color[colorValue]}"`
}

myBtn.addEventListener("click",changeColor,false);

