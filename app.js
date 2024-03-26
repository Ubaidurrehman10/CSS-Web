console.log("Hello this is javascript");

const wrapper = document.querySelector(".sliderWrapper");

console.log(wrapper);


const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});

console.log(menuItems);