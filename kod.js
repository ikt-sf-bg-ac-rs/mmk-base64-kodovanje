let odabirSlike = document.getElementById('odabirSlike');
odabirSlike.addEventListener('change', unosSlike);

kodovanje = document.querySelector('#kodovanje');
noviUnos = document.querySelector('#noviUnos');

kodSlike = document.querySelector('#kodSlike');

function unosSlike(e){

    ctx1 = document.getElementById('canvas1');
    ctx1 = canvas1.getContext('2d');

    img = new Image();
    img.src = URL.createObjectURL(e.target.files[0]);

    img.onload = function(){

        canvas1.width = img.naturalWidth;
        canvas1.height = img.naturalHeight;
        ctx1.drawImage(img, 0, 0, canvas1.width, canvas1.height);

    }

}

kodovanje.addEventListener('click', function(){

    kod = canvas1.toDataURL(img); 
    kodSlike.value = kod;

});

noviUnos.addEventListener('click', function(){
    window.location.reload(true);
});
