console.log("Im linked")


//state variables 

let displayNum = 0;
let inputValue = 1;


//DOM references 

const plusBtnEl = document.querySelector(".plus-btn");
const minusBtnEl = document.querySelector(".minus-btn")
const inputBarEl = document.querySelector("#input-bar")
const displayEl = document.querySelector(".display");


// DOM Content load

document.addEventListener('DOMContentLoaded', initializePage)


function initializePage () {
    
    inputBarEl.value = inputValue
    console.log("Input Bar Value " + inputBarEl.value)
    displayEl.innerText = displayNum;
    
    plusBtnEl.addEventListener('click', () => {
        
        var x = 5;
        var y = 5;
        var z = x + y;
        console.log("i am test addition of x and y  " + z)

        let newUserValue = inputBarEl.value 
        let addedValue = (displayNum + newUserValue) 
        displayEl.innerText = addedValue;

        console.log("im the newUserValue " + newUserValue)
        console.log("im the displayNum " + displayNum)
        console.log("im the addition of the two " + (newUserValue + displayNum))
        console.log("i am the added value " + addedValue)
        

    });


//// I give up here.  I am so frustrated, haha.  I cannot for the life of me figure out why
/// javascript KEEPS concatenating the two values instead of adding them.  I have searched all over for a solution
// nothing seems to work.  No matter what I throw at this thing, it just keeps concatenating the inputBar.Value instead of 
// actually doing addition.  I know its something so stupid but my frustration is getting the best of me and I cannot
//figure out why.  I am doing the literal EXACT same thing with  my project and manipulated values mathematically from and input bar, 
//and it works entirely fine.  I was on track to finish this super fast.



    minusBtnEl.addEventListener('click', () => {
        
        let subtractedValue = displayNum - inputBarEl.value
        displayEl.innerText = subtractedValue
        
        console.log("minusBtn works")

    });

}

