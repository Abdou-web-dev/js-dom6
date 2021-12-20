// Semicolons are not required
// for JavaScript programming, nevertheless I advice you to use it.It makes your code more readable and is actually a good practice, and almost all cool programming languages uses it.
// Take a stand and use it, it 's up to you now!

const col21 = document.querySelector(".col2-1");
const col22 = document.querySelector(".col2-2");
const col23 = document.querySelector(".col2-3");
const col24 = document.querySelector(".col2-4");
const col25 = document.querySelector(".col2-5");

const col31 = document.querySelector(".col3-1")
const col32 = document.querySelector(".col3-2")
const col33 = document.querySelector(".col3-3")
const col34 = document.querySelector(".col3-4")
const col35 = document.querySelector(".col3-5")

const col41 = document.querySelector(".col4-1")
const col42 = document.querySelector(".col4-2")
const col43 = document.querySelector(".col4-3")
const col44 = document.querySelector(".col4-4")
const col45 = document.querySelector(".col4-5")

const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4");
const row4_2 = document.querySelector(".row4-2");
const row2_double = document.querySelector(".row2-double");

var ellipsis = document.querySelector('.ellipsis')
var rotatingIcons = document.querySelector('.rotating-icons')

const btncollapse1 = document.querySelector("#collapse-btn1")
const btncollapse2 = document.querySelector("#collapse-btn2")
const btncollapse3 = document.querySelector("#collapse-btn3")
var myCollapsible3 = document.getElementById('collapse3')

const showmeText = document.querySelector(".showmeText")
const InfoMsg = document.querySelector(".info-msg")




const body = document.querySelector("body");
const expandContent = document.querySelector(".expandContent")
const expandContentText = document.querySelector(".expandContentText")



body.addEventListener("mouseover", functt);

function functt() {
    //show the bg image
    body.style.backgroundImage = "url('./images/webdevbg2.jpg')";
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "cover"
    body.style.backgroundPosition = "center center"
    //hide it after 3.5s
    setTimeout(() => {
        body.style.backgroundImage = "";
    }, 3500);
    //remove the hover listener 5s after showing the img
    setTimeout(() => {
        body.removeEventListener("mouseover", functt)
    }, 5000);
    //shake all the elements for 2s
    btncollapse1.style.animation="shake3 5s"
    btncollapse2.style.animation="shake 3s"
    btncollapse3.style.animation="shake2 3s"

}


// COL21 !!  ROW2
// JavaScript supports overriding not overloading, meaning, that if you define two functions with the same name, the last one defined will override the previously defined version 
// and every time a call will be made to the function, the last defined one will get executed.30 jan. 2010

//for each col21
document.querySelectorAll(".col2-1").forEach((col21) => {
    col21.addEventListener("mouseover", funct1);
    col21.addEventListener("mouseleave", funct2);
    // Hover
    function funct1(e) {
        col21.style.transition = "all ease 2s"
        col21.style.backgroundImage = "url('./images/angularjs-icon.png')";
        col21.style.backgroundRepeat = "no-repeat"
        col21.style.backgroundSize = "contain"
        col21.style.backgroundPosition = "center center"
        col21.style.borderRadius = "25px"
        col21.style.marginLeft = "15px"
    }
    // Leave the div
    function funct2(e) {
        col21.style.transition = "all ease 2s"
        col21.style.borderRadius = ""
        col21.style.marginLeft = "-15px"
        col21.style.transition = "all ease 2s"
        col21.style.backgroundImage = "";
    }
})
//for each col212
document.querySelectorAll(".col2-2").forEach((col22) => {
    // COL22
    col22.addEventListener("mouseover", funct3);
    col22.addEventListener("mouseleave", funct4);
    // Hover
    function funct3(e) {
        col22.style.transition = "all ease 2s"
        col22.style.backgroundImage = "url('./images/babel.png')";
        col22.style.backgroundRepeat = "no-repeat"
        col22.style.backgroundSize = "contain"
        col22.style.backgroundPosition = "center center"
        col22.style.borderRadius = "25px"
        col22.style.marginLeft = "15px"
    }
    // Leave the div
    function funct4(e) {
        col22.style.transition = "all ease 2s"
        col22.style.borderRadius = ""
        col22.style.marginLeft = "-15px"
        col22.style.transition = "all ease 2s"
        col22.style.backgroundImage = "";
    }
})

