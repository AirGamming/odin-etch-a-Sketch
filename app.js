const sizeCount = 16;
const container = document.querySelector(".container");

const createDiv = (size) => {
    const totalCount = sizeCount * sizeCount;
    container.style.gridTemplateColumns = `repeat(${size},1fr)`; 
    for(let i = 1; i <= totalCount ;i++){
        let div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    };
    let table = document.querySelectorAll(".square");
    table.forEach(e =>{
        e.addEventListener("mouseover",() =>{
            e.classList.add = "black"
        })
    });
};
createDiv(sizeCount)
