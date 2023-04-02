let overviewButton = document.querySelector(".overview-button");
overviewButton.addEventListener("click",showoverview);


function showoverview(){ 

    let overview = document.querySelector("nav.overview");
    overview.classList.toggle("showoverview");
    let movebutton = document.querySelector("div.overview-button");
    movebutton.classList.toggle("movebutton");
    let movename = document.querySelector("header h1")
    movename.classList.toggle("movename")

}