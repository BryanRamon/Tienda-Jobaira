
//let nav= document.querySelector('.nav');
let welcomeNav=document.querySelector('.nav__welcome');
let searchNav=document.querySelector('.nav__search');

window.addEventListener('scroll', function(){
    // console.log('hiciste scroll');
    //console.log(scrollY);
    if(scrollY > 0){
        console.log('Es mayor a cero');
        welcomeNav.classList.add('d-hide');
        searchNav.classList.add('d-hide');
    }else{
        console.log('regresaste al punto cero');
        welcomeNav.classList.remove('d-hide');
        searchNav.classList.remove('d-hide');
    }
})
