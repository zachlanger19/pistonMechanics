var angle;

function setup() {
	createCanvas(400, 400);
	frameRate(30);
	angle = 0;

}

function piston(x, y, r1, r2, r3, theta) {
	fill(255);
	stroke(255);

	ellipse(x, y, 5);
	var x0 = x + r1 * cos(theta);
	var y0 =y + r1 * sin(theta);

	line(x, y, x0, y0);
	ellipse(x0, y0, 5);

	var x1 = x;
	var y1 = Math.sqrt((r2*r2) - ((x0-x) * (x0-x))) + y0;

	line(x0,y0,x1,y1);
	ellipse(x1, y1, 5);
	line(x1, y1, x1, y1 + r3);
}

function draw() {
	background(12, 34, 56);
	piston(width/2, height/4, 40, 50, 100, angle);
	piston(width/4, height/4, 40, 50, 100, angle + PI/2);
	piston(3 * width/4, height/4, 40, 50, 100, angle + 3*PI/2);
	angle += PI/32;
}