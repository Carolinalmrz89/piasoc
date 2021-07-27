"use strict";

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

