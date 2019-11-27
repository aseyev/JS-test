// counter logic:
// find counter area tag by class
let counterWidget = findCounterWidget();

// find HTML element with current value of counter
let counterValueTag = findCounterValueTag();

// Control clicks in Widget's area, and in case of every click:
// 1. increase counter value, 
// 2. display new value in HTML
// 3. save in new value localStorage
counterWidgetClicked (counterWidget, counterValueTag);

// restore value to HTML Tag in case of page reloading
restoreCounter(counterValueTag);

// delete counter from localStorage and dropdown HTML value by button Click.
deleteCounterStorage(counterValueTag);

// Functions list

function findCounterWidget () {
    return document.querySelector('.js-counter');
}

function findCounterValueTag () {
    return document.querySelector('.js-counter-value');
}

function counterWidgetClicked (counterWidget, counterValueTag) {
    counterWidget.addEventListener('click', () => {
        let currentValue = counterValueTag.innerHTML;
        currentValue++;
        counterValueTag.innerHTML = currentValue;
        localStorage.setItem('counter-value', currentValue);
    })
}

function restoreCounter(counterValueTag) {
    let savedCounterValue = localStorage.getItem('counter-value');
    if (!!savedCounterValue) {
    counterValueTag.innerHTML = savedCounterValue;
    };
}

function deleteCounterStorage(counterValueTag) {
    let buttonDelete = document.querySelector('.clear-button');
    buttonDelete.addEventListener('click', () => {
        localStorage.removeItem('counter-value');
        counterValueTag.innerHTML= '0';
    })
}
