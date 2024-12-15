function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")){
        img.setAttribute("src", "./img/avatar2.jpg")
    }
    else{
        img.setAttribute("src", "./img/avatar1,jfif")
    }
}