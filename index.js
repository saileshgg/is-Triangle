const firstAngle = document.querySelector("#first-angle");
const secondAngle = document.querySelector("#second-angle");
const thirdAngle = document.querySelector("#third-angle");
const checkNumber = document.querySelector("#check-number");
const output = document.querySelector("#output");


checkNumber.addEventListener("click", function(){
    isTriangle(firstAngle.value, secondAngle.value, thirdAngle.value);
 
})

function isTriangle(n1,n2,n3) {
    var sum = parseInt(n1) + parseInt(n2) + parseInt(n3);
    if(sum === 180) {
        output.innerText = "yes";
    } else {
        output.innerText = "no";
    }


    // output.innerHTML = sum;
}