//for each col23
document.querySelectorAll(".col2-3").forEach((col23) => {
    col23.addEventListener("mouseover", funct5);
    col23.addEventListener("mouseleave", funct6);
    // Hover
    function funct5(e) {
        col23.style.transition = "all ease 2s"
        col23.style.backgroundImage = "url('./images/bootstrap.png')";
        col23.style.backgroundRepeat = "no-repeat"
        col23.style.backgroundSize = "contain"
        col23.style.backgroundPosition = "center center"
        col23.style.borderRadius = "25px"
        col23.style.marginLeft = "15px"
    }
    // Leave the div
    function funct6(e) {
        col23.style.transition = "all ease 2s"
        col23.style.borderRadius = ""
        col23.style.marginLeft = "-15px"
        col23.style.transition = "all ease 2s"
        col23.style.backgroundImage = "";
    }
})
//for each col24
document.querySelectorAll(".col2-4").forEach((col24) => {
    col24.addEventListener("mouseover", funct7);
    col24.addEventListener("mouseleave", funct8);
    // Hover
    function funct7(e) {
        col24.style.transition = "all ease 2s"
        col24.style.backgroundImage = "url('./images/css3.png')";
        col24.style.backgroundRepeat = "no-repeat"
        col24.style.backgroundSize = "contain"
        col24.style.backgroundPosition = "center center"
        col24.style.borderRadius = "25px"
        col24.style.marginLeft = "15px"
    }
    // Leave the div
    function funct8(e) {
        col24.style.transition = "all ease 2s"
        col24.style.borderRadius = ""
        col24.style.marginLeft = "-15px"
        col24.style.transition = "all ease 2s"
        col24.style.backgroundImage = "";
    }
})
//for each col25
document.querySelectorAll(".col2-5").forEach((col25) => {
    col25.addEventListener("mouseover", funct9);
    col25.addEventListener("mouseleave", funct10);
    // Hover
    function funct9(e) {
        col25.style.transition = "all ease 2s"
        col25.style.backgroundImage = "url('./images/flutter.png')";
        col25.style.backgroundRepeat = "no-repeat"
        col25.style.backgroundSize = "contain"
        col25.style.backgroundPosition = "center center"
        col25.style.borderRadius = "25px"
        col25.style.marginLeft = "15px"
    }
    // Leave the div
    function funct10(e) {
        col25.style.transition = "all ease 2s"
        col25.style.borderRadius = ""
        col25.style.marginLeft = "-15px"
        col25.style.transition = "all ease 2s"
        col25.style.backgroundImage = "";
    }
})






//3rd ROW
//col31 , row3
col31.addEventListener("mouseover", funct21);
col31.addEventListener("mouseleave", funct22);
col31.addEventListener("click", funct23);
body.addEventListener("click", funct24);

// Hover
function funct21(e) {
    col31.style.backgroundColor = col31.classList.add("linear-gradient7")
    col31.children[0].innerHTML = "Third row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col31.children[1].innerHTML = "<strong>Git</strong>" + " is awesome<br>"
    col31.children[2].innerHTML = "YEAH!!"
    col31.style.borderRadius = "25px"
    // col31.style.marginLeft = "30px"
    col31.style.transition = "all ease 2s"
    col31.style.cursor = "pointer";
}
// Leave the div
function funct22(e) {
    col31.style.backgroundColor = col31.classList.remove("linear-gradient7")
    col31.style.backgroundColor = ""
    col31.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    setTimeout(() => {
        col31.children[0].innerHTML = ""
    }, 4000);
    col31.children[1].innerHTML = ""
    col31.children[2].innerHTML = ""
    col31.style.borderRadius = ""
    // col31.style.marginLeft = "-15px"
    col31.style.transition = "all ease 2s"
    col31.style.backgroundImage = "";
}
// Click on the div
function funct23(e) {
    col31.style.backgroundImage = "url('./images/git.png')"
    col31.style.backgroundRepeat = "no-repeat"
    col31.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col31.style.backgroundPosition = "center center" //Change the position of a background-image:
    col31.children[0].innerHTML = " "
    col31.children[1].innerHTML = " "
    col31.children[2].innerHTML = " "
    col31.style.transition = "all ease 2s"
    col31.style.cursor = "progress";
}

function funct24(e) {
    col31.children[0].innerHTML = ""
    col31.style.backgroundColor = ""
}

//col32 , row3
col32.addEventListener("mouseover", funct25);
col32.addEventListener("mouseleave", funct26);
col32.addEventListener("click", funct27);
body.addEventListener("click", funct28);

// Hover
function funct25(e) {
    col32.style.backgroundColor = col32.classList.add("linear-gradient8")
    col32.children[0].innerHTML = "Third row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col32.children[1].innerHTML = "<strong>HTML5</strong>" + " is awesome<br>"
    col32.children[2].innerHTML = "YEAH!!"
    col32.style.borderRadius = "25px"
    col32.style.marginLeft = "15px"
    col32.style.transition = "all ease 2s"
    col32.style.cursor = "pointer";
}
// Leave the div
function funct26(e) {
    // col32.style.backgroundColor = col32.classList.remove("linear-gradient8")
    col32.style.backgroundColor = col32.classList.add("linear-gradient8")
    col32.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    setTimeout(() => {
        col32.children[0].innerHTML = ""
    }, 3000);
    col32.children[1].innerHTML = ""
    col32.children[2].innerHTML = ""
    col32.style.borderRadius = ""
    col32.style.marginLeft = "-15px"
    col32.style.transition = "all ease 2s"
    col32.style.backgroundImage = "";
}
// Click on the div
function funct27(e) {
    col32.style.backgroundImage = "url('./images/html5.png')"
    col32.style.backgroundRepeat = "no-repeat"
    col32.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col32.style.backgroundPosition = "center center" //Change the position of a background-image:
    col32.children[0].innerHTML = " "
    col32.children[1].innerHTML = " "
    col32.children[2].innerHTML = " "
    col32.style.transition = "all ease 2s"
    col32.style.cursor = "progress";
}

