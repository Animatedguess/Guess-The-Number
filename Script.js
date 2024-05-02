const form = document.getElementById("myForm");
const restart = document.getElementById("restart");
const message = document.getElementById("message");
let number_Of_Attempts = 10;
const arr =[];
const ans = document.getElementById("answeres");
const ranNumber = parseInt((Math.random())*100+1);
form.addEventListener("submit",function(e){
    e.preventDefault();
    const inp = parseInt(document.getElementById("in").value);
    const button = document.getElementById("submit");
    if(number_Of_Attempts>0){
        console.log(number_Of_Attempts);
        console.log(inp);
        if(inp===ranNumber){
            message.textContent=`Message: YOU WIN`;
            restart.style.display="inline";
            restart.style.visibility="visible";
        }
        else if(inp<=ranNumber){
            message.textContent="Message: number is high";
            number_Of_Attempts-=1;
        }
        else{
            message.textContent="Message: number is low";
            number_Of_Attempts-=1;
        }
        arr.push(inp);
        ans.textContent=arr;
    }
    else{
        message.textContent="Message: Game is Over";
        restart.style.display="inline";
        restart.style.visibility="visible";
    }
})
restart.addEventListener("click",function(){
    location.reload();
})