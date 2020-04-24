class Swiper{
  constructor(node) {
    if(!node) throw new Error('需传递绑定元素')
    let root = typeof node === 'string' ? document.querySelector(node) : node
    let eventHub = {'swipLeft':[], 'swipRight':[]}

    let initX
    let newX
    let clock

    root.ontouchstart = function (e) {
      initX = e.changedTouches[0].pageX
    }
    root.ontouchmove = function (e) {
      if(clock) clearInterval(clock)
      clock = setTimeout(()=>{
        newX = e.changedTouches[0].pageX
        if(newX - initX > 50){
          eventHub['swipRight'].forEach(fn=>fn.bind(root)())
        }else if(initX - newX > 50){
          eventHub['swipLeft'].forEach(fn=>fn.bind(root)())
        }
      },100)
    }
    this.on = function (type,fn) {
      if(eventHub[type]){
        eventHub[type].push(fn)
      }
    }
    this.off = function (type,fn) {
      let index = eventHub[type].indexOf(fn)
      if( index !== -1){
        eventHub[type].splice(index,1)
      }
    }
  }
}

export default Swiper