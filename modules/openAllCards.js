export function openAllCards() {
    document.querySelectorAll(".cell").forEach(cell => cell.style.color = "white")

    setTimeout(() => {
        alert("Вы сдались! Перезапуск.")

        location.reload()
    }, 100)
    
}