console.log('i am alive!')

const myName = prompt ('Как твое имя, человек?')
const myNameContainer = document.getElementById('visitorName')

myNameContainer.innerHTML = myName

//console.log(myName, myNameContainer, myNameContainer.innerHtml)