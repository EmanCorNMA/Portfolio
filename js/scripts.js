//MONTECARLO MONACO TOURISM LOGO
document.addEventListener('DOMContentLoaded', function () {

    const montecarloImg = document.getElementById("montecarloImg");
    const montecarloButton = document.getElementById("montecarloButton");

    montecarloButton.addEventListener("click", function () {
        if (montecarloImg.src.endsWith("img/Monaco-Tourism-Logo-02.png")) {
            montecarloImg.src = "img/Monaco-Tourism-Logo-01.png";
        } else {
            montecarloImg.src = "img/Monaco-Tourism-Logo-02.png";
        }
    });
})

//SURF N SEA LOGO
document.addEventListener('DOMContentLoaded', function () {

    const surfnseaImg = document.getElementById("surfnseaImg");
    const surfnseaButton = document.getElementById("surfnseaButton");

    surfnseaButton.addEventListener("click", function () {
        if (surfnseaImg.src.endsWith("img/Surf-n-Sea-02.png")) {
            surfnseaImg.src = "img/Surf-n-Sea-01.png";
        } else {
            surfnseaImg.src = "img/Surf-n-Sea-02.png";
        }
    });
})

//SURF N SEA LOGO
document.addEventListener('DOMContentLoaded', function () {

    const olympicpictogramsImg = document.getElementById("olympicpictogramsImg");
    const olympicpictogramsButton = document.getElementById("olympicpictogramsButton");

    olympicpictogramsButton.addEventListener("click", function () {
        if (olympicpictogramsImg.src.endsWith("img/Olympic-Picto-01.png")) {
            olympicpictogramsImg.src = "img/Olympic-Picto-02.png";
        } else {
            olympicpictogramsImg.src = "img/Olympic-Picto-01.png";
        }
    });
})

// IMAGE TRANSITION??



//TEST IF JS IS LINKED AND ACTIVE console.log('JS IS READY');


//BODY NO SCROLLING WHEN POPUP OPENS

function disableScroll() {
    document.body.classList.add("remove-scrolling");
}

function enableScroll() {
    document.body.classList.remove("remove-scrolling");
}

