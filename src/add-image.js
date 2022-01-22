import Kiwi from './kiwi.jpg';        // 引入图片
import altText from './altText.txt';  // 引入文本文件

function addImage() {
    // Inside this function I will create an img dom element, specify an alt , width , and src properties.
    const img = document.createElement('img');
    img.alt = altText;
    img.width = 300;
    img.src = Kiwi;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;