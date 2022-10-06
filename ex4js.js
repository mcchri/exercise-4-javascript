let userInput = prompt("Enter value");
let x = Math.floor(Math.random() *3)+1;
let a = null;
if(x==1){
    console.log("robot has chosen rock");
}if (x==2) {
    console.log("robot has chosen paper");
} else {
    console.log("robot has chosen scissors")
}




switch(userInput){
    case "rock":
    case "paper":
    case "scissors":
        if((userInput=="rock" && x==3) || (userInput=="paper" && x==1) || (userInput=="scissors" && x==2))   {
            console.log("you win");
            break;
        }if ((userInput=="rock" && x==2) || (userInput=="paper" && x==3) || (userInput=="scissors" && x==1)) {
            console.log("you lost");
            break;
        }
    default:
        console.log("draw")    
        break;
    }
//down below is code that works, but is very long
    /*
switch(x){
case 1:
    console.log("Rock by comp");
    switch(userInput){
    case "rock":
        console.log("TIE");
        break;
    case "paper":
        console.log("you win"); 
        break;
    case "scissors":
        console.log("you lost");   
        break;       
    }
case 2:
    console.log("Paper by comp");
    switch(userInput){
        case "rock":
            console.log("you lost");
            break;
        case "paper":
            console.log("TIE"); 
            break;
        case "scissors":
            console.log("you won");
            break;           
        }   

case 3:
    console.log("Scissors by comp"); 
    switch(userInput){
        case "rock":
            console.log("you won");
            break;
        case "paper":
            console.log("you lost");
            break; 
        case "scissors":
            console.log("TIE");
            break;           
        }              
}
*/