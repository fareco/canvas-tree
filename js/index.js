window.onload = function() {
	var cnavas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	drawTree(ctx, 294, canvas.height, canvas.height * 0.2, -Math.PI / 2, 10, 16);


	function drawTree(ctx, startX, startY, length, angle, depht, branchWidth) {
		var maxBranch = 3;
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

		// if (depht < 8) {
		// 	ctx.strokeStyle = '#3800FF';
		// } else {
		// 	ctx.strokeStyle = '#fff';
		// }
		ctx.strokeStyle = '#fff';
		ctx.stroke();
		depht = depht - 1;
		branchWidth = branchWidth * 0.5;

		if (depht < 0) {
			return false;
		}

		subBrancheNum = Math.random() * (maxBranch - 1) + 1;


		for (var i = 0; i < 2; i++) {
			newLength = length * (0.5 + Math.random() * 0.5);

			if (i == 0) {
				newAngle = angle + maxAngle * Math.random();

			}
			if (i == 1) {
				newAngle = angle - maxAngle * Math.random();
			}
			drawTree(ctx, endX, endY , newLength, newAngle, depht, branchWidth);
		}

	}

}