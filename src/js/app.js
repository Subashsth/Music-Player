import ready, { HTML } from './utils';
// import initData from './components/data';

ready(() => {
  HTML.classList.add('is-loaded');
  audioPlayer();
});

const songs = [
  {
    name: 'Faouzia - Secrets (Official Music Video)',
    path: 'audio/audio1.mp3',
    artist: 'Faouzia',
    img: 'images/img1.jpg',
  },
  {
    name: 'Astrid S - Hurts So Good',
    path: 'audio/audio2.mp3',
    artist: 'Astrid S',
    img: 'images/img2.jpg',
  },
  {
    name: 'TheFatRat - Fly Away (Lyrics) feat. Anjulie',
    path: 'audio/audio3.mp3',
    artist: 'Anjulie',
    img: 'images/img3.jpg',
  },
];

function audioPlayer() {
  let currentMusic = 0;
  const music = document.getElementById('audio');
  const seekBar = document.querySelector('.card-bar');
  const songName = document.querySelector('.music-name');
  const artistName = document.querySelector('.music-artist');
  const disk = document.querySelectorAll('.card-img img');
  const currentTime = document.querySelector('.current-time');
  const musicDuration = document.querySelector('.total-time');
  const playBtn = document.querySelector('.btn-play');
  const nextBtn = document.querySelector('.btn-next');
  const prevBtn = document.querySelector('.btn-prev');

  playBtn.addEventListener('click', () => {
    if (playBtn.classList.contains('pause')) {
      music.play();
    } else {
      music.pause();
    }

    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
  });

  const setMusic = (i) => {
    seekBar.value = 0;
    const song = songs[i];
    currentMusic = i;
    music.src = song.path;
    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;

    disk.forEach((elm) => {
      elm.src = song.img;
    });

    currentTime.innerHTML = '00:00';

    setTimeout(() => {
      seekBar.max = music.duration;
      console.log(music.duration);
      musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
  };

  setMusic(0);

  const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
      min = `0${min}`;
    }
    let sec = Math.floor(time % 6);
    if (sec < 10) {
      sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
  };

  setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);

    if (Math.floor(music.currentTime) == Math.floor(seekBar.max)) {
      nextBtn.click();
    }
  }, 500);

  seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
  });

  // next
  nextBtn.addEventListener('click', () => {
    if (currentMusic >= songs.length - 1) {
      currentMusic = 0;
    } else {
      currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
  });

  // back
  prevBtn.addEventListener('click', () => {
    if (currentMusic <= 0) {
      currentMusic = songs.length - 1;
    } else {
      currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
  });

  const playMusic = () => {
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.add('play');
  };
}
