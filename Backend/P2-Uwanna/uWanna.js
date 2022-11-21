function RandomPosition(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}


let btnSi = document.getElementById("btnSi");
let btnNo = document.getElementById("btnNo");
let divGral = document.getElementById("divGral")
let divVideo = document.getElementById("divVideo")
let divTtl = document.getElementById("divTitle");
let body = document.getElementsByTagName("body")


btnNo.addEventListener("mouseenter",function(e) {RandomPosition(e.target)}) ;
btnSi.addEventListener("click",function(e) {
    alert('Sabía que aceptarías, ahora ¡Casémonos! 😍❤');
    divTtl.style.visibility = 'hidden';
    divVideo.style.visibility = 'hidden';
    divGral.style.position = 'absolute';
    divGral.style.backgroundColor = 'red';
    divGral.style.height = '1200px';
    divGral.style.width = '2000px';
    divGral.style.fontSize = '25px';
    divGral.style.color = 'white';
    divGral.innerHTML = '<h1>¡Ahora estaremos juntos para siempre 😈!</h1> <br> <img src="https://i.pinimg.com/736x/7c/b1/79/7cb179fc1288ee4e07e1e889b1d11090.jpg">'
});
btnNo.addEventListener("click",function(e) {
    divTtl.style.visibility = 'hidden';
    divVideo.style.visibility = 'hidden';
    divGral.style.position = 'absolute';
    divGral.style.backgroundColor = 'black';
    divGral.style.height = '1200px';
    divGral.style.width = '2000px';
    divGral.style.fontSize = '25px';
    divGral.style.color = 'white';
    divGral.innerHTML = '<h1>¡NOOOOOOOO! ¿COMO PUDISTE DARLE AL NO?</h1> <br> <img src="https://cdn.memegenerator.es/imagenes/memes/full/27/85/27851711.jpg">'
});