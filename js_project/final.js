const inputField = document.getElementById('number_digit');
const validWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const conversion = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
};
const resetter = document.getElementById('reset_button');
let phoneNumber = [];
resetter.addEventListener('click', function () {
    phoneNumber = [];
    inputField.value = '';
    let display = document.getElementById('output');
    if (display) {
        display.textContent = 'Phone number: ';
    }
});
inputField.addEventListener('input', function () {
    const currentNumber = inputField.value.toLowerCase();
    let validity = false;
    let display = document.getElementById('output');
    if(currentNumber.length > 5){
        inputField.value = '';
        display.textContent = 'not a number.';
    }
    for(let i = 0; i < validWords.length; i++) {
        if(currentNumber == validWords[i]){
            validity = true;
            break;
        }
    }
    if(validity){
        const actualnumber = conversion[currentNumber];
        phoneNumber.push(actualnumber);
        if(!display){
            display = document.createElement('div');
            display.id = 'output';
            document.body.appendChild(display);
        }
        display.textContent = "Phone number: " + phoneNumber.join('');
        inputField.value = '';
    }
    if(phoneNumber.length == 10){
        inputField.disabled = true;
        display.textContent = "Phone number: " + phoneNumber.join('');
        let celebrate = document.getElementById('happycat');
        if(!celebrate) {
            const gifs = document.createElement('img');
            gifs.src = 'happycat.gif';
            if(display){
                display.insertAdjacentElement('afterend', gifs);
            }
        }
        return;
    }
});