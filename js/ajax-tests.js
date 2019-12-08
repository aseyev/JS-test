// UI - level (buttons)

const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me");
const getTasksButton = document.querySelector("#get-tasks");
const pageNumberEl = document.querySelector("#page-number");
// add images
clickMeButton.addEventListener("click", () => {
    const promise = getImages(pageNumberEl.value);
    promise.then(onDataReceived);
});

function onDataReceived(array) {
    array.forEach(el => {
        const img = document.createElement("img");
        img.src = el.thumbnail;
        document.querySelector("#result").appendChild(img);
    });
}
// DAL (Data Access Layer) - server request

function getImages (pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/images?page=${pageNumber}&count=1`);
    return promise.then((response)=> {
        return response.data;
    });
}

// -----------------get tasks
// createTask (1222, 'first task').then((data)=>{
//     console.log(data);
// })

getTasksButton.addEventListener("click", () => {
    const promise = getTasks(1222);
    promise.then(onTasksReceived);
});

function onTasksReceived(tasks) {
    document.querySelector("#result-tasks").innerHTML ='';
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = task.title;
        document.querySelector("#result-tasks").appendChild(li);
    });
}
// DAL (Data Access Layer) - server request

function getTasks (widgetID) {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetID=${widgetID}`);
    return promise.then((response)=> {
        return response.data;
    });
}

function createTask (widgetID, title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetID: widgetID,
        title: title
    });
    return promise.then((response)=> {
        return response.data;
    });
}





// const getNumber = document.querySelector("#square-number");
// const sqButton = document.querySelector("#square-button")
// sqButton.addEventListener("click", () => {counter(getNumber.value)})

// function counter (number) {
//     document.querySelector("#square-result").innerHTML = number*5;

// }