function funct28(e) {
    col32.style.transition = "all ease 2s"
    col32.children[0].innerHTML = ""
    col32.style.backgroundColor = col32.classList.remove("linear-gradient8")
    col32.style.backgroundColor = ""
}

//col33 , row3
col33.addEventListener("mouseover", funct29);
col33.addEventListener("mouseleave", funct30);
col33.addEventListener("click", funct31);
body.addEventListener("click", funct32);

// Hover
function funct29(e) {
    col33.style.backgroundColor = col33.classList.add("linear-gradient9")
    col33.children[0].innerHTML = "Third row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col33.children[1].innerHTML = "<strong>jQuery</strong>" + " is awesome<br>"
    col33.children[2].innerHTML = "YEAH!!"
    col33.style.borderRadius = "25px"
    col33.style.marginLeft = "15px"
    col33.style.transition = "all ease 2s"
    col33.style.cursor = "pointer";
}
// Leave the div
function funct30(e) {
    col33.style.backgroundColor = col33.classList.remove("linear-gradient9")
    col33.style.backgroundColor = ""
    col33.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    setTimeout(() => {
        col33.children[0].innerHTML = ""
    }, 3000);
    col33.children[1].innerHTML = ""
    col33.children[2].innerHTML = ""
    col33.style.borderRadius = ""
    col33.style.marginLeft = "-15px"
    col33.style.transition = "all ease 2s"
    col33.style.backgroundImage = "";
}
// Click on the div
function funct31(e) {
    col33.style.backgroundImage = "url('./images/jquery.png')"
    col33.style.backgroundRepeat = "no-repeat"
    col33.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col33.style.backgroundPosition = "center center" //Change the position of a background-image:
    col33.children[0].innerHTML = " "
    col33.children[1].innerHTML = " "
    col33.children[2].innerHTML = " "
    col33.style.transition = "all ease 2s"
    col33.style.cursor = "progress";
}

function funct32(e) {
    col33.children[0].innerHTML = ""
    col33.style.backgroundColor = ""
}

//col34 , row3
col34.addEventListener("mouseover", funct33);
col34.addEventListener("mouseleave", funct34);
col34.addEventListener("click", funct35);
body.addEventListener("click", funct36);

// Hover
function funct33(e) {
    col34.style.backgroundColor = col34.classList.add("linear-gradient10")
    col34.children[0].innerHTML = "Third row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col34.children[1].innerHTML = "<strong>NodeJS</strong>" + " is awesome<br>"
    col34.children[2].innerHTML = "YEAH!!"
    col34.style.borderRadius = "25px"
    col34.style.marginLeft = "10px"
    col34.style.transition = "all ease 2s"
    col34.style.cursor = "pointer";
}
// Leave the div
function funct34(e) {
    // col34.style.backgroundColor = col34.classList.remove("linear-gradient8")
    col34.style.backgroundColor = col34.classList.add("linear-gradient10")
    col34.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    setTimeout(() => {
        col34.children[0].innerHTML = ""
    }, 3000);
    col34.children[1].innerHTML = ""
    col34.children[2].innerHTML = ""
    col34.style.borderRadius = ""
    col34.style.marginLeft = "-15px"
    col34.style.transition = "all ease 2s"
    col34.style.backgroundImage = "";
}
// Click on the div
function funct35(e) {
    col34.style.backgroundImage = "url('./images/nodejs.png')"
    col34.style.backgroundRepeat = "no-repeat"
    col34.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col34.style.backgroundPosition = "center center" //Change the position of a background-image:
    col34.children[0].innerHTML = " "
    col34.children[1].innerHTML = " "
    col34.children[2].innerHTML = " "
    col34.style.transition = "all ease 2s"
    col34.style.cursor = "progress";
}

function funct36(e) {
    col34.style.transition = "all ease 2s"
    col34.children[0].innerHTML = ""
    col34.style.backgroundColor = col34.classList.remove("linear-gradient10")
    col34.style.backgroundColor = ""
}

//col35 , row3
col35.addEventListener("mouseover", funct37);
col35.addEventListener("mouseleave", funct38);
col35.addEventListener("click", funct39);
body.addEventListener("click", funct40);

// Hover
function funct37(e) {
    col35.style.backgroundColor = col35.classList.add("linear-gradient11")
    col35.children[0].innerHTML = "Third row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col35.children[1].innerHTML = "<strong>ReactJS</strong>" + " is awesome<br>"
    col35.children[2].innerHTML = "YEAH!!"
    col35.style.borderRadius = "25px"
    col35.style.marginLeft = "5px"
    col35.style.transition = "all ease 2s"
    col35.style.cursor = "pointer";
}
// Leave the div
function funct38(e) {
    col35.style.backgroundColor = col35.classList.remove("linear-gradient11")
    col35.style.backgroundColor = ""
    col35.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    setTimeout(() => {
        col35.children[0].innerHTML = ""
    }, 3000);
    col35.children[1].innerHTML = ""
    col35.children[2].innerHTML = ""
    col35.style.borderRadius = ""
    col35.style.marginLeft = "-15px"
    col35.style.transition = "all ease 2s"
    col35.style.backgroundImage = "";
}
// Click on the div
function funct39(e) {
    col35.style.backgroundImage = "url('./images/react.png')"
    col35.style.backgroundRepeat = "no-repeat"
    col35.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col35.style.backgroundPosition = "center center" //Change the position of a background-image:
    col35.children[0].innerHTML = " "
    col35.children[1].innerHTML = " "
    col35.children[2].innerHTML = " "
    col35.style.transition = "all ease 2s"
    col35.style.cursor = "progress";
}

