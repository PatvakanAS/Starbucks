function imgSlider(anything){
    document.querySelector(".starbucks").src = anything;
}

function toggleMenu (){
    var toggleMenu = document.querySelector(".toggle");
    var navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}