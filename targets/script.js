const squares = document.getElementsByClassName('square')
const allElements = document.querySelectorAll('div')


//anime({
//    targets: allElements[2],
//    left: 300,
//})

//allElements.forEach((element, i) => {
//    anime({
//        targets: element,
//        left: 300 + (i*50),
//
//    })
//})

//anime({
//    targets : [squares, '.circle'],
//    left: 300,
//    rotate: 45,
//    scale: 0.5,
//    translateY: 100,
//    opacity: 0.5,
//})


anime({
    targets: allElements,
    left: 300,
})
anime({
    targets: squares,
    borderRadius: 50,
})

anime({
    targets: '.circle',
    borderRadius: 0,
})