function funct40(e) {
    col35.children[0].innerHTML = ""
    col35.style.backgroundColor = ""
}



//  4th ROW
//col41 , row4
col41.addEventListener("mouseover", funct43);
col41.addEventListener("mouseleave", funct44);
col41.addEventListener("click", funct45);
body.addEventListener("click", funct46);

// Hover
function funct43(e) {
    col41.style.backgroundColor = col41.classList.add("linear-gradient12")
    col41.children[0].innerHTML = "Fourth row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col41.children[1].innerHTML = "<strong>Redux</strong>" + " is awesome<br>"
    col41.children[2].innerHTML = "YEAH!!"
    col41.style.borderRadius = "25px"
    col41.style.marginLeft = "30px"
    col41.style.transition = "all ease 2s"
    col41.style.cursor = "pointer";
}
// Leave the div
function funct44(e) {
    col41.style.backgroundColor = col41.classList.remove("linear-gradient12")
    col41.style.backgroundColor = ""
    col41.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    setTimeout(() => {
        col41.children[0].innerHTML = ""
    }, 3000);
    col41.children[1].innerHTML = ""
    col41.children[2].innerHTML = ""
    col41.style.borderRadius = ""
    col41.style.marginLeft = "-15px"
    col41.style.transition = "all ease 2s"
    col41.style.backgroundImage = "";
}
// Click on the div
function funct45(e) {
    col41.style.backgroundImage = "url('./images/redux1.png')"
    col41.style.backgroundRepeat = "no-repeat"
    col41.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col41.style.backgroundPosition = "center center" //Change the position of a background-image:
    col41.children[0].innerHTML = " "
    col41.children[1].innerHTML = " "
    col41.children[2].innerHTML = " "
    col41.style.transition = "all ease 2s"
    col41.style.cursor = "progress";
}
// Click on the body
function funct46(e) {
    col41.children[0].innerHTML = ""
    col41.style.backgroundColor = ""
}

//col42, row4
col42.addEventListener("mouseover", funct47);
col42.addEventListener("mouseleave", funct48);
col42.addEventListener("click", funct49);
body.addEventListener("click", funct50);

// Hover
function funct47(e) {
    col42.style.backgroundColor = col42.classList.add("linear-gradient13")
    col42.children[0].innerHTML = "Fourth row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col42.children[1].innerHTML = "<strong>Sass</strong>" + " is awesome<br>"
    col42.children[2].innerHTML = "YEAH!!"
    col42.style.borderRadius = "25px"
    col42.style.marginLeft = "15px"
    col42.style.transition = "all ease 2s"
    col42.style.cursor = "pointer";
}
// Leave the div
function funct48(e) {
    col42.style.backgroundColor = col42.classList.remove("linear-gradient13")
    col42.style.backgroundColor = ""
    col42.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    setTimeout(() => {
        col42.children[0].innerHTML = ""
    }, 3000);
    col42.children[1].innerHTML = ""
    col42.children[2].innerHTML = ""
    col42.style.borderRadius = ""
    col42.style.marginLeft = "-15px"
    col42.style.transition = "all ease 2s"
    col42.style.backgroundImage = "";
}
// Click on the div
function funct49(e) {
    col42.style.backgroundImage = "url('./images/sass.png')"
    col42.style.backgroundRepeat = "no-repeat"
    col42.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col42.style.backgroundPosition = "center center" //Change the position of a background-image:
    col42.children[0].innerHTML = " "
    col42.children[1].innerHTML = " "
    col42.children[2].innerHTML = " "
    col42.style.transition = "all ease 2s"
    col42.style.cursor = "progress";
}
// Click on the body
function funct50(e) {
    col42.children[0].innerHTML = ""
    col42.style.backgroundColor = ""
}

//col43, row4
col43.addEventListener("mouseover", funct51);
col43.addEventListener("mouseleave", funct52);
col43.addEventListener("click", funct53);
body.addEventListener("click", funct54);

