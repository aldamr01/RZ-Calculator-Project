let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector('#clear');

let total = document.querySelector("#total");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {

    if (resultBox.innerHTML == "0") {      
      resultBox.innerHTML = "";
    }

    let value = btns[i].innerHTML;
    if (value ==" %") {          
      resultBox.innerHTML = evaluate(resultBox.innerHTML) / 100;
<<<<<<< HEAD
    } else{
    resultBox.innerHTML += value;
    }
    
=======
    }
    else if(value == "."){
      if(resultBox.innerHTML == "")
        resultBox.innerHTML = "0"+value;
      else
        resultBox.innerHTML += value;
    }
    else{

      resultBox.innerHTML += value;
    }    
>>>>>>> e2da7220db6f67b3940e8c37f546e1366c60a322
  });
});


function evaluate(fn) {
    return new Function('return ' + fn)();
}

total.addEventListener('click', ()=> {
let allInputs = resultBox.innerHTML;

resultBox.innerHTML = evaluate(allInputs);

console.log(evaluate(allInputs));
});

clearBtn.addEventListener('click', ()=> {
    resultBox.innerHTML = "0";
});

function del(element){
  if (resultBox.innerHTML.length == 1)
    resultBox.innerHTML = 0;
  else
    resultBox.innerHTML = resultBox.innerHTML.slice(0, -1);
}
 