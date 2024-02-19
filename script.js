const inputText = document.querySelector("#user-input");
const submitButton = document.querySelector("#check-btn");
const resetButton = document.querySelector("#clear-btn");
const result = document.querySelector("#results-div");


submitButton.addEventListener("click", ()=>{
  if(inputText.value){
    if(telephoneNumberCheck(inputText.value) === true){
      result.innerHTML = "Valid US number: "+ inputText.value;
      result.style.backgroundColor = "lightgreen";
    }
    else{
      result.innerHTML = "Invalid US number: "+ inputText.value;
      result.style.backgroundColor = "red";
    }
  }
  else{
    alert("Please provide a phone number");
    return;
  }
})

resetButton.addEventListener("click", ()=>{
  inputText.value = "";
  result.innerHTML = "";
  return;
});

const telephoneNumberCheck = (str)=>{
  const teleRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    //console.log(teleRegex.test(str));
    return teleRegex.test(str);
   
}
