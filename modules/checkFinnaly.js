export function checkFinnaly(randomNumbers) {
    const cells = document.querySelectorAll(".cell");
    let checked = 0;

    for (let index = 0; index < cells.length; index++) {
        cells[index].title == "guessed" ? checked++ : null
    }

    if (checked == randomNumbers.length) {
        alert("Вы победили! Количество очков: " + document.querySelector(".points_count").innerHTML + ".")
        location.reload()
    }
}
