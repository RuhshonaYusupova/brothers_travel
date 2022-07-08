let navbarResponsive = document.querySelector('.navbar-responsive')
let navOpenIcon = document.querySelector('.navOpenIcon')
let navCloseIcon = document.querySelector('.navCloseIcon')
let balckBg = document.querySelector('.black-bg')

navOpenIcon.addEventListener('click', () => {
  navbarResponsive.style.right = '-50%' 
  balckBg.style.display = "block"
})

navCloseIcon.addEventListener('click', () =>{
  navbarResponsive.style.right = "-200%"
  balckBg.style.display = "none"
})

