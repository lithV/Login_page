const wrapper = document.querySelector('.wrapper');
const ll = document.querySelector('.rr-l');
const rr = document.querySelector('.rr-r');
const close =document.querySelector('.ic-2');

rr.addEventListener('click',()=>{
    wrapper.classList.add('active')
});
ll.addEventListener('click',()=>{
    wrapper.classList.remove('active')
});
