// let changeBtn = document.querySelector('button');
// let changeH1 = document.querySelector('h1');

// changeBtn.addEventListener('click',function(){
//     const r = Math.floor(Math.random()*255);
//     const g = Math.floor(Math.random()*255);
//     const b = Math.floor(Math.random()*255);
//     const newColor = `rgb(${r},${g},${b})`
//     changeH1.innerHTML = newColor;
//     document.body.style.backgroundColor =newColor;
// })

let changeBtn = document.querySelector('button');
let changeH1 = document.querySelector('h1');

changeBtn.addEventListener('click', function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`; // Added commas between r, g, b
    changeH1.innerHTML = newColor;
    document.body.style.backgroundColor = newColor;
});
