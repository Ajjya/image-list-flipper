# Images list flipper
> A simple javascript library for flippering effect of list images on upload.
## Table of contents
* [Use](#use)
* [Features](#features)
* [Main](#main)
* [Getting started](#getting-started)
* [Methods](#methods)
* [Events](#events)
* [Visual example](#visual_example)
* [Browser support](#browser-support)
* [Support](#support)
* [License](#license)
## Use
This library doesnt use external libraries.
## Main
```
dist/
├── image-list-flipper.js    ( 49 KB)
```
## Getting started
### Quick start
For quick start options are available:
* [Download the latest release](https://github.com/Ajjya/image-list-flipper/archive/refs/heads/master.zip)
* Clone the repository: git clone [Download the latest release](https://github.com/Ajjya/image-list-flipper.git)
* Npm: npm install https://github.com/Ajjya/image-list-flipper.git
* Yarn: yarn add https://github.com/Ajjya/image-list-flipper.git
### Installation
* Include files:
```html
<script src="/path/to/image-list-flipper.js"></script>
```
* Import module:
```js
import {imageListFlipper} from 'imageListFlipper'
```
* Require:
```js
const imageListFlipper = require('image-list-flipper');
```
### Usage
#### Activation Image list flipper
Library works well and with images and with backgrounds.
You need to add image-flipper class to parent element and image-flipper-back attribute to evere child.
Additionally in javascrupt file you need to activate library via:
new imageListFlipper.ImageListFlipper();
```html
<div class="images-wrap">
    <ul class="image-flipper">
      <li style="background-image: url(assets/images/image1.jpg)" image-flipper-back="assets/images/image3.jpg"></li>
      <li style="background-image: url(assets/images/image2.jpg)" image-flipper-back="assets/images/image5.jpg"></li>
      <li style="background-image: url(assets/images/image3.jpg)" image-flipper-back="assets/images/image1.jpg"></li>
      <li style="background-image: url(assets/images/image4.jpg)" image-flipper-back="assets/images/image6.jpg"></li>
      <li style="background-image: url(assets/images/image5.jpg)" image-flipper-back="assets/images/image2.jpg"></li>
      <li style="background-image: url(assets/images/image6.jpg)" image-flipper-back="assets/images/image4.jpg"></li>
    </ul>
  </div>
  <div class="images-wrap">
    <div class="image-flipper">
      <img src="assets/images/image1.jpg" image-flipper-back="assets/images/image3.jpg" />
      <img src="assets/images/image2.jpg" image-flipper-back="assets/images/image5.jpg" />
      <img src="assets/images/image3.jpg" image-flipper-back="assets/images/image1.jpg" />
      <img src="assets/images/image4.jpg" image-flipper-back="assets/images/image6.jpg" />
      <img src="assets/images/image5.jpg" image-flipper-back="assets/images/image2.jpg" />
      <img src="assets/images/image6.jpg" image-flipper-back="assets/images/image4.jpg" />
    </div>
  </div>
  <script type="text/javascript">
    new imageListFlipper.ImageListFlipper();
  </script>
```
You can see other information in folder example
## Browser support
* Chrome (latest)
* Firefox (latest)
* Safari (latest)
* Opera (latest)
* Edge (latest)
* Internet Explorer 9+
## Support
If you found a bug or have a feature suggestion, please submit it in the [Issues tracker](https://github.com/Ajjya/image-list-flipper/issues).
## License
The plugin is available under the [MIT licens](http://opensource.org/licenses/MIT).