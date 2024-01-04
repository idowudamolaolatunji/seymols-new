function Marquee(el, speed, num) {
    const marquee = document.querySelector(el);
    if(marquee) {
      const children = marquee.children;
      const cloneChildren = [...children, ...children];
    
      // Clear the original content and append the cloned children
      marquee.innerHTML = '';
      cloneChildren.forEach(child => marquee.appendChild(child));
    
      let position = 0;
      const step = 1;
    
      const moveMarquee = () => {
        position -= step;
        marquee.style.transform = `translateX(${position / num}px)`;
    
        // Check if we've reached the end and reset position
        if (position < -marquee.offsetWidth ) {
          position = 0;
        }
      };
    
      setInterval(moveMarquee, speed * 1000);
    }
}
  

window.addEventListener('load', () => {
  if(window.innerWidth <= 950 ) {
    Marquee('.marquee', 0.1, 0.7);
  }
});