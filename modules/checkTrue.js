import { uncheckCell } from './uncheckCell.js'

export function checkTrue(cell_one, cell_two) {
    if (cell_one.innerHTML == cell_two.innerHTML) {
        cell_one.title = "guessed"
        cell_two.title = "guessed"

        document.querySelector(".points_count").innerHTML = Number(document.querySelector(".points_count").innerHTML) + 1
    } else {
        setTimeout(() => {uncheckCell(cell_one, cell_two)}, 300);
    }
}
