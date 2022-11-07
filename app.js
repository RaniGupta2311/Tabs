console.log("welcome to tabs project");
const about=document.querySelector(".about");
const btns=document.querySelectorAll(".tab-btn");
const content=document.querySelectorAll(".content");

about.addEventListener("click",function(e){
    // console.log(e.target.dataset.id);
    const id=e.target.dataset.id;
    if(id){
        // remoe active from other buttons
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        // hide all div content 
        content.forEach(function(c){
            c.classList.remove("active");
        })
        const element=document.getElementById(id);
        element.classList.add("active");
    }
})
