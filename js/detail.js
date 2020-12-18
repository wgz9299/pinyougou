window.addEventListener("load" ,function(){
    var preview_img = document.querySelector(".preview_img");
    var mask = document.querySelector(".mask");
    var big = document.querySelector(".big");
    var bigImg = document.querySelector(".bigImg");
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener("mouseout", function(){
        mask.style.display = "none";
        big.style.display = "none";
    })
    preview_img.addEventListener('mousemove', function(e) {
        var maskX = e.pageX - this.offsetLeft;
        var maskY = e.pageY - this.offsetTop;

        // var maskX = x - mask.offsetWidth / 2;
        // var maskY = y - mask.offsetHeight / 2;

        if(maskX < (mask.offsetWidth / 2)) {
            maskX = 0;
        }else if (maskX  > (this.offsetWidth - (mask.offsetWidth / 2))) {
            maskX = this.offsetWidth - mask.offsetWidth;
        }else{
            maskX = maskX - (mask.offsetWidth / 2);
        }

        if(maskY < (mask.offsetHeight / 2)) {
            maskY = 0;
        }else if (maskY  > (this.offsetHeight - (mask.offsetHeight / 2))) {
            maskY = this.offsetHeight - mask.offsetHeight;
        }else{
            maskY = maskY - (mask.offsetHeight / 2);
        }

        mask.style.top = maskY + "px";
        mask.style.left = maskX + "px";

        var bigX = maskX * big.offsetWidth / this.offsetWidth;
        var bigY = maskY * big.offsetHeight / this.offsetHeight;

        bigImg.style.top = -bigY + "px";
        bigImg.style.left = -bigX + "px";
    })
})
