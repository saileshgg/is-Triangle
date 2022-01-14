// const firstAngle = document.querySelector("#first-angle");
// const secondAngle = document.querySelector("#second-angle");
// const thirdAngle = document.querySelector("#third-angle");

const inputAngle = document.querySelectorAll(".angleInput");
const checkNumber = document.querySelector("#check-number");
const output = document.querySelector("#output");


checkNumber.addEventListener("click", function(){

    if(inputAngle[0].value && inputAngle[1].value && inputAngle[2].value)
        isTriangle(inputAngle[0].value, inputAngle[1].value, inputAngle[2].value);
    else 
        output.innerText = "Enter all the values";
})

function isTriangle(n1,n2,n3) {
    var sum = parseInt(n1) + parseInt(n2) + parseInt(n3);
    if(sum === 180) {
        output.innerText = "YES";
    } else {
        output.innerText = "NO";
    }


    // output.innerHTML = sum;
}