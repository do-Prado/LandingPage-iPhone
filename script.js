/*Function to change the phone*/
function imgSlider(e){
    document.querySelector('#phone').src = e;
}

/*Function to change circle color*/
function circleChange(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}