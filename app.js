const horizontalCount = 16;
const verticalCount = 16;
const totalCount = horizontalCount * verticalCount;
const container = document.querySelector(".container")

const createDiv = (total) => {
    for(let i = 0; i <= total ;i++){
        let div = document.createElement("div")
        div.classList.add("square")
        container.appendChild(div)
    }
};
createDiv(totalCount)