window.alert("This website only allows humans to view the content. To confirm this, click on 'OK'. Only viewers who click'OK' will be alowed to continue. Thank you for your co-operation. If you have any doubts regarding this, check our home page OR mail to:abcd@gmail.com OR call through mobile: +971-1234567890.")
const btn = document.querySelector("input")
const hone = document.querySelector("h1")
btn.addEventListener("click",
function(){
    hone.style.backgroundColor="black";
})

const para = document.querySelector("p")
para.addEventListener("click",
function(){
    para.style.backgroundColor="black";
    para.style.color="lime";
    para.style.borderColor="aqua";
    para.style.border="2px";
    para.style.borderStyle="dashed";
})