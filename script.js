let currentSlideIndex = 0;
const images =document.querySelectorAll('.pic');
const prevButton =document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

images.forEach ((image ,index) => {
    for (let i =3 ;i <images.length ;i++){
        images[i].style.display ="none"
    }
})
// عرض الصور next
function nextSlide (){
    images[currentSlideIndex].style.display ='none';
    currentSlideIndex = (currentSlideIndex + 3)% images.length ;
    images[currentSlideIndex].style.display ='block';

}

// عرض الصور previous
function prevSlide (){
    images[currentSlideIndex].style.display ='none';
    currentSlideIndex = (currentSlideIndex - 3+ images.length)% images.length ;
    images[currentSlideIndex].style.display ='block';

}

const dots =document.querySelectorAll('.dot')

dots.forEach((dot,index) =>{
    dot.addEventListener('click',()=>{
        showSlide(index)
    })
})


