"use strict";
document.querySelector("button").addEventListener("click",function(){
    document.querySelector("#tip").style.display="none";
    document.querySelector("#gameL").style.display="flex";
    document.querySelector("#gameInstruction").style.display="flex";
    document.querySelector(".fieldset").style.display="none";
    document.querySelector("#song").style.display="block";

})
document.querySelector("#song").addEventListener("click",function(){
    document.querySelector(".fieldset").style.display="block"
    document.querySelector("#song").style.display="none";

})

