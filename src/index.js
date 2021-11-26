import css from "./style.css";

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function ImageListFlipper(){
  this.elements = [];
  this.backImages = [];
  this.countPreloaded = 0;
  
  document.addEventListener("DOMContentLoaded",()=>{
    const self = this;
    this.elements = document.querySelectorAll('[image-flipper-back]');

    [].forEach.call((this.elements), function(element, index) {
      const imageSrc = element.getAttribute('image-flipper-back');

      const style = window.getComputedStyle(element, false)  
      const bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");  
      const delay = randomInteger(0, self.elements.length);

      element.setAttribute('image-flipper-id' , index);
      
      self.backImages.push({
        backSrc: imageSrc,
        fromSrc: bi,
        index: index,
        element: element,
        delay: delay * 100,
      });

      self.preload(self, imageSrc);
      self.preload(self, bi);
    });

  });
}

ImageListFlipper.prototype.prepare = (self) => {
  [].forEach.call(self.backImages, function(item){
    if(!item.element) return;
    item.element.style="";
    item.element.insertAdjacentHTML('afterbegin', '<div class="flip-box"> \
      <div class="flip-box-inner" style="animation-delay:' + item.delay + 'ms"> \
        <div class="flip-box-front"> \
          <div class="flip-item" style="background-image:url(' + item.fromSrc + ')"></div> \
        </div> \
        <div class="flip-box-back"> \
          <div class="flip-item" style="background-image:url(' + item.backSrc + ')"></div> \
        </div> \
      </div> \
    </div>');
  });
}

ImageListFlipper.prototype.preload = (self, src) => {
  const img = new Image();
  img.src = src;

  img.onload = function(){
    self.countPreloaded++;
    if(self.countPreloaded == self.backImages.length * 2){
      self.prepare(self);
    }
  }
}

export { ImageListFlipper };

