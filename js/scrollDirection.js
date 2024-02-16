const topNavigation = document.querySelector('.navigation')

window.onscroll = function(e) {
  if (this.oldScroll > this.scrollY) {
    // scroll is going up
    topNavigation.classList.remove(['topNav-hide'])
  } else {
    // scroll
    topNavigation.classList.add(['topNav-hide']) 
  }
  this.oldScroll = this.scrollY;
}