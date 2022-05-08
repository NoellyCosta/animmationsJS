anime({
    targets: '.blue',
    left: 300,
    duration: 1000,
    endDelay: 500,
    easing: 'linear',
    loop: 2,
    direction: 'alternate'
})

anime({
    targets: '.red',
    left: 300,
    duration: 1000,
    endDelay: 500,
    loop: 2,
    easing: 'linear',
    direction: 'normal',
})


anime({
    targets: '.yellow',
    left: 300,
    duration: 1000,
    delay: 500,
    loop: 2,
    easing: 'linear',
    direction: 'reverse',
})

//countUP && countDown

anime({
    targets: '.countUP',
    value: [0, 100],
    round: 1,
    easing: 'linear'
})


anime({
    targets: '.countDown',
    value: [0, 100],
    round: 100,
    easing: 'linear'
})

//div orange

anime({
    targets: '.orange',
    easing: 'linear',
    direction:  'alternate',
    loop: true,
    left: {
    value: 300,
    duration: 1000,
    },

    opacity: {
        value: 0.5,
        duration: 500,
    },

    rotate: {
        value: 360,
        delay: 1000,
        duration: 1000,
    }
})