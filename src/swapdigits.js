const swapDigits = (number)=>{
    let swappedNumber = 0
    //write logic here
    const stringNumber = number.toString().split('');

    if (isNaN(number) || number <= 0) {
        return 0;
    }

    if (stringNumber.length >= 2) {
        if (stringNumber.length % 2 === 0) {
            for(let i=1; i < stringNumber.length; i+=2 ) {
                [stringNumber[i-1], stringNumber[i]] = [stringNumber[i], stringNumber[i-1]];
            }
        } else {
            for(let i=2; i < stringNumber.length; i+=2 ) {
                [stringNumber[i-1], stringNumber[i]] = [stringNumber[i], stringNumber[i-1]];
            }
        }
        swappedNumber = parseInt(stringNumber.join(''));
    } else {
        swappedNumber = number;
    }
    return swappedNumber;
    
}

module.exports = swapDigits
