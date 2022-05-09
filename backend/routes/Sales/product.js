function square(number) {
    return number * number;
  }
module.exports = square  



function doFirst(){
  // 先跟 HTML 畫面產生關聯，再建事件聆聽功能
  let canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  context.shadowOffsetY=y;
  
  context.shadowOffsetX=x;
  
context.shadowColor='color';

context.shadowBlur=blur;

  
}
window.addEventListener('load',doFirst)