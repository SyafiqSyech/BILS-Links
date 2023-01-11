function copy(){
    navigator.clipboard.writeText("bilskopi@gmail.com");
    alert("\"bilskopi@gmail.com\" Email Copied!");
}

function info(){
    console.log("yes");
    
    const texts = document.querySelectorAll('.link_text');
    
    texts.forEach(text => {
        text.classList.toggle("link_text_toggle");
    });
}

var box = document.getElementById("box");
var logo = document.getElementById("logo");
var logoBox = document.getElementById("logoBox");
var patternBox = document.getElementById("patternBox");
var contactBox = document.getElementById("contactBox");
var contactText = document.getElementsByClassName("text");

box.addEventListener("scroll", function() {
    logo.style.transform = "rotate("+box.scrollTop/8*-1+"deg)";
    logoBox.style.transform = "translateY("+box.scrollTop/2+"px)";
    patternBox.style.transform = "translateY(200px) translateY("+(box.scrollTop/3)+"px)";
    var max = box.scrollHeight - box.offsetHeight;
    contactBox.style.transform = "translateY("+(box.scrollTop-max+30)+"px)";
    if(max - 150 <= box.scrollTop){
        for (let i = 0; i < contactText.length; i++) {
            contactText[i].classList = "text";
        }
    }else{
        for (let i = 0; i < contactText.length; i++) {
            contactText[i].classList = "text text_hid";
        }
    }

    const gridPatternBox = window.getComputedStyle(patternBox);
    const column = gridPatternBox.getPropertyValue("grid-template-columns").split(" ").length;
    const patterns = document.getElementsByClassName("pattern");
    var deg = box.scrollTop/6
    var j = 9;
    for (let i = 0; i < patterns.length; i++) {
        if(i%column == 0) j += -1;
        if(i%column%2 == 0) patterns[i].style.transform = "rotate("+deg*-j+"deg)";
        else patterns[i].style.transform = "translateY(20px) rotate("+deg*j+"deg)";
    }
});

function background(){
    const gridPatternBox = window.getComputedStyle(patternBox);
    const column = gridPatternBox.getPropertyValue("grid-template-columns").split(" ").length;
    
    for(var i = 0; i < column*8; i++){
        const pattern = document.createElement("div");
        if(i%column%2 == 0) pattern.classList = "pattern";
        else pattern.classList = "pattern low";
        patternBox.appendChild(pattern);
    }
}