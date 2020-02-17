function getString () {
    return document.querySelector('#stringForShift').value
}

function equalShiftsAmount() {
    let outputString = getString ();
    arrayForShift = outputString.split('');

    for (let i = 0; i < arrayForShift.length; i++) {
        let shiftedLetter = arrayForShift.pop();
        arrayForShift.unshift(shiftedLetter)
        outputString += '<br>'+ arrayForShift.join('')
    }
    document.querySelector(".resultContent")
                .innerHTML ='<p>'+outputString+'</p>'
}