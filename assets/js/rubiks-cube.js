(function() {
    var sidebar = document.querySelector('.sidebar');
    
    if (!sidebar) return; 
  
    var style = document.createElement('style');
    style.innerHTML = `
      #rubiks-widget-container {
        position: relative; 
        width: 60px;
        height: 60px;
        perspective: 200px;
        z-index: 10;
        margin: 30px auto 0 auto; 
        cursor: pointer;
      }
  
      .rubiks-cube {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        animation: spin-cube 10s linear infinite;
      }
  
      #rubiks-widget-container:hover .rubiks-cube {
        animation-duration: 3s;
      }
  
      .rubiks-face {
        position: absolute;
        width: 60px;
        height: 60px;
        border: 2px solid #000;
        border-radius: 4px;
        background-image: 
          linear-gradient(#000 2px, transparent 2px), 
          linear-gradient(90deg, #000 2px, transparent 2px);
        background-size: 20px 20px;
        background-position: -1px -1px;
        opacity: 0.9;
      }
  
      .face-front  { background-color: #ff3b30; transform: rotateY(  0deg) translateZ(30px); }
      .face-back   { background-color: #ff9500; transform: rotateY(180deg) translateZ(30px); }
      .face-right  { background-color: #007aff; transform: rotateY( 90deg) translateZ(30px); }
      .face-left   { background-color: #4cd964; transform: rotateY(-90deg) translateZ(30px); }
      .face-top    { background-color: #ffffff; transform: rotateX( 90deg) translateZ(30px); }
      .face-bottom { background-color: #ffcc00; transform: rotateX(-90deg) translateZ(30px); }
  
      @keyframes spin-cube {
        0%   { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
        25%  { transform: rotateX(90deg) rotateY(45deg) rotateZ(0deg); }
        50%  { transform: rotateX(180deg) rotateY(0deg) rotateZ(90deg); }
        75%  { transform: rotateX(270deg) rotateY(-45deg) rotateZ(0deg); }
        100% { transform: rotateX(360deg) rotateY(0deg) rotateZ(0deg); }
      }
    `;
    document.head.appendChild(style);
  
    var container = document.createElement('div');
    container.id = 'rubiks-widget-container';
    container.title = "I'm still working on it!"; 
  
    var cube = document.createElement('div');
    cube.className = 'rubiks-cube';
  
    var faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
    faces.forEach(function(faceName) {
      var face = document.createElement('div');
      face.className = 'rubiks-face face-' + faceName;
      cube.appendChild(face);
    });
  
    container.appendChild(cube);
  
    sidebar.appendChild(container);
  
  })();