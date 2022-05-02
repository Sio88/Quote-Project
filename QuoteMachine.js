var quotes = [
    "Love For All, Hatred For None.",
    "Change the world by being yourself.",
    "Every moment is a fresh beginning.",
    "Problems are not stop signs, they are guidelines.",
    "One day the people that do not even believe in you will tell everyone how they met you.",
    "Hate comes from intimidation, love comes from appreciation. ",
    "Determine your priorities and focus on them.",
    "Never let your emotions overpower your intelligence.",
    "What consumes your mind controls your life",
    "Happiness depends upon ourselves.",
    "The meaning of life is to give life meaning.",
    "Turn your wounds into wisdom.",
    "If the world was blind how many people would you impress?",
    "The true meaning of life is to plant trees, under whose shade you do not expect to sit.",
    "There is no substitute for hard work."
]

function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}