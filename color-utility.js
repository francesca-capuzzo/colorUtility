function sayHello(){
    console.log('Hello, color utility pkg works');
}

function setAlpha(hexColor, opacity){
    //return: string 
    let opacityConverted = Math.floor(opacity*255);
    let opacityToString = opacityConverted.toString(16);
    let result = opacityConverted < 16 ? '0' + opacityToString : opacityToString;
    return hexColor + result.toUpperCase();
}

function fromColorStringToRGB(colorString){
    //return: RGB
    if (document){
        let cvs = document.createElement('canvas');
        cvs.height = 1;
        cvs.width = 1;
        ctx = cvs.getContext('2d');
        ctx.fillStyle = colorString;
        ctx.fillRect(0, 0, 1, 1);
        return ctx.getImageData(0, 0, 1, 1).data;
    }else {
        let r = parseInt(colorString.slice(1,3), 16);
        let g = parseInt(colorString.slice(3,5), 16);
        let b = parseInt(colorString.slice(5,7), 16);
        let alpha = parseInt(colorString.slice(7,9), 16);
        if (alpha) {
            return "rgba(" + r + ',' + g + ',' + b + ',' + alpha + ')'
        }
        return "rgba(" + r + ',' + g + ',' + b + ',)'
    }
    

}

function getContrastingColor(hexColor){
    //return: string
}


fromColorStringToRGB('beige');
