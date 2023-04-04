export function generateCells(numbersArray) {
    let gameBar = document.querySelector(".game__bar");
    
    numbersArray.sort(() => Math.random() - 0.5)

    let lineCell;
    let cell;
    for (let index = 0; index < (numbersArray.length / 4); index++) {
        lineCell = document.createElement("div");
        lineCell.classList.add("cell__line")
        gameBar.append(lineCell)
        for (let j = (index * 4) + 1; j < (4 + (index * 4)) + 1; j++) {
            cell = document.createElement("div");
            cell.classList.add("cell");

            if (numbersArray[j - 1] != undefined) {
                cell.innerHTML = numbersArray[j - 1];
                lineCell.append(cell);
            }
        }
    }
}