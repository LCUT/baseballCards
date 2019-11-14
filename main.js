var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});


class GameOFThrones {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10,10);

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const theData = getAPIData('https://anapioficeandfire.com/api/characters/').then(data => {
    for (const characters of data.results) {
        getAPIData(characters.url).then(gotData => {
            populateDOM(gotData)
        })
    }
})

let mainArea = document.querySelector('main')

function populateDOM(single_character) {
    let gotCard = document.createElement('div')
    let gotScene = document.createElement('div')
    let gotFront = document.createElement('div')

}

