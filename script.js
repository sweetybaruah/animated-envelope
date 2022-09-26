var tap= document.querySelector('.tap')
var bg1 = document.querySelector('.bg1')
var img1= document.querySelector('.cap');
var img2= document.querySelector('.letter');
var img3= document.querySelector('.envelopeTop');
var img4= document.querySelector('.tapicon');
// var img5= document.getElementById('img5');

img4.addEventListener('click',()=>{
    img1.classList.add('open')
    img2.classList.add('show')
    img4.classList.add('hidden')

    setTimeout(()=>{
        bg1.classList.add('hidden')
        img1.classList.add('hidden')
        img3.classList.add('bottom')
        setTimeout(function(){
            img4.classList.add('hidden')
            img3.classList.add('hidden')
        },1000)
        
    },1000)
});