// Hover
function funct51(e) {
    col43.style.backgroundColor = col43.classList.add("linear-gradient14")
    col43.children[0].innerHTML = "Fourth row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col43.children[1].innerHTML = "<strong>Tailwind</strong>" + " is awesome<br>"
    col43.children[2].innerHTML = "YEAH!!"
    col43.style.borderRadius = "25px"
    col43.style.marginLeft = "15px"
    col43.style.transition = "all ease 2s"
    col43.style.cursor = "pointer";
}
// Leave the div
function funct52(e) {
    col43.style.backgroundColor = col43.classList.remove("linear-gradient14")
    col43.style.backgroundColor = ""
    col43.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    setTimeout(() => {
        col43.children[0].innerHTML = ""
    }, 3000);
    col43.children[1].innerHTML = ""
    col43.children[2].innerHTML = ""
    col43.style.borderRadius = ""
    col43.style.marginLeft = "-15px"
    col43.style.transition = "all ease 2s"
    col43.style.backgroundImage = "";
}
// Click on the div
function funct53(e) {
    col43.style.backgroundImage = "url('./images/tailwind.png')"
    col43.style.backgroundRepeat = "no-repeat"
    col43.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col43.style.backgroundPosition = "center center" //Change the position of a background-image:
    col43.children[0].innerHTML = " "
    col43.children[1].innerHTML = " "
    col43.children[2].innerHTML = " "
    col43.style.transition = "all ease 2s"
    col43.style.cursor = "progress";
}
// Click on the body
function funct54(e) {
    col43.children[0].innerHTML = ""
    col43.style.backgroundColor = ""
}

//col44, row4
col44.addEventListener("mouseover", funct55);
col44.addEventListener("mouseleave", funct56);
col44.addEventListener("click", funct57);
body.addEventListener("click", funct58);

// Hover
function funct55(e) {
    col44.style.backgroundColor = col44.classList.add("linear-gradient15")
    col44.children[0].innerHTML = "Fourth row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col44.children[1].innerHTML = "<strong>Typescript</strong>" + " is awesome<br>"
    col44.children[2].innerHTML = "YEAH!!"
    col44.style.borderRadius = "25px"
    col44.style.marginLeft = "15px"
    col44.style.transition = "all ease 2s"
    col44.style.cursor = "pointer";
}
// Leave the div
function funct56(e) {
    col44.style.backgroundColor = col44.classList.remove("linear-gradient15")
    col44.style.backgroundColor = ""
    col44.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    setTimeout(() => {
        col44.children[0].innerHTML = ""
    }, 3000);
    col44.children[1].innerHTML = ""
    col44.children[2].innerHTML = ""
    col44.style.borderRadius = ""
    col44.style.marginLeft = "-15px"
    col44.style.transition = "all ease 2s"
    col44.style.backgroundImage = "";
}
// Click on the div
function funct57(e) {
    col44.style.backgroundImage = "url('./images/typescript.png')"
    col44.style.backgroundRepeat = "no-repeat"
    col44.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col44.style.backgroundPosition = "center center" //Change the position of a background-image:
    col44.childen[0].innerHTML = " "
    col44.children[1].innerHTML = " "
    col44.children[2].innerHTML = " "
    col44.style.transition = "all ease 2s"
    col44.style.cursor = "progress";
}
// Click on the body
function funct58(e) {
    col44.children[0].innerHTML = ""
    col44.style.backgroundColor = ""
}

//col45, row4
col45.addEventListener("mouseover", funct59);
col45.addEventListener("mouseleave", funct60);
col45.addEventListener("click", funct61);
body.addEventListener("click", funct62);

// Hover
function funct59(e) {
    col45.style.backgroundColor = col45.classList.add("linear-gradient16")
    col45.children[0].innerHTML = "Fourth row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col45.children[1].innerHTML = "<strong>VueJS</strong>" + " is awesome<br>"
    col45.children[2].innerHTML = "YEAH!!"
    col45.style.borderRadius = "25px"
    col45.style.marginLeft = "15px"
    col45.style.transition = "all ease 2s"
    col45.style.cursor = "pointer";
}
// Leave the div
function funct60(e) {
    col45.style.backgroundColor = col45.classList.remove("linear-gradient16")
    col45.style.backgroundColor = ""
    col45.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    setTimeout(() => {
        col45.children[0].innerHTML = ""
    }, 3000);
    col45.children[1].innerHTML = ""
    col45.children[2].innerHTML = ""
    col45.style.borderRadius = ""
    col45.style.marginLeft = "-15px"
    col45.style.transition = "all ease 2s"
    col45.style.backgroundImage = "";
}
// Click on the div
function funct61(e) {
    col45.style.backgroundImage = "url('./images/vuejs.png')"
    col45.style.backgroundRepeat = "no-repeat"
    col45.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col45.style.backgroundPosition = "center center" //Change the position of a background-image:
    col45.childen[0].innerHTML = " "
    col45.children[1].innerHTML = " "
    col45.children[2].innerHTML = " "
    col45.style.transition = "all ease 2s"
    col45.style.cursor = "progress";
}
// Click on the body
function funct62(e) {
    col45.children[0].innerHTML = ""
    col45.style.backgroundColor = ""
}




//Row 2 on hover and on mouse leave :
row2.addEventListener("mouseover", () => {
    // black overlay on hover
    body.classList.add("overlay-black")
    expandContentText.style.fontWeight="bolder"

    row2.style.transition = "all ease 3s"
    row2.style.backgroundSize = "cover" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    row2.style.backgroundRepeat = "no-repeat"
})
row2.addEventListener("mouseleave", () => {
    body.classList.remove("overlay-black")

    row2.style.transition = "all ease 3s"
    row2.style.backgroundImage = "";
    row2.style.margin = ""
    row2.style.padding = ""
})

