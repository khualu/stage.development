import anime from "animejs";

let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
})

tl.add({
    targets: 'section div',
    backgroundColor: 'rgb(197,197,255)'
})