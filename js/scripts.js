			
function startOver() {
	document.getElementById('choose').style.display = "block";
	document.getElementById('instructions').style.display = "block";
	document.getElementById('footer').style.display = "none";
	document.getElementById('the-fight').style.display = "none";
	document.images['dragonMan'].src = "img/dragon.png";

}
			function fight() {
				document.getElementById('the-fight').style.display = "block";
				document.getElementById('choose').style.display = "none";
				document.getElementById('instructions').style.display = "none";
			}
			function run() {
				document.getElementById('instructions').style.display = "none";
				document.getElementById('choose').style.display = "none";
				document.images['dragonMan'].src = "img/fleeing.png";
				document.getElementById('footer').style.display = "block";
				document.getElementById('message').innerHTML = "You are a cowardly knight not fit to serve the kingdom!!!";
			}
			function throwDice(imgPath) {
				document.getElementById('footer').style.display = "block";
				document.getElementById('message').innerHTML = "";
				var count = 0;
				var dieNum1 = getRandomDieNumber();
				var dieNum2 = getRandomDieNumber();
				count = dieNum1 + dieNum2;
				document.images['myDie1'].src = getDie(imgPath, dieNum1);
				document.images['myDie2'].src = getDie(imgPath, dieNum2);
				if (count > 8)
				{
					document.getElementById('message').innerHTML = "Congratulation! You rolled " + count;
				}
				else
				{
					document.getElementById('the-fight').style.display = "none";
					document.images['dragonMan'].src = "img/cartoon-business-man-running-with-his-pants-on-fire-by-ron-leishman-7359.jpg";
					document.getElementById('message').innerHTML = "You rolled " + count + " therefore you will be burned to a crisp.  Sorry brave knight!";
				}
			}
			function getDie(path, num) {
				return path + "d" + num + ".gif";
			}
			function getRandomDieNumber() {
				return Math.round(Math.random()*5) + 1;
			}