//Row 3 on hover and on mouse leave :

row3.addEventListener("mouseover", () => {
    row3.style.transition = "all ease 3s"
    row3.style.backgroundImage = "url('./images/untitled2.png')";
    row3.style.backgroundSize = "cover" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    row3.style.backgroundPosition = "center center" //Change the position of a background-image:
    row3.style.backgroundRepeat = "no-repeat" //The backgroundRepeat property sets or returns how to repeat (tile) a background-image.
    row3.style.marginLeft = "30px"
    row3.style.marginRight = "30px"
    // row3.style.marginTop = "80px"
    // row3.style.padding = "150px 0px 300px 0px"

})
row3.addEventListener("mouseleave", () => {
    row3.style.transition = "all ease 3s"
    row3.style.backgroundImage = "";
    row3.style.backgroundSize = ""
    row3.style.backgroundPosition = ""
    row3.style.backgroundRepeat = ""
    row3.style.marginLeft = ""
    row3.style.marginRight = ""
    row3.style.marginTop = ""
    row3.style.padding = ""
})


//Row 4 on hover and on mouse leave :

row4.addEventListener("mouseover", () => {
    row4.style.transition = "all ease 3s"
    row4.style.backgroundImage = "url('./images/untitled3.png')";
    row4.style.backgroundSize = "cover" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    row4.style.backgroundPosition = "center center" //Change the position of a background-image:
    row4.style.backgroundRepeat = "no-repeat" //The backgroundRepeat property sets or returns how to repeat (tile) a background-image.
    row4.style.marginLeft = "30px"
    row4.style.marginRight = "30px"
    ShowBg()
})
row4.addEventListener("mouseleave", () => {
    row4.style.transition = "all ease 3s"
    row4.style.backgroundImage = "";
    row4.style.backgroundSize = ""
    row4.style.backgroundPosition = ""
    row4.style.backgroundRepeat = ""
    row4.style.marginLeft = ""
    row4.style.marginRight = ""
    row4.style.marginTop = ""
    row4.style.padding = ""
    HideBg()
})

// row2.setAttribute("class", "democlass") , this will override all the other classes applied to "row2" : row row2 my-3 border border-1 border-secondary my-3
//All JavaScript identifiers are case sensitive.

//toggle collapse of the lorem text
expandContent.addEventListener("click", () => {
    $('.showmeText').slideToggle('slow');
})



var myCollapsible = document.getElementById('collapse1')
myCollapsible.addEventListener('hidden.bs.collapse', function () {
    body.style.backgroundColor = "lightgrey"
    btncollapse1.style.color = "blue"
    btncollapse1.style.backgroundColor = "white"
    btncollapse1.innerText = "Show row 1 :"

})
myCollapsible.addEventListener('shown.bs.collapse', function () {
    body.style.backgroundColor = "#e9ecef"
    btncollapse1.style.color = "white"
    btncollapse1.style.backgroundColor = "blue"
    btncollapse1.innerText = "Hide row 1 :"
})

var myCollapsible2 = document.getElementById('collapse2')
myCollapsible2.addEventListener('hidden.bs.collapse', function () {
    body.style.backgroundColor = "lightgrey"
    btncollapse1.style.color = "#0dcaf0"
    btncollapse1.style.backgroundColor = "white"
    btncollapse1.innerText = "Show row 2 :"

})
myCollapsible2.addEventListener('shown.bs.collapse', function () {
    body.style.backgroundColor = "#e9ecef"
    btncollapse1.style.color = "white"
    btncollapse1.style.backgroundColor = "#0dcaf0"
    btncollapse1.innerText = "Hide row 2 :"
})

// btncollapse12.addEventListener("mouseover", () => {
//     myCollapsible2.removeEventListener('shown.bs.collapse')
//     myCollapsible2.removeEventListener('hidden.bs.collapse')
// })



myCollapsible3.addEventListener('hidden.bs.collapse', function () {
    body.style.backgroundColor = "white"
    // btncollapse13.style.color = "white"
    // btncollapse13.style.backgroundColor = "#198754" 
    btncollapse3.innerText = "Show row 3,4 and 5 :"
    btncollapse1.classList.add("btn-transf-click")
    btncollapse2.classList.add("btn-transf-click2")
    btncollapse3.classList.add("btn-transf-click3")


})
myCollapsible3.addEventListener('shown.bs.collapse', function () {
    body.style.backgroundColor = "#e9ecef"
    // btncollapse13.style.color = "white"
    // btncollapse13.style.backgroundColor = "#198754"
    btncollapse3.innerText = "Hide row 3,4 & 5 :"
    btncollapse1.classList.remove("btn-transf-click")
    btncollapse2.classList.remove("btn-transf-click2")
    btncollapse3.classList.remove("btn-transf-click3")
    document.querySelector(".row4-2").style.marginBottom = "300px"
    document.querySelector(".row4-2").style.marginTop = "50px"


})



//set a bg image to the body on hover on the btn1

