/*
My sick website. . . :)
*/

var canvas = document.getElementById("Main");
var width = canvas.width, height = canvas.height;
var ctx = canvas.getContext('2d');

var y=0;
var Man = {
	img: document.getElementById('Man'),
	x: 10, y: 10,
	w: 32, h: 32,
	x1: 0, y1: 0,
	a: 1
};
/*
window.onload = function() {
	ctx.drawImage(Man,10,10);
};
*/

function update(){
	Man.a = (Man.a == 1) ? a = 2 : a = 1;
	Man.x1 = (32 * a) - 32;
	Man.x = Math.floor(Math.random() * canvas.width);
	Man.y = Math.floor(Math.random() * canvas.height);
}

function render(){
	ctx.fillStyle = getRandomColor();
	ctx.fillRect(0,0,width,height);
	ctx.fillStyle = "white";
	ctx.font = "30px 'Lucida Console'"
	ctx.fillText('Canvas Test', 400, height/2);

	ctx.drawImage(Man.img, Man.x1, Man.y1, 32, 32, Man.x, Man.y, Man.w, Man.h);

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function game(){
	update();
	render();
	console.log('game')
}
game()
setInterval(function(){game()}, 1000);
