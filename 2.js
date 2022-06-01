
getContentTxt = () => {
    //新建图片
    let image = new Image();
    image.src = 'http://c2.xinstatic.com/f1/20170413/1559/58ef2fe4601f1835091.png';
    //解决canvas无法读取画布问题 
    image.setAttribute('crossOrigin', 'anonymous');
    //通加载图片完毕保证快速读取
    image.onload = () => {
        var base64 = this.getBase64Image(image);
        console.log(base64);
    }
    var content = this.aa.$txt.formatText();
    console.log(content);
}
getBase64Image = (img) => {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    console.log(img)
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    console.log(canvas)
    var dataURL = canvas.toDataURL("image/jpeg");
    return dataURL;
}
