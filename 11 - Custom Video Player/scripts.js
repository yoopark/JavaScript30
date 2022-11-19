'use strict';

const video = document.querySelector('video');
const playBtn = document.querySelector('.toggle');
const skipBtns = document.querySelectorAll('[data-skip]'); // TIL
const progressBar = document.querySelector('.progress__filled');
const sliders = document.querySelectorAll('.player__slider');

function togglePlayBtn(e) {
  if (playBtn.classList.contains('playing')) {
    video.pause();
    playBtn.textContent = '►';
  } else {
    video.play();
    playBtn.textContent = '❚ ❚';
  }
  playBtn.classList.toggle('playing');
}

function handleSkipBtn() {
  let newTime = video.currentTime + Number(this.dataset.skip);
  if (newTime < 0) {
    newTime = 0;
  } else if (newTime >= video.duration) {
    newTime = video.duration;
  }
  video.currentTime = newTime;
}

function changeProgressBar() {
  const rate = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${rate}%`;
}

function handleSlider() {
  const elem = this.name;
  video[elem] = this.value; // video.${elem} 이런 문법은 없음
}

video.addEventListener('click', togglePlayBtn);
playBtn.addEventListener('click', togglePlayBtn);
skipBtns.forEach((skipBtn) => skipBtn.addEventListener('click', handleSkipBtn));
sliders.forEach((slider) => slider.addEventListener('input', handleSlider));

video.addEventListener('timeupdate', changeProgressBar); // TIL
