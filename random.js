let changeBtn = document.querySelector('button');
let changeH1 = document.querySelector('h1');

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return  `rgb(${r}, ${g}, ${b})`;
    

}
changeBtn.addEventListener('click', function() {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    changeH1.innerHTML = newColor;

});
