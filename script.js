let main_screen = document.querySelector('.main-screen')
let profile_screen = document.querySelector('.profile-screen')
let wallet_screen = document.querySelector('.wallet-screen')
let help_screen = document.querySelector('.help-screen')


let profile_btn = document.querySelector('.profile-btn')
let wallet_btn = document.querySelector('.wallet-btn')
let help_btn = document.querySelector('.help-btn')
let filter_btn = document.querySelector('.filter-btn')

let back_btn_ps = profile_screen.querySelector('.back-btn')
let back_btn_ws = wallet_screen.querySelector('.back-btn')
let back_btn_hs = help_screen.querySelector('.back-btn')

profile_btn.addEventListener('click', function(){
    main_screen.style.display = "none"
    profile_screen.style.display = "flex"
})
wallet_btn.addEventListener('click', function(){
    main_screen.style.display = "none"
    wallet_screen.style.display = "flex"
})
help_btn.addEventListener('click', function(){
    main_screen.style.display = "none"
    help_screen.style.display = "flex"
})
filter_btn.addEventListener('click', function(){
})

back_btn_ps.addEventListener('click', function(){
    main_screen.style.display = "block"
    profile_screen.style.display = "none"
})
back_btn_ws.addEventListener('click', function(){
    main_screen.style.display = "block"
    wallet_screen.style.display = "none"
})
back_btn_hs.addEventListener('click', function(){
    main_screen.style.display = "block"
    help_screen.style.display = "none"
})