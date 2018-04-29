var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');


ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0, width, height);

/* Rectangles */
/*


ctx.fillStyle = 'rgb(255,0,0)';
ctx.fillRect(50, 50, 100, 150);

ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
ctx.fillRect(75, 75, 100, 100);

ctx.strokeStyle = 'rgb(255,255,255)';
ctx.lineWidth = 4;
ctx.strokeRect(25, 25, 175, 200);

ctx.strokeStyle = 'rgb(100, 175, 65)';
ctx.lineWidth = 8;
ctx.strokeRect(175,200, 56,56);  */

ctx.strokeStyle = 'rgb(255,255,255)';
ctx.strokeRect(0, 0, 50, 50);


/* trójkat równoboczny */
ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
var  triHeight = 50* Math.tan(degToRad(60));
ctx.lineTo(100, 50+triHeight);
ctx.lineTo(50, 50);
ctx.fill();


ctx.strokeStyle = 'rgb(255,255,255)';
ctx.strokeRect(0, 0, 200, 200);

/* trójkąt równoramienny */
ctx.fillStyle = 'rgb(0,255,0)';
ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(400,200);
var triHeight2 = 100*Math.tan(degToRad(45));
ctx.lineTo(300, 200+triHeight2);
ctx.lineTo(200,200);
ctx.fill();


function degToRad(degrees) {
	return degrees * Math.PI / 180;
};

/* okrąg */

ctx.fillStyle = 'rgb(0,0,255)';
ctx.beginPath();
ctx.arc(300, 106,50,degToRad(0), degToRad(360),false);
ctx.fill();

/* okrąg niepełny */
ctx.fillStyle = 'silver';
ctx.beginPath();
ctx.arc(400,106,25, degToRad(-90), degToRad(-270),false);
ctx.lineTo(400,106);
ctx.fill();


/*PAC-MAN*/
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(500,106, 50, degToRad(-45),degToRad(45), true);
ctx.lineTo(500,106);
ctx.fill();

