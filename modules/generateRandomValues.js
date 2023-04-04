export function generateRandomValues(count) {
    let numbers = [];

    for (let index = 0; index < count; index++) {
        let number = Math.floor(Math.random() * 100);

        if (numbers.includes(number)) {
            index--
        } else {
            numbers.push(number)
        }
    }

    let clearArray = [];

    for (let index = 0; index < numbers.length; index++) {
        clearArray.push(numbers[index]);
        clearArray.push(numbers[index]);
    }

    return clearArray
}
