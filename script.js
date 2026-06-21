function playAudio(id) {
  const audio = document.getElementById("audio" + id);
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio(id) {
  const audio = document.getElementById("audio" + id);
  audio.pause();
}