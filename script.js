function playAudio1(id) {
  const audio = document.getElementById("audio" + id);
  audio.currentTime = 145;
  audio.play();
}

function playAudio2(id) {
  const audio = document.getElementById("audio" + id);
  audio.currentTime = 80;
  audio.play();
}

function playAudio3(id) {
  const audio = document.getElementById("audio" + id);
  audio.currentTime = 110;
  audio.play();
}

function pauseAudio(id) {
  const audio = document.getElementById("audio" + id);
  audio.pause();
}

function toggleMenu() {
    document.getElementById('hamburger').classList.toggle('open');
    document.getElementById('navmenu').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('open');
}