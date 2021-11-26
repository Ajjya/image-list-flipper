import css from "./style.css";

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function ImageListFlipper(){
  this.count = 0;
  this.backImages = [];
  this.countPreloaded = 0;
  
  document.addEventListener("DOMContentLoaded",()=>{
    const self = this;
    this.count = 0;
    this.elements = [];
    const parents  = document.querySelectorAll('.image-flipper');

    this.elements  = document.querySelectorAll('.image-flipper > *');
    this.count = this.elements.length;

    [].forEach.call((parents), function(parent, index){
      parent.setAttribute('image-flip-parent-number', index);
      const gran = parent.parentNode;
      gran.classList.add("image-flip-gran");
      const copyParent = document.createElement('div');
      copyParent.classList.add("image-flip-copy-parent");
      copyParent.setAttribute('image-flip-parent-number', index);
      copyParent.innerHTML = gran.innerHTML;
      gran.insertBefore(copyParent, parent);
      
      const elements = parent.children;
      const copyElements = copyParent.children[0].children;

      [].forEach.call((elements), function(element, index) {
       
        const imageSrc = element.getAttribute('image-flipper-back');
  
        let bi = '';
        let type = 'bg';
        if(element.tagName == 'IMG'){
          bi = element.getAttribute('src');
          type = 'img';
        } else {
          const style = window.getComputedStyle(element, false)  
          bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");  
        }
        
        const delay = randomInteger(0, self.count);
  
        element.setAttribute('image-flipper-id' , index);
        copyElements[index].setAttribute('image-flipper-copy-id' , index);
        
        self.backImages.push({
          backSrc: imageSrc,
          fromSrc: bi,
          index: index,
          element: element,
          delay: delay * 100,
          copyElement: copyElements[index],
          type: type,
        });
  
        self.preload(self, imageSrc);
        self.preload(self, bi);
      });
    });

    window.onresize = function(){
      self.changeImageWidth(self);
    }

  });
}

ImageListFlipper.prototype.changeImageWidth = (self) => {

  [].forEach.call((self.backImages), function(item, index) {
    if(item.type == 'img'){
      const width = item.copyElement.clientWidth;
      const height = item.copyElement.clientHeight;
      console.log(item.element);
      item.element.style.width = width + 'px';
      item.element.style.height = height + 'px';
    }
  });
}

ImageListFlipper.prototype.prepare = (self) => {
  
  [].forEach.call(self.backImages, function(item){
    if(!item.element) return;

    if(item.type == 'img'){
      const alt = item.element.getAttribute('alt');
      const str_img = '<div class="flip-box-inner" style="animation-delay:' + item.delay + 'ms"> \
          <div class="flip-box-front"> \
            <img src="' + item.fromSrc + '" alt="' + alt + '"/> \
          </div> \
          <div class="flip-box-back"> \
            <img src="' + item.backSrc + '" alt="' + alt + '"/> \
          </div> \
        </div>';
      const newItem = document.createElement('div');
      newItem.classList.add("flip-box");
      newItem.innerHTML = str_img;
      item.element.parentNode.replaceChild(newItem, item.element);
      item.element = newItem;
    } else {
      const str_bg = '<div class="flip-box"> \
        <div class="flip-box-inner" style="animation-delay:' + item.delay + 'ms"> \
          <div class="flip-box-front"> \
            <div class="flip-item" style="background-image:url(' + item.fromSrc + ')"></div> \
          </div> \
          <div class="flip-box-back"> \
            <div class="flip-item" style="background-image:url(' + item.backSrc + ')"></div> \
          </div> \
        </div> \
      </div>';
      item.element.style="";
      item.element.insertAdjacentHTML('afterbegin', str_bg);
    }
   
  });

  self.changeImageWidth(self);
}

ImageListFlipper.prototype.preload = (self, src) => {
  const img = new Image();
  img.src = src;

  img.onload = function(){
    self.countPreloaded++;
    if(self.countPreloaded == self.count * 2){
      self.prepare(self);
    }
  }
}

export { ImageListFlipper };

