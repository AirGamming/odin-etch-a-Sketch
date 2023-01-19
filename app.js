const sizeCount = 16;
const container = document.querySelector('.container');

const createDiv = (size) => {
    const totalCount = size * size;
    container.style = ""
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    for (let i = 1; i <= totalCount; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    };
    let table = document.querySelectorAll('.square');
    table.forEach((e) => {
        e.addEventListener('mouseover', (el) => {
            if (el.target.classList == "square"){
                el.target.classList = "black";
            }else{
                el.target.classList = "square";
            };
        });
    });
};
let reset = () => {
    let table = document.querySelectorAll('.black');
    table.forEach(el => el.classList = "square" );  
};
const setGrid = document.querySelector("#set")
const inputNuber =  document.querySelector("input#nubmer");
setGrid.addEventListener('click', () =>{
    container.innerHTML = ""
    createDiv(inputNuber.value)
});
createDiv(sizeCount)
