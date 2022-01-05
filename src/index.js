module.exports = function toReadable(number) {
    const str = number.toString();
    const strLength = str.length;
    const simpleNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const decimalNumbersOne = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decimalNumbersGeneral = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    switch (strLength) {
        case 1:
            return simpleNumbers[number];

        case 2:
            return decimalNumbers();

        case 3:
            return decimalNumbers() ?
                `${simpleNumbers[str[0]]} hundred ${decimalNumbers()}` : `${simpleNumbers[str[0]]} hundred`;

        default:
            return 'Too big number';
    }

    function decimalNumbers() {
        let first = str.charAt(strLength - 2);
        let second = str.charAt(strLength - 1);
        if (first === '1') {
            return decimalNumbersOne[second];
        } else {
            let str = "";
            if (first !== "0") {
                str = `${decimalNumbersGeneral[first]}`;
            } else if (second !== "0") {
                return simpleNumbers[second];
            }
            if (second !== '0') {
                str += ` ${simpleNumbers[second]}`
            }
            return str;
        }
    }
}
