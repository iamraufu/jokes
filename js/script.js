function getJokes() {
    document.getElementById('jokes').innerText = ""
    fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(res => res.json())
        .then(data => displayJokes(data))
}



const displayJokes = jokes => {
    const jokesContainer = document.getElementById('jokes');
    const jokesDiv = document.createElement('p');
    jokesDiv.innerHTML = `
        <p>${jokes.setup}</p>
        <p>- ${jokes.punchline}</p>
        
    `
    jokesContainer.appendChild(jokesDiv);
}

setInterval(() => { getJokes() }, 5000)