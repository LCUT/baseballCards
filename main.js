
async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const theData = getAPIData('https://anapioficeandfire.com/api/characters/')
.then(data => {
    for (const character of data.results) {
        getAPIData()
    }
 
})

console.log(theData)

let mainArea = document.querySelector('main')

function populateDOM(single_character) {
    gotArray.forEach(name => {
        console.log(characters)
        let gotCard = document.createElement('div')
        let gotName = document.createElement('h3')
        let photo = document.createElement('img')
    
        gotCard.setAttribute('class', 'charDivs')
        pic.setAttribute('class', 'picDivs')

        let gotNum = getGotNumber(got.url)

        name.textContent = got.name

        pic.src = `../images/${gotNum}.png`

        gotDiv.appendChild(name)
        gotDiv.appendChild(pic)

        mainArea.appendChild(gotDiv)
    })
}

function getGotNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return `00${charID.slice(1, 2)}`
    } else {
        return `0${charID}`
    }
}

