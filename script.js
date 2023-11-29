const jokeEl = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

generateJoke()
jokeBtn.addEventListener('click', generateJoke)

async function generateJoke() {


    try {
        const config = {
            headers: {
                'Accept': 'application/json'
            }
        }
        const res = await fetch('https://icanhazdadjoke.com/', config)

        const data = await res.json()

        jokeEl.innerText = data.joke
    } catch {
        jokeEl.innerText = 'Check Your Internet Connection!'
    }

}

// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEl.innerText = data.joke
//         })
// }