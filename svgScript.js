// const selfie = document.querySelector( '.surface' );
// const mask = document.querySelector( '.mask-shape' );
// const coords = selfie.createSVGPoint();
//
//
// console.log( selfie.value);


const circle = document.getElementById('circle');
let pos;
document.addEventListener('mousemove', (e) => {

    const height = circle.offsetHeight;
    const width = circle.offsetWidth;
    // pos= `(${pageX}, ${pageY})`;

    console.log(height);

    setTimeout(() => {
        circle.style.left = `${e.clientX - width/2}px`;
        circle.style. top = `${e.clientY - height/2}px`;

    }, 20);
});






// let pos;
// document.addEventListener(
//     'mousemove', ({pageX, pageY}) => { pos= `(${pageX}, ${pageY})`;}
// );



// let getCoords = ( e, svg ) => {
//     coords.x = e.clientX;
//     coords.y = e.clientY;
//
//     return coords.matrixTransform( svg.getScreenCTM().inverse() );
// }

