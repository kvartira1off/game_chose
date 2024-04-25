let main_screen = document.querySelector('.main-screen')
let profile_screen = document.querySelector('.profile-screen')
let wallet_screen = document.querySelector('.profile-screen')
let help_screen = document.querySelector('.help-screen')

let profile_btn = document.querySelector('.profile-btn')
let wallet_btn = document.querySelector('.wallet-btn')
let help_btn = document.querySelector('.help-btn')
let filter_btn = document.querySelector('.filter-btn')
let back_btn1 = profile_screen.querySelector('.back-btn')
let back_btn2 = wallet_screen.querySelector('.back-btn')
let back_btn3 = help_screen.querySelector('.back-btn')

profile_btn.addEventListener('click', function(){
    main_screen.style.display = "none"
})
wallet_btn.addEventListener('click', function(){
    main_screen.style.display = "none"
})
help_btn.addEventListener('click', function(){
    main_screen.style.display = "none"
})
filter_btn.addEventListener('click', function(){
})