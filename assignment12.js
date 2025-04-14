var newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
var answerBtn = document.querySelector('#js-tweet').addEventListener('click', () => displayAnswer(current.punchline));

var like = document.querySelector('#like-button').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lime';
} );
var dislike = document.querySelector('#dislike-button').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
} );
var endpoint = "https://official-joke-api.appspot.com/random_joke";
let current = {
    setup: "",
    punchline: ""
};
getQuote();
async function getQuote(){
    document.body.style.backgroundColor = 'yellow';
    try {
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json.setup);
        
        current.setup = json.setup;
        current.punchline = json.punchline;
    } catch(err){
        console.log(err);
        alert('Fail')
    }
}
function displayQuote(quote){
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}
function displayAnswer(punchline){
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = punchline;
}

