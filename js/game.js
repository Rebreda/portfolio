
function Canvas(ele) {
	"use strict";
	this.c = 0;
  this.canvas = document.getElementById(ele);
  this.canvas.height = this.canvas.width;
  this.ctx = this.canvas.getContext("2d");
  this.sq = 10;
  this.res = this.canvas.width / this.sq;
	this.seed =  this.getSeed(100);
	
	this.reGen = function(){
	  this.ctx.clearRect(0,0,this.canvas.width,this.canvas.width);

	  this.seed = this.getSeed(100);
	  this.c = 0;
	  this.gen();
	};
}

Canvas.prototype = {
  
  printSquare: function(x, y) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = "black";
    this.ctx.rect(x, y, this.res, this.res);
    if (this.seed[this.c] == 1) {
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fill();
    }
    this.ctx.stroke();
    this.c += 1;
    this.ctx.closePath();
  },

  getSeed: function(times) {
    var x = "";

    function getRandom() {
      return Math.round(Math.random());
    }

    for (var i = 0; i < times; i++) {
      x += String(getRandom());
    }
    return x;
  },

  gen: function() {
    for (var i = 0; i < this.sq; i++) {
      for (var x = 0; x < this.sq; x++) {
        this.printSquare(this.res * x, this.res * i);
      }
    }
  }
};

(function(){
  
window.onload = function() {  
  var grid = grid || new Canvas('des');
  grid.gen();
  document.getElementById("board").onclick = function(){console.log('REGEN'); grid.reGen()};
  };
})();
