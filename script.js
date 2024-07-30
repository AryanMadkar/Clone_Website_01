
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstpageanime(){
    let tl = gsap.timeline()
    tl.from("#nav",{
        y:'-10',
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut'
    })
    .to(".bounding_elus",{
        y:"0",
        ease:'power2.inOut',
        duration: 1,
        stagger: 0.2
    })
    .to(".tren_elus",{
        x:"0",
        ease:'power2.inOut',
        duration: 1,
        delay:-1
    })
}



function circlefollow(){
    window.addEventListener("mousemove",(event)=>{
        let mousex = event.clientX
        let mousey = event.clientY
        document.querySelector("#minicircle").style.transform=`translate(${mousex-9}px,${mousey-9}px)`
    })
}
firstpageanime()

circlefollow()