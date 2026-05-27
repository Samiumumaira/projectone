let btn=document.querySelector("button");
console.dir(btn);
btn.style.backgroundColor="red";
btn.innerText="CLICK!";
console.log(btn.innerText);
btn.addEventListener("click",function()
{
    console.log(this.innerText);
})
;
function savetodb(data)
{
    return new Promise((success,failure)=>{
        let internetspeed=Math.floor(Math.random()*10)+1;
        if(internetspeed>5)
        {
          success();
        }
        else{
           failure();
        }
    });
}


let request=savetodb("samium");
request
.then(()=>{console.log("accepted")})
.catch(()=>{console.log("not accepted")})







let url="https://catfact.ninja/fact";
async function getcat()
{
    try{let res= await fetch(url);
        let data= await res.json();
        console.log(data);

    }
    catch(e)
    {console.error("error found",e);

    }
}




