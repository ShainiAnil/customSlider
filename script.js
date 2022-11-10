//DOM Elements
let slider = document.querySelector("#slider")
let slides = document.querySelectorAll(".slide")
let prevButton = document.querySelector(".prevButton")
let nextButton = document.querySelector(".nextButton")
let navigation = document.querySelector('.navigation')

//Variables
let slideCount = slides.length
let activeSlideIndex = 0

// Show the first slide on site loads
slides[activeSlideIndex].classList.add("active")

//Create navigation bullets dynamically
for(let i =0; i<slideCount;i++){
    let bullet = `<input class="bullet" type="radio" name="nav" data-id=${i} >`
    navigation.innerHTML += bullet
}

let bullets = document.querySelectorAll(".bullet")

//to enable first first navigation bullet on site loads
bullets[activeSlideIndex].checked=true

//Reset slides active class
function resetSlide(){
    slides[activeSlideIndex].classList.remove("active")
}

//Navigating to next slide
nextButton.addEventListener('click',function(){
    resetSlide()
    activeSlideIndex ++
    if(activeSlideIndex > slideCount-1)
    {
        activeSlideIndex = 0
    }
    bullets[activeSlideIndex].checked = true
    slides[activeSlideIndex].classList.add("active")
})

// Navigating to previous slide
prevButton.addEventListener('click',function(){
    resetSlide()
    activeSlideIndex--
    if(activeSlideIndex < 0){
        activeSlideIndex = slideCount-1 
    }
    bullets[activeSlideIndex].checked = true
    slides[activeSlideIndex].classList.add("active")
})

//Navigating with bullet navs
bullets.forEach(item=>{
    item.addEventListener('change',function(e){
    resetSlide()
    activeSlideIndex = e.target.dataset.id
    slides[activeSlideIndex].classList.add("active")

})
})


