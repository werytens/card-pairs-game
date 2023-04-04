import { generateRandomValues } from "./modules/generateRandomValues.js"
import { checkFinnaly } from "./modules/checkFinnaly.js"
import { generateCells } from "./modules/generateCells.js"
import { checkTrue } from "./modules/checkTrue.js"
import { openAllCards } from "./modules/openAllCards.js"

document.addEventListener("DOMContentLoaded", () => {
<<<<<<< HEAD
    // const pairsCount = prompt("Ввведите количество пар карт.");

    const pairsCount = 6;
=======
    const pairsCount = prompt("Ввведите количество пар карт.");
>>>>>>> 73e0513 (.)

    if (pairsCount == "" || pairsCount == "0" || pairsCount == null) {
        alert("Вы ничего не ввели. Перезапуск!")
        location.reload()
        return
    }

    let randomNumbers = generateRandomValues(pairsCount);
    let timerText = document.querySelector(".timer");
    timerText.innerHTML = 10 * pairsCount;

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

<<<<<<< HEAD
        // timerText.innerHTML -= 1
=======
        timerText.innerHTML -= 1
>>>>>>> 73e0513 (.)

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