btncollapse1.addEventListener("mouseover", () => {
    expandContentText.style.transition = "all  ease 2s"
    body.style.backgroundImage = "url('./images/untitled3.png')";
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "cover"
    expandContentText.style.color = "black"
    expandContentText.style.fontWeight = "bolder"
    expandContentText.style.fontVariant = "small-caps";
    expandContentText.style.fontStyle = "italic";


})
btncollapse1.addEventListener("mouseleave", () => {
    expandContentText.style.transition = "all ease 2s"
    body.style.backgroundImage = "";
    body.style.backgroundRepeat = ""
    body.style.backgroundSize = ""
    expandContentText.style.color = ""
    expandContentText.style.fontWeight = ""
    expandContentText.style.fontVariant = "";
    expandContentText.style.fontStyle = "";
})

//set a bg image to the body on hover on the btn2

btncollapse2.addEventListener("mouseover", () => {
    body.style.transition = "all ease-in 5s"
    body.style.backgroundImage = "url('./images/untitled5.png')";
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "cover"
    expandContentText.style.color = "black"
    iconswrapper.style.display = "block"
    setTimeout(() => {
        iconswrapper.children[0].style.animation = "shake2 2s 1"
        iconswrapper.children[1].style.animation = "shake3 2s 1"
        iconswrapper.children[2].style.animation = "shake2 2s 1"
        iconswrapper.children[3].style.animation = "shake3 2s 1"
        iconswrapper.children[4].style.animation = "shake2 2s 1"
        iconswrapper.children[5].style.animation = "shake3 2s 1"
        iconswrapper.children[6].style.animation = "shake2 2s 1"
        iconswrapper.children[7].style.animation = "shake3 2s 1"
        iconswrapper.children[8].style.animation = "shake2 2s 1"
        iconswrapper.children[9].style.animation = "shake3 2s 1"
        iconswrapper.children[10].style.animation = "shake2 2s 1"
        iconswrapper.children[11].style.animation = "shake3 2s 1"
        iconswrapper.children[12].style.animation = "shake2 2s 1"
    }, 1000);
})
const iconswrapper = document.querySelector(".icons-wrapper")

btncollapse2.addEventListener("mouseleave", () => {
    body.style.transition = "all  ease-in 5s"
    body.style.backgroundImage = "";
    expandContentText.style.color = ""
    iconswrapper.style.display = "none"

})

//set a bg image to the body on hover on the btn3

btncollapse3.addEventListener("mouseover", () => {
    body.style.transition = "all  ease-in 5s"
    body.style.backgroundImage = "url('./images/untitled2.png')";
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "cover"
    expandContentText.style.color = "black"

    rotatingIcons.children[0].style.display = "inline-block"
    rotatingIcons.children[1].style.display = "inline-block"
    rotatingIcons.children[2].style.display = "inline-block"
    rotatingIcons.children[3].style.display = "inline-block"
    rotatingIcons.children[4].style.display = "inline-block"


})
btncollapse3.addEventListener("mouseleave", () => {
    body.style.transition = "all  ease-in 5s"
    body.style.backgroundImage = "";
    expandContentText.style.color = ""

})

showmeText.addEventListener("mouseover", () => {
    //showing the info icon on hover
    InfoMsg.style.display="inline-block"

    showmeText.style.transition = "all ease 2.5s"
    showmeText.style.fontSize = "larger"
    showmeText.style.lineHeight = "2"
    showmeText.style.margin = "-30px 200px -10px 200px"
    document.querySelectorAll(".Line-break").forEach((linebreak) => {
        linebreak.innerHTML = "<br> <br>"
    })
    showmeText.removeEventListener("mouseleave")

    
})

showmeText.addEventListener("mouseleave", () => {
    InfoMsg.style.display="none"

    showmeText.style.transition = "all ease 2.5s"
    showmeText.style.fontSize = ""
    showmeText.style.lineHeight = ""
    showmeText.style.margin = ""
    document.querySelectorAll(".Line-break").forEach((linebreak) => {
        linebreak.innerHTML = ""
    })
})

//Set a bg image to the 3rd collapsible section on hover over 1 of the 3 rows

function ShowBg() {
    myCollapsible3.style.backgroundImage = "url('./images/webdevbg2.jpg')";
    myCollapsible3.style.backgroundRepeat = "no-repeat"
    myCollapsible3.style.backgroundSize = "cover"
    myCollapsible3.style.backgroundPosition = "center center"
}

function HideBg() {
    myCollapsible3.style.backgroundImage = ""
    myCollapsible3.style.backgroundRepeat = ""
    myCollapsible3.style.backgroundSize = ""
    myCollapsible3.style.backgroundPosition = ""
}
row4_2.addEventListener("mouseover", () => {
    ShowBg()
})

row4_2.addEventListener("mouseleave", () => {
    HideBg()
})

row2_double.addEventListener("mouseover", () => {
    ShowBg()
})
row2_double.addEventListener("mouseleave", () => {
    HideBg()
})

// the ellipsis 3 icons

