//recorrer el array
//por cada usuario, crear una card con sus datos
//manejar sistema de likes para que el clic en cada foto de usuarios, le dé likes solo a ese usuario

const usuarios = [
  {
    nombre: "Pepita Gomez",
    descripcion: "Maquetadora",
    foto: "img/foto1.png"
  },
  {
    nombre: "Mariquita Thompson",
    descripcion: "Cantante de himno",
    foto: "img/foto2.png"
  },
  {
    nombre: "Pancracia Williams",
    descripcion: "Tenista",
    foto: "img/foto3.png"
  },
  {
    nombre: "Trufa Rodríguez Larreta",
    descripcion: "Cantante de feliz cumpleaños",
    foto: "img/foto4.png"
  },
]



const cards = document.querySelector(".container");
let tarjetasDinamicas = "";

for (let i = 0; i < usuarios.length; i++) {
  tarjetasDinamicas = tarjetasDinamicas + `
  <article class="card"> 
    <div class="imagen"> <img src="${usuarios[i].foto}"> </div>
      <div class="info">
        <h4>${usuarios[i].nombre}</h4>
        <p id="descripcion">${usuarios[i].descripcion}</p>
        <p><i class="fa fa-heart"></i><span class="likes"> 0</span> likes</p>
        
      </div>
  </article>
  `
}

cards.innerHTML = tarjetasDinamicas;

  const imagenes = document.getElementsByClassName("imagen");
  const corazones = document.querySelectorAll(".fa.fa-heart");
  const likes = document.getElementsByClassName("likes");

  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].onclick = () => {
    corazones[i].classList.add("colorHeart");
    let cantidadDeLikes = Number(likes[i].textContent);
    cantidadDeLikes++;
    likes[i].textContent = cantidadDeLikes;
  }

  corazones[i].onclick = () => {
    if (likes[i].textContent > "0") {
    corazones[i].classList.remove("colorHeart");
    let cantidadDeLikes = Number(likes[i].textContent);
    cantidadDeLikes--;
    likes[i].textContent = cantidadDeLikes;
    }
    if (likes[i].textContent === "0") {
      corazones[i].classList.remove("colorHeart")
    } else {
      corazones[i].classList.add("colorHeart")
    }

  }
  }










