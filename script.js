inputSlide = document.getElementById('inputSlider');
sliderValue = document.getElementById('sliderValue')
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlide.value;

inputSlide.addEventListener('input', function () {
    sliderValue.textContent = this.value;
});

genBtn.addEventListener('click', function () {
    let pass = "";
    if (lowercase.checked) {
        pass += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase.checked) {
        pass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers.checked) {
        pass += "0123456789";
    }
    if (symbols.checked) {
        pass += "!@#$%^&*()_+-=[]{}|;':,./<>?";
    }
    
    let getPAss = ""
    let i=0;
    while (i < inputSlide.value) {
        getPAss += pass[Math.floor(Math.random() * pass.length)];
        i++;
    }
    passBox.value = getPAss;
});

// copying the password to clipboard

copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
});