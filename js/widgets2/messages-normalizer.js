const usersMax = 1;
const messagesMax = 5;
const data = {};

function sortedUsers(quantity) {
    const users = [];
    for ( let i = 0; i < quantity; i++ ) {
        users.push ({
            id: 'UniqueUserId'+i,
            name: 'Random' + i + 'userName'
        })
    }
    return users;
}

function randomUsers(arr) {
    const users = [];
    while (arr.length) {
        let randomNumber = Math.floor(Math.random()*arr.length);
        users.push(arr[randomNumber])
        arr.splice(randomNumber, 1)
    }
    return users
}
data.users = randomUsers(sortedUsers(usersMax));

function randomMessages (messageQuantity, usersArr) {
    const messages = [];
    for ( let i = 0; i < messageQuantity; i++ ) {
        messages.push({
            id: i,
            text: 'lorem ' + i + ' ipsum',
            authorId: usersArr[Math.floor(Math.random()*usersArr.length)].id,
            reseiverId: usersArr[Math.floor(Math.random()*usersArr.length)].id
        })
    }
    return messages;
}
data.messages = randomMessages(messagesMax, data.users)

function normalizeReceivedData(data) {
    const userObj = {};
    for (let i=0; i< data.users.length; i++) {
        userObj[(data.users[i].id)] = data.users[i].name;
    }
    const output = [];
    for (let i = 0; i < data.messages.length; i++) {
        output.push({
            messageText: data.messages[i].text, 
            userFromName: userObj[(data.messages[i].authorId)], 
            userToName: userObj[(data.messages[i].reseiverId)]
        })
    }
    return output
}
// console.log(normalizeReceivedData(data))
let list1 = JSON.stringify(data.users, 0, ' ');
let list2 = JSON.stringify(data.messages, 0, ' ');
let list3 = JSON.stringify(normalizeReceivedData(data), 0, ' ');

document.querySelector(".resultContent")
    .innerHTML ='<p>' + list1 + '</p> <br>' + 
                '<p>' + list2 + '</p> <br>' +
                '<p>' + list3 + '</p>'