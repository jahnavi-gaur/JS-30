async function fetchApi() {
    const res = await fetch("https://dummyjson.com/quotes");
    const data = await res.json()
    return data
}


let btn = document.querySelector('.btn')
let quote = document.querySelector('.quote')
let author = document.querySelector('.author')

btn.addEventListener('click', () => {
    fetchApi()
        .then(data => {
            let quotesArr = data.quotes;
            // random index
            let randomIndex = Math.floor(Math.random() * quotesArr.length);

            let randomQuote = quotesArr[randomIndex];

            quote.textContent = randomQuote.quote;
            author.textContent = randomQuote.author;
        })
        .catch(err => {
            console.error("error occur",err)
        })
})