btncollapse1.addEventListener("mouseover", () => {
    ellipsis.style.display = "block"
    // if (ellipsis.children[0].style.display = "inline-block") {
    //     btncollapse1.removeEventListener("mouseleave", functtt)
    // }
    //if the user hover over the 1st img, it stops from animating, when he hovers out , the animation runs again
    ellipsis.children[0].addEventListener("mouseover", () => {

        ellipsis.children[0].style.transition = "all ease 2s"
        ellipsis.children[0].style.animation = "none"
        ellipsis.children[0].style.transform = "scale(0.8)"
        ellipsis.children[0].style.filter = "grayscale(100%)"

    })
    ellipsis.children[0].addEventListener("mouseleave", () => {


        ellipsis.children[0].style.animation = "jumpingDots 2s infinite"
        ellipsis.children[0].style.transform = ""
        ellipsis.children[0].style.filter = ""
    })
    //same here
    ellipsis.children[1].addEventListener("mouseover", () => {
        ellipsis.children[1].style.transition = "all ease 2s"
        ellipsis.children[1].style.animation = "none"
        ellipsis.children[1].style.transform = "scale(0.8)"
        ellipsis.children[1].style.filter = "grayscale(100%)"


    })
    ellipsis.children[1].addEventListener("mouseleave", () => {
        ellipsis.children[1].style.animation = "jumpingDots 2s infinite"
        ellipsis.children[1].style.transform = ""
        ellipsis.children[1].style.filter = ""

    })
    //same here
    ellipsis.children[2].addEventListener("mouseover", () => {
        ellipsis.children[2].style.transition = "all ease 2s"
        ellipsis.children[2].style.animation = "none"
        ellipsis.children[2].style.transform = "scale(0.8)"
        ellipsis.children[2].style.filter = "grayscale(100%)"
    })
    ellipsis.children[2].addEventListener("mouseleave", () => {
        ellipsis.children[2].style.animation = "jumpingDots 2s infinite"
        ellipsis.children[2].style.transform = ""
        ellipsis.children[2].style.filter = ""

    })
})

setTimeout(() => {
    btncollapse1.addEventListener("mouseleave", functtt)

    function functtt() {
        ellipsis.style.display = "none"
    }
}, 8000);

rotatingIcons.children[0].addEventListener("mouseover", () => {
    rotatingIcons.children[0].style.transition="all ease 1s"
    rotatingIcons.children[0].style.border = "thick solid black";
    rotatingIcons.children[0].style.borderRadius = "25px";
    rotatingIcons.children[0].style.padding="5px"
})
rotatingIcons.children[0].addEventListener("mouseleave", () => {
    rotatingIcons.children[0].style.transition="all ease 1s"
    rotatingIcons.children[0].style.border = ""
    rotatingIcons.children[0].style.borderRadius = ""
    rotatingIcons.children[0].style.padding=""
})

rotatingIcons. children[1].addEventListener("mouseover", () => {
    rotatingIcons. children[1].style.transition="all ease 1s"
    rotatingIcons. children[1].style.border = "thick solid black";
    rotatingIcons. children[1].style.borderRadius = "25px";
    rotatingIcons. children[1].style.padding="5px"
})
rotatingIcons. children[1].addEventListener("mouseleave", () => {
    rotatingIcons. children[1].style.transition="all ease 1s"
    rotatingIcons. children[1].style.border = ""
    rotatingIcons. children[1].style.borderRadius = ""
    rotatingIcons. children[1].style.padding=""
})

rotatingIcons. children[2].addEventListener("mouseover", () => {
    rotatingIcons. children[2].style.transition="all ease 1s"
    rotatingIcons. children[2].style.border = "thick solid black";
    rotatingIcons. children[2].style.borderRadius = "25px";
    rotatingIcons. children[2].style.padding="5px"
})
rotatingIcons. children[2].addEventListener("mouseleave", () => {
    rotatingIcons. children[2].style.transition="all ease 1s"
    rotatingIcons. children[2].style.border = ""
    rotatingIcons. children[2].style.borderRadius = ""
    rotatingIcons. children[2].style.padding=""
})

rotatingIcons. children[3].addEventListener("mouseover", () => {
    rotatingIcons. children[3].style.transition="all ease 1s"
    rotatingIcons. children[3].style.border = "thick solid black";
    rotatingIcons. children[3].style.borderRadius = "25px";
    rotatingIcons. children[3].style.padding="5px"
})
rotatingIcons. children[3].addEventListener("mouseleave", () => {
    rotatingIcons. children[3].style.transition="all ease 1s"
    rotatingIcons. children[3].style.border = ""
    rotatingIcons. children[3].style.borderRadius = ""
    rotatingIcons. children[3].style.padding=""
})

rotatingIcons. children[4].addEventListener("mouseover", () => {
    rotatingIcons. children[4].style.transition="all ease 1s"
    rotatingIcons. children[4].style.border = "thick solid black";
    rotatingIcons. children[4].style.borderRadius = "25px";
    rotatingIcons. children[4].style.padding="5px"
})
rotatingIcons. children[4].addEventListener("mouseleave", () => {
    rotatingIcons. children[4].style.transition="all ease 1s"
    rotatingIcons. children[4].style.border = ""
    rotatingIcons. children[4].style.borderRadius = ""
    rotatingIcons. children[4].style.padding=""
})
