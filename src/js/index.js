import './icons'
import Swiper from './swiper'
class player{
  constructor(node) {
    this.root = typeof node === 'string' ? document.querySelector(node) : node
    this.$ = selector => this.root.querySelector(selector)
    this.$$ = selector => this.root.querySelectorAll(selector)
    this.songList = []
    this.currentIndex = 0
    this.audio = new Audio()
    this.lyricsArr = []
    this.lyricIndex = -1

    this.start()
    this.bind()
  }

  start() {
    fetch('https://jirengu.github.io/data-mock/huawei-music/music-list.json').then( res => res.json())
      .then(data => {
        console.log(data)
        this.songList = data
        this.loadSong()
      })
  }

  bind() {
    let self =this
    this.$('.btn-play-pause').onclick = function () {
      console.log(self.audio)
      if (this.classList.contains('playing')){
        self.audio.pause()
        this.classList.remove('playing')
        this.classList.add('pause')
        this.querySelector('use').setAttribute('xlink:href','#icon-play')
      }else if( this.classList.contains('pause')){
        self.audio.play()
        this.classList.remove('pause')
        this.classList.add('playing')
        this.querySelector('use').setAttribute('xlink:href','#icon-pause')
      }
    }
    this.$('.btn-pre').onclick = function () {
      self.playPreSong()
    }
    this.$('.btn-next').onclick = function () {
      self.playNextSong()
    }
    this.audio.ontimeupdate = function(){
      // self.locateLyric()
      self.setProgressBar()
    }
    let swiper = new Swiper(this.$('.panel'))
    swiper.on('swipLeft',function(){
      this.classList.remove('panel1')
      this.classList.add('panel2')
      console.log('left')
    })
    swiper.on('swipRight',function () {
      this.classList.remove('panel2')
      this.classList.add('panel1')
      console.log('right')
    })
  }
  loadSong() {
    let songObj = this.songList[this.currentIndex]
    this.$('.header h1').innerText = songObj.title
    this.$('.header p').innerText = songObj.author + '-' + songObj.albumn
    this.audio.src = songObj.url
    this.audio.onloadedmetadata = () => this.$('.time-end').innerText = this.formateTime(this.audio.duration)
    //this.loadLyrics()
  }
  playPreSong(){
    this.currentIndex = (this.songList.length + this.currentIndex - 1) % this.songList.length
    this.audio.src = this.songList[this.currentIndex].url
    this.loadSong()
    this.audio.oncanplaythrough = ()=> this.audio.play()
    this.$('.btn-play-pause > use').setAttribute('xlink:href','#icon-pause')

  }
  playNextSong() {
    this.currentIndex = (this.songList.length + this.currentIndex + 1) % this.songList.length
    this.audio.src = this.songList[this.currentIndex].url
    this.loadSong()
    this.audio.oncanplaythrough = () => this.audio.play()
    this.$('.btn-play-pause > use').setAttribute('xlink:href','#icon-pause')

  }
  loadLyrics() {
    fetch(this.songList[this.currentIndex].lyric).then(res => res.json()).then(data =>{
      console.log(data.lrc.lyric)
      this.setLyrics(data.lrc.lyric)
      window.lyrics = data.lrc.lyric
    })
  }

  locateLyric() {
    console.log('locateLyric')
    let currentTime = this.audio.currentTime * 1000
    let nextLineTime = this.lyricsArr[this.lyricIndex+1][0]
    if(currentTime > nextLineTime && this.lyricIndex < this.lyricsArr.length -1 ){
      this.lyricIndex ++
      let node = this.$('[data-time="'+this.lyricsArr[this.lyricIndex][0]+'"]')
      if(node) this.setLyricToCenter(node)
      this.$$('.panel-effect .lyric p')[0].innerText = this.lyricsArr[this.lyricIndex][1]
      this.$$('.panel-effect .lyric p')[1].innerText = this.lyricsArr[this.lyricIndex+1]? this.lyricsArr[this.lyricIndex+1][1] :''
    }
  }

  setLyrics(lyric) {

  }
  setLyricToCenter(node) {

  }

  setProgressBar() {
    let percent = (this.audio.currentTime * 100 / this.audio.duration) + '%'
    this.$('.bar .progress').style.width = percent
    this.$('.time-start').innerText = this.formateTime(this.audio.currentTime)
  }

  formateTime(secondsTotal) {
    let minutes = parseInt(secondsTotal / 60)
    minutes = minutes >= 10 ? ''+ minutes : '0' + minutes
    let seconds = parseInt(secondsTotal % 60)
    seconds = seconds >= 10 ? '' + seconds : '0' + seconds
    return minutes + ':' + seconds
  }
}
new player('#player')