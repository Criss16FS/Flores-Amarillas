// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cada vez que me levanto", time: 0 },
  { text: "Y veo que a mi lado estás", time: 4 },
  { text: "Me siento renovado", time: 8 },
  { text: "Y me siento aniquilado", time: 12 },
  { text: "Aniquilado si no estás", time: 16 },
  { text: "Tú controlas toda mi verdad", time: 21 },
  { text: "Y todo lo que está de más", time: 25 },
  { text: "Tus ojos me llevan lentamente al sol", time: 30 },
  { text: "Y tu boca me habla del amor y el corazón", time: 35 },
  { text: "Tu piel tiene el color", time: 40 },
  { text: "De un rojo atardecer", time: 44 },
  { text: "Y es por ti", time: 49 },
  { text: "Que late mi corazón", time: 53 },
  { text: "Y es por ti", time: 57 },
  { text: "Que brillan mis ojos hoy", time: 61 },
  { text: "Y es por ti", time: 65 },
  { text: "Que he vuelto a hablar de amor", time: 70 },
  { text: "Y es por ti", time: 75 },
  { text: "Que calma mi dolor", time: 79 },
  { text: "Y cada vez que yo te busco", time: 83 },
  { text: "Y no te puedo aún hallar", time: 88 },
  { text: "Me siento un vagabundo", time: 92 },
  { text: "Perdido por el mundo", time: 97 },
  { text: "Desordenado si no estás", time: 101 },
  { text: "Cómo mueves tú mi felicidad", time: 105 },
  { text: "Y todo lo que está de más", time: 110 },
  { text: "Tus ojos me llevan lentamente al sol", time: 115 },
  { text: "Y tu boca me habla del amor y el corazón", time: 120 },
  { text: "Tu piel tiene el color", time: 125 },
  { text: "De un rojo atardecer", time: 129 },
  { text: "Y es por ti", time: 134 },
  { text: "Que late mi corazón", time: 138 },
  { text: "Y es por ti", time: 143 },
  { text: "Que brillan mis ojos hoy", time: 147 },
  { text: "Y es por ti", time: 152 },
  { text: "Que he vuelto a hablar de amor", time: 156 },
  { text: "Y es por ti", time: 160 },
  { text: "Que calma mi dolor", time: 165 },
  { text: "Cada vez que me levanto", time: 170 },
  { text: "Y veo que a mi lado estás", time: 174 },
  { text: "Me siento renovado", time: 178 },
  { text: "Tus ojos me llevan lentamente al sol", time: 183 },
  { text: "Y tu boca me habla del amor y el corazón", time: 188 },
  { text: "Tu piel tiene el color", time: 192 },
  { text: "De un rojo atardecer", time: 196 },
  { text: "Y es por ti", time: 201 },
  { text: "Que late mi corazón", time: 205 },
  { text: "Y es por ti", time: 210 },
  { text: "Que brillan mis ojos hoy", time: 214 },
  { text: "Y es por ti", time: 219 },
  { text: "Que he vuelto a hablar de amor", time: 223 },
  { text: "Y es por ti", time: 227 },
  { text: "Que calma mi dolor", time: 232 },
  { text: "Y es por ti", time: 237 },
  { text: "Y es por ti", time: 241 },
  { text: "Y es por ti", time: 245 },
  { text: "Y es por ti", time: 249 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);