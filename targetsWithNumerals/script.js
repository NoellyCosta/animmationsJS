//const squareStats = document.querySelector('#stats')

//const squareDistance = {
//    distance: 0,
//     progress: '0%',
// }

// anime({
//     targets: squareDistance, 
//     distance: 300,
//     progress: '100%',
//     update: function () {
//         squareStats.innerHTML =squareDistance.distance
//     },
//     round: 1,
//     easing: 'linear'
// })


// anime({
//     targets: '.square',
//     left:300
// })


anime({
    targets: '.countUP',
    value: [0, 5, 0],
    round: 1,
    easing: 'linear',
    duration: 3000,
})