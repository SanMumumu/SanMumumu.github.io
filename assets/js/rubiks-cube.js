(function() {
    // 1. 注入 CSS 样式
    var style = document.createElement('style');
    style.innerHTML = `
      /* 魔方容器：固定在右下角 */
      #rubiks-widget-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        perspective: 200px;
        z-index: 9999;
        pointer-events: none; /* 让点击穿透，不遮挡页面内容 */
      }
  
      /* 核心魔方构造 */
      .rubiks-cube {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        animation: spin-cube 10s linear infinite;
      }
  
      /* 魔方的六个面 */
      .rubiks-face {
        position: absolute;
        width: 60px;
        height: 60px;
        border: 2px solid #000;
        border-radius: 4px;
        /* 利用渐变绘制 3x3 网格线 */
        background-image: 
          linear-gradient(#000 2px, transparent 2px), 
          linear-gradient(90deg, #000 2px, transparent 2px);
        background-size: 20px 20px; /* 每个小格子 20px */
        background-position: -1px -1px; /* 对齐网格线 */
        opacity: 0.9;
      }
  
      /* 各个面的颜色和位置 */
      .face-front  { background-color: #ff3b30; transform: rotateY(  0deg) translateZ(30px); } /* 红 */
      .face-back   { background-color: #ff9500; transform: rotateY(180deg) translateZ(30px); } /* 橙 */
      .face-right  { background-color: #007aff; transform: rotateY( 90deg) translateZ(30px); } /* 蓝 */
      .face-left   { background-color: #4cd964; transform: rotateY(-90deg) translateZ(30px); } /* 绿 */
      .face-top    { background-color: #ffffff; transform: rotateX( 90deg) translateZ(30px); } /* 白 */
      .face-bottom { background-color: #ffcc00; transform: rotateX(-90deg) translateZ(30px); } /* 黄 */
  
      /* 3D 旋转动画：模拟“一直在操作/观察”的效果 */
      @keyframes spin-cube {
        0%   { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
        25%  { transform: rotateX(90deg) rotateY(45deg) rotateZ(0deg); }
        50%  { transform: rotateX(180deg) rotateY(0deg) rotateZ(90deg); }
        75%  { transform: rotateX(270deg) rotateY(-45deg) rotateZ(0deg); }
        100% { transform: rotateX(360deg) rotateY(0deg) rotateZ(0deg); }
      }
    `;
    document.head.appendChild(style);
  
    // 2. 创建 DOM 结构
    var container = document.createElement('div');
    container.id = 'rubiks-widget-container';
  
    var cube = document.createElement('div');
    cube.className = 'rubiks-cube';
  
    // 定义6个面
    var faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
    faces.forEach(function(faceName) {
      var face = document.createElement('div');
      face.className = 'rubiks-face face-' + faceName;
      cube.appendChild(face);
    });
  
    container.appendChild(cube);
    document.body.appendChild(container);
  })();