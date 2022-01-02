let button = document.querySelector('#button')
let name = document.querySelector('#name')
let height = document.querySelector('#height')
let mass = document.querySelector('#mass')
let birthYear = document.querySelector('#birthYear')

function getInfo(){
    let randomNumber = Math.floor((Math.random()*88)+1)
    let apiURL = 'https://swapi.dev/api/people/'+randomNumber
    axios.get(apiURL).then(function(response){
        updateInfo(response.data)
    }).catch(e => {
        updateInfoWithError()
    })
}

function updateInfo(data){
    name.innerText = data.name
    height.innerText =  `Height: ${data.height}`
    mass.innerText = `Mass: ${data.mass}`
    birthYear.innerText = `Birth Year: ${data.name}`
}

function updateInfoWithError(){
    name.innerHTML = 'No available person'
    height.innerText =  `Height: NO DATA`
    mass.innerText = `Mass: NO DATA`
    birthYear.innerText = `Birth Year: NO DATA`
}
button.addEventListener('click', getInfo)