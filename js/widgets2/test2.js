function equalShiftsAmount(input) {
    let inputShift = input.split("");

    for (let i = 0; i < input.length; i++) {
        let shiftedLetter = inputShift.pop();
        inputShift.unshift(shiftedLetter);
        console.log(inputShift.join(""));
    }
}
// test
equalShiftsAmount("any");

