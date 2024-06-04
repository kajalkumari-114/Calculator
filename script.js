let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
let string = "";


buttons.forEach((button) => {
  button.addEventListener("click", (e) => {

    if(e.target.innerText == "=") {
        string = eval(string);
        input.value = string;
    }
    else if (e.target.innerText == "AC") {
        string = "";
        input.value = string;
    }
    else if(e.target.innerText == "Del"){
        //string = string.substring(0,string.length-1);
        string = string.slice(0,-1);
        input.value = string;
    }
    else {
        console.log(e.target);    // it access the button that we cliked
        string = string + e.target.innerText;
        input.value = string;
    }

  });
});