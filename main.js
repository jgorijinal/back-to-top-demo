const button = document.querySelector('.back-to-top')
button.addEventListener('click',()=>window.scrollTo({
    top: 0,
    behavior: 'smooth',
}))

let  documentHeight = document.documentElement.scrollHeight
let offsetHeight = documentHeight / 4
window.addEventListener('scroll' , ()=>{
    let scrollY = document.documentElement.scrollTop
    if(scrollY > offsetHeight ) {
        button.classList.add('visible')
    }else {
        button.classList.remove('visible')
    }
})