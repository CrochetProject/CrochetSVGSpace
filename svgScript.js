const chain = document.getElementsByClassName('chain');
const doubleStitch = document.getElementsByClassName('doubleStitch');
const slipSt = document.getElementsByClassName('slipSt');
// const bubble = document.getElementById('info')



window.addEventListener('DOMContentLoaded', init, false)


function init() {
    alert('Hey! Page loaded!')
    for (let i = 0; i < chain.length; i++) {
        chain[i].addEventListener('mouseover', showBubble, false);
    }

}

function showBubble() {
    // alert('show bubble now!')
    document.getElementById('info').style.display= 'block';
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


}



