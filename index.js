import { generateRandomValues } from "./modules/generateRandomValues.js"
import { checkFinnaly } from "./modules/checkFinnaly.js"
import { generateCells } from "./modules/generateCells.js"
import { checkTrue } from "./modules/checkTrue.js"
import { openAllCards } from "./modules/openAllCards.js"

document.addEventListener("DOMContentLoaded", () => {
    let pairsCount = prompt("Ввведите количество карт.");

    if (pairsCount == "" || pairsCount == "0" || pairsCount == null || pairsCount > 10 || pairsCount < 2) {
        pairsCount = 4
    }

    let randomNumbers = generateRandomValues(pairsCount / 2);
    let timerText = document.querySelector(".timer");
    timerText.innerHTML = 60;

    generateCells(randomNumbers);

    const cells = document.querySelectorAll(".cell");

    let cellOne;
    let cellTwo;
    let cellIndex = 0;
    cells.forEach(cell => cell.addEventListener("click", () => {
        cell.style.color = "white"

        if (cellIndex == 0) {
            cellOne = cell;
            cellIndex++
        } else if (cellIndex == 1) {
            cellTwo = cell;
            checkTrue(cellOne, cellTwo);
            cellIndex  = 0;
        } 
    }))
    

    let func = () => {
        if (timerText.innerHTML <= 0) { 
            alert("Вы не успели! Начинается перезапуск игры!")
            location.reload()
        } else {

        } 

        checkFinnaly(randomNumbers);

        timerText.innerHTML -= 1

        setTimeout(() => {func()}, 1000)
    }
    func()
})

document.getElementById("restart").addEventListener("click", () => {
    alert("Перезапускаю игру!")
    location.reload()
})

document.getElementById("surrender").addEventListener("click", () => {
    openAllCards()
})
