(function () {
  const playBtn = document.querySelector(".video__btn");
  const playerPlayBtn = document.querySelector(".video__control-play");
  const video = document.getElementById("player");
  const durationControl = document.getElementById("durationLevel");
  const soundControl = document.getElementById("soundControl");
  const soundBtn = document.querySelector(".video__control-sound-wrap");
  const dynamicBtn = document.querySelector(".video__control-sound");
  let intervalId;
  let soundLevel;

  window.addEventListener("load", function () {
    video.addEventListener("click", playStop);
    let playButtons = document.querySelectorAll(".play");

    for (let i = 0; i < playButtons.length; i++) {
      playButtons[i].addEventListener("click", playStop);
    }

    durationControl.min = 0;
    durationControl.value = 0;
    durationControl.max = parseInt(video.duration);
    durationControl.addEventListener("input", setVideoDuration);

    soundControl.min = 0;
    soundControl.max = 10;
    soundControl.value = soundControl.max;
    soundControl.addEventListener("input", changeSoundVolume);

    dynamicBtn.addEventListener("click", soundOf);

    video.addEventListener("ended", () => {
      playBtn.classList.toggle("video__btn--active");
      playerPlayBtn.classList.remove("active");
      video.currentTime = 0;
    });
  });

  function playStop() {
    playBtn.classList.toggle("video__btn--active");
    playerPlayBtn.classList.toggle("active");

    if (video.paused) {
      video.play();
      intervalId = setInterval(updateDuration, 1000/60);
    } else {
      clearInterval(intervalId);
      video.pause();
    }
  }

  function setVideoDuration() {
    video.currentTime = durationControl.value;
    updateDuration();
  }

  function updateDuration() {
    durationControl.value = video.currentTime;
    let step = video.duration / 100;
    let percent = video.currentTime / step;
    durationControl.style.background = `linear-gradient(90deg, rgba(224, 31, 61, 1) 0%, rgba(224, 31, 61, 1) ${percent}%, rgba(51, 51, 51, 1) ${percent}%)`;
  }

  function soundOf() {
    if (video.volume === 0) {
      video.volume = soundLevel;
      let percentVolume = video.volume * 100;
      soundControl.value = soundLevel * 10;
      soundBtn.classList.remove("active");
      soundControl.style.background = `linear-gradient(90deg, rgba(224, 31, 61, 1) 0%, rgba(224, 31, 61, 1) ${percentVolume}%, rgba(51, 51, 51, 1) ${percentVolume}%)`;
    } else {
      soundLevel = video.volume;
      video.volume = 0;
      soundControl.value = 0;
      soundBtn.classList.add("active");
      soundControl.style.background = `linear-gradient(90deg, rgba(224, 31, 61, 1) 0%, rgba(224, 31, 61, 1) 0%, rgba(51, 51, 51, 1) 0%)`;
    }
  }

  function changeSoundVolume() {
    video.volume = soundControl.value / 10;
    let percentVolume = video.volume * 100;
    soundControl.style.background = `linear-gradient(90deg, rgba(224, 31, 61, 1) 0%, rgba(224, 31, 61, 1) ${percentVolume}%, rgba(51, 51, 51, 1) ${percentVolume}%)`;

    if (video.volume === 0) {
      soundBtn.classList.add("active");
      soundControl.classList.remove("active");
    } else {
      soundBtn.classList.remove("active");
    }
  }
})();
