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
var patternRow = 6;

box.addEventListener("scroll", function() {
    logo.style.transform = "rotate("+box.scrollTop/patternRow*-1+"deg)";
    logoBox.style.transform = "translateY("+box.scrollTop/2+"px)";
    patternBox.style.transform = "translateY("+(box.scrollTop-((48+18)*patternRow)+30)+"px)";
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
    var deg = ((box.scrollTop/screen.height)*111)/2
    var j = 9;
    var k = 0;
    for (let i = 0; i < patterns.length; i++) {
        if(i%column == 0) j -= 1;
        if(i%column == 0) k += 1;
        if(i%column%4 == 0) patterns[i].style.transform = "translateY(20px) rotate("+deg*j+"deg)";
        else if(i%column%4 == 1) patterns[i].style.transform = "rotate("+deg*k+"deg)";
        else if(i%column%4 == 2) patterns[i].style.transform = "translateY(20px) rotate("+deg*-j+"deg)";
        else patterns[i].style.transform = "rotate("+deg*-k+"deg)";
    }
});

function background(){
    const gridPatternBox = window.getComputedStyle(patternBox);
    const column = gridPatternBox.getPropertyValue("grid-template-columns").split(" ").length;
    
    for(var i = 0; i < column*patternRow; i++){
        const pattern = document.createElement("div");
        const shape = document.createElement("div");
        shape.classList = "shape";
        pattern.classList = "pattern";
        pattern.appendChild(shape);
        patternBox.appendChild(pattern);
    }
}