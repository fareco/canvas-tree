window.onload = function() {
	var size = getWindowSize();
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');

	canvas.width = size.width;
	canvas.height = size.height;
	document.body.appendChild(canvas);

	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	drawTree(ctx, canvas.width / 2 - 8, canvas.height, canvas.height * 0.2, -Math.PI / 2, 10, 16);

	function drawTree(ctx, startX, startY, length, angle, depth, branchWidth) {
		var maxAngle = Math.PI / 4;
		var endX = startX + length * Math.cos(angle);
		var endY = startY + length * Math.sin(angle);
		var newLength;
		var newAngle;

		ctx.lineWidth = branchWidth;
		ctx.lineCap = 'round';

		ctx.beginPath();
		ctx.moveTo(startX, startY);
		ctx.lineTo(endX, endY);

		if (depth < 5) {
			ctx.strokeStyle = '#00FFFF';
		} else {
			ctx.strokeStyle = '#fff';
		}

		ctx.stroke();
		depth = depth - 1;
		branchWidth = branchWidth * 0.6;

		if (depth < 0) {
			return false;
		}


		for (var i = 0; i < 2; i++) {
			newLength = length * (0.5 + Math.random() * 0.5);

			if (i == 0) {
				newAngle = angle + maxAngle * Math.random();

			}
			if (i == 1) {
				newAngle = angle - maxAngle * Math.random();
			}

			drawTree(ctx, endX, endY, newLength, newAngle, depth, branchWidth);
		}

	}

	function getWindowSize() {
		var winWidth;
		var winHeight;

		//get width
		if (window.innerWidht) {
			winWidth = window.innerWidth;
		} else if (document.body && document.body.clientWidth) {
			winWidth = document.body.clientWidth;
		}

		//get height
		if (window.innerHeight) {
			winHeight = window.innerHeight;
		} else if (document.body && document.body.clientHeight) {
			winHeight = document.body.clientHeight;
		}

		if (document.documentElement && document.documentElement.clientWidth && document.documentElement.clientHeight) {
			winWidth = document.documentElement.clientWidth;
			winHeight = document.documentElement.clientHeight;
		}
		return {
			width: winWidth,
			height: winHeight
		}
	}
}