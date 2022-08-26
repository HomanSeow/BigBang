

//Function takes in one argument as the range of an array or if no argument is given, default will be 100
//Generates and returns an array with numbers from 1 - range replacing every number divisble by 3 with "BIG",
//every number divisble by 5 with "BANG",
//every number divisible by 15 with "BIGBANG" 
//and returns the array
function bigBang(range = 100) {
    const array = [];
    for(let i=1; i <=range; ++i ){

        let msg = "";

         if(i % 3 == 0)
        {
            msg += "BIG";
        }
        if(i % 5 == 0)
        {
            msg += "BANG";
        }
        if(msg == "" )
        {
            array[i-1] = i;
        }
        else{
            array[i-1] = msg;
        }
    }
    return array;
}


// Function takes in an array and writes the contents to a JSON file called output.json
function printToFile(arr) {
    fs.writeFileSync('./output.json',JSON.stringify(arr));
    console.log("File written succesfully") 
}


module.exports = bigBang;// exported for testing
const fs = require('fs');
const array = bigBang();
printToFile(array);




