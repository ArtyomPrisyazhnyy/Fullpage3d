const burger = document.querySelector(".burger");
const container = document.querySelector(".container");
const bar = document.querySelector(".bar");
const screens = document.querySelectorAll(".screen");

burger.addEventListener("click", () => {
    container.classList.toggle("active");
    bar.classList.toggle("active");
});

function replaceBg(id){
    const bg = document.getElementById(id);
    screens.forEach(screen => {
        screen.style.display = "none";
    })
    bg.style.display = "block";
}

function changeBg(){
    const links = document.querySelectorAll(".link");

    links.forEach(link => {
        link.addEventListener("mouseenter", e => {
            e.preventDefault();
            replaceBg(e.target.dataset.link);
        })

        link.addEventListener("click", e => {
            e.preventDefault();
            container.classList.toggle("active");
            bar.classList.toggle("active");
        })
    });

    screens.forEach(screen => {
        screen.style.display = "none";
        screens[0].style.display = "block";
        
        screen.addEventListener("click", e => {
            e.preventDefault();
            container.classList.remove("active");
            bar.classList.remove("active");
        })
    })
};
changeBg();
