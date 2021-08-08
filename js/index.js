"use strict";

// SLIDER

const sliderContainer = document.getElementById("slider-container");
let sliderSection = document.querySelectorAll(".slider-section");
let lastSliderSection = sliderSection[sliderSection.length -1];
const btnSliderRight = document.getElementById("slider-btn-right");
const btnSliderLeft = document.getElementById("slider-btn-left");

sliderContainer.insertAdjacentElement("afterbegin", lastSliderSection);

const nextSliderSection = () =>{
    let firstSliderSection = document.querySelectorAll(".slider-section")[0];
    sliderContainer.style.marginLeft = "-200%";
    sliderContainer.style.transition = "all 0.5s";
    setTimeout(function(){
        sliderContainer.style.transition = "none";
        sliderContainer.insertAdjacentElement("beforeend", firstSliderSection);
        sliderContainer.style.marginLeft = "-100%";
    }, 500);
}

const prevSliderSection = () =>{
    let sliderSection = document.querySelectorAll(".slider-section");
    let lastSliderSection = sliderSection[sliderSection.length -1];
    sliderContainer.style.marginLeft = "0";
    sliderContainer.style.transition = "all 0.5s";
    setTimeout(function(){
        sliderContainer.style.transition = "none";
        sliderContainer.insertAdjacentElement("afterbegin", lastSliderSection);
        sliderContainer.style.marginLeft = "-100%";
    }, 500);
}

btnSliderRight.addEventListener("click", function(){
    nextSliderSection();
});

btnSliderLeft.addEventListener("click", function(){
    prevSliderSection();
});

setInterval(function(){
    nextSliderSection();
}, 5000);


// TRANSFORM LOGO QUIENES SOMOS

window.addEventListener("scroll", () =>{
    const logoQuienesSomos = document.querySelector(".img-quienes-somos");
    let alturaWindow = window.innerHeight/1.3;
    let distancia = logoQuienesSomos.getBoundingClientRect().top;

    logoQuienesSomos.classList.add("transform-left");

    if(distancia <= alturaWindow){
        logoQuienesSomos.classList.add("aparece");
    }
    else{
        logoQuienesSomos.classList.remove("aparece");
    };

})