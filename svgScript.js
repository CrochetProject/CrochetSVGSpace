



const chain = document.getElementsByClassName('chain');
const doubleStitch = document.getElementsByClassName('doubleStitch');
const slipSt = document.getElementsByClassName('slipSt');

chain.addEventListener



const info = document.getElementById('info');
document.addEventListener('mousemove', (e) => {

    const height = info.offsetHeight;
    const width = info.offsetWidth;
    console.log(width); //sizing of div#info.info
    console.log(height);
    // pos= `(${pageX}, ${pageY})`;



    setTimeout(() => {
        info.style.left = `${e.clientX + width/2}px`;
        info.style.top = `${e.clientY - height}px`;

    }, 20);
});






