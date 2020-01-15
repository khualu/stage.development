// document.getElementById('cta').addEventListener('click', function () {
//     tl.to('.panel', 1.5, {scaleY: 1, height: '100vh', ease: Power4.easeOut});
//     tl.to('#emo', 1, {opacity: 1, y: 25, delay: .5, ease: Back.easeOut.config(1.7)});
//     tl.to('p', 1, {opacity: 1, y: 20, delay: 1.4});
//     // tl.to('.box', 3, {opacity: 1, scale: 1, ease: Elastic.easeIn.config(1, 0.3)});
//     tl.to('.box', 2, {opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3)});
// })

var tl = new TimelineMax({
    paused: true,
    // repeat: 2,
    // yoyo: true
});

tl.to('.panel', 1.5, {scaleY: 1, height: '100vh', ease: Power4.easeOut});
tl.to('#emo', 1, {opacity: 1, y: 25, delay: .5, ease: Back.easeOut.config(1.7)}, 1);
tl.to('p', 1, {opacity: 1, y: 20}, 1);
tl.to('.box', 2, {opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, "-=2");
tl.reversed(true);

document.getElementById('cta').addEventListener('click', function () {
    tl.reversed(!tl.reversed());
    if (tl.reversed())
        tl.reverse()
    else 
        tl.play();
})

document.getElementById('p').addEventListener('click', function () {
    console.log('click working');
    // tl.pause();
    // tl.paused();
    tl.paused(!tl.paused());
    console.log(tl.paused());

    if (tl.paused()) {
        tl.pause();
    }
    else {
        tl.resume();
    }

})