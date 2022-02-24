const baseURL = "https://hp-api.herokuapp.com/api/characters";
const nameHeader = document.getElementById("nameHeading");
const nameHouse = document.getElementById("nameHouse");

console.log("hello");
function getCharactersList() {

    fetch(baseURL)
      .then((response) => {
        // console.log(response);
        return response.json();
        })
      .then((json) => {
        displayName(json);
        displayHouse(json);
        console.log(json);
      } ) 
    }

getCharactersList()

function displayName(characterArr){
  nameHeader.innerText = `Hello, my name is ${characterArr[0].name}`;
}
function displayHouse(characterArr){
  nameHouse.innerText = `and I live in ${characterArr[0].house}.`;
}

/*
displayName(characters);
for (let i = 10; i >= 0; i--) {
  creating your cards here createElement method;
  plugging in character data into card; insertHTML or insertText method;
  appending cards to parent element using appendchild method;
}
//console.log(characterArr.sort());
/*
    import random, json
from baseURL import jsonify

def randomgen(request):
    randomNum = random.randint(1,407)
    output = {"random":randomNum}
    return jsonify(output)
*/