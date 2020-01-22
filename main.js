console.log('Your JavaScript is connected.')

const dinosours = [
{type: "t-rex", name: "Bob"},
{type: "tall dino", name: "Joe"},
{type: "short dino", name: "Andy"},
{type: "skinny dino", name: "Cindy"},

];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}




const buildDinoCards = () => {
    let domString = '';
for (i = 0; i < dinosours.length; i++){
    domString += '<div class="dinosour">'
domString += `<p>${dinosours[i].name}</p>`
domString += `<p>${dinosours[i].type}</p>`
domString += '</div>'
} 
//console.log('domString', domString)
printToDom('dino-barn', domString)
}

buildDinoCards()


