export function audioPlayer() {
  const currentMusic = 0;
  const music = document.getElementById('audio');
  const seekBar = document.querySelector('.card-bar');
  const songName = document.querySelector('.music-name');
  const artistName = document.querySelector('.music-artist');
  const disk = document.querySelector('.card-img');
  const currentTime = document.querySelector('.current-time');
  const musicDuration = document.querySelector('.total-time');
  const playBtn = document.querySelector('.btn-play');
  const nextBtn = document.querySelector('.btn-next');
  const prevBtn = document.querySelector('.btn-prev');

  // console.log(currentMusic);
  // console.log(music);
  // console.log(seekBar);
  // console.log(songName);
  // console.log(artistName);
  // console.log(disk);
  // console.log(currentTime);
  // console.log(musicDuration);
  // console.log(playBtn);
  // console.log(nextBtn);
  // console.log(prevBtn);
  playBtn.addEventListener('click', () => {
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
  });

  setup;
  music;
}
