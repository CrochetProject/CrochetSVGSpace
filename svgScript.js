
const chain = document.getElementsByClassName('chain');
const doubleStitch = document.getElementsByClassName('doubleStitch');
const slipSt = document.getElementsByClassName('slipSt');
const info = document.getElementById('info');


// chain.addEventListener

window.addEventListener("load", function(){
    for (let i =0; i < chain.length; i++ ){
        chain[i].addEventListener('mouseover', stitchHighlight, false);
    }
    for ( let i = 0; i < doubleStitch.length; ++i ){
        doubleStitch[i].addEventListener('mouseover', stitchHighlight, false);
    }
    for ( let i = 0; i < slipSt.length; ++i ){
        slipSt[i].addEventListener('mouseover', stitchHighlight, false);
    }

});



function stitchHighlight(){
    this.style.filter = "drop-shadow(0px 0px 25px rgb(245 237 22 / 1))";
    this.style.stroke = "yellow";
    this.style.strokeWidth = "10px";

   info.style.opacity = "1";



    document.addEventListener('mousemove', (e) => {
        // e is the pointer
        let posX = e.clientX;//clientX and clientY are DOM coordinates
        let posY = e.clientY;
        var w = window.innerWidth;

        // console.log(e);
        // console.log(posY);
        if(w > 1390){
            setTimeout(() => {
                info.style.left = `${posX + 30}`;//setting position based off X pos
                info.style.top = `${posY - 150}`;//setting position based off Y pos
                // console.log(width);

            }, 0);
        }
        else if(w > 720){
            setTimeout(() => {
                info.style.left = `${posX + 30}`;//setting position based off X pos
                info.style.top = `${posY - 100}`;//setting position based off Y pos
                // console.log(width);

            }, 0);
        }
        else if (w > 425){
            setTimeout(() => {
                info.style.left = `${posX + 20}`;//setting position based off X pos
                info.style.top = `${posY - 70}`;//setting position based off Y pos
                // console.log(width);

            }, 0);
        }
        else {}


    });



    this.addEventListener('mouseout', stitchMouseOut, false);
}



function stitchMouseOut(){
    this.style.filter = "none";
    // this.style.strokeWidth = "none";
    this.style.stroke = "none";
    info.style.opacity = "0";
}










