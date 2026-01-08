(function() {
    var emojis = ["🌟", "🤖", "🧧", "🍀", "✨", "🤗"];
  
    document.addEventListener('click', function(e) {
      var x = e.pageX;
      var y = e.pageY;
      
      var emoji = emojis[Math.floor(Math.random() * emojis.length)];
      
      var span = document.createElement('span');
      span.textContent = emoji;
      
      span.style.position = 'absolute';
      span.style.left = x + 'px';
      span.style.top = y + 'px';
      span.style.zIndex = '9999';
      span.style.pointerEvents = 'none'; 
      span.style.fontSize = '24px'; 
      span.style.userSelect = 'none'; 
      span.style.cursor = 'default';
      
      span.style.animation = 'float-up-fade-out 1s ease-out forwards';
      
      document.body.appendChild(span);
      
      setTimeout(function() {
        span.remove();
      }, 1000);
    });
    
    var style = document.createElement('style');
    style.innerHTML = `
      @keyframes float-up-fade-out {
        0% {
          transform: translateY(0);
          opacity: 1;
        }
        100% {
          transform: translateY(-50px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  })();