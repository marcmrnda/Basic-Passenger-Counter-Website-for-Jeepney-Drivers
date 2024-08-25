const aboveDiv = document.getElementById('above');
const addBTN = document.getElementById('addbtn');
const inputEl = document.getElementById('input');
const input1El = document.getElementById('input1');
const input2El = document.getElementById('input2');
const calcuBTN = document.getElementById('calcu');
const operatorSelector = document.getElementById('operator-el');
const operatorSelector1 = document.getElementById('operator-el1');
const answerEl = document.getElementById('answer');

let firstArr = [];
let secondArr = [];
let thirdArr = [];
let finalArr = [];
let buttonClicked = false;


function unionOfArray(firstArr,secondArr,finalArr) {
    for (let i = 0; i < firstArr.length; i++)
        {
            finalArr.push(firstArr[i]);
        }
    
        for (let j = 0; j < secondArr.length; j++)
        {
            let duplicate = false;
        
            for (let i = 0; i < firstArr.length; i++)
            {
                if (secondArr[j] == firstArr[i])
                {
                    duplicate = true;
                    break;
                }
            }
    
            if (!duplicate) {
                finalArr.push(secondArr[j]);
            }
        }
        return finalArr
}

function intersectionOfArray(firstArr,secondArr,finalArr) {
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            if (firstArr[i] == secondArr[j] && firstArr[i] != finalArr[j]) {
                finalArr.push(firstArr[i]);
                break;
            }
        }
     }
  return finalArr

}

function differenceOfArray (firstArr,secondArr,finalArr) {
    for (let j = 0; j < firstArr.length; j++)
    {
        let duplicate = false;
    
        for (let i = 0; i < secondArr.length; i++)
        {
            if (firstArr[j] == secondArr[i])
            {
                duplicate = true;
                break;
            }
        }

        if (!duplicate) {
            finalArr.push(firstArr[j])
        }
    }
    return finalArr;
}

function symmetricDifferenceOfArray (firstArr,secondArr,finalArr) {

        for (let j = 0; j < secondArr.length; j++)
    {
        let duplicate = false;
    
        for (let i = 0; i < firstArr.length; i++)
        {
            if (secondArr[j] == firstArr[i])
            {
                duplicate = true;
                break;
            }
        }

        if (!duplicate) {
           finalArr.push(secondArr[j]);
        }
    }

    for (let j = 0; j < firstArr.length; j++)
    {
        let duplicate = false;
    
        for (let i = 0; i < secondArr.length; i++)
        {
            if (firstArr[j] == secondArr[i])
            {
                duplicate = true;
                break;
            }
        }

        if (!duplicate) {
           finalArr.push(firstArr[j]);
        }
    }

return finalArr;

    }
    
calcuBTN.addEventListener('click', function() {
    let arrayValues = inputEl.value
    let arrayValues1 = input1El.value;
    let splittedValues = arrayValues.split(',');
    let splittedValues1 = arrayValues1.split(',')
    for(let i = 0; i<splittedValues.length; i++) {
        firstArr.push(splittedValues[i])
       }

       for(let i = 0; i<splittedValues.length; i++) {
        secondArr.push(splittedValues1[i])
       }

if(operatorSelector.options[operatorSelector.selectedIndex].text === "Union") {
        answerEl.textContent = `The Union between the two set you inputted is: { ${unionOfArray(firstArr,secondArr,finalArr)} }`
} 
else if (operatorSelector.options[operatorSelector.selectedIndex].text === "Intersection") {
    answerEl.textContent = `The Intersection between the two set you inputted is: { ${intersectionOfArray(firstArr,secondArr,finalArr)} }`
}
else if (operatorSelector.options[operatorSelector.selectedIndex].text === "Difference") {
    answerEl.textContent = `The Difference between the two set you inputted is: { ${differenceOfArray(firstArr,secondArr,finalArr)} }`
}
else {
    answerEl.textContent = `The Symmetric Difference between the two set you inputted is: { ${symmetricDifferenceOfArray(firstArr,secondArr,finalArr)} }`
}

firstArr =[];
secondArr = [];
finalArr = [];
inputEl.value = "";
input1El.value = "";

});
