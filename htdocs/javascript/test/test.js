(() => {
  var canvas = document.getElementById('canvasBall');
  var ctx = canvas.getContext('2d');

  var ball = {
    x: 0,
    y: 100,
    vx: 15,
    radius: 25,
    color: 'red',
    draw: function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    ball.x += ball.vx;

    if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
      ball.vx = -ball.vx;
    }

    raf = window.requestAnimationFrame(draw);
  }

  raf = window.requestAnimationFrame(draw);
})();