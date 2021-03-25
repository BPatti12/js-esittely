const counterElement = document.getElementById("count");
const incrementButton = document.getElementById("plus");
const decrementButton = document.getElementById("minus");

let count = 0;

function updateCounter() {
    if (count < 0) count = 0;
    counterElement.innerHTML = count;
}

function incrementCount() {
    count = count + 1;

    /*
        Muita tapoja:
        count++
        count += 1
    */

    updateCounter();
}

function decrementCount() {
    count = count - 1;

    /*
        Muita tapoja:
        count--
        count -= 1
    */

    updateCounter();
}

updateCounter();
incrementButton.addEventListener("click", incrementCount);
decrementButton.addEventListener("click", decrementCount);
