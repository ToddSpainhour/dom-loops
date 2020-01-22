console.log("This is your loops js file")

//move over an array
//buildsome html for that stuff
//then out it in the DOM

const colors = ['blue', 'green', 'brown', 'yellow', 'purple'];

const colorLoop = () => {
    let domString = '';
for (let i = 0; i < colors.length; i++) {
        domString += `<h1>${colors[i]}</h1>`;
}
//console.log(domString)
}
//colorLoop();



const instructors = [
    {first: 'zoe', last: 'ames'},
    {first: 'mary', last: 'west'},
    {first: 'luke', last: 'lancaster'},

]


const nameLoops = () => {
    let instructorString = '';
for (let j = 0; j < instructors.length; j++) {
 instructorString += `<h2>${instructors[j].first} ${instructors[j].last}</h2>`
}
console.log(instructorString)
}


nameLoops()


//console.log(colors[i])


