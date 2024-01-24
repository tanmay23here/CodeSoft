let menu = document.querySelector("ul");
        let bars = document.querySelector(".header .fa-bars");
        bars.addEventListener("click", function(){
            menu.classList.toggle("show");
        })