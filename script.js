const captachaTextBox = document.querySelector(".captacha_box input");
const refreshButton = document.querySelector(".refresh-button");
const captachaInputBox = document.querySelector(".captacha_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

let captachaText = null

const generateCaptacha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map(char => Math.random() > 0.5 ? char.toUpperCase() : char)
    captachaText = changeString.join(" ");
    captachaTextBox.value = captachaText;
    console.log(captachaText);

    
};

const refreshBtnClick = () => {
    generateCaptacha();
    captachaInputBox.value ="";
    captachaKeyUpValidate();
};


const captachaKeyUpValidate = () => {
    submitButton.classList.toggle("disabled", !captachaInputBox.value);

    if(captachaInputBox.value === "") message.classList.remove("active");
};



const submitBtnClick = () => {
    captachaText =captachaText
    .split("")
    .filter((char) => char !== " ")
    .join("");

    message.classList.add("active");

    if(captachaInputBox.value === captachaText){
        message.innerText = "Enter captacha is correct"
        message.style.color = "#ffe3e0";
    }

    else{
        message.innerText = "Enter captacha is not correct"
        message.style.color = "#FF2525"
    }



};

refreshButton.addEventListener("click", refreshBtnClick);
captachaInputBox.addEventListener("keyup",captachaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

generateCaptacha()